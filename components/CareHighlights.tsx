"use client";

import Image from "next/image";
import { useInView } from "@/hooks/use-in-view";

const hours = [
  { day: "Mon – Wed", time: "9:00 AM - 7:00 PM", closed: false },
  { day: "Thursday",  time: "9:00 AM - 6:30 PM", closed: false },
  { day: "Friday",    time: "9:00 AM - 6:00 PM", closed: false },
  { day: "Sat – Sun", time: "Closed",             closed: true  },
];

export function CareHighlights() {
  const { ref: sec, visible } = useInView(0.1);

  return (
    <section ref={sec as React.RefObject<HTMLElement>} className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

          {/* Card 1 */}
          <div className={`anim-hidden anim-delay-1 ${visible ? "anim-visible" : ""}`}>
            <div className="relative w-full h-52 rounded overflow-hidden mb-4">
              <Image src="/bvc.jpg" alt="Doctor examining a child" fill className="object-cover" />
            </div>
            <h3 className="text-sm font-extrabold text-[#0f1f5c] uppercase tracking-wide mb-2">Highest Quality Care</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              At Ggwaatiro Hospital we are committed to delivering the highest standard of patient care. Our experienced team ensures every patient receives personalised, compassionate treatment in a safe and welcoming environment.
            </p>
          </div>

          {/* Card 2 */}
          <div className={`anim-hidden anim-delay-2 ${visible ? "anim-visible" : ""}`}>
            <div className="relative w-full h-52 rounded overflow-hidden mb-4">
              <Image src="/2223.jpg" alt="Emergency surgical team" fill className="object-cover" />
            </div>
            <h3 className="text-sm font-extrabold text-[#0f1f5c] uppercase tracking-wide mb-2">Emergency Department</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Our emergency department operates 24 hours a day, 7 days a week. Equipped with modern facilities and staffed by skilled professionals, we are always ready to respond swiftly to any medical emergency.
            </p>
          </div>

          {/* Working Hours */}
          <div className={`anim-hidden anim-delay-3 ${visible ? "anim-visible" : ""}`}>
            <div className="bg-[#1a3fa8] text-white rounded p-7 h-full">
              <h3 className="text-base font-extrabold uppercase tracking-wide mb-3">Working Time</h3>
              <p className="text-white/80 text-sm leading-relaxed mb-6">
                We are open most days of the week to serve you. Walk-ins are welcome, and our emergency unit is available around the clock.
              </p>
              <div className="space-y-3">
                {hours.map(({ day, time, closed }) => (
                  <div key={day} className="flex items-center justify-between border-b border-white/20 pb-3 last:border-0 last:pb-0">
                    <span className="text-sm text-white/80">{day}</span>
                    <span className="text-white/40 mx-2">-</span>
                    <span className={`text-sm font-bold ${closed ? "text-white/50" : "text-white"}`}>{time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
