export const metadata = { title: "Next.js fixture" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ font: "17px/1.6 system-ui, sans-serif", margin: "3rem auto", maxWidth: "40rem", padding: "0 1rem" }}>{children}</body>
    </html>
  );
}
