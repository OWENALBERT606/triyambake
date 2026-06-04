"use client";

import Link from "next/link";

export function Header() {
  return (
    <nav className="navbar">
      <div className="container nav-content">
        <div className="logo-container">
          <Link href="/">
            <img src="/assets/logo.png" alt="Triyambake Logo" className="nav-logo" />
          </Link>
        </div>
        <ul className="nav-links">
          <li><Link href="/">Home</Link></li>
          <li className="dropdown">
            <Link href="/about">About Us</Link>
            <div className="dropdown-content">
              <a href="/about#vision">Mission &amp; Vision</a>
              <a href="/about#leadership">Management</a>
              <a href="/about#certifications">Certifications</a>
              <a href="/about#milestones">Milestones</a>
            </div>
          </li>
          <li className="dropdown">
            <Link href="/business">Business Units</Link>
            <div className="dropdown-content">
              <a href="/business#power-epc">Power Transmission &amp; Distribution</a>
              <a href="/business#solar-epc">Solar PV Projects</a>
              <a href="/business#om-services">Operation &amp; Maintenance Services</a>
              <a href="/business#it-solutions">IT &amp; IT Enabled Solutions</a>
              <a href="/business#hardware-supply">T&amp;D Line Hardware, Fitting &amp; Accessories</a>
            </div>
          </li>
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/clientele">Clientele</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
        <Link href="/contact" className="cta-button nav-cta">Connect With Us</Link>
      </div>
    </nav>
  );
}
