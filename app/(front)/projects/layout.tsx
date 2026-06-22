import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Triyambake's project track record: over USD 5.1M in executed power projects, 250+ km of 33kV distribution lines, and international execution across Africa.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Projects | Triyambake",
    description:
      "USD 5.1M+ in executed EPC projects — 33kV HT transmission lines, solar EPC, industrial machinery supply across India and East Africa.",
    url: "/projects",
    images: [{ url: "/assets/project-lines.png", width: 1200, height: 630, alt: "Triyambake Projects" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Triyambake",
    description: "USD 5.1M+ in executed EPC projects across India and East Africa.",
    images: ["/assets/project-lines.png"],
  },
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
