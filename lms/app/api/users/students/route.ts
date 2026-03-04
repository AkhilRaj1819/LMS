import clientPromise from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const q = searchParams.get("q");

        const client = await clientPromise;
        const db = client.db();

        let query: any = {};
        if (q) {
            query = { $text: { $search: q } };
        }

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

    } catch (err: any) {
        return NextResponse.json(
            { ok: false, error: err.message },
            { status: 500 }
        );
    }
}
