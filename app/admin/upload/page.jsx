"use client";

import { useState } from "react";

export default function AdminUpload() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [watermarked, setWatermarked] = useState(null);
  const [original, setOriginal] = useState(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  async function handleUpload() {
    if (!title || !price || !watermarked || !original) {
      setStatus("請填完所有欄位");
      return;
    }

    setLoading(true);
    setStatus("");

    const formData = new FormData();
    formData.append("title", title);
    formData.append("price", price);
    formData.append("watermarked", watermarked);
    formData.append("original", original);

    const res = await fetch("/api/admin/upload", {
      method: "POST",
      body: formData,
    });

    const json = await res.json();
    setLoading(false);

    if (json.success) {
      setStatus("上傳成功！");
      setTitle("");
      setPrice("");
      setWatermarked(null);
      setOriginal(null);
    } else {
      setStatus("失敗：" + json.error);
    }
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>Admin 圖片上傳</h1>

      <input
        type="text"
        placeholder="標題"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br /><br />

      <input
        type="number"
        placeholder="價格（整數）"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <br /><br />

      <p>上傳「有浮水印」圖片</p>
      <input type="file" onChange={(e) => setWatermarked(e.target.files[0])} />

      <br /><br />

      <p>上傳「無浮水印」原圖</p>
      <input type="file" onChange={(e) => setOriginal(e.target.files[0])} />

      <br /><br />

      <button onClick={handleUpload} disabled={loading}>
        {loading ? "上傳中..." : "上傳圖片"}
      </button>

      <p>{status}</p>
    </div>
  );
}
