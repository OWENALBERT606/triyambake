import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Units",
  description:
    "Explore Triyambake's four business verticals: Power T&D EPC, Solar EPC, Operation & Maintenance services, and T&D hardware manufacturing and export under TriyaVolt.",
  alternates: { canonical: "/business" },
  openGraph: {
    title: "Business Units | Triyambake",
    description:
      "Power T&D EPC, Solar EPC, O&M services, and overhead line hardware manufacturing — Triyambake's full business portfolio.",
    url: "/business",
    images: [{ url: "/assets/hardware-supply.png", width: 1200, height: 630, alt: "Triyambake Business Units" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Units | Triyambake",
    description: "Power T&D EPC, Solar EPC, O&M services, and overhead line hardware manufacturing.",
    images: ["/assets/hardware-supply.png"],
  },
};

export default function BusinessLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
