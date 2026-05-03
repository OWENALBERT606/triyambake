"use client";

import { useEffect, useRef, useState } from "react";
import {
  Scan,
  Baby,
  Scissors,
  Stethoscope,
  Users,
  FlaskConical,
  ScanLine,
  Waves,
} from "lucide-react";

const featured = [
  {
    icon: Scan,
    title: "Radiology",
    tag: "Imaging & Diagnostics",
    description:
      "Accurate diagnostic imaging including ultrasound scans for obstetric, abdominal, and pelvic assessments — with prompt same-day reporting to guide your treatment.",
    stats: ["Ultrasound scans", "Same-day reporting"],
    color: "#1a3fa8",
    bg: "#eff3ff",
    border: "#bfdbfe",
  },
  {
    icon: Baby,
    title: "Obstetrics",
    tag: "Maternity & Birth",
    description:
      "Comprehensive maternity care from first antenatal visit through safe delivery and postnatal support — with experienced midwives and obstetricians available around the clock.",
    stats: ["24/7 maternity unit", "Safe deliveries"],
    color: "#800020",
    bg: "#fff0f3",
    border: "#fecdd3",
  },
  {
    icon: Scissors,
    title: "Surgery",
    tag: "Surgical Services",
    description:
      "Minor and major surgical operations performed by experienced surgeons in a fully equipped theatre — ensuring patient safety and effective outcomes at every stage.",
    stats: ["Minor & major ops", "Experienced surgeons"],
    color: "#1a3fa8",
    bg: "#eff3ff",
    border: "#bfdbfe",
  },
  {
    icon: Stethoscope,
    title: "General Medicine",
    tag: "Primary Care",
    description:
      "Complete outpatient and inpatient care including consultations, chronic disease management, malaria treatment, and wellness services for patients of all ages.",
    stats: ["Walk-ins welcome", "Inpatient admitted"],
    color: "#800020",
    bg: "#fff0f3",
    border: "#fecdd3",
  },
];

const secondary = [
  {
    icon: Users,
    title: "Family Planning & Immunisation",
    desc: "Contraception counselling, family planning, and vaccination services for all ages",
  },
  {
    icon: FlaskConical,
    title: "HIV Testing, Counselling & Screening",
    desc: "Confidential HIV testing, pre- and post-test counselling, and comprehensive health screenings",
  },
  {
    icon: ScanLine,
    title: "CT Scans",
    desc: "Head, chest, abdominal, pelvic, spinal, neck, cardiac, and contrast-enhanced CT scans for precise diagnosis",
  },
  {
    icon: Waves,
    title: "Ultrasound Scans",
    desc: "Obstetric, abdominal, pelvic, renal, thyroid, scrotal, Doppler, and musculoskeletal ultrasound scans",
  },
];

function useInView(threshold = 0.15) {
  const [visible, setVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref: elementRef, visible };
}

export function Services() {
  const { ref: headerRef, visible: headerVisible } = useInView(0.2);
  const { ref: gridRef, visible: gridVisible } = useInView(0.1);
  const { ref: secRef, visible: secVisible } = useInView(0.1);

  return (
    <section className="svc-root">
      {/* ── decorative bg shapes ── */}
      <div className="deco deco-a" />
      <div className="deco deco-b" />

      <div className="svc-inner">
        {/* ══ HEADER ══ */}
        <div
          ref={headerRef}
          className={`svc-header ${headerVisible ? "reveal" : ""}`}
        >
          <span className="svc-eyebrow">
            <span className="eyebrow-line" />
            What We Offer
            <span className="eyebrow-line" />
          </span>
          <h2 className="svc-title">
            World-Class Care,
            <br />
            <em>Every Speciality</em>
          </h2>
          <p className="svc-subtitle">
            From emergency intervention to preventive wellness — our
            multidisciplinary teams deliver evidence-based medicine with human
            warmth.
          </p>
        </div>

        {/* ══ FEATURED CARDS ══ */}
        <div ref={gridRef} className="featured-grid">
          {featured.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className={`feat-card ${gridVisible ? "card-reveal" : ""}`}
                style={
                  {
                    "--delay": `${i * 0.1}s`,
                    "--accent": s.color,
                    "--card-bg": s.bg,
                    "--card-border": s.border,
                  } as React.CSSProperties
                }
              >
                {/* top bar accent */}
                <div className="card-topbar" />

                <div className="card-icon-wrap">
                  <Icon size={26} strokeWidth={1.8} />
                </div>

                <div className="card-tag">{s.tag}</div>
                <h3 className="card-title">{s.title}</h3>
                <p className="card-desc">{s.description}</p>

                <div className="card-stats">
                  {s.stats.map((st) => (
                    <span key={st} className="stat-pill">
                      {st}
                    </span>
                  ))}
                </div>

                <button className="card-cta">
                  Learn more
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 12h14M13 6l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            );
          })}
        </div>

        {/* ══ DIVIDER LABEL ══ */}
        <div className="divider-row">
          <span className="divider-line" />
          <span className="divider-label">More Specialities</span>
          <span className="divider-line" />
        </div>

        {/* ══ SECONDARY GRID ══ */}
        <div ref={secRef} className="secondary-grid">
          {secondary.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className={`sec-card ${secVisible ? "sec-reveal" : ""}`}
                style={{ "--sd": `${i * 0.07}s` } as React.CSSProperties}
              >
                <div className="sec-icon">
                  <Icon size={20} strokeWidth={1.8} />
                </div>
                <div>
                  <p className="sec-title">{s.title}</p>
                  <p className="sec-desc">{s.desc}</p>
                </div>
                <div className="sec-arrow">→</div>
              </div>
            );
          })}
        </div>

        {/* ══ BOTTOM CTA BANNER ══ */}
        <div className="cta-banner">
          <div className="cta-text">
            <p className="cta-heading">Not sure which specialist you need?</p>
            <p className="cta-body">
              Our care navigators will guide you to the right department — free
              of charge.
            </p>
          </div>
          <div className="cta-actions">
            <button className="btn-teal">Book a Consultation</button>
            <button className="btn-outline">Call Us Now</button>
          </div>
        </div>
      </div>

      {/* ══ STYLES ══ */}
      <style>{`
        .svc-root {
          --teal:    #1a3fa8;
          --teal-d:  #1535a0;
          --teal-l:  #eff3ff;
          --navy:    #0f1f5c;
          --slate:   #64748b;
          --border:  #e2e8f0;
          --white:   #ffffff;
          --radius:  1.25rem;
          --fs-body: 'Georgia', 'Charter', serif;
          --fs-ui:   'Trebuchet MS', 'Tahoma', sans-serif;

          position: relative;
          overflow: hidden;
          background: #f8fafc;
          padding: 5rem 1.5rem 4rem;
        }

        /* ── deco blobs ── */
        .deco {
          position: absolute;
          border-radius: 50%;
          filter: blur(90px);
          opacity: 0.12;
          pointer-events: none;
        }
        .deco-a {
          width: 500px; height: 500px;
          background: #1a3fa8;
          top: -100px; right: -120px;
        }
        .deco-b {
          width: 380px; height: 380px;
          background: #800020;
          bottom: 0; left: -80px;
        }

        .svc-inner {
          position: relative;
          z-index: 2;
          max-width: 1280px;
          margin: 0 auto;
        }

        /* ── header ── */
        .svc-header {
          text-align: center;
          margin-bottom: 3.5rem;
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .svc-header.reveal { opacity: 1; transform: none; }

        .svc-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          font-family: var(--fs-ui);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--teal);
          margin-bottom: 1rem;
        }
        .eyebrow-line {
          display: inline-block;
          width: 32px; height: 2px;
          background: var(--teal);
          border-radius: 2px;
        }
        .svc-title {
          font-family: var(--fs-body);
          font-size: clamp(2rem, 4.5vw, 3.2rem);
          font-weight: 800;
          color: var(--navy);
          line-height: 1.15;
          letter-spacing: -0.02em;
          margin: 0 0 1rem;
        }
        .svc-title em {
          font-style: italic;
          color: var(--teal);
        }
        .svc-subtitle {
          font-family: var(--fs-body);
          font-size: 1.05rem;
          color: var(--slate);
          max-width: 540px;
          margin: 0 auto;
          line-height: 1.75;
        }

        /* ── featured grid ── */
        .featured-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.25rem;
          margin-bottom: 2.5rem;
        }
        @media (max-width: 1024px) { .featured-grid { grid-template-columns: repeat(2,1fr); } }
        @media (max-width: 560px)  { .featured-grid { grid-template-columns: 1fr; } }

        /* ── featured card ── */
        .feat-card {
          position: relative;
          background: var(--card-bg);
          border: 1.5px solid var(--card-border);
          border-radius: var(--radius);
          padding: 1.75rem 1.5rem 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          cursor: pointer;
          opacity: 0;
          transform: translateY(32px);
          transition:
            opacity 0.55s ease var(--delay),
            transform 0.55s ease var(--delay),
            box-shadow 0.25s ease,
            border-color 0.25s ease;
        }
        .feat-card.card-reveal { opacity: 1; transform: none; }
        .feat-card:hover {
          box-shadow: 0 4px 16px color-mix(in srgb, var(--accent) 8%, transparent);
          border-color: var(--accent);
        }

        .card-topbar {
          position: absolute;
          top: 0; left: 1.5rem; right: 1.5rem;
          height: 3px;
          background: var(--accent);
          border-radius: 0 0 3px 3px;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.35s ease;
        }
        .feat-card:hover .card-topbar { transform: scaleX(1); }

        .card-icon-wrap {
          width: 52px; height: 52px;
          background: var(--white);
          border: 1.5px solid var(--card-border);
          border-radius: 0.85rem;
          display: grid;
          place-items: center;
          color: var(--accent);
          margin-bottom: 0.25rem;
          transition: background 0.2s;
        }
        .feat-card:hover .card-icon-wrap {
          background: var(--accent);
          color: var(--white);
          border-color: var(--accent);
        }

        .card-tag {
          font-family: var(--fs-ui);
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--accent);
        }
        .card-title {
          font-family: var(--fs-body);
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--navy);
          margin: 0;
        }
        .card-desc {
          font-family: var(--fs-body);
          font-size: 0.84rem;
          color: var(--slate);
          line-height: 1.65;
          margin: 0;
          flex: 1;
        }
        .card-stats {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          margin-top: 0.25rem;
        }
        .stat-pill {
          font-family: var(--fs-ui);
          font-size: 0.68rem;
          font-weight: 600;
          background: var(--white);
          border: 1px solid var(--card-border);
          color: var(--slate);
          padding: 0.22rem 0.65rem;
          border-radius: 99px;
        }
        .card-cta {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-family: var(--fs-ui);
          font-size: 0.78rem;
          font-weight: 700;
          color: var(--accent);
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
          margin-top: 0.5rem;
          transition: gap 0.2s;
        }
        .card-cta:hover { gap: 0.75rem; }

        /* ── divider ── */
        .divider-row {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin: 0.5rem 0 2rem;
        }
        .divider-line {
          flex: 1;
          height: 1px;
          background: var(--border);
        }
        .divider-label {
          font-family: var(--fs-ui);
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--slate);
          white-space: nowrap;
        }

        /* ── secondary grid ── */
        .secondary-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.85rem;
          margin-bottom: 3rem;
        }
        @media (max-width: 560px) { .secondary-grid { grid-template-columns: 1fr; } }

        .sec-card {
          background: var(--white);
          border: 1.5px solid var(--border);
          border-radius: 1rem;
          padding: 1rem 1.1rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          cursor: pointer;
          opacity: 0;
          transform: translateY(20px);
          transition:
            opacity 0.45s ease var(--sd),
            transform 0.45s ease var(--sd),
            border-color 0.2s,
            box-shadow 0.2s;
        }
        .sec-card.sec-reveal { opacity: 1; transform: none; }
        .sec-card:hover {
          border-color: var(--teal);
          box-shadow: 0 2px 8px #1a3fa810;
        }
        .sec-card:hover .sec-icon { background: var(--teal); color: var(--white); }

        .sec-icon {
          width: 42px; height: 42px;
          background: var(--teal-l);
          color: var(--teal);
          border-radius: 0.75rem;
          display: grid;
          place-items: center;
          flex-shrink: 0;
          transition: background 0.2s, color 0.2s;
        }
        .sec-title {
          font-family: var(--fs-ui);
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--navy);
          margin: 0 0 0.15rem;
        }
        .sec-desc {
          font-family: var(--fs-ui);
          font-size: 0.7rem;
          color: var(--slate);
          margin: 0;
          line-height: 1.4;
        }
        .sec-arrow {
          margin-left: auto;
          color: var(--border);
          font-size: 1rem;
          transition: color 0.2s, transform 0.2s;
          flex-shrink: 0;
        }
        .sec-card:hover .sec-arrow { color: var(--teal); transform: translateX(3px); }

        /* ── cta banner ── */
        .cta-banner {
          background: #1a3fa8;
          border-radius: 1.5rem;
          padding: 2.5rem 2.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
          flex-wrap: wrap;
          position: relative;
          overflow: hidden;
        }
        .cta-banner::before {
          display: none;
        }
        .cta-heading {
          font-family: var(--fs-body);
          font-size: 1.3rem;
          font-weight: 700;
          color: #fff;
          margin: 0 0 0.4rem;
        }
        .cta-body {
          font-family: var(--fs-body);
          font-size: 0.9rem;
          color: #94a3b8;
          margin: 0;
        }
        .cta-actions {
          display: flex;
          gap: 0.85rem;
          flex-shrink: 0;
          flex-wrap: wrap;
        }
        .btn-teal {
          background: #800020;
          color: #fff;
          font-family: var(--fs-ui);
          font-size: 0.88rem;
          font-weight: 700;
          border: none;
          padding: 0.75rem 1.75rem;
          border-radius: 0.85rem;
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s;
          box-shadow: 0 2px 10px #80002030;
        }
        .btn-teal:hover { transform: translateY(-2px); box-shadow: 0 4px 20px #80002050; }
        .btn-outline {
          background: transparent;
          color: #fff;
          font-family: var(--fs-ui);
          font-size: 0.88rem;
          font-weight: 600;
          border: 1.5px solid #334155;
          padding: 0.75rem 1.75rem;
          border-radius: 0.85rem;
          cursor: pointer;
          transition: border-color 0.2s, background 0.2s;
        }
        .btn-outline:hover { border-color: #64748b; background: #1e293b; }
      `}</style>
    </section>
  );
}
