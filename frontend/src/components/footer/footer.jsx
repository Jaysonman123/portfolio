import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-brand">
          <h2>Mark Jayson Alicman</h2>
          <p>
            Programmer | Web Developer | Software Developer
          </p>
        </div>


        <div className="footer-links">
          <h3>Quick Links</h3>

          <a href="#home">
            Home
          </a>

          <a href="#tech-stack">
            Tech Stack
          </a>

          <a href="#certificates">
            Certificates
          </a>
        </div>



        <div className="footer-social">

          <h3>Connect</h3>

          <a
            href="https://www.facebook.com/mark.jayson.alicman"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook - Mark Jayson Alicman
          </a>


          <a
            href="https://t.me/markjaysonalicman"
            target="_blank"
            rel="noopener noreferrer"
          >
            Telegram - Mark Jayson Alicman
          </a>


          <a
            href="https://www.instagram.com/mj.alicman"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram - @mj.alicman
          </a>


          <a href="mailto:jaysonman790@gmail.com">
            Email - jaysonman790@gmail.com
          </a>

        </div>

      </div>


      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} Mark Jayson Alicman.
          All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;