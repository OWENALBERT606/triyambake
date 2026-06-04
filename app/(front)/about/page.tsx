"use client";

import { useEffect } from "react";

function CertCard({ title, subtitle, desc }: { title: string; subtitle: string; desc: string }) {
  return (
    <div className="cert-card reveal">
      <div className="cert-icon">📜</div>
      <div className="cert-info">
        <h3>{title}</h3>
        <span className="cert-subtitle">{subtitle}</span>
        <p>{desc}</p>
      </div>
    </div>
  );
}

function TimelineItem({ year, value, tasks, reverse }: { year: string; value: string; tasks: string[]; reverse?: boolean }) {
  return (
    <div className={`timeline-item ${reverse ? "reverse" : ""}`}>
      <div className="timeline-dot"></div>
      <div className="timeline-content">
        <span className="timeline-year">{year}</span>
        <h4 className="timeline-value">Value: {value}</h4>
        <ul className="timeline-tasks">
          {tasks.map((task, i) => <li key={i}>{task}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default function AboutPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("active"); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="about-page">
      {/* Page Header */}
      <section className="page-header" style={{ backgroundImage: `linear-gradient(rgba(15,23,42,0.85),rgba(15,23,42,0.85)),url(/assets/hero-bg-main.jpeg)` }}>
        <div className="container">
          <h1>About <span className="highlight">Triyambake</span></h1>
          <p>Engineers at heart, building infrastructure for the future.</p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="vision" className="section-padding vision-section">
        <div className="container reveal">
          <div className="vision-grid">
            <div className="vision-card">
              <div className="icon">🔭</div>
              <h3>Our Vision</h3>
              <p>To contribute to the delivery of sustainable, reliable, and resilient infrastructure solutions that empower communities and support national development.</p>
            </div>
            <div className="vision-card accent">
              <div className="icon">🎯</div>
              <h3>Our Mission</h3>
              <p>To provide end-to-end, integrated EPC solutions by leveraging advanced technologies, skilled human capital, and a deep understanding of power and infrastructure development.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section id="company" className="section-padding surface-bg">
        <div className="container">
          <div className="about-grid">
            <div className="about-text reveal">
              <h2 className="section-title">THE COMPANY</h2>
              <p>Triyambake is an emerging Engineering, Procurement, and Construction (EPC) company operating in the power and infrastructure sector, with a growing footprint across India and Africa.</p>
              <p>Founded and managed by engineers with extensive on-ground execution experience, the company is built on strong technical foundations, disciplined project management, and adaptability to diverse terrains and operating environments.</p>
              <p>From feasibility studies and system design to procurement, construction, commissioning, and long-term operations, Triyambake delivers end-to-end EPC solutions aligned with sustainable development and energy access goals.</p>
            </div>
            <div className="about-image reveal">
              <div className="image-card">
                <img src="/assets/hero-bg-main.jpeg" alt="Infrastructure" />
                <div className="experience-badge">10+ Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Management */}
      <section id="leadership" className="section-padding leadership-section">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="section-title center">Management Team</h2>
            <p className="section-subtitle center">Led by engineers with extensive on-ground execution experience.</p>
          </div>
          <div className="leadership-content reveal">
            <div className="leadership-main">
              <p>Triyambake is led by a team of experienced professionals with strong backgrounds in power transmission, renewable energy, EPC project execution, and international infrastructure development.</p>
              <p>The leadership team brings together engineering expertise, project management discipline, and cross-border execution experience, enabling the company to deliver complex infrastructure projects across diverse terrains and regulatory environments.</p>
            </div>
            <div className="management-grid">
              <div className="management-strengths-card reveal">
                <h3>Our Management Strengths</h3>
                <ul className="strength-list">
                  <li><span>Extensive experience in Transmission &amp; Distribution (T&amp;D) projects</span></li>
                  <li><span>Hands-on leadership in Solar EPC and Renewable Energy execution</span></li>
                  <li><span>Proven track record in international project delivery (Africa region)</span></li>
                  <li><span>Strong capabilities in engineering, procurement strategy, and site execution</span></li>
                  <li><span>Commitment to quality, safety, and long-term client partnerships</span></li>
                </ul>
              </div>
              <div className="management-focus reveal">
                <div className="focus-item">
                  <h4>Precision &amp; Accountability</h4>
                  <p>The management team is actively involved in technical planning, execution oversight, and risk management.</p>
                </div>
                <div className="focus-item">
                  <h4>Quality Assurance</h4>
                  <p>Every project is delivered with meticulous attention to detail and rigorous quality standards.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="section-padding certifications-section surface-bg">
        <div className="container">
          <div className="section-header reveal">
            <span className="badge">Quality Assurance</span>
            <h2 className="section-title center">Compliance &amp; Certifications</h2>
            <p className="section-subtitle center">Triyambake is committed to maintaining the highest international standards in quality, safety, and environmental management.</p>
          </div>
          <div className="cert-grid reveal">
            <CertCard title="ISO 9001:2015" subtitle="Quality Management Systems" desc="Certified for Engineering, Procurement, and Construction (EPC) of electrical power projects, solar energy, and infrastructure." />
            <CertCard title="ISO 14001:2015" subtitle="Environmental Management Systems" desc="Commitment to minimizing environmental impact and promoting sustainable engineering practices across all operations." />
            <CertCard title="ISO 45001:2018" subtitle="Health & Safety Management" desc="Adherence to rigorous occupational health and safety protocols to ensure a 'Zero Harm' environment for our workforce." />
            <CertCard title="Startup India" subtitle="DIPP Recognition" desc="Recognized as a startup by the Department for Promotion of Industry and Internal Trade, Ministry of Commerce & Industry." />
            <CertCard title="MSME UDYAM" subtitle="Ministry of MSME" desc="Registered under the Ministry of Micro, Small and Medium Enterprises, supporting national industrial growth." />
            <CertCard title="IEC Code" subtitle="Importer-Exporter Code" desc="Registered with the Directorate General of Foreign Trade for international trade and cross-border project execution." />
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section id="milestones" className="section-padding milestones-section">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="section-title center">Project Milestones</h2>
            <p className="section-subtitle center">A journey of engineering excellence and international growth.</p>
          </div>
          <div className="timeline-container reveal">
            <div className="timeline">
              <TimelineItem year="2025 - 2026" value="USD 760,060.84" tasks={["Design, Supply & Installation of 64 km of 33kV HT Power Line Hardware","Supply, Installation & Training of Industrial Machinery for Transformer Manufacturing Plant","Supply of Clean Energy Cooking Equipment"]} />
              <TimelineItem year="2024 - 2025" value="USD 297,456" tasks={["Design, Supply & Installation of 32 km of 33kV HT Power Line Equipment","Supply, Installation & Training of Industrial Manufacturing Machinery"]} reverse />
              <TimelineItem year="2022 - 2023" value="USD 221,088" tasks={["Design, Supply & Installation of LV & MV Line Materials for 33kV Power Networks","Supply, Installation & Training of Paver Block, Cement Concrete Brick & Industrial Machinery"]} />
              <TimelineItem year="2021 - 2022" value="USD 126,969" tasks={["Design & Supply of LV Line Materials for 33kV Dedicated Evacuation Line","(Kinyara-Hoima Line under UMEME Project)"]} reverse />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
