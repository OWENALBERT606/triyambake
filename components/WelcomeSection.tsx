"use client";

import Image from "next/image";
import { useInView } from "@/hooks/use-in-view";

export function WelcomeSection() {
  const { ref: sec, visible } = useInView(0.1);

  return (
    <section ref={sec as React.RefObject<HTMLElement>} className="bg-gray-50 py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          <div className={`relative h-[420px] anim-left ${visible ? "anim-visible" : ""}`}>
            <Image
              src="/cdsa.png"
              alt="Ggwaatiro Hospital medical team"
              fill
              className="object-cover object-top rounded-lg"
            />
          </div>

          <div className={`anim-right ${visible ? "anim-visible" : ""}`}>
            <p className="text-[#1a3fa8] text-xs font-bold uppercase tracking-widest mb-3">Welcome to Ggwaatiro Hospital</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f1f5c] leading-snug mb-5">
              Complete Medical Solutions in One Place
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed mb-4">
              Ggwaatiro Hospital is one of the oldest privately owned health facilities in Uganda, located in the central zone of Bweyogerere Ward, Kira Town Council — just 7 miles from Kampala City Centre. Founded in 1981, we have grown from a small dispensary into a fully recognised hospital offering comprehensive medical services to thousands of patients every year.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
