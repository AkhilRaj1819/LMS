import { NextResponse } from "next/server";
import clientPromise from "@/lib/db";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("lms");
    
    await db.collection("leaves").createIndex(
      { expiresAt: 1 },
      { expireAfterSeconds: 0 }
    );
    
    return NextResponse.json({ success: true, message: "TTL index created" });
  } catch (error) {
    return NextResponse.json({ error: "Failed to setup" }, { status: 500 });
  }
}
