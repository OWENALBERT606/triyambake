"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Heart, Baby, Eye, Stethoscope, FlaskConical, Ambulance,
  Scissors, Activity, Users, Pill, CheckCircle, Calendar,
  Phone, ArrowRight, ChevronDown,
} from "lucide-react";

const services = [
  { id:"outpatient",  icon: Stethoscope, label: "General Outpatient Services",         color:"#1a3fa8", desc:"Consultations, diagnosis, and treatment for all general medical conditions. Walk-ins welcome during working hours." },
  { id:"inpatient",   icon: Activity,    label: "Inpatient / Admission Services",       color:"#1535a0", desc:"Full inpatient care with comfortable wards, 24-hour nursing, and round-the-clock doctor supervision." },
  { id:"maternity",   icon: Baby,        label: "Antenatal Care & Maternity Services",  color:"#2563eb", desc:"Comprehensive pregnancy care from first trimester through safe delivery and postnatal support." },
  { id:"immunization",icon: Shield,      label: "Immunization & Vaccination Services",  color:"#1d4ed8", desc:"National immunization schedule for infants and children, plus adult vaccination programmes." },
  { id:"ultrasound",  icon: FlaskConical,label: "Ultrasound Scan / Imaging",            color:"#1a3fa8", desc:"Obstetric, abdominal, and diagnostic ultrasound scans with same-day results." },
  { id:"dental",      icon: Scissors,    label: "Digitalised Dental Services",          color:"#1535a0", desc:"Modern dental consultations, extractions, fillings, and oral health care using digital equipment." },
  { id:"eye",         icon: Eye,         label: "Eye Specialists",                      color:"#2563eb", desc:"Vision assessments, eye disease diagnosis, and treatment by qualified ophthalmologists." },
  { id:"lab",         icon: FlaskConical,label: "Laboratory Services",                  color:"#1d4ed8", desc:"Full blood counts, malaria tests, HIV, blood sugar, liver & kidney function, and more — most results same day." },
  { id:"hndm",        icon: Heart,       label: "HN/DM Clinic Services",               color:"#1a3fa8", desc:"Dedicated clinic for hypertension and diabetes management, monitoring, and patient education." },
  { id:"surgery",     icon: Scissors,    label: "Minor & Major Surgical Operations",    color:"#1535a0", desc:"Fully equipped theatre for both minor procedures and major operations performed by experienced surgeons." },
  { id:"ambulance",   icon: Ambulance,   label: "24/7 Ambulance Services",              color:"#2563eb", desc:"Round-the-clock emergency ambulance service. Call +256 772 428 467 for immediate dispatch." },
  { id:"medication",  icon: Pill,        label: "General Medication",                   color:"#1d4ed8", desc:"On-site pharmacy dispensing a wide range of medications prescribed by our doctors." },
  { id:"obstetric",   icon: Baby,        label: "Obstetric & Gynaecological Program",   color:"#1a3fa8", desc:"Specialist care for women's reproductive health, pregnancy complications, and gynaecological conditions." },
  { id:"family",      icon: Users,       label: "Family Planning Services",             color:"#1535a0", desc:"Counselling and provision of family planning methods tailored to individual needs." },
  { id:"palliative",  icon: Heart,       label: "Palliative Care",                      color:"#2563eb", desc:"Compassionate care focused on comfort, dignity, and quality of life for patients with serious illness." },
  { id:"physio",      icon: Activity,    label: "Physiotherapy",                        color:"#1d4ed8", desc:"Rehabilitation for injuries, post-surgery recovery, stroke rehabilitation, and chronic pain management." },
  { id:"ortho",       icon: Stethoscope, label: "Orthopedics",                          color:"#1a3fa8", desc:"Diagnosis and treatment of bone, joint, and musculoskeletal conditions including fractures and arthritis." },
];

// Shield is not imported from lucide — use a simple inline SVG or re-use CheckCircle
function Shield({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  );
}

export default function ServicesPage() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <main className="sv-root">

      {/* ══ HERO ══ */}
      <section className="sv-hero">
        <div className="sv-blob svb1" /><div className="sv-blob svb2" />
        <div className="sv-hero-inner">
          <span className="sv-eyebrow"><span className="sv-dash"/>Our Services<span className="sv-dash"/></span>
          <h1 className="sv-h1">SERVICES<br/><em>OFFERED</em></h1>
          <p className="sv-sub">
            Here, we offer the following services — comprehensive healthcare for every member of your family,
            delivered with professionalism and compassion since 1989.
          </p>
          <div className="sv-hero-stats">
            {[{v:"17+",l:"Services"},{v:"87",l:"Staff Members"},{v:"24/7",l:"Emergency"},{v:"1989",l:"Est. Year"}].map((s,i) => (
              <div key={s.l} className="sv-hstat" style={{"--si":`${i*0.1}s`} as React.CSSProperties}>
                <p className="sv-hstat-v">{s.v}</p>
                <p className="sv-hstat-l">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="sv-cut" />
      </section>

      {/* ══ SERVICES GRID ══ */}
      <section className="sv-body">
        <div className="sv-container">
          <div className="sv-section-header">
            <span className="sv-eyebrow-dark">What We Offer</span>
            <h2 className="sv-section-h2">Comprehensive Medical Services</h2>
            <p className="sv-section-p">
              Ggwaatiro Hospital provides a full range of healthcare services to serve the community of Bweyogerere and beyond.
            </p>
          </div>

          <div className="sv-grid">
            {services.map((s, i) => {
              const Icon = s.icon;
              const isOpen = open === s.id;
              return (
                <div key={s.id} className={`sv-card ${isOpen ? "sv-card-open" : ""}`}
                  style={{"--sc":s.color,"--si":`${i*0.04}s`} as React.CSSProperties}>
                  <div className="sv-card-top">
                    <div className="sv-card-icon"><Icon size={22} strokeWidth={1.8}/></div>
                    <h3 className="sv-card-title">{s.label}</h3>
                    <button className="sv-card-toggle" onClick={() => setOpen(isOpen ? null : s.id)} aria-label="Toggle details">
                      <ChevronDown size={16} className={`sv-chev ${isOpen ? "sv-chev-open" : ""}`}/>
                    </button>
                  </div>
                  <div className={`sv-card-body ${isOpen ? "sv-body-open" : ""}`}>
                    <p className="sv-card-desc">{s.desc}</p>
                    <Link href="/contact" className="sv-card-cta">Book Now <ArrowRight size={13}/></Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ WHY US ══ */}
      <section className="sv-why">
        <div className="sv-container sv-why-grid">
          {[
            { icon: CheckCircle, title:"Experienced Team",    desc:"87 dedicated medical and support staff with decades of combined experience." },
            { icon: Ambulance,   title:"24/7 Emergency",      desc:"Our emergency unit and ambulance service never sleep — always ready for you." },
            { icon: Heart,       title:"Patient-Centred Care",desc:"Every patient is treated with dignity, compassion, and individual attention." },
            { icon: Shield,      title:"Est. Since 1989",     desc:"Over 35 years of trusted healthcare service to the Bweyogerere community." },
          ].map((w, i) => {
            const Icon = w.icon;
            return (
              <div key={w.title} className="sv-why-card" style={{"--wi":`${i*0.1}s`} as React.CSSProperties}>
                <div className="sv-why-icon"><Icon size={22} strokeWidth={1.8}/></div>
                <h3 className="sv-why-title">{w.title}</h3>
                <p className="sv-why-desc">{w.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section className="sv-cta">
        <div className="sv-container sv-cta-inner">
          <div>
            <h2 className="sv-cta-h2">Need Medical Assistance?</h2>
            <p className="sv-cta-sub">Our team is ready to help — walk in or call us today.</p>
          </div>
          <div className="sv-cta-btns">
            <Link href="/contact" className="sv-btn-primary"><Calendar size={15}/> Book Appointment</Link>
            <a href="tel:+256772428467" className="sv-btn-ghost"><Phone size={15}/> +256 772 428 467</a>
          </div>
        </div>
      </section>

      <style>{`
        .sv-root {
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
        .sv-container { max-width:1200px; margin:0 auto; }

        /* HERO */
        .sv-hero {
          position:relative; overflow:hidden;
          background:linear-gradient(145deg, #0f1f5c 0%, #1a3fa8 50%, #800020 100%);
          padding:6rem 1.5rem 9rem; text-align:center;
        }
        .sv-blob { position:absolute; border-radius:50%; filter:blur(100px); opacity:0.2; pointer-events:none; }
        .svb1 { width:460px;height:460px; background:radial-gradient(#93c5fd,transparent); top:-160px;right:-80px; }
        .svb2 { width:320px;height:320px; background:radial-gradient(#fca5a5,transparent); bottom:-80px;left:-60px; }
        .sv-hero-inner { position:relative; z-index:2; max-width:760px; margin:0 auto; }
        .sv-eyebrow {
          display:inline-flex; align-items:center; gap:0.6rem;
          font-family:var(--ff-u); font-size:0.72rem; font-weight:700;
          letter-spacing:0.14em; text-transform:uppercase; color:#93c5fd; margin-bottom:1.25rem;
        }
        .sv-dash { display:inline-block; width:28px; height:2px; background:#93c5fd; border-radius:2px; }
        .sv-h1 {
          font-family:var(--ff-u); font-size:clamp(3rem,8vw,5.5rem);
          font-weight:900; color:#fff; line-height:1.05; letter-spacing:0.02em; margin:0 0 1rem;
        }
        .sv-h1 em { color:#93c5fd; font-style:normal; }
        .sv-sub { font-family:var(--ff-s); font-size:1.05rem; color:#bfdbfe; max-width:600px; margin:0 auto 2.5rem; line-height:1.75; }
        .sv-hero-stats {
          display:inline-grid; grid-template-columns:repeat(4,1fr); gap:1.5rem;
          padding:1.75rem 2.5rem; background:#ffffff0f; backdrop-filter:blur(12px);
          border:1px solid #ffffff18; border-radius:1.25rem;
        }
        @media(max-width:600px){ .sv-hero-stats{ grid-template-columns:repeat(2,1fr); } }
        .sv-hstat { text-align:center; animation: svUp 0.6s ease var(--si) both; }
        .sv-hstat-v { font-family:var(--ff-s); font-size:2rem; font-weight:800; color:#93c5fd; margin:0 0 0.2rem; }
        .sv-hstat-l { font-family:var(--ff-u); font-size:0.68rem; font-weight:600; color:#bfdbfe; text-transform:uppercase; letter-spacing:0.06em; margin:0; }
        .sv-cut { position:absolute; bottom:-1px; left:0; right:0; height:80px; background:var(--off); clip-path:polygon(0 100%,100% 100%,100% 0); }
        @keyframes svUp { from{opacity:0;transform:translateY(20px);} to{opacity:1;transform:none;} }

        /* BODY */
        .sv-body { background:var(--off); padding:5rem 1.5rem; }
        .sv-section-header { text-align:center; margin-bottom:3rem; }
        .sv-eyebrow-dark {
          display:inline-block; font-family:var(--ff-u); font-size:0.7rem; font-weight:700;
          letter-spacing:0.14em; text-transform:uppercase; color:var(--blue); margin-bottom:0.5rem;
        }
        .sv-section-h2 { font-family:var(--ff-s); font-size:clamp(1.8rem,4vw,2.8rem); font-weight:800; color:var(--navy); margin:0 0 0.75rem; }
        .sv-section-p  { font-family:var(--ff-s); font-size:0.95rem; color:var(--slate); max-width:560px; margin:0 auto; line-height:1.75; }

        /* GRID */
        .sv-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:1rem; }
        @media(max-width:1024px){ .sv-grid{ grid-template-columns:repeat(2,1fr); } }
        @media(max-width:600px) { .sv-grid{ grid-template-columns:1fr; } }

        .sv-card {
          background:var(--white); border:1.5px solid var(--border);
          border-radius:0.85rem; overflow:hidden;
          transition:border-color 0.2s, box-shadow 0.2s;
          animation: svUp 0.5s ease var(--si) both;
        }
        .sv-card:hover, .sv-card-open { border-color:var(--sc); box-shadow:0 4px 20px color-mix(in srgb, var(--sc) 15%, transparent); }
        .sv-card-top {
          display:flex; align-items:center; gap:0.75rem;
          padding:1rem 1.1rem; cursor:pointer;
        }
        .sv-card-icon {
          width:40px; height:40px; border-radius:0.6rem; flex-shrink:0;
          background:var(--blue-l); color:var(--sc);
          display:grid; place-items:center;
          transition:background 0.2s, color 0.2s;
        }
        .sv-card:hover .sv-card-icon, .sv-card-open .sv-card-icon { background:var(--sc); color:#fff; }
        .sv-card-title { font-family:var(--ff-u); font-size:0.82rem; font-weight:700; color:var(--navy); flex:1; margin:0; line-height:1.35; }
        .sv-card-toggle { background:none; border:none; cursor:pointer; color:var(--slate); padding:0.25rem; flex-shrink:0; }
        .sv-chev { transition:transform 0.25s; }
        .sv-chev-open { transform:rotate(180deg); color:var(--blue); }

        .sv-card-body { max-height:0; overflow:hidden; transition:max-height 0.35s ease; }
        .sv-body-open  { max-height:200px; }
        .sv-card-desc { font-family:var(--ff-s); font-size:0.82rem; color:var(--slate); line-height:1.65; padding:0 1.1rem 0.75rem; margin:0; border-top:1px solid var(--border); padding-top:0.75rem; }
        .sv-card-cta {
          display:inline-flex; align-items:center; gap:0.35rem;
          font-family:var(--ff-u); font-size:0.75rem; font-weight:700;
          color:var(--blue); text-decoration:none; margin:0 1.1rem 1rem;
          transition:gap 0.2s;
        }
        .sv-card-cta:hover { gap:0.6rem; }

        /* WHY */
        .sv-why { background:linear-gradient(145deg, #1a3fa8 0%, #800020 100%); padding:5rem 1.5rem; }
        .sv-why-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:1.5rem; }
        @media(max-width:900px){ .sv-why-grid{ grid-template-columns:repeat(2,1fr); } }
        @media(max-width:500px){ .sv-why-grid{ grid-template-columns:1fr; } }
        .sv-why-card {
          background:#ffffff10; border:1px solid #ffffff18; border-radius:1rem;
          padding:1.75rem 1.25rem; text-align:center;
          animation: svUp 0.5s ease var(--wi) both;
          transition:background 0.2s;
        }
        .sv-why-card:hover { background:#ffffff18; }
        .sv-why-icon { width:48px;height:48px; border-radius:0.75rem; background:#ffffff15; color:#93c5fd; display:grid; place-items:center; margin:0 auto 1rem; }
        .sv-why-title { font-family:var(--ff-u); font-size:0.88rem; font-weight:700; color:#fff; margin:0 0 0.5rem; }
        .sv-why-desc  { font-family:var(--ff-u); font-size:0.75rem; color:#bfdbfe; margin:0; line-height:1.6; }

        /* CTA */
        .sv-cta { background:var(--off); padding:4rem 1.5rem; border-top:1.5px solid var(--border); }
        .sv-cta-inner { display:flex; align-items:center; justify-content:space-between; gap:2rem; flex-wrap:wrap; }
        .sv-cta-h2  { font-family:var(--ff-s); font-size:1.8rem; font-weight:800; color:var(--navy); margin:0 0 0.4rem; }
        .sv-cta-sub { font-family:var(--ff-s); font-size:0.9rem; color:var(--slate); margin:0; }
        .sv-cta-btns { display:flex; gap:0.85rem; flex-wrap:wrap; flex-shrink:0; }
        .sv-btn-primary {
          display:inline-flex; align-items:center; gap:0.4rem;
          background:linear-gradient(135deg, var(--blue), var(--maroon)); color:#fff;
          font-family:var(--ff-u); font-size:0.88rem; font-weight:700;
          padding:0.8rem 1.75rem; border-radius:0.75rem; text-decoration:none;
          transition:all 0.2s; box-shadow:0 4px 16px #1a3fa840;
        }
        .sv-btn-primary:hover { transform:translateY(-2px); box-shadow:0 8px 24px #80002040; }
        .sv-btn-ghost {
          display:inline-flex; align-items:center; gap:0.4rem;
          background:transparent; color:var(--navy);
          font-family:var(--ff-u); font-size:0.88rem; font-weight:600;
          padding:0.8rem 1.75rem; border-radius:0.75rem;
          border:1.5px solid var(--border); text-decoration:none; transition:all 0.2s;
        }
        .sv-btn-ghost:hover { border-color:var(--blue); color:var(--blue); background:var(--blue-l); }
      `}</style>
    </main>
  );
}
