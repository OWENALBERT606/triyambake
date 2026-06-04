"use client";

import { useEffect } from "react";

const clients = [
  { logo: "/assets/clients/eci.png",                                         name: "Election Commission of India" },
  { logo: "/assets/Software_Technology_Parks_of_India_logo (1).jpg",         name: "Software Technology Parks of India" },
  { logo: "/assets/IIT Dehli.png",                                            name: "IIT Delhi" },
  { logo: "/assets/Noida Special Economic Zone.jpg",                          name: "Noida Special Economic Zone" },
  { logo: "/assets/Archaeological_Survey_of_India.png",                       name: "Archaeological Survey of India" },
  { logo: "/assets/MRF-Logo.png",                                             name: "MRF" },
  { logo: "/assets/Calderys.png",                                             name: "Calderys" },
  { logo: "/assets/Asvt_Logo.png",                                            name: "ASWT Industries" },
  { logo: "/assets/Kinyara Sugar.png",                                        name: "Kinyara Sugar Limited" },
  { logo: "/assets/Hoima sugar.jpg",                                          name: "Hoima Sugar Limited" },
  { logo: "/assets/ultimate clean energies.jpeg",                             name: "Ultimate Clean Energies Ltd" },
  { logo: "/assets/Amrest inovative power solutions.jpeg",                    name: "Amrest Innovative Power Solutions" },
  { logo: "/assets/Jharkhand bijli Vitran Nigam ltd.jpeg",                    name: "JBVNL" },
  { logo: "/assets/KEC.jpeg",                                                 name: "KEC International" },
  { logo: "/assets/Kalpataru Projects International LTD.jpeg",                name: "Kalpataru Projects International" },
  { logo: "/assets/Kiryandono Sugar.jpeg",                                    name: "Kiryandongo Sugar" },
  { logo: "/assets/Larsen Turbo.jpeg",                                        name: "Larsen & Toubro" },
  { logo: "/assets/TATA.jpeg",                                                name: "TATA" },
  { logo: "/assets/Voltas.jpeg",                                              name: "Voltas" },
  { logo: "/assets/pci cables.jpeg",                                          name: "PCI Cables" },
  { logo: "/assets/clients/asnt.png",                                         name: "ASNT" },
  { logo: "/assets/clients/govt_india.png",                                   name: "Government of India" },
  { logo: "/assets/hero.png",                                                 name: "Hero" },
  { logo: "/assets/LT.jpeg",                                                  name: "L&T" },
  { logo: "/assets/clients/hoima.jpg",                                        name: "Hoima Sugar" },
  { logo: "/assets/clients/kinyara.png",                                      name: "Kinyara Sugar" },
];

function ClientCard({ logo, name }: { logo: string; name: string }) {
  return (
    <div className="client-card">
      <img src={logo} alt={name} className="client-logo" />
      <span className="client-name">{name}</span>
    </div>
  );
}

export default function ClientelePage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("active"); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="clientele-page">
      {/* Page Header */}
      <section className="page-header" style={{ backgroundImage: `linear-gradient(rgba(15,23,42,0.85),rgba(15,23,42,0.85)),url(/assets/hero-composite.png)` }}>
        <div className="container">
          <h1>Our <span className="highlight">Clientele</span></h1>
          <p>Trusted by governments, global corporations, and industrial leaders.</p>
        </div>
      </section>

      {/* Clientele Grid */}
      <section id="clients" className="section-padding clients-section">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="section-title center">Strategic Partners</h2>
            <p className="section-subtitle center">Our multi-region experience allows us to serve diverse client needs with precision.</p>
          </div>
          <div className="tab-content reveal">
            <div className="client-grid">
              {clients.map((c, i) => <ClientCard key={i} logo={c.logo} name={c.name} />)}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
