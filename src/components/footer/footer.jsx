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