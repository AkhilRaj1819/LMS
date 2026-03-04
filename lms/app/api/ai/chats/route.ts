import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import { getDb } from "@/lib/db";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) {
      return NextResponse.json(
        { ok: false, error: "Unauthorized" },
        { status: 401 }
      );
    }

    const db = await getDb();
    const chats = await db
      .collection("ai_chats")
      .find({ userEmail: session.user.email })
      .sort({ updatedAt: -1 })
      .project({ _id: 1, title: 1, updatedAt: 1 }) // Don't send full messages on list
      .toArray();

    return NextResponse.json({ ok: true, chats });
  } catch (err: any) {
    return NextResponse.json(
      { ok: false, error: err.message },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) {
      return NextResponse.json(
        { ok: false, error: "Unauthorized" },
        { status: 401 }
      );
    }

    const { chatId, title, messages } = await req.json();
    const db = await getDb();

    if (chatId) {
      await db.collection("ai_chats").updateOne(
        { _id: new ObjectId(chatId), userEmail: session.user.email },
        { $set: { title, messages, updatedAt: new Date() } }
      );
      return NextResponse.json({ ok: true });
    } else {
      const result = await db.collection("ai_chats").insertOne({
        userEmail: session.user.email,
        title,
        messages,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      const chat = await db
        .collection("ai_chats")
        .findOne({ _id: result.insertedId });
      return NextResponse.json({ ok: true, chat });
    }
  } catch (err: any) {
    return NextResponse.json(
      { ok: false, error: err.message },
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) {
      return NextResponse.json(
        { ok: false, error: "Unauthorized" },
        { status: 401 }
      );
    }

    const { chatId } = await req.json();
    if (!chatId) {
      return NextResponse.json(
        { ok: false, error: "chatId is required" },
        { status: 400 }
      );
    }

    const db = await getDb();
    await db.collection("ai_chats").deleteOne({
      _id: new ObjectId(chatId),
      userEmail: session.user.email,
    });

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    return NextResponse.json(
      { ok: false, error: err.message },
      { status: 500 }
    );
  }
}
