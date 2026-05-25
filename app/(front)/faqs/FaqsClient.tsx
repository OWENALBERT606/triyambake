"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Search, ChevronDown, Calendar, Phone, Mail,
  Clock, Stethoscope, Ambulance, HelpCircle, ArrowRight,
  MapPin, Shield, Baby, FlaskConical,
} from "lucide-react";

const categories = [
  { id: "all",          label: "All Questions",    icon: HelpCircle  },
  { id: "appointments", label: "Appointments",      icon: Calendar    },
  { id: "services",     label: "Services & Care",   icon: Stethoscope },
  { id: "emergency",    label: "Emergency",         icon: Ambulance   },
  { id: "maternity",    label: "Maternity & Child", icon: Baby        },
  { id: "lab",          label: "Lab & Diagnostics", icon: FlaskConical},
  { id: "location",     label: "Location & Hours",  icon: MapPin      },
  { id: "general",      label: "General",           icon: HelpCircle  },
];

const faqs = [
  { id:"a1", cat:"appointments", q:"How do I book an appointment?", a:"You can book by calling us on +256 772 428 453, walking in during working hours, or sending us a message through the Contact page. We will confirm your appointment as soon as possible." },
  { id:"a2", cat:"appointments", q:"Do you accept walk-in patients?", a:"Yes, we accept walk-in patients 24 hours a day, 7 days a week. No appointment needed — our team is always ready to receive you." },
  { id:"a3", cat:"appointments", q:"What should I bring to my appointment?", a:"Please bring a valid ID, any previous medical records or test results relevant to your visit, and your insurance card if applicable. Arriving a few minutes early helps with registration." },
  { id:"a4", cat:"appointments", q:"Can I book for a family member?", a:"Yes. You can book on behalf of a family member, including children and elderly relatives. Please provide their details when booking." },
  { id:"s1", cat:"services", q:"What services does Ggwaatiro Hospital offer?", a:"We offer general outpatient services, inpatient/admission services, antenatal care and maternity, immunization and vaccination, ultrasound/imaging, digitalised dental services, eye specialists, laboratory services, HN/DM clinic, minor & major surgical operations, 24/7 ambulance, general medication, obstetric and gynaecological programs, family planning, palliative care, physiotherapy, and orthopedics." },
  { id:"s2", cat:"services", q:"Do you offer surgical operations?", a:"Yes. We perform both minor and major surgical operations. Our theatre is equipped with modern facilities and staffed by experienced surgeons and anaesthetists." },
  { id:"s3", cat:"services", q:"Do you have dental services?", a:"Yes. We offer digitalised dental services including consultations, extractions, fillings, and other dental procedures." },
  { id:"s4", cat:"services", q:"Do you have eye specialist services?", a:"Yes. Our eye specialists provide consultations, vision assessments, and treatment for various eye conditions." },
  { id:"s5", cat:"services", q:"Do you offer physiotherapy?", a:"Yes. Our physiotherapy department provides rehabilitation services for patients recovering from injuries, surgery, or managing chronic conditions." },
  { id:"e1", cat:"emergency", q:"Is emergency care available 24/7?", a:"Yes. Our emergency unit operates 24 hours a day, 7 days a week. Our team is always ready to respond to any medical emergency." },
  { id:"e2", cat:"emergency", q:"Do you have an ambulance service?", a:"Yes. We operate a 24/7 ambulance service. Call +256 772 428 453 to request emergency transport." },
  { id:"e3", cat:"emergency", q:"What counts as a medical emergency?", a:"Go to emergency immediately for: chest pain, difficulty breathing, severe bleeding, loss of consciousness, stroke symptoms, serious accidents, high fever in infants, or any condition you believe is life-threatening." },
  { id:"m1", cat:"maternity", q:"Do you offer antenatal care?", a:"Yes. We provide comprehensive antenatal care including regular check-ups, ultrasound scans, nutritional guidance, and birth planning throughout your pregnancy." },
  { id:"m2", cat:"maternity", q:"Can I deliver my baby at Ggwaatiro Hospital?", a:"Yes. We have a maternity unit with experienced midwives and obstetricians available around the clock for safe deliveries." },
  { id:"m3", cat:"maternity", q:"Do you offer immunization for children?", a:"Yes. We provide immunization and vaccination services for infants and children following the national immunization schedule." },
  { id:"m4", cat:"maternity", q:"Do you offer family planning services?", a:"Yes. We offer a full range of family planning services including counselling, contraception, and reproductive health consultations." },
  { id:"l1", cat:"lab", q:"What laboratory services do you offer?", a:"Our on-site laboratory provides a wide range of tests including blood tests, urinalysis, malaria tests, HIV tests, blood sugar, cholesterol, liver and kidney function tests, and more." },
  { id:"l2", cat:"lab", q:"Do you offer ultrasound and imaging?", a:"Yes. We have ultrasound scanning and imaging services available for obstetric, abdominal, and other diagnostic purposes." },
  { id:"l3", cat:"lab", q:"How long do lab results take?", a:"Most routine lab results are available within the same day. Some specialised tests may take longer. Our team will advise you on the expected turnaround time." },
  { id:"lo1", cat:"location", q:"Where is Ggwaatiro Hospital located?", a:"We are located in Bweyogerere Ward, Kira Town Council — approximately 7 miles from Kampala City Centre and about 200m off the Kampala–Jinja highway from Bweyogerere trading centre." },
  { id:"lo2", cat:"location", q:"What are your working hours?", a:"We are open 24 hours a day, 7 days a week. You can visit or call us at any time." },
  { id:"lo3", cat:"location", q:"How can I contact the hospital?", a:"Phone: +256 772 428 453 or +256 708 685 381. Email: gwatiro@gmail.com. P.O. Box 2933, Kampala." },
  { id:"g1", cat:"general", q:"How long has Ggwaatiro Hospital been operating?", a:"Ggwaatiro Hospital was founded in 1981. It started as a small dispensary in Kirinya, became a nursing home in Bweyogerere, and was officially recognised as a hospital by the Ministry of Health in 2012." },
  { id:"g2", cat:"general", q:"How many staff does the hospital have?", a:"The hospital has a dedicated team of medical and support staff committed to providing quality healthcare to our patients." },
  { id:"g3", cat:"general", q:"Do you accept insurance?", a:"Yes. We work with several insurance providers. Please contact us directly on +256 772 428 453 to confirm whether your specific insurance plan is accepted." },
  { id:"g4", cat:"general", q:"Is the hospital accessible by public transport?", a:"Yes. The hospital is located along the Kampala–Jinja highway in Bweyogerere, which is well served by taxis and boda bodas from Kampala and surrounding areas." },
];

function FaqItem({ faq, isOpen, onToggle }: { faq: typeof faqs[0]; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className={`fq-item ${isOpen ? "fq-item-open" : ""}`}>
      <button className="fq-q" onClick={onToggle}>
        <span>{faq.q}</span>
        <ChevronDown size={18} className={`fq-chev ${isOpen ? "fq-chev-open" : ""}`} />
      </button>
      <div className={`fq-a-wrap ${isOpen ? "fq-a-open" : ""}`}>
        <p className="fq-a">{faq.a}</p>
      </div>
    </div>
  );
}

export default function FaqsClient() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [search, setSearch] = useState("");
  const [openId, setOpenId] = useState<string | null>(null);

  const filtered = faqs.filter(f => {
    const matchCat = activeCategory === "all" || f.cat === activeCategory;
    const matchSearch = !search || f.q.toLowerCase().includes(search.toLowerCase()) || f.a.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  // JSON-LD FAQ structured data
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a }
    }))
  };

  return (
    <main className="fq-root">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <section className="fq-hero">
        <div className="fq-blob fb1" /><div className="fq-blob fb2" />
        <div className="fq-hero-inner">
          <span className="fq-eyebrow"><span className="fq-dash"/>Help Centre<span className="fq-dash"/></span>
          <h1 className="fq-h1">Frequently Asked<br/><em>Questions</em></h1>
          <p className="fq-sub">Quick answers about our services, location, appointments, and more.</p>
          <div className="fq-search-wrap">
            <Search size={18} className="fq-search-icon" />
            <input type="text" placeholder="Search questions…" value={search}
              onChange={e => { setSearch(e.target.value); setActiveCategory("all"); }} className="fq-search-input" />
            {search && <button className="fq-search-clear" onClick={() => setSearch("")}>✕</button>}
          </div>
          <div className="fq-hero-chips">
            {[
              { icon: HelpCircle, label: `${faqs.length} Questions Answered` },
              { icon: Clock,      label: "Emergency: 24/7" },
              { icon: Phone,      label: "+256 772 428 453" },
              { icon: Shield,     label: "Est. 1981" },
            ].map((c, i) => { const Icon = c.icon; return <div key={c.label} className="fq-chip" style={{"--fi":`${i*0.08}s`} as React.CSSProperties}><Icon size={13}/> {c.label}</div>; })}
          </div>
        </div>
        <div className="fq-cut" />
      </section>

      <section className="fq-body">
        <div className="fq-container fq-layout">
          <aside className="fq-sidebar">
            <p className="fq-sidebar-label">Browse by Topic</p>
            {categories.map(cat => {
              const Icon = cat.icon;
              return (
                <button key={cat.id} className={`fq-cat-btn ${activeCategory === cat.id && !search ? "fq-cat-active" : ""}`}
                  onClick={() => { setActiveCategory(cat.id); setSearch(""); setOpenId(null); }}>
                  <Icon size={15} strokeWidth={1.8}/><span>{cat.label}</span>
                  <span className="fq-cat-count">{cat.id === "all" ? faqs.length : faqs.filter(f => f.cat === cat.id).length}</span>
                </button>
              );
            })}
            <div className="fq-sb-contact">
              <HelpCircle size={20} strokeWidth={1.5} className="fq-sb-icon" />
              <p className="fq-sb-title">Still have questions?</p>
              <p className="fq-sb-sub">Our team is ready to help.</p>
              <Link href="/contact" className="fq-sb-btn">Contact Us <ArrowRight size={13}/></Link>
            </div>
          </aside>

          <div className="fq-list-col">
            <div className="fq-list-header">
              <p className="fq-list-title">
                {search ? `${filtered.length} result${filtered.length !== 1 ? "s" : ""} for "${search}"`
                  : activeCategory === "all" ? "All Questions"
                  : categories.find(c => c.id === activeCategory)?.label}
              </p>
              {(search || activeCategory !== "all") && (
                <button className="fq-list-clear" onClick={() => { setSearch(""); setActiveCategory("all"); }}>Clear filter</button>
              )}
            </div>
            {filtered.length === 0 ? (
              <div className="fq-no-results">
                <HelpCircle size={48} strokeWidth={1}/>
                <p>No questions match your search.</p>
                <button onClick={() => { setSearch(""); setActiveCategory("all"); }}>Browse all questions</button>
              </div>
            ) : (
              <div className="fq-accordion">
                {filtered.map(f => (
                  <FaqItem key={f.id} faq={f} isOpen={openId === f.id} onToggle={() => setOpenId(openId === f.id ? null : f.id)} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="fq-cta">
        <div className="fq-container fq-cta-inner">
          <div>
            <h2 className="fq-cta-h2">Still need help?</h2>
            <p className="fq-cta-sub">Our team is ready to answer any question you have.</p>
          </div>
          <div className="fq-cta-btns">
            <a href="tel:+256772428453" className="fq-btn-primary"><Phone size={15}/> Call Us Now</a>
            <Link href="/contact" className="fq-btn-ghost"><Mail size={15}/> Send a Message</Link>
          </div>
        </div>
      </section>

      <style>{`
        .fq-root{--blue:#1a3fa8;--blue-d:#1535a0;--blue-l:#eff3ff;--maroon:#800020;--maroon-d:#6b001a;--maroon-l:#fff0f3;--navy:#0f1f5c;--slate:#64748b;--border:#e2e8f0;--white:#ffffff;--off:#f8fafc;--ff-s:'Georgia','Charter',serif;--ff-u:'Trebuchet MS','Tahoma',sans-serif;overflow-x:hidden;}
        .fq-container{max-width:1200px;margin:0 auto;}
        .fq-hero{position:relative;overflow:hidden;background:linear-gradient(145deg,#0f1f5c 0%,#1a3fa8 50%,#800020 100%);padding:6rem 1.5rem 9rem;text-align:center;}
        .fq-blob{position:absolute;border-radius:50%;filter:blur(100px);opacity:0.2;pointer-events:none;}
        .fb1{width:460px;height:460px;background:radial-gradient(#93c5fd,transparent);top:-160px;right:-80px;}
        .fb2{width:320px;height:320px;background:radial-gradient(#fca5a5,transparent);bottom:-80px;left:-60px;}
        .fq-hero-inner{position:relative;z-index:2;max-width:760px;margin:0 auto;}
        .fq-eyebrow{display:inline-flex;align-items:center;gap:0.6rem;font-family:var(--ff-u);font-size:0.72rem;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:#93c5fd;margin-bottom:1.25rem;}
        .fq-dash{display:inline-block;width:28px;height:2px;background:#93c5fd;border-radius:2px;}
        .fq-h1{font-family:var(--ff-s);font-size:clamp(2.8rem,7vw,4.5rem);font-weight:900;color:#fff;line-height:1.1;letter-spacing:-0.03em;margin:0 0 1rem;}
        .fq-h1 em{color:#93c5fd;font-style:italic;}
        .fq-sub{font-family:var(--ff-s);font-size:1.05rem;color:#bfdbfe;max-width:560px;margin:0 auto 2.5rem;line-height:1.75;}
        .fq-search-wrap{position:relative;max-width:560px;margin:0 auto 2rem;display:flex;align-items:center;}
        .fq-search-icon{position:absolute;left:1rem;color:#93c5fd;flex-shrink:0;}
        .fq-search-input{width:100%;padding:0.9rem 3rem 0.9rem 2.75rem;border:1.5px solid #ffffff25;border-radius:0.85rem;background:#ffffff12;backdrop-filter:blur(8px);font-family:var(--ff-u);font-size:0.9rem;color:#fff;outline:none;transition:border-color 0.2s;}
        .fq-search-input::placeholder{color:#93c5fd99;}
        .fq-search-input:focus{border-color:#93c5fd;}
        .fq-search-clear{position:absolute;right:1rem;background:none;border:none;color:#93c5fd;cursor:pointer;font-size:0.8rem;}
        .fq-hero-chips{display:flex;flex-wrap:wrap;justify-content:center;gap:0.6rem;}
        .fq-chip{display:inline-flex;align-items:center;gap:0.4rem;background:#ffffff12;border:1px solid #ffffff20;font-family:var(--ff-u);font-size:0.72rem;font-weight:600;color:#bfdbfe;padding:0.4rem 0.9rem;border-radius:99px;animation:fqUp 0.5s ease var(--fi) both;}
        .fq-cut{position:absolute;bottom:-1px;left:0;right:0;height:80px;background:var(--off);clip-path:polygon(0 100%,100% 100%,100% 0);}
        @keyframes fqUp{from{opacity:0;transform:translateY(20px);}to{opacity:1;transform:none;}}
        .fq-body{background:var(--off);padding:5rem 1.5rem;}
        .fq-layout{display:grid;grid-template-columns:260px 1fr;gap:2.5rem;align-items:start;}
        @media(max-width:900px){.fq-layout{grid-template-columns:1fr;}}
        .fq-sidebar{background:var(--white);border-radius:1rem;padding:1.5rem;border:1.5px solid var(--border);position:sticky;top:1.5rem;display:flex;flex-direction:column;gap:0.35rem;}
        .fq-sidebar-label{font-family:var(--ff-u);font-size:0.68rem;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:var(--slate);margin-bottom:0.5rem;}
        .fq-cat-btn{display:flex;align-items:center;gap:0.6rem;font-family:var(--ff-u);font-size:0.8rem;font-weight:600;color:var(--slate);background:none;border:none;padding:0.6rem 0.75rem;border-radius:0.6rem;cursor:pointer;text-align:left;transition:all 0.18s;width:100%;}
        .fq-cat-btn:hover{background:var(--blue-l);color:var(--blue);}
        .fq-cat-active{background:var(--blue-l)!important;color:var(--blue)!important;font-weight:700!important;}
        .fq-cat-count{margin-left:auto;font-size:0.68rem;font-weight:700;background:var(--border);color:var(--slate);padding:0.1rem 0.5rem;border-radius:99px;}
        .fq-cat-active .fq-cat-count{background:var(--blue);color:#fff;}
        .fq-sb-contact{margin-top:1rem;padding:1.25rem;border-radius:0.85rem;background:linear-gradient(135deg,#1a3fa8,#800020);display:flex;flex-direction:column;align-items:flex-start;gap:0.4rem;}
        .fq-sb-icon{color:#93c5fd;}
        .fq-sb-title{font-family:var(--ff-u);font-size:0.82rem;font-weight:700;color:#fff;margin:0;}
        .fq-sb-sub{font-family:var(--ff-u);font-size:0.7rem;color:#bfdbfe;margin:0;}
        .fq-sb-btn{display:inline-flex;align-items:center;gap:0.35rem;background:#fff;color:var(--blue);font-family:var(--ff-u);font-size:0.75rem;font-weight:700;padding:0.5rem 1rem;border-radius:0.5rem;text-decoration:none;margin-top:0.25rem;transition:background 0.2s;}
        .fq-sb-btn:hover{background:#eff3ff;}
        .fq-list-col{display:flex;flex-direction:column;gap:0;}
        .fq-list-header{display:flex;align-items:center;justify-content:space-between;margin-bottom:1.25rem;flex-wrap:wrap;gap:0.5rem;}
        .fq-list-title{font-family:var(--ff-s);font-size:1.2rem;font-weight:700;color:var(--navy);margin:0;}
        .fq-list-clear{font-family:var(--ff-u);font-size:0.75rem;font-weight:600;color:var(--blue);background:var(--blue-l);border:none;padding:0.35rem 0.85rem;border-radius:99px;cursor:pointer;}
        .fq-accordion{display:flex;flex-direction:column;gap:0.6rem;}
        .fq-item{background:var(--white);border:1.5px solid var(--border);border-radius:0.85rem;overflow:hidden;transition:border-color 0.2s;}
        .fq-item.fq-item-open{border-color:var(--blue);}
        .fq-q{width:100%;display:flex;justify-content:space-between;align-items:center;gap:1rem;padding:1.1rem 1.25rem;background:none;border:none;cursor:pointer;text-align:left;font-family:var(--ff-u);font-size:0.88rem;font-weight:600;color:var(--navy);transition:background 0.18s;}
        .fq-q:hover{background:var(--blue-l);}
        .fq-item-open .fq-q{background:var(--blue-l);color:var(--blue);}
        .fq-chev{color:var(--slate);flex-shrink:0;transition:transform 0.25s;}
        .fq-chev-open{transform:rotate(180deg);color:var(--blue);}
        .fq-a-wrap{max-height:0;overflow:hidden;transition:max-height 0.35s ease;}
        .fq-a-open{max-height:300px;}
        .fq-a{font-family:var(--ff-s);font-size:0.88rem;color:var(--slate);line-height:1.75;padding:1rem 1.25rem 1.25rem;margin:0;border-top:1px solid var(--border);}
        .fq-no-results{display:flex;flex-direction:column;align-items:center;text-align:center;padding:4rem 1rem;gap:1rem;color:var(--slate);}
        .fq-no-results p{font-family:var(--ff-s);font-size:1rem;margin:0;}
        .fq-no-results button{background:var(--blue);color:#fff;font-family:var(--ff-u);font-size:0.82rem;font-weight:700;padding:0.6rem 1.25rem;border:none;border-radius:0.65rem;cursor:pointer;}
        .fq-cta{background:linear-gradient(145deg,#1a3fa8 0%,#800020 100%);padding:4rem 1.5rem;}
        .fq-cta-inner{display:flex;align-items:center;justify-content:space-between;gap:2rem;flex-wrap:wrap;max-width:1200px;margin:0 auto;}
        .fq-cta-h2{font-family:var(--ff-s);font-size:2rem;font-weight:800;color:#fff;margin:0 0 0.4rem;}
        .fq-cta-sub{font-family:var(--ff-s);font-size:0.9rem;color:#bfdbfe;margin:0;}
        .fq-cta-btns{display:flex;gap:0.85rem;flex-wrap:wrap;flex-shrink:0;}
        .fq-btn-primary{display:inline-flex;align-items:center;gap:0.4rem;background:#fff;color:var(--blue);font-family:var(--ff-u);font-size:0.88rem;font-weight:700;padding:0.8rem 1.75rem;border-radius:0.75rem;text-decoration:none;transition:all 0.2s;}
        .fq-btn-primary:hover{background:#eff3ff;transform:translateY(-2px);}
        .fq-btn-ghost{display:inline-flex;align-items:center;gap:0.4rem;background:transparent;color:#fff;font-family:var(--ff-u);font-size:0.88rem;font-weight:600;padding:0.8rem 1.75rem;border-radius:0.75rem;border:1.5px solid #ffffff30;text-decoration:none;transition:all 0.2s;}
        .fq-btn-ghost:hover{background:#ffffff15;border-color:#ffffff60;}
      `}</style>
    </main>
  );
}
