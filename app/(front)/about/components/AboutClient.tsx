"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Heart, Shield, Users, Award, Clock, Star,
  CheckCircle, Globe, Eye, Activity, Stethoscope,
  Phone, Calendar, Quote, BookOpen, HandHeart,
} from "lucide-react";

/* ─── Data ─────────────────────────────────────── */

const coreValues = [
  { icon: BookOpen,   label: "Accountability & Openness",      desc: "We are transparent in all our actions and take full responsibility for the care we provide." },
  { icon: Heart,      label: "Human Dignity",                  desc: "Every patient is treated with the utmost respect, compassion, and recognition of their inherent worth." },
  { icon: HandHeart,  label: "Sensitive to Vulnerability",     desc: "We recognise and respond with care to the unique needs of vulnerable patients and communities." },
  { icon: Star,       label: "God Fearing",                    desc: "Our work is guided by moral integrity, humility, and a deep sense of purpose beyond ourselves." },
  { icon: Users,      label: "Client Focus",                   desc: "The patient is at the centre of every decision — their wellbeing drives everything we do." },
  { icon: Award,      label: "Excellence",                     desc: "We continuously strive to deliver the highest standards of medical care and service." },
  { icon: Shield,     label: "Professionalism",                desc: "Our team upholds the highest ethical and professional standards in all interactions." },
];

const milestones = [
  { year: "1981", title: "Founded",           desc: "Ggwaatiro Hospital started as a small dispensary in Kirinya, driven by a vision to serve the community." },
  { year: "1995", title: "Nursing Home",      desc: "The facility was transferred to Bweyogerere and expanded into a nursing home, growing its capacity to serve more patients." },
  { year: "2012", title: "Hospital Status",   desc: "Declared and recognised as a hospital by the Ministry of Health — a milestone reflecting years of dedicated service." },
  { year: "Today","title": "Dedicated Staff", desc: "The hospital has a dedicated team of medical and support staff serving thousands of patients every year." },
];

const stats = [
  { v: "1981", l: "Est. Year" },
  { v: "24/7", l: "Emergency Care" },
  { v: "44+",  l: "Years Serving" },
];

/* ─── Hook ──────────────────────────────────────── */
function useInView(threshold = 0.12) {
  const [vis, setVis] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, vis };
}

/* ─── Page ──────────────────────────────────────── */
export default function AboutPage() {
  const heroSec    = useInView(0.1);
  const aboutSec   = useInView(0.1);
  const missionSec = useInView(0.1);
  const valuesSec  = useInView(0.1);
  const timelineSec= useInView(0.1);
  const ctaSec     = useInView(0.1);

  return (
    <main className="about-root">

      {/* ══ HERO ══ */}
      <section className="ab-hero">
        <div className="hero-blob b1" />
        <div className="hero-blob b2" />
        <div ref={heroSec.ref} className={`ab-hero-inner ${heroSec.vis ? "fade-up" : "pre-fade"}`}>
          <span className="page-eyebrow"><span className="ey-dash"/>Our Story<span className="ey-dash"/></span>
          <h1 className="hero-h1">About <em>Ggwaatiro Hospital</em></h1>
          <p className="hero-sub">
            Since 1981, Ggwaatiro Hospital has been one of Uganda's oldest privately owned health
            facilities — serving the community of Bweyogerere with compassion, professionalism, and faith.
          </p>
          <div className="hero-stats">
            {stats.map((s, i) => (
              <div key={s.l} className="hs-block" style={{ "--hsd": `${0.15 + i * 0.1}s` } as React.CSSProperties}>
                <p className="hs-val">{s.v}</p>
                <p className="hs-lbl">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-cut" />
      </section>

      {/* ══ ABOUT SECTION ══ */}
      <section className="ab-section ab-here">
        <div ref={aboutSec.ref} className={`ab-container here-grid ${aboutSec.vis ? "fade-up" : "pre-fade"}`}>
          <div className="here-img-wrap">
            <Image
              src="/african-american-medic-analyzing-x-ray-scan-diagnosis.jpg"
              alt="Ggwaatiro Hospital building"
              fill
              className="object-cover rounded-2xl"
            />
          </div>
          <div className="here-content">
            <span className="section-eyebrow">Who We Are</span>
            <h2 className="section-h2">Serving Uganda<br /><em>Since 1981</em></h2>
            <p className="section-body">
              Ggwaatiro Hospital is one of the oldest privately owned health facilities in Uganda,
              located in the central zone of Bweyogerere Ward, Kira Town Council — just 7 miles from
              Kampala City Centre and about 200m off the Kampala–Jinja highway.
            </p>
            <p className="section-body">
              Founded in 1981, the hospital started as a small dispensary in Kirinya, was later
              transferred to Bweyogerere as a nursing home, and in 2012 was declared and recognised
              as a hospital by the Ministry of Health.
            </p>
            <div className="check-list">
              {[
                "General outpatient & inpatient services",
                "Antenatal care & maternity services",
                "24/7 ambulance services",
                "Minor & major surgical operations",
                "Digitalised dental & eye specialist services",
                "Dedicated staff — medical and support",
              ].map(item => (
                <div key={item} className="check-item">
                  <CheckCircle size={16} className="check-icon" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ MISSION & VISION ══ */}
      <section className="ab-section ab-mission">
        <div className="mission-bg-stripe" />
        <div ref={missionSec.ref} className={`ab-container ${missionSec.vis ? "fade-up" : "pre-fade"}`}>
          <div className="section-header">
            <span className="section-eyebrow section-eyebrow-light">Our Foundation</span>
            <h2 className="section-h2 section-h2-light">Mission &amp; Vision</h2>
          </div>

          <div className="mv-grid">
            {/* Vision */}
            <div className="mv-card">
              <div className="mv-img-wrap">
                <Image
                  src="https://images.unsplash.com/photo-1666214280557-f1b5022eb634?q=80&w=1200&auto=format&fit=crop"
                  alt="African doctor providing quality healthcare"
                  fill
                  className="object-cover"
                />
                <div className="mv-img-tint" />
              </div>
              <div className="mv-text">
                <span className="mv-tag">✦ Vision</span>
                <h3 className="mv-title">To be the leading quality health care provider to the country and general public.</h3>
              </div>
            </div>

            {/* Mission */}
            <div className="mv-card">
              <div className="mv-img-wrap">
                <Image
                  src="/2223.jpg"
                  alt="Black African doctor in hospital"
                  fill
                  className="object-cover"
                />
                <div className="mv-img-tint" />
              </div>
              <div className="mv-text">
                <span className="mv-tag">✦ Mission</span>
                <h3 className="mv-title">To continue building the already existing services through modernization and professionalism of medical services to national and international standards.</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ CORE VALUES ══ */}
      <section className="ab-section ab-values">
        <div ref={valuesSec.ref} className={`ab-container ${valuesSec.vis ? "fade-up" : "pre-fade"}`}>
          <div className="values-layout">
            {/* Left – hospital image */}
            <div className="values-img-wrap">
              <Image
                src="/closeup-shot-boy-doctor-wearing-sanitary-mask.jpg"
                alt="Ggwaatiro Hospital reception area"
                fill
                className="object-cover rounded-2xl"
              />
              <div className="values-img-overlay">
                <h2 className="values-overlay-title">CORE<br/>VALUES</h2>
              </div>
            </div>

            {/* Right – values list */}
            <div className="values-panel">
              <span className="section-eyebrow section-eyebrow-light">What Drives Us</span>
              <h2 className="section-h2 section-h2-light" style={{marginBottom:"1.5rem"}}>Our Core Values</h2>
              <div className="values-list">
                {coreValues.map((v, i) => {
                  const Icon = v.icon;
                  return (
                    <div key={v.label} className="value-row" style={{ "--vd": `${i * 0.07}s` } as React.CSSProperties}>
                      <div className="vr-icon"><Icon size={18} strokeWidth={1.8} /></div>
                      <div>
                        <p className="vr-label">{v.label}</p>
                        <p className="vr-desc">{v.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ TIMELINE ══ */}
      <section className="ab-section ab-timeline">
        <div ref={timelineSec.ref} className={`ab-container ${timelineSec.vis ? "fade-up" : "pre-fade"}`}>
          <div className="section-header">
            <span className="section-eyebrow">Our Journey</span>
            <h2 className="section-h2">35+ Years of <em>Dedicated Service</em></h2>
          </div>
          <div className="timeline">
            {milestones.map((m, i) => (
              <div key={m.year} className="tl-item" style={{ "--tld": `${i * 0.12}s` } as React.CSSProperties}>
                <div className="tl-dot"><span>{m.year}</span></div>
                <div className="tl-card">
                  <p className="tl-title">{m.title}</p>
                  <p className="tl-desc">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section className="ab-cta-banner">
        <div ref={ctaSec.ref} className={`ab-container cta-inner ${ctaSec.vis ? "fade-up" : "pre-fade"}`}>
          <div className="cta-text">
            <h2 className="cta-h2">Ready to Experience Ggwaatiro Hospital?</h2>
            <p className="cta-sub">Book your appointment today — our team is ready to serve you.</p>
          </div>
          <div className="cta-btns">
            <Link href="/contact" className="cta-btn-primary"><Calendar size={16}/> Book an Appointment</Link>
            <a href="tel:+256772428453" className="cta-btn-ghost"><Phone size={16}/> +256 772 428 453</a>
          </div>
        </div>
      </section>

      {/* ══ STYLES ══ */}
      <style>{`
        .about-root {
          --blue:   #1a3fa8;
          --blue-d: #1535a0;
          --blue-l: #eff3ff;
          --maroon:   #800020;
          --maroon-d: #6b001a;
          --maroon-l: #fff0f3;
          --navy:   #0f1f5c;
          --slate:  #64748b;
          --border: #e2e8f0;
          --white:  #ffffff;
          --off:    #f8fafc;
          --ff-s:   'Georgia','Charter',serif;
          --ff-u:   'Trebuchet MS','Tahoma',sans-serif;
          overflow-x: hidden;
        }

        .ab-section   { position:relative; padding:5rem 1.5rem; }
        .ab-container { max-width:1200px; margin:0 auto; }

        .pre-fade { opacity:0; transform:translateY(30px); }
        .fade-up  { animation: fadeUp 0.75s ease forwards; }
        @keyframes fadeUp { to{ opacity:1; transform:none; } }

        .section-header  { text-align:center; margin-bottom:3.5rem; }
        .section-eyebrow {
          display:inline-flex; align-items:center; gap:0.6rem;
          font-family:var(--ff-u); font-size:0.72rem; font-weight:700;
          letter-spacing:0.14em; text-transform:uppercase; color:var(--blue);
          margin-bottom:0.85rem;
        }
        .section-eyebrow-light { color:#93c5fd; }
        .section-h2 {
          font-family:var(--ff-s); font-size:clamp(2rem,4vw,3rem);
          font-weight:800; color:var(--navy); line-height:1.15;
          letter-spacing:-0.02em; margin:0 0 1rem;
        }
        .section-h2-light { color:#fff; }
        .section-h2 em { color:var(--blue); font-style:italic; }
        .section-body  { font-family:var(--ff-s); font-size:0.95rem; color:var(--slate); line-height:1.75; margin:0 0 1rem; }

        /* ── HERO ── */
        .ab-hero {
          position:relative; overflow:hidden;
          background:linear-gradient(145deg, #0f1f5c 0%, #1a3fa8 50%, #800020 100%);
          padding:7rem 1.5rem 9rem; text-align:center;
        }
        .hero-blob { position:absolute; border-radius:50%; filter:blur(90px); opacity:0.2; pointer-events:none; }
        .b1{ width:500px;height:500px; background:radial-gradient(#93c5fd,transparent); top:-150px;right:-100px; }
        .b2{ width:350px;height:350px; background:radial-gradient(#fca5a5,transparent); bottom:-80px;left:-60px; }

        .ab-hero-inner { position:relative; z-index:2; max-width:860px; margin:0 auto; }
        .page-eyebrow {
          display:inline-flex; align-items:center; gap:0.6rem;
          font-family:var(--ff-u); font-size:0.72rem; font-weight:700;
          letter-spacing:0.14em; text-transform:uppercase; color:#93c5fd;
          margin-bottom:1.25rem;
        }
        .ey-dash{ display:inline-block; width:28px;height:2px; background:#93c5fd; border-radius:2px; }
        .hero-h1 {
          font-family:var(--ff-s); font-size:clamp(2.8rem,7vw,5rem);
          font-weight:900; color:#fff; line-height:1.08;
          letter-spacing:-0.03em; margin:0 0 1.25rem;
        }
        .hero-h1 em { color:#93c5fd; font-style:italic; }
        .hero-sub {
          font-family:var(--ff-s); font-size:1.05rem;
          color:#bfdbfe; max-width:640px; margin:0 auto 3rem; line-height:1.75;
        }
        .hero-stats {
          display:inline-grid; grid-template-columns:repeat(4,1fr);
          gap:1.5rem; padding:2rem 2.5rem;
          background:#ffffff0f; backdrop-filter:blur(12px);
          border:1px solid #ffffff18; border-radius:1.25rem;
        }
        @media(max-width:600px){ .hero-stats{ grid-template-columns:repeat(2,1fr); } }
        .hs-block { text-align:center; animation: fadeUp 0.6s ease var(--hsd) both; }
        .hs-val { font-family:var(--ff-s); font-size:2rem; font-weight:800; color:#93c5fd; margin:0 0 0.2rem; }
        .hs-lbl { font-family:var(--ff-u); font-size:0.7rem; font-weight:600; color:#bfdbfe; text-transform:uppercase; letter-spacing:0.06em; margin:0; }
        .hero-cut {
          position:absolute; bottom:-1px; left:0; right:0; height:80px;
          background:var(--white); clip-path:polygon(0 100%,100% 100%,100% 0);
        }

        /* ── ABOUT ── */
        .ab-here { background:var(--white); }
        .here-grid { display:grid; grid-template-columns:1fr 1fr; gap:4rem; align-items:center; }
        @media(max-width:900px){ .here-grid{ grid-template-columns:1fr; gap:2.5rem; } }
        .here-img-wrap { position:relative; height:420px; border-radius:1rem; overflow:hidden; }
        .check-list { display:flex; flex-direction:column; gap:0.6rem; margin-top:1.5rem; }
        .check-item { display:flex; align-items:flex-start; gap:0.6rem; font-family:var(--ff-u); font-size:0.82rem; color:var(--slate); }
        .check-icon { color:var(--blue); flex-shrink:0; margin-top:1px; }

        /* ── MISSION & VISION ── */
        .ab-mission {
          background:linear-gradient(145deg, #0f1f5c 0%, #800020 100%);
          padding:5rem 1.5rem;
        }
        .mv-grid { display:grid; grid-template-columns:1fr 1fr; gap:2rem; }
        @media(max-width:768px){ .mv-grid{ grid-template-columns:1fr; } }
        .mv-card {
          border-radius:1rem; overflow:hidden;
          background:#ffffff10; border:1px solid #ffffff20;
        }
        .mv-img-wrap { position:relative; height:220px; overflow:hidden; }
        .mv-img-tint {
          position:absolute; inset:0;
          background:linear-gradient(to bottom, #1a3fa820, #0f1f5c60);
        }
        .mv-text { padding:1.75rem; }
        .mv-tag {
          font-family:var(--ff-u); font-size:0.7rem; font-weight:700;
          letter-spacing:0.12em; text-transform:uppercase; color:#93c5fd;
          display:block; margin-bottom:0.75rem;
        }
        .mv-title {
          font-family:var(--ff-s); font-size:1.05rem; font-weight:700;
          color:#fff; line-height:1.6; margin:0;
        }

        /* ── CORE VALUES ── */
        .ab-values {
          background:linear-gradient(145deg, #1a3fa8 0%, #800020 100%);
          padding:5rem 1.5rem;
        }
        .values-layout { display:grid; grid-template-columns:1fr 1fr; gap:3rem; align-items:start; }
        @media(max-width:900px){ .values-layout{ grid-template-columns:1fr; } }

        .values-img-wrap {
          position:relative; height:520px; border-radius:1rem; overflow:hidden;
        }
        .values-img-overlay {
          position:absolute; inset:0;
          background:linear-gradient(to bottom, #1a3fa855 0%, #0f1f5c88 100%);
          display:flex; align-items:flex-start; padding:2rem;
        }
        .values-overlay-title {
          font-family:var(--ff-u); font-size:3.5rem; font-weight:900;
          color:#fff; line-height:1; letter-spacing:0.02em;
        }

        .values-panel { display:flex; flex-direction:column; }
        .values-list { display:flex; flex-direction:column; gap:1rem; margin-top:0.5rem; }
        .value-row {
          display:flex; align-items:flex-start; gap:0.85rem;
          background:#ffffff10; border:1px solid #ffffff18;
          border-radius:0.75rem; padding:0.9rem 1rem;
          animation: fadeUp 0.5s ease var(--vd) both;
          transition: background 0.2s;
        }
        .value-row:hover { background:#ffffff1a; }
        .vr-icon {
          width:36px; height:36px; border-radius:0.5rem;
          background:#ffffff15; color:#93c5fd;
          display:grid; place-items:center; flex-shrink:0;
        }
        .vr-label { font-family:var(--ff-u); font-size:0.82rem; font-weight:700; color:#fff; margin:0 0 0.2rem; }
        .vr-desc  { font-family:var(--ff-u); font-size:0.72rem; color:#bfdbfe; margin:0; line-height:1.5; }

        /* ── TIMELINE ── */
        .ab-timeline { background:var(--off); }
        .timeline { display:flex; flex-direction:column; gap:0; position:relative; max-width:700px; margin:0 auto; }
        .timeline::before {
          content:''; position:absolute; left:60px; top:0; bottom:0;
          width:2px; background:var(--border);
        }
        .tl-item {
          display:flex; gap:1.5rem; align-items:flex-start;
          padding-bottom:2rem;
          animation: fadeUp 0.5s ease var(--tld) both;
        }
        .tl-dot {
          width:60px; height:60px; border-radius:50%; flex-shrink:0;
          background:linear-gradient(135deg, var(--blue), var(--maroon)); color:#fff;
          display:grid; place-items:center;
          font-family:var(--ff-u); font-size:0.72rem; font-weight:800;
          text-align:center; line-height:1.2;
          box-shadow:0 4px 16px #1a3fa840;
          position:relative; z-index:1;
        }
        .tl-card {
          background:var(--white); border:1.5px solid var(--border);
          border-radius:0.85rem; padding:1.1rem 1.25rem;
          flex:1; box-shadow:0 2px 10px #0000000a;
        }
        .tl-title { font-family:var(--ff-u); font-size:0.88rem; font-weight:700; color:var(--navy); margin:0 0 0.35rem; }
        .tl-desc  { font-family:var(--ff-u); font-size:0.78rem; color:var(--slate); margin:0; line-height:1.6; }

        /* ── CTA ── */
        .ab-cta-banner {
          background:linear-gradient(135deg, #1a3fa8 0%, #800020 100%);
          padding:5rem 1.5rem;
        }
        .cta-inner {
          display:flex; align-items:center; justify-content:space-between;
          gap:2rem; flex-wrap:wrap;
        }
        .cta-h2 {
          font-family:var(--ff-s); font-size:clamp(1.5rem,3vw,2.2rem);
          font-weight:800; color:#fff; margin:0 0 0.5rem;
        }
        .cta-sub { font-family:var(--ff-s); font-size:0.95rem; color:#bfdbfe; margin:0; }
        .cta-btns { display:flex; gap:0.85rem; flex-wrap:wrap; flex-shrink:0; }
        .cta-btn-primary {
          display:inline-flex; align-items:center; gap:0.4rem;
          background:#fff; color:var(--blue);
          font-family:var(--ff-u); font-size:0.88rem; font-weight:700;
          padding:0.8rem 1.75rem; border-radius:0.75rem;
          text-decoration:none; transition:all 0.2s;
          box-shadow:0 4px 16px #00000020;
        }
        .cta-btn-primary:hover { background:#eff3ff; transform:translateY(-2px); }
        .cta-btn-ghost {
          display:inline-flex; align-items:center; gap:0.4rem;
          background:transparent; color:#fff;
          font-family:var(--ff-u); font-size:0.88rem; font-weight:600;
          padding:0.8rem 1.75rem; border-radius:0.75rem;
          border:1.5px solid #ffffff30; text-decoration:none; transition:all 0.2s;
        }
        .cta-btn-ghost:hover { background:#ffffff15; border-color:#ffffff60; }
      `}</style>
    </main>
  );
}
