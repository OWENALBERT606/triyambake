import Link from "next/link";

export function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/">
              <img src="/assets/logo.png" alt="Logo" className="footer-logo" />
            </Link>
            <p className="footer-tagline">Simple Impartial... Build the difference!</p>
            <div className="footer-socials">
              <a href="#" className="social-icon">IN</a>
              <a href="#" className="social-icon">TW</a>
              <a href="#" className="social-icon">FB</a>
            </div>
          </div>
          <div className="footer-links-group">
            <h4>Corporate</h4>
            <ul>
              <li><Link href="/about">About Triyambake</Link></li>
              <li><a href="/about#vision">Mission &amp; Vision</a></li>
              <li><a href="/about#leadership">Management</a></li>
              <li><Link href="/clientele">Clientele</Link></li>
            </ul>
          </div>
          <div className="footer-links-group">
            <h4>Business Units</h4>
            <ul>
              <li><a href="/business#solar-epc">Solar EPC Projects</a></li>
              <li><a href="/business#power-epc">Power T&amp;D EPC</a></li>
              <li><a href="/business#om-services">O&amp;M Services</a></li>
              <li><a href="/business#it-solutions">IT Solutions</a></li>
              <li><a href="/business#hardware-supply">Hardware &amp; Fittings</a></li>
              <li><a href="/business#hse">Safety &amp; Environment</a></li>
            </ul>
          </div>
          <div className="footer-contact-info">
            <h4>Get In Touch</h4>
            <p>📧 info@triyambake.com</p>
            <p>🌐 www.triyambake.com</p>
            <p className="presence">NEW DELHI | INDIA</p>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2019 Triyambake</p>
            <div className="legal-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
