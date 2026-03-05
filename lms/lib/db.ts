import { MongoClient, MongoClientOptions } from "mongodb";

if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

const uri = process.env.MONGODB_URI;

// Optimized options for free MongoDB Atlas M0 tier (max 500 connections)
// With 50 students, we want a small pool to stay within limits
const options: MongoClientOptions = {
  maxPoolSize: 10,        // For 50 concurrent students, 10 connections per lambda ensures lightning-fast queries without hitting the 500 global limit.
  minPoolSize: 1,         // Keep 1 connection alive
  maxIdleTimeMS: 30000,   // Close idle connections after 30s
  serverSelectionTimeoutMS: 5000, // Fail fast if Atlas unreachable
  socketTimeoutMS: 30000,
  connectTimeoutMS: 10000,
  compressors: ["zstd", "zlib"], // Reduce bandwidth usage
};

// Global singleton to survive hot-module-replacement in dev AND cold starts in Vercel
declare global {

  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
  // In development: reuse across HMR restarts
  if (!global._mongoClientPromise) {
    const client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production (Vercel): also use global to survive warm Lambda reuse
  // Each Vercel serverless instance is a separate process, so we still
  // use a module-level singleton (global scope) to reuse across requests
  // within the same warm invocation.
  if (!global._mongoClientPromise) {
    const client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
}

export default clientPromise;

// Helper to get the DB with automatic index creation on first use
let indexesCreated = false;

export async function getDb(dbName?: string) {
  const client = await clientPromise;
  const db = client.db(dbName);

  // Create indexes once per process startup (idempotent)
  if (!indexesCreated) {
    indexesCreated = true;
    createIndexes(db).catch((err) =>
      console.warn("Index creation warning (non-fatal):", err.message)
    );
  }

  return db;
}

async function createIndexes(db: ReturnType<MongoClient["db"]>) {
  await Promise.all([
    // Users collection - Added text index for fast management searches
    db.collection("users").createIndex({ email: 1 }, { unique: false }),
    db.collection("users").createIndex({ isAdmin: 1, email: 1 }), // Helps categorization stats
    db.collection("users").createIndex({ fullName: "text", email: "text" }),

    // Progress collection — most queried by userEmail + subject
    db.collection("progress").createIndex({ userEmail: 1, subject: 1 }),
    db.collection("progress").createIndex({ userEmail: 1, subject: 1, unitId: 1, moduleId: 1 }, { unique: true }),
    db.collection("progress").createIndex({ percentage: -1, userEmail: 1 }), // Helps Dashboard Performer analysis

    // Feedback collection
    db.collection("feedback").createIndex({ createdAt: -1 }),
    db.collection("feedback").createIndex({ expiresAt: 1 }, { expireAfterSeconds: 0 }),

    // Leaves collection
    db.collection("leaves").createIndex({ userEmail: 1, createdAt: -1 }),
    db.collection("leaves").createIndex({ expiresAt: 1 }, { expireAfterSeconds: 0 }),

    // AI Chats
    db.collection("ai_chats").createIndex({ userEmail: 1, updatedAt: -1 }),

    // Timetable
    db.collection("timetable").createIndex({ id: 1 }, { unique: true }),
  ]);
}
