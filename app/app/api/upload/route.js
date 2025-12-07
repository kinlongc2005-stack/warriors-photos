import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { uploadImage, getPublicUrl } from "@vercel/blob";

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get("file");

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const blob = await uploadImage(file.name, buffer, file.type);

    const imageUrl = getPublicUrl(blob.url);

    return NextResponse.json({ url: imageUrl });
  } catch (err) {
    return NextResponse.json({ error: err.toString() }, { status: 500 });
  }
}
