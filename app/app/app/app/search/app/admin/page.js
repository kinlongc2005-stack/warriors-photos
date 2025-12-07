"use client";
import { useState } from "react";

export default function AdminPage() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (!file) return;

    setLoading(true);
    setMessage("Uploading image...");

    // 1) Upload image to Vercel Blob
    const uploadForm = new FormData();
    uploadForm.append("file", file);

    const uploadRes = await fetch("/api/upload", {
      method: "POST",
      body: uploadForm,
    });

    const { url } = await uploadRes.json();
    setMessage("Image uploaded. Generating face embedding...");

    // 2) Generate vector using embed API
    const embedRes = await fetch("/api/embed", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ imageUrl: url }),
    });

    const { vector } = await embedRes.json();
    setMessage("Embedding created. Saving to database...");

    // 3) Save URL + vector to Postgres
    const saveRes = await fetch("/api/save-face", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url, vector }),
    });

    const result = await saveRes.json();

    setLoading(false);
    setMessage("Upload complete! Photo ID: " + result.photo_id);
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>Admin Upload</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <button disabled={loading} type="submit">
          {loading ? "Processing..." : "Upload"}
        </button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}
