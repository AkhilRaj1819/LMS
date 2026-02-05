import clientPromise from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db();
    const timetable = await db.collection("timetable").findOne({ id: "main" });
    
    return NextResponse.json({ ok: true, data: timetable?.schedule || [] });
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: err.message }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
    const { schedule } = await req.json();
    
    const client = await clientPromise;
    const db = client.db();
    
    await db.collection("timetable").updateOne(
      { id: "main" },
      { $set: { schedule } },
      { upsert: true }
    );
    
    return NextResponse.json({ ok: true });
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: err.message }, { status: 500 });
  }
}
