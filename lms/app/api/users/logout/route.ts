import { getDb } from "@/lib/db";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function POST() {
    try {
        const session = await getServerSession(authOptions);
        if (!session || !session.user?.email) {
            return NextResponse.json({ ok: false }, { status: 401 });
        }

        const db = await getDb();
        await db.collection("users").updateOne(
            { email: session.user.email },
            { $set: { lastActive: new Date(0) } } // Set to epoch to mark as offline
        );

        return NextResponse.json({ ok: true });
    } catch (err: any) {
        return NextResponse.json({ ok: false, error: err.message }, { status: 500 });
    }
}
