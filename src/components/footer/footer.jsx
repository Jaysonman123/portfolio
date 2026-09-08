import React from "react";
import "./footer.css";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer-minimalist">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="footer-brand-title">Mark Jayson Alicman</span>
            <p className="footer-tagline">
              Programmer & Software Developer crafting clean, scalable systems.
            </p>
          </div>

          <div className="footer-links">
            <a
              href="https://www.facebook.com/mark.jayson.alicman"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              Facebook
            </a>
            <a
              href="https://t.me/markjaysonalicman"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              Telegram
            </a>
            <a
              href="https://www.instagram.com/mj.alicman"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              Instagram
            </a>
            <a
              href="mailto:jaysonman790@gmail.com"
              className="footer-link"
            >
              Email
            </a>
          </div>

          <button onClick={scrollToTop} className="back-to-top-btn" aria-label="Back to top">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="19" x2="12" y2="5"></line>
              <polyline points="5 12 12 5 19 12"></polyline>
            </svg>
          </button>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Mark Jayson Alicman. All Rights Reserved.</p>
          <p className="location-tag">Sabang, Naic, Cavite, Philippines</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;