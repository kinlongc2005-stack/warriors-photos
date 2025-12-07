export default function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1 style={{ fontSize: "32px", fontWeight: "700", color: "#1d4ed8" }}>
        Welcome to Warriors Photos
      </h1>

      <p style={{ marginTop: "16px", fontSize: "18px" }}>
        Use AI face search to find your sports photos instantly.
      </p>

      <a
        href="/search"
        className="btn-primary"
        style={{
          display: "inline-block",
          marginTop: "28px",
          padding: "12px 22px",
          background: "#1d4ed8",
          color: "white",
          borderRadius: "8px",
          fontWeight: "600",
          textDecoration: "none"
        }}
      >
        Start Searching
      </a>
    </div>
  );
}
