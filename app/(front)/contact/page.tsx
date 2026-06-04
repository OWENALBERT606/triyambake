"use client";

import { useEffect } from "react";

export default function ContactPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("active"); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

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
              <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" placeholder="email@example.com" required />
                </div>
                <div className="form-group">
                  <label>Subject</label>
                  <select>
                    <option>Project Inquiry</option>
                    <option>Business Partnership</option>
                    <option>Career Opportunity</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea rows={5} placeholder="How can we help you?"></textarea>
                </div>
                <button type="submit" className="cta-button primary full-width">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
