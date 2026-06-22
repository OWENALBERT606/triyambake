import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clientele",
  description:
    "Triyambake's clients include leading organisations in India and Africa — government bodies, major utilities, sugar mills, and global engineering firms.",
  alternates: { canonical: "/clientele" },
  openGraph: {
    title: "Clientele | Triyambake",
    description:
      "Trusted by government bodies, utilities, and global engineering firms across India and East Africa.",
    url: "/clientele",
    images: [{ url: "/assets/logo.png", width: 1200, height: 630, alt: "Triyambake Clientele" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Clientele | Triyambake",
    description: "Trusted by government bodies, utilities, and global engineering firms.",
    images: ["/assets/logo.png"],
  },
};

export default function ClienteleLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
