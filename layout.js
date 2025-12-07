export const metadata = {
  title: "Warriors Photos",
  description: "Photo upload and search",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
