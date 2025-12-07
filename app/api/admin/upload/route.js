import { supabaseAdmin } from "@/lib/supabase/admin";

export async function POST(req) {
  const formData = await req.formData();

  const title = formData.get("title");
  const price = formData.get("price");
  const watermarked = formData.get("watermarked");
  const original = formData.get("original");

  if (!title || !price || !watermarked || !original) {
    return Response.json({ success: false, error: "缺少必要欄位" });
  }

  const wmPath = `watermarked-${Date.now()}.jpg`;
  const oriPath = `original-${Date.now()}.jpg`;

  const wmUpload = await supabaseAdmin.storage
    .from("watermarked")
    .upload(wmPath, watermarked);

  if (wmUpload.error) {
    return Response.json({ success: false, error: wmUpload.error.message });
  }

  const oriUpload = await supabaseAdmin.storage
    .from("originals")
    .upload(oriPath, original);

  if (oriUpload.error) {
    return Response.json({ success: false, error: oriUpload.error.message });
  }

  const insert = await supabaseAdmin.from("images").insert([
    {
      title,
      price,
      watermarked_url: wmPath,
      original_url: oriPath,
    },
  ]);

  if (insert.error) {
    return Response.json({ success: false, error: insert.error.message });
  }

  return Response.json({ success: true });
}
