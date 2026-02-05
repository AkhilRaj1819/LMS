import clientPromise from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    
    const client = await clientPromise;
    const db = client.db();
    
    await db.collection("users").insertOne({
      email,
      fullName: "",
      phoneNumber: "",
      currentSemester: 1,
      isAdmin: false
    });
    
    return NextResponse.json({ ok: true });
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: err.message }, { status: 500 });
  }
}
