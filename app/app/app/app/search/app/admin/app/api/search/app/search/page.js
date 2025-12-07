"use client";
import { useState } from "react";

export default function SearchPage() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);

  async function handleSearch(e) {
    e.preventDefault();
    if (!file) return;

    setLoading(true);

    const form = new FormData();
    form.append("file", file);

    const res = await fetch("/api/search", {
      method: "POST",
      body: form
    });

    const data = await res.json();
    setResults(data.matches);
    setLoading(false);
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>Search Faces</h1>

      <form onSubmit={handleSearch}>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <button type="submit" disabled={loading}>
          {loading ? "Searching..." : "Search"}
        </button>
      </form>

      <div style={{ marginTop: 30 }}>
        {results.map((r, i) => (
          <div key={i} style={{ marginBottom: 20 }}>
            <img src={r.url} width={200} />
            <p>Distance: {r.distance.toFixed(4)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
