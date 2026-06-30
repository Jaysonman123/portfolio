import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Create a reference container for GSAP scoping
  const contactRef = useRef(null);

  useEffect(() => {
    // Standard setup using GSAP context for safe React cleanup
    let ctx = gsap.context(() => {
      
      // 1. Header reveal (Fade down)
      gsap.from(".contact-header", {
        y: -30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      });

      // 2. Left side items (Staggered slide-in from the left)
      gsap.from(".contact-info h3, .contact-info > p, .info-item", {
        x: -50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        delay: 0.2
      });

      // 3. Right side form wrapper (Slide up and fade in from the right)
      gsap.from(".contact-form-wrapper", {
        x: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.4
      });

    }, contactRef); // Scope selectors to this component only

    return () => ctx.revert(); // Clean up animations on component unmount
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Thank you for reaching out! I will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="contact-section" ref={contactRef}>
      <div className="contact-header">
        <h1>Get In Touch</h1>
        <p className="subtitle">Frontend Developer | Let's build something together</p>
      </div>

      <div className="contact-container">
        {/* Left Side: Contact Info */}
        <div className="contact-info">
          <h3>Chat with me</h3>
          <p>Have a project in mind or just want to say hi? drop a message!</p>
          
          <div className="info-links">
            <a href="mailto:jaysonman790@gmail.com" className="info-item">
              <span className="info-icon">📧</span>
              <div>
                <strong>Email</strong>
                <p>jaysonman790@gmail.com</p>
              </div>
            </a>

            <a href="https://t.me/markjaysonalicman" target="_blank" rel="noopener noreferrer" className="info-item">
              <span className="info-icon">✈️</span>
              <div>
                <strong>Telegram</strong>
                <p>@markjaysonalicman</p>
              </div>
            </a>

            <a href="https://www.facebook.com/mark.jayson.alicman" target="_blank" rel="noopener noreferrer" className="info-item">
              <span className="info-icon">👥</span>
              <div>
                <strong>Facebook</strong>
                <p>Mark Jayson Alicman</p>
              </div>
            </a>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="contact-form-wrapper">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Tell me about your project..."
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;