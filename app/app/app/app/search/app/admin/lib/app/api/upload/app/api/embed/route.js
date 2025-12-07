import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function POST(request) {
  const { imageUrl } = await request.json();

  if (!imageUrl) {
    return new Response("Missing imageUrl", { status: 400 });
  }

  // Send image URL to OpenAI to create embedding
  const result = await client.embeddings.create({
    model: "gpt-image-1-vector",   // vision embedding model
    input: imageUrl
  });

  const vector = result.data[0].embedding;

  return Response.json({ vector });
}
