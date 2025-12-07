export const metadata = {
  title: "Warriors Photos",
  description: "Upload and search warrior images",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}
