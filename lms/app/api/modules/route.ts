import clientPromise from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { subject, moduleName, description, fileUrl } = await req.json();
    
    const client = await clientPromise;
    const db = client.db();
    
    await db.collection("modules").insertOne({
      subject,
      moduleName,
      description,
      fileUrl,
      createdAt: new Date()
    });
    
    return NextResponse.json({ ok: true });
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: err.message }, { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const subject = searchParams.get("subject");
    
    const client = await clientPromise;
    const db = client.db();
    
    const query = subject ? { subject } : {};
    const modules = await db.collection("modules").find(query).toArray();
    
    return NextResponse.json({ ok: true, data: modules });
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: err.message }, { status: 500 });
  }
}
