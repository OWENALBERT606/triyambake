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
    "33kV transmission line",
    "overhead line hardware",
    "manufacturer exporter India",
    "Uganda power projects",
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
    images: [
      {
        url: "/assets/logo.png",
        width: 1200,
        height: 630,
        alt: "Triyambake — Engineering Excellence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Triyambake | Engineering Excellence",
    description:
      "End-to-end EPC solutions across India and Africa — power transmission, solar energy, O&M services, and IT solutions.",
    images: ["/assets/logo.png"],
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Triyambake",
  url: "https://triyambake.com",
  logo: "https://triyambake.com/assets/logo.png",
  description:
    "Triyambake is an EPC company specialising in power transmission, solar energy, O&M services, hardware manufacturing, and IT solutions across India and Africa.",
  foundingDate: "2019",
  areaServed: ["India", "Uganda", "Kenya", "Tanzania", "Rwanda", "Burundi"],
  sameAs: [],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    areaServed: "IN",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Outfit:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${outfit.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
