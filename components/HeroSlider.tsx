"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Phone } from "lucide-react";

const slides = [
  {
    image: "/african-american-medic-analyzing-x-ray-scan-diagnosis.jpg",
    tag: "Quality Healthcare · Since 1989",
    heading: "YOUR HEALTH IS",
    headingAccent: "OUR PRIORITY",
    bullets: [
      "Comprehensive outpatient & inpatient services for the whole family",
      "24/7 emergency care with a dedicated rapid-response team",
      "Located in Bweyogerere, just 10 km from Kampala City Centre",
    ],
    cta: { label: "Book Appointment", href: "/contact" },
  },
  {
    image: "/2223.jpg",
    tag: "Maternity & Child Health",
    heading: "CARING FOR MOTHERS",
    headingAccent: "AND NEWBORNS",
    bullets: [
      "Antenatal care, safe delivery, and postnatal support services",
      "Immunization and vaccination programs for infants and children",
      "Experienced midwives and obstetricians available around the clock",
    ],
    cta: { label: "Our Maternity Services", href: "/services" },
  },
  {
    image: "/bvc.jpg",
    headingAccent: "CARE YOU CAN TRUST",
    tag: "Maternity & Child Health",
    bullets: [
      "Minor & major surgical operations with modern theatre facilities",
      "Ultrasound imaging, laboratory services & digitalised dental care",
      "Eye specialists, physiotherapy, and HN/DM clinic services",
    ],
    cta: { label: "View All Services", href: "/services" },
  },
];

export function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  const slide = slides[current];

  return (
    <section className="relative w-full h-[520px] md:h-[600px] overflow-hidden bg-[#0f1f5c]">
      {/* Background images */}
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={s.image}
            alt={s.headingAccent}
            fill
            className="object-cover object-center"
            priority={i === 0}
          />
          {/* dark blue overlay */}
          <div className="absolute inset-0 bg-[#0f1f5c]/70" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-6xl mx-auto px-6 md:px-12 w-full">
          <div className="max-w-2xl" style={{animation:"heroSlideUp 0.8s ease forwards", opacity:0}}>
            {/* Tag */}
            <span className="inline-block bg-[#1a3fa8] text-white text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5">
              {slide.tag}
            </span>

            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-1 drop-shadow">
              {slide.heading}
            </h1>
            <h2 className="text-4xl md:text-6xl font-extrabold text-[#5b8dee] leading-tight mb-6 drop-shadow">
              {slide.headingAccent}
            </h2>

            <ul className="space-y-2 mb-8">
              {slide.bullets.map((b, i) => (
                <li key={i} className="flex gap-2 text-white/85 text-sm md:text-base leading-snug">
                  <span className="text-[#5b8dee] font-bold mt-0.5 shrink-0">»</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3">
              <Link
                href={slide.cta.href}
                className="inline-block bg-[#1a3fa8] hover:bg-[#1535a0] text-white font-semibold text-sm px-7 py-3 rounded transition-colors shadow-lg"
              >
                {slide.cta.label}
              </Link>
              <a
                href="tel:+256772428467"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold text-sm px-6 py-3 rounded transition-colors"
              >
                <Phone className="w-4 h-4" /> +256 772 428 467
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Prev / Next arrows */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-white/15 hover:bg-white/30 text-white rounded-full p-2 transition"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-white/15 hover:bg-white/30 text-white rounded-full p-2 transition"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current ? "bg-white w-7" : "bg-white/40 w-2.5 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

// Inject hero animation keyframe once
if (typeof document !== "undefined" && !document.getElementById("hero-anim")) {
  const s = document.createElement("style");
  s.id = "hero-anim";
  s.textContent = `@keyframes heroSlideUp { from { opacity:0; transform:translateY(28px); } to { opacity:1; transform:none; } }`;
  document.head.appendChild(s);
}
