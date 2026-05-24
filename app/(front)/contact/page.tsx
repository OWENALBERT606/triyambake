import type { Metadata } from "next";
import ContactClient from "./components/ContactClient";

export const metadata: Metadata = {
  title: "Contact Us | Ggwaatiro Hospital",
  description:
    "Contact Ggwaatiro Hospital in Bweyogerere, Kira Town Council. Call +256 772 428 467 or +256 708 685 381, email gwatiro@gmail.com, or visit us 7 miles from Kampala. Emergency services 24/7.",
  keywords: [
    "contact Ggwaatiro Hospital",
    "hospital phone number Uganda",
    "Bweyogerere hospital contact",
    "hospital near Kampala",
    "emergency hospital contact Uganda",
    "book appointment Uganda hospital",
  ],
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Ggwaatiro Hospital",
    description:
      "Call +256 772 428 467 or +256 708 685 381, or email gwatiro@gmail.com. Located in Bweyogerere, 7 miles from Kampala. Emergency care available 24/7.",
    url: "/contact",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Contact Ggwaatiro Hospital" }],
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
