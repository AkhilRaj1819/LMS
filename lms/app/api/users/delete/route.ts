import clientPromise from "@/lib/db";
import { NextResponse } from "next/server";

export async function DELETE(req: Request) {
  try {
    const { email } = await req.json();
    
    const client = await clientPromise;
    const db = client.db();
    
    await db.collection("users").deleteOne({ email });
    
    return NextResponse.json({ ok: true });
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: err.message }, { status: 500 });
  }
}
