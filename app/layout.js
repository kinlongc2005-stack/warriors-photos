import "./globals.css";

export const metadata = {
  title: "Warriors Photos",
  description: "Upload and search warrior images",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
