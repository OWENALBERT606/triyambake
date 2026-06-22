import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Triyambake for EPC project enquiries, hardware supply, or partnership opportunities. Based in Delhi NCR, India — operating across India and East Africa.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | Triyambake",
    description:
      "Reach out to Triyambake for EPC project enquiries, hardware supply, or partnership opportunities.",
    url: "/contact",
    images: [{ url: "/assets/logo.png", width: 1200, height: 630, alt: "Contact Triyambake" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Triyambake",
    description: "Reach out for EPC project enquiries, hardware supply, or partnership opportunities.",
    images: ["/assets/logo.png"],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
