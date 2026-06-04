import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Triyambake | Engineering Excellence",
    template: "%s | Triyambake",
  },
  description:
    "Triyambake is an emerging EPC company specialising in power transmission, solar energy, O&M services, and IT solutions across India and Africa.",
  keywords: [
    "Triyambake",
    "EPC company India",
    "Power Transmission",
    "Solar EPC",
    "T&D projects",
    "Engineering Procurement Construction",
    "Infrastructure India Africa",
    "Triyavolt",
  ],
  authors: [{ name: "Triyambake" }],
  creator: "Triyambake",
  publisher: "Triyambake",
  formatDetection: { email: false, address: false, telephone: false },
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "https://triyambake.com"),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    title: "Triyambake | Engineering Excellence",
    description:
      "End-to-end EPC solutions across India and Africa — power transmission, solar energy, O&M services, and IT solutions.",
    siteName: "Triyambake",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Outfit:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className={`${outfit.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
