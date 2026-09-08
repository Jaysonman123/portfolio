import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const contactRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-header", {
        y: -30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(".contact-info h3, .contact-info > p, .info-item", {
        x: -50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        delay: 0.2,
      });

      gsap.from(".contact-form-wrapper", {
        x: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.4,
      });
    }, contactRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Submitted:", formData);

    alert("Thank you for reaching out! I will get back to you soon.");

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="contact-section" ref={contactRef}>
      <div className="contact-header">
        <h1>Get In Touch</h1>
        <p className="subtitle">
          Frontend Developer | Let's build something together
        </p>
      </div>

      <div className="contact-container">
        {/* Contact Information */}
        <div className="contact-info">
          <h3>Contact Me</h3>
          <p>
            Have a project in mind or just want to say hello? Feel free to
            contact me through any of the platforms below.
          </p>

          <div className="info-links">
            {/* Email */}
            <a
              href="mailto:jaysonman790@gmail.com"
              className="info-item"
            >
              <span className="info-icon">📧</span>
              <div>
                <strong>Email</strong>
                <p>jaysonman790@gmail.com</p>
              </div>
            </a>

            {/* Phone */}
            <a
              href="tel:+639811954487"
              className="info-item"
            >
              <span className="info-icon">📱</span>
              <div>
                <strong>Phone</strong>
                <p>09811954487</p>
              </div>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/mark.jayson.alicman"
              target="_blank"
              rel="noopener noreferrer"
              className="info-item"
            >
              <span className="info-icon">👥</span>
              <div>
                <strong>Facebook</strong>
                <p>Mark Jayson Alicman</p>
              </div>
            </a>

            {/* Telegram */}
            <a
              href="https://t.me/markjaysonalicman"
              target="_blank"
              rel="noopener noreferrer"
              className="info-item"
            >
              <span className="info-icon">✈️</span>
              <div>
                <strong>Telegram</strong>
                <p>@markjaysonalicman</p>
              </div>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/mj.alicman"
              target="_blank"
              rel="noopener noreferrer"
              className="info-item"
            >
              <span className="info-icon">📸</span>
              <div>
                <strong>Instagram</strong>
                <p>@mj.alicman</p>
              </div>
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form-wrapper">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>

              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>

              <input
                type="email"
                id="email"
                name="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>

              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;