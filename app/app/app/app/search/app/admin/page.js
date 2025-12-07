"use client";

export default function AdminPage() {
  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ fontSize: "28px", fontWeight: "700", color: "#1d4ed8" }}>
        Admin Panel
      </h1>

      <p style={{ marginTop: "12px" }}>
        Upload photos into folders. The system will auto-detect faces and generate vectors.
      </p>

      <div style={{ marginTop: "30px" }}>
        <input
          type="file"
          multiple
          accept="image/*"
          style={{ marginBottom: "20px" }}
        />

        <button
          className="btn-primary"
          style={{ padding: "10px 20px" }}
        >
          Upload Photos
        </button>
      </div>
    </div>
  );
}
