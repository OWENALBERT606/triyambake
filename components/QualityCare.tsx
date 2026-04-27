"use client";

import Image from "next/image";
import Link from "next/link";
import { useInView } from "@/hooks/use-in-view";

export function QualityCare() {
  const { ref: left, visible: lv } = useInView(0.15);
  const { ref: right, visible: rv } = useInView(0.15);

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 min-h-[420px]">
      <div ref={left as React.RefObject<HTMLDivElement>} className={`relative min-h-[320px] anim-left ${lv ? "anim-visible" : ""}`}>
        <Image
          src="/african-american-medic-analyzing-x-ray-scan-diagnosis.jpg"
          alt="Doctor examining a child"
          fill
          className="object-cover object-center"
        />
      </div>
      <div ref={right as React.RefObject<HTMLDivElement>} className={`bg-[#1a3fa8] flex items-center px-10 py-14 anim-right ${rv ? "anim-visible" : ""}`}>
        <div className="max-w-md">
          <p className="text-white/70 text-xs font-bold uppercase tracking-widest mb-4">Highest Quality Care</p>
          <h2 className="text-white text-3xl md:text-4xl font-bold leading-snug mb-5">
            Solutions to Complex Medical Problems
          </h2>
          <p className="text-white/75 text-sm leading-relaxed mb-8">
            At Ggwaatiro Hospital we combine decades of experience with modern medical equipment to deliver accurate diagnoses and effective treatment. Our team of dedicated professionals is committed to your recovery and long-term wellbeing.
          </p>
          <Link href="/services" className="inline-block border-2 border-white text-white text-sm font-semibold px-7 py-3 rounded hover:bg-white hover:text-[#1a3fa8] transition-colors">
            Find Out More
          </Link>
        </div>
      </div>
    </section>
  );
}
