import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  const location = useLocation();

  useGSAP(() => {
    gsap.from(".nav-links li", {
      y: -20,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power3.out",
    });
  });

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  // ✅ Active route logic (includes /gallery under Projects)
  const isActive = (item) => {
    if (item.path === "/projects") {
      return (
        location.pathname === "/projects" ||
        location.pathname === "/gallery"
      );
    }

    return location.pathname === item.path;
  };

  return (
    <nav className="navbar">
      <ul className="nav-links">
        {navItems.map((item) => (
          <li key={item.path}>
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