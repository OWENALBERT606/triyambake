import type { Metadata } from "next";
import ServicesClient from "./components/ServicesClient";

export const metadata: Metadata = {
  title: "Our Services | Ggwaatiro Hospital",
  description:
    "Ggwaatiro Hospital offers 19+ medical services: general outpatient, inpatient, maternity, antenatal care, immunization, ultrasound, dental, eye care, lab, surgery, HIV/AIDS care, counselling, 24/7 ambulance, physiotherapy, orthopedics & more.",
  keywords: [
    "hospital services Uganda",
    "maternity hospital Bweyogerere",
    "outpatient clinic Kira",
    "dental services Uganda",
    "eye specialist Uganda",
    "physiotherapy Uganda",
    "surgery hospital Kampala",
    "antenatal care Uganda",
    "ambulance service Kampala",
    "laboratory services Uganda",
  ],
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Medical Services | Ggwaatiro Hospital",
    description:
      "19+ healthcare services including maternity, surgery, dental, eye care, lab, physiotherapy & 24/7 emergency. Serving Bweyogerere since 1981.",
    url: "/services",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Ggwaatiro Hospital Services" }],
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}
