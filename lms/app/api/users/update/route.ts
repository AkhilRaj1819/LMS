import clientPromise from "@/lib/db";
import { NextResponse } from "next/server";

export async function PUT(req: Request) {
  try {
    const { email, fullName, phoneNumber, currentSemester } = await req.json();
    
    const client = await clientPromise;
    const db = client.db();
    
    await db.collection("users").updateOne(
      { email },
      { $set: { fullName, phoneNumber, currentSemester } }
    );
    
    return NextResponse.json({ ok: true });
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: err.message }, { status: 500 });
  }
}
