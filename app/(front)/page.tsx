"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const heroImages = [
  "/assets/bg-images/img1.jpeg",
  "/assets/bg-images/img2.jpeg",
  "/assets/bg-images/img3.jpeg",
  "/assets/bg-images/img4.jpeg",
  "/assets/bg-images/img5.jpeg",
  "/assets/bg-images/img6.jpeg",
  "/assets/bg-images/img7.jpeg",
  "/assets/bg-images/img8.jpeg",
  "/assets/bg-images/img9.jpeg",
  "/assets/bg-images/img10.jpeg",
  "/assets/bg-images/img11.jpeg",
  "/assets/bg-images/img12.jpeg",
  "/assets/bg-images/img13.jpeg",
  "/assets/bg-images/img14.jpeg",
  "/assets/bg-images/img16.jpeg",
  "/assets/bg-images/img17.jpeg",
  "/assets/bg-images/img18.jpeg",
  "/assets/bg-images/img19.jpeg",
  "/assets/bg-images/img20.jpeg",
  "/assets/bg-images/img21.jpeg",
  "/assets/bg-images/img22.jpeg",
  "/assets/bg-images/img23.jpeg",
  "/assets/bg-images/img24.jpeg",
];

const clientLogos = [
  { logo: "/assets/clients/eci.png",                                          name: "Election Commission of India" },
  { logo: "/assets/Software_Technology_Parks_of_India_logo (1).jpg",          name: "Software Technology Parks of India" },
  { logo: "/assets/IIT Dehli.png",                                             name: "IIT Delhi" },
  { logo: "/assets/Noida Special Economic Zone.jpg",                           name: "Noida Special Economic Zone" },
  { logo: "/assets/Archaeological_Survey_of_India.png",                        name: "Archaeological Survey of India" },
  { logo: "/assets/MRF-Logo.png",                                              name: "MRF" },
  { logo: "/assets/Calderys.png",                                              name: "Calderys" },
  { logo: "/assets/Asvt_Logo.png",                                             name: "ASWT Industries" },
  { logo: "/assets/Kinyara Sugar.png",                                         name: "Kinyara Sugar Limited" },
  { logo: "/assets/Hoima sugar.jpg",                                           name: "Hoima Sugar Limited" },
  { logo: "/assets/ultimate clean energies.jpeg",                              name: "Ultimate Clean Energies Ltd" },
  { logo: "/assets/Amrest inovative power solutions.jpeg",                     name: "Amrest Innovative Power Solutions" },
  { logo: "/assets/Jharkhand bijli Vitran Nigam ltd.jpeg",                     name: "JBVNL" },
  { logo: "/assets/KEC.jpeg",                                                  name: "KEC International" },
  { logo: "/assets/Kalpataru Projects International LTD.jpeg",                 name: "Kalpataru Projects International" },
  { logo: "/assets/Kiryandono Sugar.jpeg",                                     name: "Kiryandongo Sugar" },
  { logo: "/assets/Larsen Turbo.jpeg",                                         name: "Larsen & Toubro" },
  { logo: "/assets/TATA.jpeg",                                                 name: "TATA" },
  { logo: "/assets/Voltas.jpeg",                                               name: "Voltas" },
  { logo: "/assets/pci cables.jpeg",                                           name: "PCI Cables" },
  { logo: "/assets/clients/asnt.png",                                          name: "ASNT" },
  { logo: "/assets/clients/govt_india.png",                                    name: "Government of India" },
  { logo: "/assets/hero.png",                                                  name: "Hero" },
  { logo: "/assets/LT.jpeg",                                                   name: "L&T" },
  { logo: "/assets/clients/hoima.jpg",                                         name: "Hoima Sugar" },
  { logo: "/assets/clients/kinyara.png",                                       name: "Kinyara Sugar" },
];

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

function ResourceCard({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div className="resource-card reveal">
      <div className="res-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}

function ServiceCard({ title, desc, link }: { title: string; desc: string; link: string }) {
  return (
    <a href={link} className="service-card reveal">
      <h3>{title}</h3>
      <p>{desc}</p>
      <span className="learn-more">Learn Details →</span>
    </a>
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

function ClientTrainItem({ logo, name }: { logo: string; name: string }) {
  return (
    <div className="client-train-item">
      <img src={logo} alt={name} title={name} className="client-train-logo" />
    </div>
  );
}

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("active"); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Hero */}
      <header id="home" className="hero-section">
        <div style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 1 }}>
          {heroImages.map((img, index) => (
            <div
              key={index}
              style={{
                position: "absolute", inset: 0, width: "100%", height: "100%",
                backgroundSize: "cover", backgroundPosition: "center",
                backgroundImage: `linear-gradient(rgba(15,23,42,0.6),rgba(15,23,42,0.6)),url(${img})`,
                opacity: currentSlide === index ? 1 : 0,
                transition: "opacity 1.5s ease-in-out",
                zIndex: currentSlide === index ? 2 : 1,
              }}
            />
          ))}
        </div>
        <div className="container hero-content reveal">
          <span className="badge">Concept to commissioning</span>
          <h1>Empowering Progress Through <span className="highlight">Engineering Excellence</span></h1>
          <p>Triyambake delivers end-to-end EPC solutions across India and Africa, specializing in power transmission and sustainable infrastructure.</p>
          <div className="hero-actions">
            <a href="#services" className="cta-button primary">Explore Solutions</a>
            <Link href="/contact" className="cta-button secondary">Connect With Us</Link>
          </div>
        </div>
      </header>

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

      {/* About */}
      <section id="about" className="section-padding about-section surface-bg">
        <div className="container">
          <div className="about-grid">
            <div className="about-text reveal">
              <h2 className="section-title">COMPANY</h2>
              <p>Triyambake is an emerging Engineering, Procurement, and Construction (EPC) company operating in the power and infrastructure sector, with a growing footprint across India and Africa.</p>
              <p>Founded and managed by engineers with extensive on-ground execution experience, the company is built on strong technical foundations, disciplined project management, and adaptability to diverse terrains and operating environments.</p>
              <p>From feasibility studies and system design to procurement, construction, commissioning, and long-term operations, Triyambake delivers end-to-end EPC solutions aligned with sustainable development and energy access goals.</p>
            </div>
            <div className="about-image reveal">
              <div className="image-card">
                <img src="/assets/hero-bg.png" alt="Infrastructure" />
                <div className="experience-badge">Engineers at Core</div>
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

      {/* Expertise & Resources */}
      <section id="expertise" className="section-padding expertise-section surface-bg">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="section-title center">Expertise &amp; Resources</h2>
            <p className="section-subtitle center">The foundation of our operational excellence.</p>
          </div>
          <div className="resources-grid">
            <ResourceCard icon="👷" title="People" desc="Highly experienced talent pool of experts in project management, design, and execution." />
            <ResourceCard icon="🤖" title="Technology" desc="Digitalisation, drones for monitoring, and advanced geospatial technologies." />
            <ResourceCard icon="⛓️" title="Supply Chain" desc="Strategic relationships with world-class vendors integrated into our lifecycle." />
          </div>
        </div>
      </section>

      {/* Business Units Overview */}
      <section id="services" className="section-padding services-section">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="section-title center">Business Units</h2>
            <p className="section-subtitle center">Triyambake operates through four strategic business verticals.</p>
          </div>
          <div className="business-units-intro reveal">
            <p>Each business unit is supported by in-house engineering, procurement, quality control, and project management teams, ensuring seamless coordination and execution.</p>
          </div>
          <div className="services-grid">
            <ServiceCard title="Power Transmission & Distribution (T&D) EPC" desc="Comprehensive solutions covering the full project lifecycle from feasibility to commissioning." link="#power-epc" />
            <ServiceCard title="Solar EPC Projects (Renewable Energy)" desc="Turnkey Solar EPC solutions, delivering projects from concept to commissioning and long-term operation." link="#solar-epc" />
            <ServiceCard title="Operation & Maintenance (O&M) Services" desc="Comprehensive O&M services to ensure safe, reliable, and continuous power delivery." link="#om-services" />
            <ServiceCard title="Manufacturer & Exporter" desc="T&D Line, Hardware Fittings & Accessories ensuring quality supply chain integration." link="#hardware-supply" />
          </div>
        </div>
      </section>

      {/* Solar EPC */}
      <section id="solar-epc" className="section-padding solar-detailed surface-bg">
        <div className="container">
          <div className="detailed-grid">
            <div className="detailed-content reveal">
              <span className="badge">Renewable Energy</span>
              <h2 className="section-title">SOLAR EPC PROJECTS</h2>
              <p>Triyambake provides complete Solar EPC solutions, delivering projects from concept to commissioning and long-term operation.</p>
              <p>Solar power enhances energy economics while reducing environmental impact, and our technical expertise ensures optimized plant performance.</p>
              <div className="expertise-categories">
                <div className="expertise-cat">
                  <h4>Engineering</h4>
                  <ul>
                    <li>Solar irradiation and site assessment</li>
                    <li>Electrical and structural design</li>
                    <li>Technology selection (modules, inverters, structures)</li>
                    <li>Grid evacuation planning</li>
                  </ul>
                </div>
                <div className="expertise-cat">
                  <h4>Procurement</h4>
                  <ul>
                    <li>PV modules, inverters, transformers, SCADA</li>
                    <li>Strategic sourcing and vendor management</li>
                    <li>Timely logistics and delivery</li>
                  </ul>
                </div>
                <div className="expertise-cat">
                  <h4>Construction</h4>
                  <ul>
                    <li>Site preparation and civil works</li>
                    <li>Mounting structure and module installation</li>
                    <li>DC/AC cabling, substations</li>
                    <li>Testing and grid synchronization</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="detailed-image reveal">
              <img src="/assets/project-solar.png" alt="Solar EPC" className="rounded-image" />
            </div>
          </div>
        </div>
      </section>

      {/* Power T&D EPC */}
      <section id="power-epc" className="section-padding power-detailed">
        <div className="container">
          <div className="detailed-grid reverse">
            <div className="detailed-image reveal">
              <img src="/assets/project-lines.png" alt="Power T&D" className="rounded-image" />
            </div>
            <div className="detailed-content reveal">
              <span className="badge">Infrastructure</span>
              <h2 className="section-title">POWER TRANSMISSION &amp; DISTRIBUTION (T&amp;D) EPC</h2>
              <p>Triyambake delivers comprehensive Transmission &amp; Distribution EPC solutions covering the full project lifecycle.</p>
              <div className="expertise-categories">
                <div className="expertise-cat">
                  <h4>Feasibility Study &amp; Planning</h4>
                  <ul>
                    <li>Load forecasting and demand analysis</li>
                    <li>Route surveys and selection</li>
                    <li>Environmental and social impact assessments</li>
                  </ul>
                </div>
                <div className="expertise-cat">
                  <h4>Design &amp; Engineering</h4>
                  <ul>
                    <li>Electrical, civil, and structural design</li>
                    <li>Grid code and utility compliance</li>
                    <li>Detailed drawings and documentation</li>
                  </ul>
                </div>
                <div className="expertise-cat">
                  <h4>Procurement &amp; Construction</h4>
                  <ul>
                    <li>Installation of distribution and power transformers</li>
                    <li>Tower erection, pole installation, stringing</li>
                    <li>Substation construction (AIS / GIS)</li>
                  </ul>
                </div>
                <div className="expertise-cat">
                  <h4>Testing &amp; Commissioning</h4>
                  <ul>
                    <li>System validation and energization</li>
                    <li>Integration with existing grids</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* O&M Services */}
      <section id="om-services" className="section-padding om-detailed surface-bg">
        <div className="container">
          <div className="detailed-grid">
            <div className="detailed-content reveal">
              <span className="badge">Operational Excellence</span>
              <h2 className="section-title">OPERATION &amp; MAINTENANCE (O&amp;M) SERVICES</h2>
              <p>Triyambake offers comprehensive O&amp;M services to ensure safe, reliable, and continuous power delivery.</p>
              <div className="expertise-categories">
                <div className="expertise-cat">
                  <h4>Transmission Lines</h4>
                  <ul>
                    <li>Ground and drone-based inspections</li>
                    <li>Tower condition monitoring</li>
                    <li>Conductor sag and tension adjustment</li>
                    <li>Thermographic scanning and vegetation control</li>
                  </ul>
                </div>
                <div className="expertise-cat">
                  <h4>Substations (AIS / GIS)</h4>
                  <ul>
                    <li>Transformer and breaker maintenance</li>
                    <li>Relay testing and calibration</li>
                    <li>Oil testing, filtration, and SF6 monitoring</li>
                  </ul>
                </div>
                <div className="expertise-cat">
                  <h4>Distribution Networks</h4>
                  <ul>
                    <li>Overhead line and pole inspections</li>
                    <li>Cable fault detection and repair</li>
                    <li>Load balancing and network optimization</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="detailed-image reveal">
              <img src="/assets/project-transformer.png" alt="O&M Services" className="rounded-image" />
            </div>
          </div>
        </div>
      </section>

      {/* IT Solutions */}
      <section id="it-solutions" className="section-padding it-detailed">
        <div className="container">
          <div className="detailed-grid reverse">
            <div className="detailed-image reveal">
              <img src="/assets/it-solutions.png" alt="IT Solutions" className="rounded-image" />
            </div>
            <div className="detailed-content reveal">
              <span className="badge">Digital Transformation</span>
              <h2 className="section-title">IT &amp; IT ENABLED SOLUTIONS</h2>
              <p>Triyambake provides cutting-edge IT solutions designed to optimize business processes and enhance operational efficiency through digital integration.</p>
              <div className="expertise-categories">
                <div className="expertise-cat">
                  <h4>Enterprise Solutions</h4>
                  <ul>
                    <li>Custom ERP and CRM development</li>
                    <li>Business process automation</li>
                    <li>Digital workflow integration</li>
                  </ul>
                </div>
                <div className="expertise-cat">
                  <h4>Infrastructure &amp; Cloud</h4>
                  <ul>
                    <li>Cloud migration and management</li>
                    <li>Network security and infrastructure</li>
                    <li>Managed IT services and support</li>
                  </ul>
                </div>
                <div className="expertise-cat">
                  <h4>Data &amp; Intelligence</h4>
                  <ul>
                    <li>Data analytics and visualization</li>
                    <li>Business intelligence reporting</li>
                    <li>AI-driven process optimization</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hardware Supply */}
      <section id="hardware-supply" className="section-padding hardware-detailed surface-bg">
        <div className="container">
          <div className="section-header reveal">
            <span className="badge">Manufacturing &amp; Export</span>
            <h2 className="section-title center">T&amp;D LINE HARDWARE, FITTING &amp; ACCESSORIES</h2>
            <p className="section-subtitle center">Triyambake under the brand name Triyavolt is a leading manufacturer and exporter of overhead line hardware and accessories for the power sector — based in Delhi NCR, India. Exporting to Uganda, Kenya, Tanzania, Rwanda and Burundi.</p>
          </div>
          <div className="detailed-grid reveal" style={{ marginBottom: "4rem" }}>
            <div className="detailed-content">
              <h3 style={{ fontSize: "1.5rem", marginBottom: "1.25rem" }}>About Our Manufacturing Division</h3>
              <p style={{ marginBottom: "1rem" }}>We are among the foremost tension clamps manufacturers and exporters in India. Our product range includes AB cable accessories, Copper earthing electrode, D iron brackets, Guy Grip, HT Stay Set, Mild Steel Cross Arms, PG Clamps, Stainless Steel U bolts, suspension clamps, tension clamps and more.</p>
              <p style={{ marginBottom: "1.5rem" }}>Established in 2019, Triyambake has been consistently doing business worth US$ 1 million annually. All products are duly tested and checked for quality before delivery.</p>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <span className="badge">ISO 9001:2015</span>
                <span className="badge">ISO 14001:2015</span>
                <span className="badge">ISO 45001:2018</span>
              </div>
            </div>
            <div className="detailed-image">
              <img src="/assets/hardware-supply.png" alt="Hardware Supply" className="rounded-image" />
            </div>
          </div>
          <div className="reveal" style={{ marginBottom: "3rem" }}>
            <div className="hardware-products-grid">
              <div className="hardware-product-card">
                <div className="hardware-product-header">AB CABLE ACCESSORIES</div>
                <div className="hardware-product-body">
                  <table className="hardware-spec-table"><tbody>
                    <tr><td>Material</td><td>Metal</td></tr>
                    <tr><td>Thickness</td><td>Standard</td></tr>
                    <tr><td>Application</td><td>Cable Use, Industrial</td></tr>
                    <tr><td>Color</td><td>Silver</td></tr>
                    <tr><td>Country of Origin</td><td>India</td></tr>
                  </tbody></table>
                </div>
              </div>
              <div className="hardware-product-card">
                <div className="hardware-product-header">SUSPENSION CLAMP</div>
                <div className="hardware-product-body">
                  <table className="hardware-spec-table"><tbody>
                    <tr><td>Material</td><td>Aluminium</td></tr>
                    <tr><td>Application</td><td>Suspension Joining</td></tr>
                    <tr><td>Weight</td><td>Vary as per sizes</td></tr>
                    <tr><td>Grade</td><td>Industrial</td></tr>
                    <tr><td>Feature</td><td>Easy to Fit, High Quality</td></tr>
                  </tbody></table>
                </div>
              </div>
              <div className="hardware-product-card">
                <div className="hardware-product-header">FULL PRODUCT RANGE</div>
                <div className="hardware-product-body">
                  <ul className="hardware-range-list">
                    <li>Pin Spindle for Pin Insulator</li>
                    <li>Stay Set &amp; HT Stay Set</li>
                    <li>Earth Rod &amp; Earthing Pipe</li>
                    <li>Cross Arms &amp; Gantry Structures</li>
                    <li>PG Clamps &amp; Connectors</li>
                    <li>D Iron Clamps &amp; D Iron B Rackets</li>
                    <li>Stainless Steel U Bolt</li>
                    <li>Tension Clamp &amp; Guy Grip</li>
                    <li>Copper Earthing Electrode</li>
                    <li>Electrical Fittings &amp; Insulator Pin</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="reveal">
            <h3 style={{ fontSize: "1.4rem", marginBottom: "2rem", textAlign: "center" }}>ISO Certifications</h3>
            <div className="iso-grid">
              <div className="iso-card">
                <div className="iso-card-badge">ISO 9001:2015</div>
                <h4>Quality Management System</h4>
                <ul>
                  <li>Insulators, Clamps, Connectors, Hardware &amp; Accessories for Conductor and Earth Wire</li>
                  <li>Fittings for Distribution Line, Telecom, ABC &amp; Atlas Cable</li>
                  <li>Certified by ICV Assessment Pvt. Ltd.</li>
                </ul>
              </div>
              <div className="iso-card">
                <div className="iso-card-badge">ISO 14001:2015</div>
                <h4>Environmental Management System</h4>
                <ul>
                  <li>Covers full scope of manufacturing and supply operations</li>
                  <li>Demonstrates commitment to environmental responsibility</li>
                  <li>Certified by ICV Assessment Pvt. Ltd.</li>
                </ul>
              </div>
              <div className="iso-card iso-card-accent">
                <div className="iso-card-badge">ISO 45001:2018</div>
                <h4>Occupational Health &amp; Safety</h4>
                <ul>
                  <li>Covers all manufacturing and operational activities</li>
                  <li>Zero-harm commitment across the supply chain</li>
                  <li>Certified by ICV Assessment Pvt. Ltd.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HSE */}
      <section id="hse" className="section-padding hse-section dark-bg">
        <div className="container">
          <div className="section-header reveal">
            <span className="badge secondary">Our Commitment</span>
            <h2 className="section-title center white-text">HEALTH, SAFETY &amp; ENVIRONMENT (HSE)</h2>
            <p className="section-subtitle center white-text">Our HSE framework is integrated into every stage of project planning and execution.</p>
          </div>
          <div className="hse-intro reveal white-text">
            <p>Triyambake maintains a strong commitment to health, safety, and environmental protection across all project sites and operations.</p>
          </div>
          <div className="hse-grid reveal">
            <div className="hse-card">
              <h3>Safety Commitment</h3>
              <ul>
                <li>Implementation of a Zero Harm Safety Culture</li>
                <li>Mandatory site safety inductions and toolbox talks</li>
                <li>Use of certified Personal Protective Equipment (PPE)</li>
                <li>Electrical safety protocols for live-line and high-voltage environments</li>
                <li>Strict adherence to work-at-height and lifting safety procedures</li>
              </ul>
            </div>
            <div className="hse-card">
              <h3>Environmental Responsibility</h3>
              <ul>
                <li>Environmentally responsible route planning and land use practices</li>
                <li>Safe disposal and management of industrial and electrical waste</li>
                <li>Minimizing environmental impact during solar and transmission installations</li>
              </ul>
            </div>
            <div className="hse-card accent">
              <h3>Compliance</h3>
              <p>Our safety and environmental practices align with national regulations and international best practices, ensuring safe working conditions for personnel and minimal impact on surrounding communities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Experience */}
      <section id="portfolio" className="section-padding portfolio-section surface-bg">
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
          <div className="timeline-container reveal">
            <h3 className="timeline-title">Track Record</h3>
            <div className="timeline">
              <TimelineItem year="2025 - 2026" value="USD 760,060.84" tasks={["Design, Supply & Installation of 64 km of 33kV HT Power Line Hardware","Supply, Installation & Training of Industrial Machinery for Transformer Manufacturing Plant","Supply of Clean Energy Cooking Equipment"]} />
              <TimelineItem year="2024 - 2025" value="USD 297,456" tasks={["Design, Supply & Installation of 32 km of 33kV HT Power Line Equipment","Supply, Installation & Training of Industrial Manufacturing Machinery"]} reverse />
              <TimelineItem year="2022 - 2023" value="USD 221,088" tasks={["Design, Supply & Installation of LV & MV Line Materials for 33kV Power Networks","Supply, Installation & Training of Paver Block, Cement Concrete Brick & Industrial Machinery"]} />
              <TimelineItem year="2021 - 2022" value="USD 126,969" tasks={["Design & Supply of LV Line Materials for 33kV Dedicated Evacuation Line","(Kinyara-Hoima Line under UMEME Project)"]} reverse />
            </div>
          </div>
          <div className="project-gallery reveal">
            <h3 className="gallery-title">Project Gallery</h3>
            <div className="gallery-grid">
              <div className="gallery-item"><img src="/assets/project-lines.png" alt="Transmission Line Construction" /></div>
              <div className="gallery-item"><img src="/assets/project-transformer.png" alt="Substation Installation" /></div>
              <div className="gallery-item"><img src="/assets/project-solar.png" alt="Solar Park Execution" /></div>
              <div className="gallery-item"><img src="/assets/hero-bg-main.jpeg" alt="Infrastructure Project" /></div>
              <div className="gallery-item"><img src="/assets/project-lines.png" alt="Rural Electrification" /></div>
              <div className="gallery-item"><img src="/assets/project-transformer.png" alt="Power Distribution" /></div>
            </div>
            <div className="w-full flex justify-center mt-8 mt-4">
              <button className="cta-button primary" onClick={() => window.location.href = "/projects"}>View Full Portfolio</button>
            </div>
          </div>  
        </div>
      </section>

      {/* Clientele Marquee */}
      <section id="clients" className="section-padding clients-section">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="section-title center">Our Clientele</h2>
            <p className="section-subtitle center">Trusted by leading government and industrial bodies.</p>
          </div>
          <div className="tab-content reveal">
            <div className="marquee-container">
              <div className="marquee-group">
                {clientLogos.map((c, i) => <ClientTrainItem key={`g1-${i}`} logo={c.logo} name={c.name} />)}
              </div>
              <div className="marquee-group" aria-hidden="true">
                {clientLogos.map((c, i) => <ClientTrainItem key={`g2-${i}`} logo={c.logo} name={c.name} />)}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
