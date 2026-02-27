import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "1Gov Mail — Government Email, Reimagined",
  description:
    "A fast, native desktop email client for government institutions. Built on Zimbra. Made by RISA.",
  keywords: ["email client", "government", "Zimbra", "desktop", "RISA", "1Gov Mail"],
  openGraph: {
    title: "1Gov Mail",
    description: "Government Email, Reimagined",
    type: "website",
    siteName: "1Gov Mail",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
