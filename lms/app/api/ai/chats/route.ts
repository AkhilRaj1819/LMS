import clientPromise from "@/lib/db";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";

export async function GET() {
  try {
    const session = await getServerSession();
    if (!session?.user?.email) {
      return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
    }

    const client = await clientPromise;
    const db = client.db();
    const chats = await db.collection("ai_chats")
      .find({ userEmail: session.user.email })
      .sort({ updatedAt: -1 })
      .toArray();

    return NextResponse.json({ ok: true, chats });
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: err.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const session = await getServerSession();
    if (!session?.user?.email) {
      return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
    }

    const { chatId, title, messages } = await req.json();
    const client = await clientPromise;
    const db = client.db();

    if (chatId) {
      await db.collection("ai_chats").updateOne(
        { _id: new (require("mongodb").ObjectId)(chatId), userEmail: session.user.email },
        { $set: { title, messages, updatedAt: new Date() } }
      );
      return NextResponse.json({ ok: true });
    } else {
      const result = await db.collection("ai_chats").insertOne({
        userEmail: session.user.email,
        title,
        messages,
        createdAt: new Date(),
        updatedAt: new Date()
      });
      const chat = await db.collection("ai_chats").findOne({ _id: result.insertedId });
      return NextResponse.json({ ok: true, chat });
    }
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: err.message }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const session = await getServerSession();
    if (!session?.user?.email) {
      return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
    }

    const { chatId } = await req.json();
    const client = await clientPromise;
    const db = client.db();

    await db.collection("ai_chats").deleteOne({
      _id: new (require("mongodb").ObjectId)(chatId),
      userEmail: session.user.email
    });

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: err.message }, { status: 500 });
  }
}
