"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle, Shield, ChevronDown } from "lucide-react";

const faqs = [
  { q: "How do I book an appointment?", a: "You can call us on +256 772 428 467, walk in during working hours, or use the contact form on this page. We will confirm your appointment promptly." },
  { q: "Do you accept walk-in patients?", a: "Yes, we accept walk-in patients during our working hours. For emergencies, our team is available 24/7." },
  { q: "Where exactly are you located?", a: "We are located in Bweyogerere Ward, Kira Town Council — about 10 km from Kampala City Centre and 200m off the Kampala–Jinja highway." },
  { q: "What services do you offer?", a: "We offer general outpatient & inpatient services, maternity care, surgery, dental, eye care, laboratory, ultrasound, physiotherapy, and 24/7 ambulance services." },
  { q: "Do you have emergency services?", a: "Yes. Our emergency unit and ambulance service operate 24 hours a day, 7 days a week." },
];

const hours = [
  { day: "Mon – Wed", time: "9:00 AM – 7:00 PM" },
  { day: "Thursday",  time: "9:00 AM – 6:30 PM" },
  { day: "Friday",    time: "9:00 AM – 6:00 PM" },
  { day: "Sat – Sun", time: "Closed (Emergency only)" },
];

function useInView(threshold = 0.1) {
  const [vis, setVis] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  return { ref, vis };
}

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const set = (f: string, v: string) => setForm(p => ({ ...p, [f]: v }));

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim())    e.name    = "Name is required";
    if (!form.email.trim())   e.email   = "Email is required";
    if (!form.message.trim()) e.message = "Message is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSending(true);
    await new Promise(r => setTimeout(r, 1200));
    setSending(false);
    setSubmitted(true);
  };

  return (
    <main className="ct-root">

      {/* ══ HERO ══ */}
      <section className="ct-hero">
        <div className="ct-hero-img-wrap">
          <Image src="/african-american-medic-analyzing-x-ray-scan-diagnosis.jpg" alt="Ggwaatiro Hospital" fill className="object-cover object-center" priority />
          <div className="ct-hero-overlay" />
        </div>
        <div className="ct-hero-content">
          <h1 className="ct-h1">CONTACT US</h1>
          <p className="ct-h1-sub">Questions? Comments? Concerns?</p>
          <p className="ct-h1-sub2">Contact us, we are ready to serve you.</p>
        </div>
        {/* Info bar */}
        <div className="ct-info-bar">
          <div className="ct-info-bar-inner">
            <div className="ct-info-item">
              <Phone size={16} />
              <div>
                <p className="ct-ib-label">Phone</p>
                <a href="tel:+256772428467" className="ct-ib-val">+256 772428467</a>
              </div>
            </div>
            <div className="ct-info-divider" />
            <div className="ct-info-item">
              <Mail size={16} />
              <div>
                <p className="ct-ib-label">Email</p>
                <a href="mailto:gwatiro@gmail.com" className="ct-ib-val">gwatiro@gmail.com</a>
              </div>
            </div>
            <div className="ct-info-divider" />
            <div className="ct-info-item">
              <MapPin size={16} />
              <div>
                <p className="ct-ib-label">Address</p>
                <p className="ct-ib-val">P.O.BOX 2933, KAMPALA</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ FORM + HOURS ══ */}
      <section className="ct-body">
        <div className="ct-container ct-body-grid">

          {/* Left – form */}
          <div className="ct-form-panel">
            <span className="ct-eyebrow">Send a Message</span>
            <h2 className="ct-section-h2">We Read Every Message</h2>
            <p className="ct-section-p">Fill in the form and our team will get back to you as soon as possible.</p>

            {submitted ? (
              <div className="ct-success">
                <CheckCircle size={48} strokeWidth={1.5} className="ct-success-icon" />
                <h3 className="ct-success-title">Message Received!</h3>
                <p className="ct-success-body">Thank you, <strong>{form.name}</strong>. We will respond to <strong>{form.email}</strong> shortly.</p>
                <button className="ct-reset-btn" onClick={() => { setSubmitted(false); setForm({ name:"", email:"", phone:"", message:"" }); }}>
                  Send Another
                </button>
              </div>
            ) : (
              <form className="ct-form" onSubmit={handleSubmit} noValidate>
                <div className="ct-form-row">
                  <div className="ct-field">
                    <label className="ct-label">Full Name <span className="ct-req">*</span></label>
                    <input type="text" placeholder="Your full name" value={form.name}
                      onChange={e => { set("name", e.target.value); setErrors(p => ({...p, name:""})); }}
                      className={`ct-input ${errors.name ? "ct-input-err" : ""}`} />
                    {errors.name && <p className="ct-err"><AlertCircle size={11}/> {errors.name}</p>}
                  </div>
                  <div className="ct-field">
                    <label className="ct-label">Email Address <span className="ct-req">*</span></label>
                    <input type="email" placeholder="you@example.com" value={form.email}
                      onChange={e => { set("email", e.target.value); setErrors(p => ({...p, email:""})); }}
                      className={`ct-input ${errors.email ? "ct-input-err" : ""}`} />
                    {errors.email && <p className="ct-err"><AlertCircle size={11}/> {errors.email}</p>}
                  </div>
                </div>
                <div className="ct-field">
                  <label className="ct-label">Phone Number <span className="ct-opt">(optional)</span></label>
                  <input type="tel" placeholder="+256 700 000 000" value={form.phone}
                    onChange={e => set("phone", e.target.value)} className="ct-input" />
                </div>
                <div className="ct-field">
                  <label className="ct-label">Message <span className="ct-req">*</span></label>
                  <textarea rows={5} placeholder="How can we help you?" value={form.message}
                    onChange={e => { set("message", e.target.value); setErrors(p => ({...p, message:""})); }}
                    className={`ct-input ct-textarea ${errors.message ? "ct-input-err" : ""}`} />
                  {errors.message && <p className="ct-err"><AlertCircle size={11}/> {errors.message}</p>}
                </div>
                <button type="submit" className="ct-submit" disabled={sending}>
                  {sending ? <><span className="ct-spinner"/> Sending…</> : <><Send size={15}/> Send Message</>}
                </button>
                <p className="ct-privacy"><Shield size={12}/> Your information is kept private and secure.</p>
              </form>
            )}
          </div>

          {/* Right – hours + map */}
          <div className="ct-side-panel">
            <div className="ct-hours-card">
              <h3 className="ct-card-title"><Clock size={16}/> Working Hours</h3>
              <div className="ct-hours-list">
                {hours.map(h => (
                  <div key={h.day} className="ct-hours-row">
                    <span className="ct-hours-day">{h.day}</span>
                    <span className="ct-hours-time">{h.time}</span>
                  </div>
                ))}
                <div className="ct-hours-row ct-hours-emerg">
                  <span className="ct-hours-day">Emergency</span>
                  <span className="ct-hours-time">24 / 7</span>
                </div>
              </div>
            </div>

            <div className="ct-map-card">
              <h3 className="ct-card-title"><MapPin size={16}/> Find Us</h3>
              <p className="ct-map-addr">Bweyogerere Ward, Kira Town Council<br/>~10 km from Kampala City Centre<br/>200m off Kampala–Jinja Highway</p>
              <div className="ct-map-embed">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7!2d32.65!3d0.37!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMCczMy4yIk4gMzLCsDM5JzAuMCJF!5e0!3m2!1sen!2sug!4v1"
                  width="100%" height="200" style={{border:0}} allowFullScreen loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade" title="Ggwaatiro Hospital location"
                />
              </div>
              <a href="https://maps.google.com/?q=Bweyogerere+Kira+Town+Council+Uganda" target="_blank" rel="noopener noreferrer" className="ct-directions-btn">
                <MapPin size={14}/> Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══ FAQ ══ */}
      <section className="ct-faq-section">
        <div className="ct-container">
          <div className="ct-faq-header">
            <span className="ct-eyebrow ct-eyebrow-light">Common Questions</span>
            <h2 className="ct-section-h2 ct-h2-light">Frequently Asked</h2>
          </div>
          <div className="ct-faq-list">
            {faqs.map((faq, i) => (
              <div key={i} className={`ct-faq-item ${openFaq === i ? "ct-faq-open" : ""}`}>
                <button className="ct-faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span>{faq.q}</span>
                  <ChevronDown size={18} className={`ct-faq-chev ${openFaq === i ? "ct-chev-open" : ""}`} />
                </button>
                <div className={`ct-faq-a-wrap ${openFaq === i ? "ct-faq-a-open" : ""}`}>
                  <p className="ct-faq-a">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ══ STYLES ══ */}
      <style>{`
        .ct-root {
          --blue:   #1a3fa8;
          --blue-d: #1535a0;
          --blue-l: #eff3ff;
          --navy:   #0f1f5c;
          --slate:  #64748b;
          --border: #e2e8f0;
          --white:  #ffffff;
          --off:    #f8fafc;
          --err:    #ef4444;
          --ff-s:   'Georgia','Charter',serif;
          --ff-u:   'Trebuchet MS','Tahoma',sans-serif;
          overflow-x: hidden;
        }
        .ct-container { max-width:1200px; margin:0 auto; }

        /* ── HERO ── */
        .ct-hero { position:relative; height:520px; overflow:hidden; }
        .ct-hero-img-wrap { position:absolute; inset:0; }
        .ct-hero-overlay {
          position:absolute; inset:0;
          background:linear-gradient(to right, #0f1f5ccc 40%, #0f1f5c55 100%);
        }
        .ct-hero-content {
          position:absolute; bottom:140px; left:0; right:0;
          padding:0 2rem 0 3rem; z-index:2;
        }
        .ct-h1 {
          font-family:var(--ff-u); font-size:clamp(3rem,7vw,5rem);
          font-weight:900; color:#fff; margin:0 0 0.5rem;
          letter-spacing:0.02em;
        }
        .ct-h1-sub  { font-family:var(--ff-s); font-size:1rem; color:#fff; margin:0; font-weight:600; }
        .ct-h1-sub2 { font-family:var(--ff-s); font-size:0.88rem; color:#bfdbfe; margin:0.2rem 0 0; }

        /* info bar */
        .ct-info-bar {
          position:absolute; bottom:0; right:0; z-index:3;
          background:var(--blue); width:60%;
        }
        @media(max-width:768px){ .ct-info-bar{ width:100%; position:relative; } }
        .ct-info-bar-inner {
          display:flex; align-items:center; gap:0;
          padding:1.25rem 2rem; flex-wrap:wrap;
        }
        .ct-info-item { display:flex; align-items:center; gap:0.75rem; flex:1; min-width:160px; color:#fff; }
        .ct-info-item svg { color:#93c5fd; flex-shrink:0; }
        .ct-ib-label { font-family:var(--ff-u); font-size:0.7rem; font-weight:700; color:#93c5fd; text-transform:uppercase; letter-spacing:0.08em; margin:0; }
        .ct-ib-val   { font-family:var(--ff-u); font-size:0.85rem; font-weight:600; color:#fff; margin:0; text-decoration:none; }
        .ct-ib-val:hover { color:#bfdbfe; }
        .ct-info-divider { width:1px; height:40px; background:#ffffff25; margin:0 1.5rem; flex-shrink:0; }
        @media(max-width:600px){ .ct-info-divider{ display:none; } }

        /* ── BODY ── */
        .ct-body { background:var(--off); padding:5rem 1.5rem; }
        .ct-body-grid { display:grid; grid-template-columns:1fr 420px; gap:3rem; align-items:start; }
        @media(max-width:1024px){ .ct-body-grid{ grid-template-columns:1fr; } }

        /* form panel */
        .ct-form-panel { background:var(--white); border-radius:1rem; padding:2.5rem; border:1.5px solid var(--border); box-shadow:0 4px 24px #0000000a; }
        .ct-eyebrow {
          display:inline-block; font-family:var(--ff-u); font-size:0.7rem;
          font-weight:700; letter-spacing:0.14em; text-transform:uppercase;
          color:var(--blue); margin-bottom:0.5rem;
        }
        .ct-eyebrow-light { color:#93c5fd; }
        .ct-section-h2 { font-family:var(--ff-s); font-size:1.8rem; font-weight:800; color:var(--navy); margin:0 0 0.5rem; }
        .ct-h2-light   { color:#fff; }
        .ct-section-p  { font-family:var(--ff-s); font-size:0.9rem; color:var(--slate); margin:0 0 2rem; line-height:1.65; }

        .ct-form { display:flex; flex-direction:column; gap:1.1rem; }
        .ct-form-row { display:grid; grid-template-columns:1fr 1fr; gap:1rem; }
        @media(max-width:600px){ .ct-form-row{ grid-template-columns:1fr; } }
        .ct-field { display:flex; flex-direction:column; gap:0.35rem; }
        .ct-label { font-family:var(--ff-u); font-size:0.73rem; font-weight:700; color:var(--navy); text-transform:uppercase; letter-spacing:0.04em; }
        .ct-req   { color:var(--err); }
        .ct-opt   { color:var(--slate); font-weight:400; text-transform:none; }
        .ct-input {
          padding:0.7rem 0.9rem; border:1.5px solid var(--border);
          border-radius:0.65rem; font-family:var(--ff-u); font-size:0.85rem;
          color:var(--navy); background:var(--off); outline:none;
          transition:border-color 0.2s, box-shadow 0.2s;
        }
        .ct-input:focus { border-color:var(--blue); box-shadow:0 0 0 3px #1a3fa818; }
        .ct-input-err   { border-color:var(--err); }
        .ct-textarea    { resize:none; }
        .ct-err { display:flex; align-items:center; gap:0.3rem; font-family:var(--ff-u); font-size:0.68rem; color:var(--err); margin:0; }
        .ct-submit {
          display:inline-flex; align-items:center; justify-content:center; gap:0.5rem;
          background:var(--blue); color:#fff;
          font-family:var(--ff-u); font-size:0.88rem; font-weight:700;
          padding:0.85rem 2rem; border:none; border-radius:0.75rem;
          cursor:pointer; transition:all 0.2s; box-shadow:0 4px 16px #1a3fa840;
        }
        .ct-submit:hover:not(:disabled) { background:var(--blue-d); transform:translateY(-2px); box-shadow:0 8px 24px #1a3fa860; }
        .ct-submit:disabled { opacity:0.7; cursor:not-allowed; }
        .ct-spinner {
          width:14px; height:14px; border:2px solid #ffffff40;
          border-top-color:#fff; border-radius:50%;
          animation:spin 0.7s linear infinite; display:inline-block;
        }
        @keyframes spin { to{ transform:rotate(360deg); } }
        .ct-privacy { display:flex; align-items:center; gap:0.4rem; font-family:var(--ff-u); font-size:0.68rem; color:var(--slate); margin:0; }

        /* success */
        .ct-success { display:flex; flex-direction:column; align-items:center; text-align:center; padding:3rem 1rem; gap:1rem; }
        .ct-success-icon { color:var(--blue); }
        .ct-success-title { font-family:var(--ff-s); font-size:1.6rem; font-weight:800; color:var(--navy); margin:0; }
        .ct-success-body  { font-family:var(--ff-s); font-size:0.9rem; color:var(--slate); margin:0; line-height:1.65; }
        .ct-reset-btn {
          background:var(--blue); color:#fff; font-family:var(--ff-u); font-size:0.85rem;
          font-weight:700; padding:0.7rem 1.5rem; border:none; border-radius:0.65rem; cursor:pointer;
        }

        /* side panel */
        .ct-side-panel { display:flex; flex-direction:column; gap:1.5rem; }
        .ct-hours-card, .ct-map-card {
          background:var(--white); border-radius:1rem; padding:1.75rem;
          border:1.5px solid var(--border); box-shadow:0 4px 24px #0000000a;
        }
        .ct-card-title {
          display:flex; align-items:center; gap:0.5rem;
          font-family:var(--ff-u); font-size:0.82rem; font-weight:700;
          color:var(--navy); text-transform:uppercase; letter-spacing:0.06em;
          margin:0 0 1.25rem;
        }
        .ct-card-title svg { color:var(--blue); }
        .ct-hours-list { display:flex; flex-direction:column; gap:0; }
        .ct-hours-row {
          display:flex; justify-content:space-between; align-items:center;
          padding:0.6rem 0; border-bottom:1px solid var(--border);
          font-family:var(--ff-u); font-size:0.8rem;
        }
        .ct-hours-row:last-child { border-bottom:none; }
        .ct-hours-day  { color:var(--slate); }
        .ct-hours-time { font-weight:700; color:var(--navy); }
        .ct-hours-emerg .ct-hours-day  { color:var(--blue); font-weight:700; }
        .ct-hours-emerg .ct-hours-time { color:var(--blue); }

        .ct-map-addr { font-family:var(--ff-u); font-size:0.8rem; color:var(--slate); line-height:1.65; margin:0 0 1rem; }
        .ct-map-embed { border-radius:0.65rem; overflow:hidden; margin-bottom:1rem; }
        .ct-directions-btn {
          display:inline-flex; align-items:center; gap:0.4rem;
          background:var(--blue); color:#fff;
          font-family:var(--ff-u); font-size:0.8rem; font-weight:700;
          padding:0.6rem 1.25rem; border-radius:0.65rem; text-decoration:none;
          transition:background 0.2s;
        }
        .ct-directions-btn:hover { background:var(--blue-d); }

        /* ── FAQ ── */
        .ct-faq-section {
          background:linear-gradient(145deg, #0f1f5c 0%, #1a3fa8 100%);
          padding:5rem 1.5rem;
        }
        .ct-faq-header { text-align:center; margin-bottom:3rem; }
        .ct-faq-list { max-width:760px; margin:0 auto; display:flex; flex-direction:column; gap:0.75rem; }
        .ct-faq-item {
          background:#ffffff10; border:1px solid #ffffff20;
          border-radius:0.85rem; overflow:hidden;
          transition:background 0.2s;
        }
        .ct-faq-item.ct-faq-open { background:#ffffff18; }
        .ct-faq-q {
          width:100%; display:flex; justify-content:space-between; align-items:center;
          gap:1rem; padding:1.1rem 1.25rem;
          background:none; border:none; cursor:pointer; text-align:left;
          font-family:var(--ff-u); font-size:0.88rem; font-weight:600; color:#fff;
        }
        .ct-faq-chev { color:#93c5fd; flex-shrink:0; transition:transform 0.25s; }
        .ct-chev-open { transform:rotate(180deg); }
        .ct-faq-a-wrap { max-height:0; overflow:hidden; transition:max-height 0.35s ease; }
        .ct-faq-a-open { max-height:200px; }
        .ct-faq-a { font-family:var(--ff-s); font-size:0.85rem; color:#bfdbfe; line-height:1.7; padding:0 1.25rem 1.25rem; margin:0; }
      `}</style>
    </main>
  );
}
