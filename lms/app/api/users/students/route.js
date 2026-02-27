import clientPromise from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const q = searchParams.get("q");

    const client = await clientPromise;
    const db = client.db();

    let query = {};
    if (q) {
      // High-performance text search using the index we created
      query = { $text: { $search: q } };
    }

    // Default to regex search if text search is too restrictive or if no index exists yet
    // but since we just added the index, $text is better.
    // However, for partial matches like "mad" for "Madhu", regex is often friendlier for simple lists.
    if (q && q.length < 3) {
      query = {
        $or: [
          { fullName: { $regex: q, $options: "i" } },
          { email: { $regex: q, $options: "i" } }
        ]
      };
    }

    const users = await db.collection("users").find(query).toArray();

    return NextResponse.json({
      ok: true,
      data: users
    });

  } catch (err) {
    return NextResponse.json(
      { ok: false, error: err.message },
      { status: 500 }
    );
  }
}
