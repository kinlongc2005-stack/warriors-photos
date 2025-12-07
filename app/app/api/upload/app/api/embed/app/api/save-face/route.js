import { NextResponse } from "next/server";
import { pool } from "@/lib/db";

export async function POST(req) {
  try {
    const { url, embedding } = await req.json();

    await pool.query(
      `
      INSERT INTO images (url, embedding)
      VALUES ($1, $2)
    `,
      [url, embedding]
    );

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: err.toString() }, { status: 500 });
  }
}
