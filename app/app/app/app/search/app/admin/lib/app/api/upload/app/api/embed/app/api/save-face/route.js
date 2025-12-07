import { pool } from "@/lib/db";

export async function POST(request) {
  const { url, vector } = await request.json();

  if (!url || !vector) {
    return new Response("Missing url or vector", { status: 400 });
  }

  try {
    // Insert into photos table
    const photoResult = await pool.query(
      `INSERT INTO photos (url) VALUES ($1) RETURNING id`,
      [url]
    );

    const photoId = photoResult.rows[0].id;

    // Insert face vector
    await pool.query(
      `INSERT INTO faces (photo_id, vector) VALUES ($1, $2)`,
      [photoId, vector]
    );

    return Response.json({
      success: true,
      photo_id: photoId
    });

  } catch (error) {
    console.error(error);
    return new Response("Database error", { status: 500 });
  }
}
