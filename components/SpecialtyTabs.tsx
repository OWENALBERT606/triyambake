"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Baby, FlaskConical, Scan, Stethoscope } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

const tabs = [
  {
    id: "pediatrics",
    label: "Pediatrics",
    icon: Baby,
    image: "/bvc.jpg",
    desc: "Our paediatrics unit provides comprehensive care for infants, children, and adolescents. From routine immunizations to complex conditions, our experienced team ensures every child receives the best possible care in a safe and welcoming environment.",
    points: [
      "Immunization and vaccination services",
      "Antenatal and newborn care",
      "Paediatric outpatient consultations",
      "Child nutrition and growth monitoring",
      "Management of childhood illnesses",
      "Referral for specialist paediatric care",
    ],
  },
  {
    id: "laboratory",
    label: "Laboratory",
    icon: FlaskConical,
    image: "/african-american-medic-analyzing-x-ray-scan-diagnosis.jpg",
    desc: "Our on-site laboratory provides fast, accurate diagnostic testing to support clinical decisions. Equipped with modern analysers, we deliver reliable results for a wide range of tests — most within the same day.",
    points: [
      "Full blood count and blood grouping",
      "Malaria rapid diagnostic tests",
      "HIV, Hepatitis B & C testing",
      "Blood sugar and HbA1c",
      "Liver and kidney function tests",
      "Urinalysis and stool microscopy",
    ],
  },
  {
    id: "imaging",
    label: "Ultrasound & Imaging",
    icon: Scan,
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=1200&auto=format&fit=crop",
    desc: "Our ultrasound and imaging services provide clear, detailed diagnostic images to guide accurate treatment. Available for obstetric, abdominal, and musculoskeletal assessments with prompt reporting.",
    points: [
      "Obstetric ultrasound scans",
      "Abdominal and pelvic ultrasound",
      "Musculoskeletal imaging",
      "Foetal growth and wellbeing scans",
      "Guided procedures",
      "Same-day reporting available",
    ],
  },
  {
    id: "general",
    label: "General Medicine",
    icon: Stethoscope,
    image: "/2223.jpg",
    desc: "Our general medicine department handles a broad range of adult medical conditions. From routine check-ups to the management of chronic diseases, our doctors provide thorough, patient-centred care.",
    points: [
      "Outpatient consultations",
      "Hypertension and diabetes management",
      "Malaria diagnosis and treatment",
      "Respiratory and infectious diseases",
      "Chronic disease monitoring",
      "Referral to specialist departments",
    ],
  },
];

export function SpecialtyTabs() {
  const [active, setActive] = useState(0);
  const { ref: sec, visible } = useInView(0.1);
  const tab = tabs[active];
  const Icon = tab.icon;

  return (
    <section ref={sec as React.RefObject<HTMLElement>} className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6 md:px-12">

        {/* Tab bar */}
        <div className={`flex flex-wrap gap-2 mb-10 anim-hidden ${visible ? "anim-visible" : ""}`}>
          {tabs.map((t, i) => {
            const TIcon = t.icon;
            return (
              <button
                key={t.id}
                onClick={() => setActive(i)}
                className={`inline-flex items-center gap-2 px-5 py-3 rounded text-sm font-semibold transition-colors ${
                  active === i
                    ? "bg-[#1a3fa8] text-white"
                    : "bg-transparent text-slate-400 hover:text-slate-600"
                }`}
              >
                <TIcon size={16} strokeWidth={1.8} />
                {t.label}
              </button>
            );
          })}
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div className={`relative h-[360px] rounded-lg overflow-hidden anim-left ${visible ? "anim-visible" : ""}`}>
            <Image
              src={tab.image}
              alt={tab.label}
              fill
              className="object-cover object-center"
            />
          </div>

          {/* Text */}
          <div className={`anim-right ${visible ? "anim-visible" : ""}`}>
            <h3 className="text-[#0f1f5c] text-3xl font-bold mb-4">{tab.label}</h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">{tab.desc}</p>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2 mb-8">
              {tab.points.map((p, i) => (
                <li key={i} className="flex gap-2 text-slate-600 text-sm">
                  <span className="text-[#1a3fa8] font-bold shrink-0">»</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/services"
              className="inline-block bg-[#1a3fa8] hover:bg-[#1535a0] text-white text-sm font-semibold px-7 py-3 rounded transition-colors"
            >
              View More Details
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
