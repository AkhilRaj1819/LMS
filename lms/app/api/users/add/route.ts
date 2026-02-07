import clientPromise from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email, isAdmin } = await req.json();
    
    const client = await clientPromise;
    const db = client.db();
    
    // Check if user with this email and role already exists
    const existingUser = await db.collection("users").findOne({ email, isAdmin: isAdmin || false });
    
    if (existingUser) {
      return NextResponse.json({ ok: false, error: "User already exists" }, { status: 400 });
    }
    
    // Create new user
    await db.collection("users").insertOne({
      email,
      fullName: "",
      phoneNumber: "",
      currentSemester: 1,
      isAdmin: isAdmin || false
    });
    
    return NextResponse.json({ ok: true });
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: err.message }, { status: 500 });
  }
}
