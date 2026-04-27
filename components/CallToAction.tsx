"use client";

import { useInView } from "@/hooks/use-in-view";

export function CallToAction() {
  const { ref: sec, visible } = useInView(0.2);

  return (
    <section className="relative min-h-[320px] flex items-center justify-center text-center overflow-hidden bg-[#0f1f5c]">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/img-20220921-wa0028-jpg.jpg')" }} />
      <div className="absolute inset-0 bg-[#0f1f5c]/75" />

      <div ref={sec as React.RefObject<HTMLDivElement>} className={`relative z-10 px-6 py-16 anim-scale ${visible ? "anim-visible" : ""}`}>
        <svg className="w-14 h-14 mx-auto mb-6 text-white/80" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <rect x="24" y="8"  width="16" height="48" rx="3"/>
          <rect x="8"  y="24" width="48" height="16" rx="3"/>
        </svg>
        <h2 className="text-white text-2xl md:text-3xl font-bold mb-4">Take the First Step to Help</h2>
        <div className="w-12 h-0.5 bg-white/40 mx-auto mb-5" />
        <p className="text-white/80 text-sm mb-2">Call Ggwaatiro Hospital Now</p>
        <a href="tel:+256772428467" className="text-white text-3xl md:text-5xl font-extrabold tracking-tight hover:text-blue-200 transition-colors">
          +256 772 428 467
        </a>
      </div>
    </section>
  );
}
