import "./globals.css";

export const metadata = {
  title: "ACTIVITY CAMP 2026",
  description: "AI based Activity Program Initiated by KERALA STATE RUTRONIX",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
