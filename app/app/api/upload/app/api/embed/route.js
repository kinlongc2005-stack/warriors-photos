import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { pool } from "@/lib/db";

export async function POST(req) {
  try {
    const { query } = await req.json();

    const genai = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genai.getGenerativeModel({ model: "text-embedding-004" });

    const embedding = await model.embedContent(query);
    const vector = embedding.embedding.values;

    const result = await pool.query(
      `
      SELECT url
      FROM images
      ORDER BY embedding <=> $1
      LIMIT 5
    `,
      [vector]
    );

    return NextResponse.json({ results: result.rows });
  } catch (err) {
    return NextResponse.json({ error: err.toString() }, { status: 500 });
  }
}
