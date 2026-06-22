import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Triyambake — our founding story, leadership team, certifications, and commitment to engineering excellence across India and Africa.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Us | Triyambake",
    description:
      "Triyambake's story, mission, leadership, and ISO-certified operations in power transmission and renewable energy.",
    url: "/about",
    images: [{ url: "/assets/logo.png", width: 1200, height: 630, alt: "About Triyambake" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Triyambake",
    description: "Triyambake's story, mission, leadership, and ISO-certified operations.",
    images: ["/assets/logo.png"],
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
