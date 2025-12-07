import { put } from "@vercel/blob";

export async function POST(request) {
  const formData = await request.formData();
  const file = formData.get("file");

  if (!file) {
    return new Response("No file uploaded", { status: 400 });
  }

  // Upload to Vercel Blob
  const blob = await put(file.name, file, {
    access: "public"
  });

  return Response.json({
    url: blob.url
  });
}
