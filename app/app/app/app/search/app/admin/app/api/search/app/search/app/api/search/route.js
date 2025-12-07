import { pool } from "@/lib/db";

export async function POST(request) {
  const form = await request.formData();
  const file = form.get("file");

  if (!file) {
    return new Response("No image found", { status: 400 });
  }

  // Step 1: Upload image to Vercel Blob
  const uploadForm = new FormData();
  uploadForm.append("file", file);

  const uploadRes = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/upload`, {
    method: "POST",
    body: uploadForm,
  });

  const { url } = await uploadRes.json();

  // Step 2: Get embedding from /api/embed
  const embedRes = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/embed`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageUrl: url }),
  });

  const { vector } = await embedRes.json();

  // Step 3: Similarity search in Postgres
  const result = await pool.query(
    `
      SELECT photos.url,
      (faces.vector <=> $1::float8[]) AS distance
      FROM faces
      JOIN photos ON photos.id = faces.photo_id
      ORDER BY distance ASC
      LIMIT 5;
    `,
    [vector]
  );

  return Response.json({
    matches: result.rows,
  });
}
