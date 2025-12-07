"use client";

import { useState } from "react";

export default function AdminPage() {
  const [file, setFile] = useState(null);

  async function upload() {
    const form = new FormData();
    form.append("file", file);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: form,
    });

    const json = await res.json();
    alert("Uploaded! URL: " + json.url);
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>Admin Upload</h1>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={upload}>Upload</button>
    </div>
  );
}
