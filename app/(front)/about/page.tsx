import type { Metadata } from "next";
import AboutClient from "./components/AboutClient";

export const metadata: Metadata = {
  title: "About Us | Ggwaatiro Hospital",
  description:
    "Learn about Ggwaatiro Hospital — founded in 1989 by Dr. Katumba Joseph in Bweyogerere, Kira Town Council. Our mission, vision, core values, and 35+ years of serving Uganda.",
  keywords: [
    "about Ggwaatiro Hospital",
    "Dr Katumba Joseph",
    "hospital history Uganda",
    "Bweyogerere hospital",
    "private hospital Uganda 1989",
    "hospital core values Uganda",
  ],
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Ggwaatiro Hospital | Est. 1989",
    description:
      "Founded in 1989 by Dr. Katumba Joseph. One of Uganda's oldest privately owned health facilities serving Bweyogerere and beyond.",
    url: "/about",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "About Ggwaatiro Hospital" }],
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
