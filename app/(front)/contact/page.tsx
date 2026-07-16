"use client";

import { useEffect, useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "Project Inquiry", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("active"); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setForm({ name: "", email: "", subject: "Project Inquiry", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="contact-page">
      {/* Page Header */}
      <section className="page-header" style={{ backgroundImage: `linear-gradient(rgba(15,23,42,0.85),rgba(15,23,42,0.85)),url(/assets/hero-composite.png)` }}>
        <div className="container">
          <h1>Contact <span className="highlight">Us</span></h1>
          <p>Get in touch with our team for inquiries, partnerships, or project consultations.</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding">
        <div className="container">
          <div className="contact-grid-main">
            <div className="contact-info-panel reveal">
              <h2 className="section-title">Reach Out</h2>
              <p>We are always ready to discuss new opportunities and engineering challenges.</p>
              <div className="contact-methods">
                <div className="method-item">
                  <span className="icon">📧</span>
                  <div className="method-text">
                    <h4>Email</h4>
                    <p>info@triyambake.com</p>
                  </div>
                </div>
                <div className="method-item">
                  <span className="icon">🌐</span>
                  <div className="method-text">
                    <h4>Website</h4>
                    <p>www.triyambake.com</p>
                  </div>
                </div>
                <div className="method-item">
                  <span className="icon">📍</span>
                  <div className="method-text">
                    <h4>Regional Presence</h4>
                    <p>New Delhi, India | Kampala, Uganda</p>
                  </div>
                </div>
              </div>
              <div className="social-links-panel">
                <h4>Follow Us</h4>
                <div className="footer-socials">
                  <a href="#" className="social-icon">IN</a>
                  <a href="#" className="social-icon">TW</a>
                  <a href="#" className="social-icon">FB</a>
                </div>
              </div>
            </div>

            <div className="contact-form-panel reveal">
              {status === "success" ? (
                <div style={{ textAlign: "center", padding: "3rem 1rem" }}>
                  <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>✅</div>
                  <h3 style={{ marginBottom: "0.5rem" }}>Message Sent!</h3>
                  <p style={{ color: "#64748b" }}>Thank you for reaching out. We'll get back to you shortly.</p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="cta-button primary"
                    style={{ marginTop: "1.5rem" }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Full Name</label>
                    <input
                      type="text"
                      placeholder="Your Name"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input
                      type="email"
                      placeholder="email@example.com"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label>Subject</label>
                    <select
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    >
                      <option>Project Inquiry</option>
                      <option>Business Partnership</option>
                      <option>Career Opportunity</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Message</label>
                    <textarea
                      rows={5}
                      placeholder="How can we help you?"
                      required
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                    />
                  </div>
                  {status === "error" && (
                    <p style={{ color: "#ef4444", fontSize: "14px", marginBottom: "1rem" }}>
                      Something went wrong. Please try again or email us directly.
                    </p>
                  )}
                  <button type="submit" className="cta-button primary full-width" disabled={status === "loading"}>
                    {status === "loading" ? "Sending…" : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
