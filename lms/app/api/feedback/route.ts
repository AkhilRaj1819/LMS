import { NextResponse } from "next/server";
import clientPromise from "@/lib/db";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();
    const client = await clientPromise;
    const db = client.db("lms");
    
    await db.collection("feedback").insertOne({
      message,
      createdAt: new Date(),
      expiresAt: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000)
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Failed to submit feedback" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("lms");
    
    await db.collection("feedback").deleteMany({
      expiresAt: { $lt: new Date() }
    });

    const feedback = await db.collection("feedback")
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    return NextResponse.json(feedback);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch feedback" }, { status: 500 });
  }
}
