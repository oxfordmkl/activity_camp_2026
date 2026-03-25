import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://activitycamp.theoxfordedu.com"),
  title: "ACTIVITY CAMP 2026",
  description: "AI based Activity Program Initiated by KERALA STATE RUTRONIX",
  icons: {
    icon: [
      { url: '/images/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/favicon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/images/favicon-180.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: "ACTIVITY CAMP 2026",
    description: "AI based Activity Program Initiated by KERALA STATE RUTRONIX",
    url: "https://activitycamp.theoxfordedu.com",
    siteName: "The Oxford Computers",
    images: [
      {
        url: "/images/og-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Activity Camp 2026",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ACTIVITY CAMP 2026",
    description: "AI based Activity Program Initiated by KERALA STATE RUTRONIX",
    images: ["/images/og-banner.jpg"],
  },
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