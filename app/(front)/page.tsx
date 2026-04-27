import type { Metadata } from "next";
import { Services } from '@/components/services';
import { Testimonials } from '@/components/testimonial';
import { AppointmentForm } from '@/components/appointment-form';
import { HeroSlider } from '@/components/HeroSlider';
import { CareHighlights } from '@/components/CareHighlights';
import { WelcomeSection } from '@/components/WelcomeSection';
import { QualityCare } from '@/components/QualityCare';
import { DoctorsSection } from '@/components/DoctorsSection';
import { CallToAction } from '@/components/CallToAction';
import { SpecialtyTabs } from '@/components/SpecialtyTabs';

export const metadata: Metadata = {
  title: "Ggwaatiro Hospital | Quality Healthcare in Uganda Since 1989",
  description:
    "Ggwaatiro Hospital in Bweyogerere, Kira Town Council offers outpatient, maternity, surgery, dental, eye care, lab, physiotherapy & 24/7 emergency services. Call +256 772 428 467.",
  keywords: [
    "Ggwaatiro Hospital",
    "hospital Bweyogerere",
    "hospital Kira Uganda",
    "hospital near Kampala",
    "maternity hospital Uganda",
    "emergency hospital Kampala",
    "outpatient clinic Uganda",
    "Dr Katumba Joseph",
    "private hospital Uganda",
    "24 hour hospital Kampala",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Ggwaatiro Hospital | Quality Healthcare in Uganda Since 1989",
    description:
      "Comprehensive healthcare in Bweyogerere — outpatient, maternity, surgery, dental, eye care & 24/7 emergency. Serving Uganda since 1989.",
    url: "/",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Ggwaatiro Hospital" }],
  },
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Hospital",
    "name": "Ggwaatiro Hospital",
    "url": "https://ggwaatirahospital.com",
    "logo": "https://ggwaatirahospital.com/favicon.svg",
    "image": "https://ggwaatirahospital.com/og-image.png",
    "description": "One of Uganda's oldest privately owned health facilities, founded in 1989 by Dr. Katumba Joseph. Located in Bweyogerere, Kira Town Council.",
    "telephone": "+256772428467",
    "email": "gwatiro@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Bweyogerere Ward",
      "addressLocality": "Kira Town Council",
      "addressRegion": "Wakiso",
      "postalCode": "P.O. Box 2933",
      "addressCountry": "UG"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "0.3736",
      "longitude": "32.6517"
    },
    "openingHoursSpecification": [
      { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday"], "opens": "09:00", "closes": "19:00" },
      { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Thursday"], "opens": "09:00", "closes": "18:30" },
      { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Friday"], "opens": "09:00", "closes": "18:00" }
    ],
    "medicalSpecialty": [
      "General Practice","Obstetrics","Gynecology","Pediatrics","Surgery","Dentistry","Ophthalmology","Physiotherapy","Orthopedics"
    ],
    "foundingDate": "1989",
    "numberOfEmployees": { "@type": "QuantitativeValue", "value": 87 },
    "sameAs": []
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="min-h-screen bg-white">
        <HeroSlider />
        <WelcomeSection />
        <CareHighlights />
        <QualityCare />
        <Services />
        <SpecialtyTabs />
        <DoctorsSection />
        <CallToAction />
        <AppointmentForm />
        <Testimonials />
      </main>
    </>
  );
}
