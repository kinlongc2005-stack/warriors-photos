"use client";

import { useState } from "react";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  async function search() {
    const res = await fetch("/api/embed", {
      method: "POST",
      body: JSON.stringify({ query }),
    });
    const json = await res.json();
    setResults(json.results);
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>Search Photos</h1>

      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
      <button onClick={search}>Search</button>

      {results.map((r, i) => (
        <div key={i}>
          <img src={r.url} width="200" />
        </div>
      ))}
    </div>
  );
}
