"use client";

import { useInView } from "@/hooks/use-in-view";

export function WelcomeSection() {
  const { ref: sec, visible } = useInView(0.1);

  return (
    <section ref={sec as React.RefObject<HTMLElement>} className="bg-gray-50 py-24 overflow-hidden">
      <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
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
    </section>
  );
}
