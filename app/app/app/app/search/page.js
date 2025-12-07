"use client";
import { useState } from "react";

export default function SearchPage() {
  const [image, setImage] = useState(null);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1 style={{ fontSize: "28px", fontWeight: "700", color: "#1d4ed8" }}>
        AI Face Search
      </h1>

      <p style={{ marginTop: "12px" }}>
        Upload a face photo and we’ll find matching sports photos.
      </p>

      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files[0])}
        style={{ marginTop: "20px" }}
      />

      {image && (
        <div style={{ marginTop: "20px" }}>
          <img
            src={URL.createObjectURL(image)}
            alt="preview"
            style={{ width: "200px", borderRadius: "8px" }}
          />
        </div>
      )}

      <button
        className="btn-primary"
        style={{
          marginTop: "24px",
          padding: "10px 20px",
        }}
      >
        Search Photos
      </button>
    </div>
  );
}
