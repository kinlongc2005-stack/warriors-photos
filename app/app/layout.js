import "./globals.css";

export const metadata = {
  title: "Warriors Photos",
  description: "Search and buy your sports photos with AI face recognition."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav style={{
          background: "#1d4ed8",
          padding: "12px 20px",
          color: "white",
          fontSize: "20px",
          fontWeight: "600"
        }}>
          Warriors Photos
        </nav>

        <main style={{ padding: "20px" }}>
          {children}
        </main>
      </body>
    </html>
  );
}
