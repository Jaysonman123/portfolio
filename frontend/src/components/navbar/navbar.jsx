import { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  useGSAP(() => {
    gsap.from(".nav-links li", {
      y: -20,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power3.out",
    });
  }, [menuOpen]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (item) => {
    if (item.path === "/projects") {
      return (
        location.pathname === "/projects" ||
        location.pathname === "/gallery"
      );
    }
    return location.pathname === item.path;
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      {/* Hamburger Button (Mobile) */}
      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Nav Links */}
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        {navItems.map((item) => (
          <li key={item.path} onClick={closeMenu}>
            <Link
              to={item.path}
              className={isActive(item) ? "active" : ""}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;