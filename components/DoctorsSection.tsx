"use client";

import Image from "next/image";
import Link from "next/link";
import { useInView } from "@/hooks/use-in-view";

export function DoctorsSection() {
  const { ref: sec, visible } = useInView(0.1);

  return (
    <section ref={sec as React.RefObject<HTMLElement>} className="bg-white py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        <div className={`anim-left ${visible ? "anim-visible" : ""}`}>
          <p className="text-[#1a3fa8] text-xs font-bold uppercase tracking-widest mb-4">Qualified Doctors</p>
          <h2 className="text-[#0f1f5c] text-3xl md:text-4xl font-bold leading-snug mb-6">
            Group of Certified and Experienced Doctors
          </h2>
          <ul className="space-y-4 mb-8">
            {[
              "Our medical team has served the Bweyogerere community since 1989, bringing expertise across general medicine, maternity, surgery, and specialist care.",
              "With 87 dedicated staff members — both medical and support — we ensure every patient receives personalised, compassionate care from qualified professionals.",
            ].map((item, i) => (
              <li key={i} className="flex gap-3 text-slate-500 text-sm leading-relaxed">
                <span className="text-[#1a3fa8] font-bold mt-0.5 shrink-0">◦</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <Link href="/about" className="inline-block bg-[#1a3fa8] hover:bg-[#1535a0] text-white text-sm font-semibold px-7 py-3 rounded transition-colors">
            Meet The Doctors
          </Link>
        </div>

        <div className={`relative h-[380px] md:h-[440px] anim-right ${visible ? "anim-visible" : ""}`}>
          <Image
            src="/2223.jpg"
            alt="Ggwaatiro Hospital medical team"
            fill
            className="object-cover object-top rounded-lg"
          />
        </div>

      </div>
    </section>
  );
}
