"use client";

import { useEffect } from "react";

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

const galleryImages = [
  { src: "/assets/project-lines.png",       alt: "Transmission Line Construction" },
  { src: "/assets/project-transformer.png", alt: "Substation Installation" },
  { src: "/assets/project-solar.png",       alt: "Solar Park Execution" },
  { src: "/assets/project-lines.png",       alt: "Rural Electrification" },
  { src: "/assets/project-transformer.png", alt: "Power Distribution" },
  { src: "/assets/hero-bg.png", alt: "Power Distribution" },
  { src: "/assets/project-transformer.png", alt: "Power Distribution" },
  { src: "/assets/hero-composite.png", alt: "Power Distribution" },
  { src: "/assets/img1.jpeg", alt: "Power Distribution" },
  { src: "/assets/img5.jpeg", alt: "Power Distribution" },
  { src: "/assets/img6.jpeg", alt: "Power Distribution" },
  { src: "/assets/img10.jpeg", alt: "Power Distribution" },
  { src: "/assets/img11.jpeg", alt: "Power Distribution" },
  { src: "/assets/img12.jpeg", alt: "Power Distribution" },
  { src: "/assets/img18.jpeg", alt: "Power Distribution" },
  { src: "/assets/img22.jpeg", alt: "Power Distribution" },
  { src: "/assets/img24.jpeg", alt: "Power Distribution" },
  { src: "/assets/img23.jpeg", alt: "Power Distribution" },
];

const sliderImages = [
  "/assets/hero-composite.png",
  "/assets/img13.jpeg",
  "/assets/img21.jpeg",
];

export default function ProjectsPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("active"); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="projects-page">
      {/* Page Header Slider */}
      <section className="page-header-slider">
        <div className="slider">
          {sliderImages.map((img, index) => (
            <div
              key={index}
              className="slide"
              style={{
                backgroundImage: `linear-gradient(rgba(15,23,42,0.85),rgba(15,23,42,0.85)),url(${img})`,
                animationDelay: `${index * 5}s`,
              }}
            />
          ))}
        </div>
        <div className="container hero-content">
          <h1>
            <span className="hero-light">Our</span>{" "}
            <span className="highlight">Projects</span>
          </h1>
          <p className="text-white">A proven track record of engineering excellence across continents.</p>
        </div>
      </section>

      {/* Experience Stats */}
      <section className="section-padding portfolio-section">
        <div className="container">
          <div className="section-header reveal">
            <span className="badge">Our Impact</span>
            <h2 className="section-title center">Project Experience</h2>
            <p className="section-subtitle center">A proven track record of executing complex power and industrial projects across India and Africa.</p>
          </div>
          <div className="experience-stats-grid reveal">
            <div className="experience-stat-card"><span className="stat-value">USD 5.1M+</span><span className="stat-desc">Total Project Value Executed</span></div>
            <div className="experience-stat-card"><span className="stat-value">96+ km</span><span className="stat-desc">33kV Transmission Lines Delivered</span></div>
            <div className="experience-stat-card"><span className="stat-value">International</span><span className="stat-desc">Execution in Africa</span></div>
          </div>
          <div className="experience-content reveal">
            <p className="experience-intro">Triyambake has successfully executed power transmission, solar EPC, and industrial infrastructure projects, including 33kV HT transmission lines, LV &amp; MV power systems, and manufacturing machinery.</p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding surface-bg">
        <div className="container">
          <div className="timeline-container reveal">
            <h3 className="timeline-title center">Detailed Track Record</h3>
            <div className="timeline">
              <TimelineItem year="2025 - 2026" value="USD 760,060.84" tasks={["Design, Supply & Installation of 64 km of 33kV HT Power Line Hardware","Supply, Installation & Training of Industrial Machinery for Transformer Manufacturing Plant","Supply of Clean Energy Cooking Equipment"]} />
              <TimelineItem year="2024 - 2025" value="USD 297,456" tasks={["Design, Supply & Installation of 32 km of 33kV HT Power Line Equipment","Supply, Installation & Training of Industrial Manufacturing Machinery"]} reverse />
              <TimelineItem year="2022 - 2023" value="USD 221,088" tasks={["Design, Supply & Installation of LV & MV Line Materials for 33kV Power Networks","Supply, Installation & Training of Paver Block, Cement Concrete Brick & Industrial Machinery"]} />
              <TimelineItem year="2021 - 2022" value="USD 126,969" tasks={["Design & Supply of LV Line Materials for 33kV Dedicated Evacuation Line","(Kinyara-Hoima Line under UMEME Project)"]} reverse />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding">
        <div className="container">
          <div className="project-gallery reveal">
            <h3 className="gallery-title center">Project Gallery</h3>
            <div className="gallery-grid">
              {galleryImages.map((img, i) => (
                <div key={i} className="gallery-item">
                  <img src={img.src} alt={img.alt} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
