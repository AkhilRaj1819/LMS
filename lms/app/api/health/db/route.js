import { pool } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const result = await pool.query(
      "SELECT current_database() AS name"
    );

    return NextResponse.json({
      ok: true,
      name: result.rows[0].name
    });

  } catch (err) {
    return NextResponse.json(
      { ok: false, error: err.message },
      { status: 500 }
    );
  }
}
