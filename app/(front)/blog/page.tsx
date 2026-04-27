import type { Metadata } from "next";
import BlogClient from "./components/BlogClient";

export const metadata: Metadata = {
  title: "Health Blog | Ggwaatiro Hospital",
  description:
    "Health tips, medical advice, and wellness articles from Ggwaatiro Hospital — covering blood pressure, maternity, malaria, diabetes, eye care, immunization, and more.",
  keywords: [
    "health tips Uganda",
    "hospital health blog",
    "malaria prevention Uganda",
    "maternity advice Uganda",
    "diabetes management Uganda",
    "blood pressure Uganda",
    "immunization Uganda",
    "eye health Uganda",
    "physiotherapy Uganda",
  ],
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Health Blog | Ggwaatiro Hospital",
    description:
      "Doctor-written health articles covering maternity, malaria, diabetes, eye care, immunization and more — from Ggwaatiro Hospital, Uganda.",
    url: "/blog",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Ggwaatiro Hospital Health Blog" }],
  },
};

export default function BlogPage() {
  return <BlogClient />;
}
