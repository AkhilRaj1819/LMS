import clientPromise from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db();
    
    const count = await db.collection("users").countDocuments();
    const users = await db.collection("users").find({}).project({ email: 1, fullName: 1, isAdmin: 1 }).toArray();
    
    return NextResponse.json({ ok: true, count, users });
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: err.message }, { status: 500 });
  }
}
