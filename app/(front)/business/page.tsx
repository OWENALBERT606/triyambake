"use client";

import { useEffect } from "react";

function ServiceCard({ title, desc, link }: { title: string; desc: string; link: string }) {
  return (
    <a href={link} className="service-card reveal">
      <h3>{title}</h3>
      <p>{desc}</p>
      <span className="learn-more">Learn Details →</span>
    </a>
  );
}

export default function BusinessPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("active"); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="business-page">
      {/* Page Header */}
      <section className="page-header" style={{ backgroundImage: `linear-gradient(rgba(15,23,42,0.85),rgba(15,23,42,0.85)),url(/assets/hero-bg-main.jpeg)` }}>
        <div className="container">
          <h1>Business <span className="highlight">Units</span></h1>
          <p>Comprehensive EPC solutions across power, infrastructure, and technology.</p>
        </div>
      </section>

      {/* Overview */}
      <section id="services" className="section-padding services-section">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="section-title center">Overview</h2>
            <p className="section-subtitle center">Triyambake operates through four strategic business verticals.</p>
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
              <div className="expertise-categories">
                <div className="expertise-cat"><h4>Engineering</h4><ul><li>Solar irradiation and site assessment</li><li>Electrical and structural design</li><li>Technology selection (modules, inverters, structures)</li><li>Grid evacuation planning</li></ul></div>
                <div className="expertise-cat"><h4>Procurement</h4><ul><li>PV modules, inverters, transformers, SCADA</li><li>Strategic sourcing and vendor management</li><li>Timely logistics and delivery</li></ul></div>
                <div className="expertise-cat"><h4>Construction</h4><ul><li>Site preparation and civil works</li><li>Mounting structure and module installation</li><li>DC/AC cabling, substations</li><li>Testing and grid synchronization</li></ul></div>
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
                <div className="expertise-cat"><h4>Feasibility Study &amp; Planning</h4><ul><li>Load forecasting and demand analysis</li><li>Route surveys and selection</li><li>Environmental and social impact assessments</li></ul></div>
                <div className="expertise-cat"><h4>Design &amp; Engineering</h4><ul><li>Electrical, civil, and structural design</li><li>Grid code and utility compliance</li><li>Detailed drawings and documentation</li></ul></div>
                <div className="expertise-cat"><h4>Procurement &amp; Construction</h4><ul><li>Installation of distribution and power transformers</li><li>Tower erection, pole installation, stringing</li><li>Substation construction (AIS / GIS)</li></ul></div>
                <div className="expertise-cat"><h4>Testing &amp; Commissioning</h4><ul><li>System validation and energization</li><li>Integration with existing grids</li></ul></div>
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
                <div className="expertise-cat"><h4>Transmission Lines</h4><ul><li>Ground and drone-based inspections</li><li>Tower condition monitoring</li><li>Conductor sag and tension adjustment</li><li>Thermographic scanning and vegetation control</li></ul></div>
                <div className="expertise-cat"><h4>Substations (AIS / GIS)</h4><ul><li>Transformer and breaker maintenance</li><li>Relay testing and calibration</li><li>Oil testing, filtration, and SF6 monitoring</li></ul></div>
                <div className="expertise-cat"><h4>Distribution Networks</h4><ul><li>Overhead line and pole inspections</li><li>Cable fault detection and repair</li><li>Load balancing and network optimization</li></ul></div>
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
              <p>Triyambake provides cutting-edge IT solutions designed to optimize business processes and enhance operational efficiency.</p>
              <div className="expertise-categories">
                <div className="expertise-cat"><h4>Enterprise Solutions</h4><ul><li>Custom ERP and CRM development</li><li>Business process automation</li><li>Digital workflow integration</li></ul></div>
                <div className="expertise-cat"><h4>Infrastructure &amp; Cloud</h4><ul><li>Cloud migration and management</li><li>Network security and infrastructure</li><li>Managed IT services and support</li></ul></div>
                <div className="expertise-cat"><h4>Data &amp; Intelligence</h4><ul><li>Data analytics and visualization</li><li>Business intelligence reporting</li><li>AI-driven process optimization</li></ul></div>
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

          <div className="detailed-grid reveal" style={{ marginBottom: "5rem" }}>
            <div className="detailed-content">
              <h3 style={{ fontSize: "1.6rem", marginBottom: "1.5rem" }}>About Our Manufacturing Division</h3>
              <p style={{ marginBottom: "1.2rem" }}>We have accomplished a remarkable position in the industry proffering various top-class products. We are suitably placed among the exceedingly famed tension clamps manufacturers and exporters in India. Products include AB cable accessories, Copper earthing electrode, D iron B rackets, Guy Grip, HT Stay Set, Mild Steel Cross Arm, PG Clamp, Stainless Steel U bolt, suspension clamp, tension clamp and more.</p>
              <p style={{ marginBottom: "1.2rem" }}>Our products like electrical clamps, electrical fittings and insulator pin are also exported to global markets. The quality standards implemented in our manufacturing have proven their worth in the international arena.</p>
              <p>We have been progressing steadily in manufacturing overhead line hardware such as Pin spindle for pin insulator, stay set, hardware fittings for disc insulator, Earth Rod, earthing pipe, cross arms, gantry and substation structures, PG clamps, connectors, D Iron clamps and AB cable accessories.</p>
            </div>
            <div className="detailed-image">
              <img src="/assets/hardware-supply.png" alt="Hardware Supply" className="rounded-image" />
            </div>
          </div>

          <div className="reveal" style={{ marginBottom: "5rem" }}>
            <h3 style={{ fontSize: "1.6rem", marginBottom: "2rem", textAlign: "center" }}>Company Facts</h3>
            <div style={{ overflowX: "auto" }}>
              <table className="hardware-facts-table"><tbody>
                <tr><td>Nature of Business</td><td>Manufacture and Exporter</td></tr>
                <tr><td>Year of Establishment</td><td>2019</td></tr>
                <tr><td>Number of Employees</td><td>10–20</td></tr>
                <tr><td>Annual Turnover</td><td>Rs. 01–06 Crore (US$ 1 Million+)</td></tr>
                <tr><td>IEC</td><td>AAHCT5604M</td></tr>
                <tr><td>GSTN</td><td>07AAHCT5604M1Z1</td></tr>
                <tr><td>CIN</td><td>U74999BR2019PTC043709</td></tr>
                <tr><td>Export Markets</td><td>Uganda, Kenya, Tanzania, Rwanda, Burundi</td></tr>
              </tbody></table>
            </div>
          </div>

          <div className="reveal" style={{ marginBottom: "5rem" }}>
            <h3 style={{ fontSize: "1.6rem", marginBottom: "2rem", textAlign: "center" }}>ISO Certifications</h3>
            <div className="iso-grid">
              <div className="iso-card">
                <div className="iso-card-badge">ISO 9001:2015</div>
                <h4>Quality Management System</h4>
                <ul>
                  <li>Design, Manufacture and Supply of Insulators, Clamps, Connectors, Crossarms, Poles, Hardware and Accessories for Conductor and Earth Wire</li>
                  <li>Fittings for Distribution Line, Telecom, Pole Line, ABC (Aerial Bundled Cables) and Atlas Cable</li>
                  <li>Certified by ICV Assessment Pvt. Ltd.</li>
                </ul>
              </div>
              <div className="iso-card">
                <div className="iso-card-badge">ISO 14001:2015</div>
                <h4>Environmental Management System</h4>
                <ul>
                  <li>Covers the full scope of our manufacturing and supply operations</li>
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

          <div className="reveal">
            <h3 style={{ fontSize: "1.6rem", marginBottom: "3rem", textAlign: "center" }}>Our Products</h3>
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
                    <tr><td>Color</td><td>Silver</td></tr>
                    <tr><td>Feature</td><td>Easy to Fit, High Quality</td></tr>
                    <tr><td>Finishing</td><td>Polished</td></tr>
                  </tbody></table>
                </div>
              </div>
              <div className="hardware-product-card">
                <div className="hardware-product-header">FULL PRODUCT RANGE</div>
                <div className="hardware-product-body">
                  <ul className="hardware-range-list">
                    <li>Pin Spindle for Pin Insulator</li>
                    <li>Stay Set &amp; HT Stay Set</li>
                    <li>Hardware Fittings for Disc Insulator</li>
                    <li>Earth Rod &amp; Earthing Pipe</li>
                    <li>Cross Arms &amp; Mild Steel Cross Arm</li>
                    <li>Gantry &amp; Substation Structures</li>
                    <li>PG Clamps &amp; Connectors</li>
                    <li>D Iron Clamps &amp; D Iron B Rackets</li>
                    <li>Stainless Steel U Bolt</li>
                    <li>Guy Grip</li>
                    <li>Copper Earthing Electrode</li>
                    <li>Tension Clamp</li>
                    <li>Electrical Fittings &amp; Insulator Pin</li>
                  </ul>
                </div>
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
          <div className="hse-grid reveal">
            <div className="hse-card">
              <h3>Safety Commitment</h3>
              <ul>
                <li>Implementation of a Zero Harm Safety Culture</li>
                <li>Mandatory site safety inductions and toolbox talks</li>
                <li>Use of certified Personal Protective Equipment (PPE)</li>
                <li>Electrical safety protocols for high-voltage environments</li>
              </ul>
            </div>
            <div className="hse-card">
              <h3>Environmental Responsibility</h3>
              <ul>
                <li>Environmentally responsible route planning</li>
                <li>Safe disposal and management of industrial waste</li>
                <li>Minimizing environmental impact during installations</li>
              </ul>
            </div>
            <div className="hse-card accent">
              <h3>Compliance</h3>
              <p>Our safety and environmental practices align with national regulations and international best practices.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
