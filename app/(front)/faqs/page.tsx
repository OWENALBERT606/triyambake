import type { Metadata } from "next";
import FaqsClient from "./FaqsClient";

export const metadata: Metadata = {
  title: "FAQs | Ggwaatiro Hospital",
  description:
    "Frequently asked questions about Ggwaatiro Hospital — appointments, services, emergency care, maternity, lab tests, location, working hours, and more.",
  keywords: [
    "Ggwaatiro Hospital FAQ",
    "hospital questions Uganda",
    "how to book hospital appointment Uganda",
    "hospital working hours Bweyogerere",
    "maternity hospital questions Uganda",
    "emergency hospital Uganda",
    "hospital services questions",
  ],
  alternates: { canonical: "/faqs" },
  openGraph: {
    title: "FAQs | Ggwaatiro Hospital",
    description:
      "Answers to common questions about appointments, services, emergency care, maternity, lab tests, and location at Ggwaatiro Hospital.",
    url: "/faqs",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Ggwaatiro Hospital FAQs" }],
  },
};

export default function FaqsPage() {
  return <FaqsClient />;
}
