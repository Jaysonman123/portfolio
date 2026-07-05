import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/navbar.jsx";
import Footer from "./components/footer/footer.jsx";

import Home from "./pages/home/home.jsx";
import About from "./pages/about/about.jsx";
import Skills from "./pages/skills/skills.jsx";
import Projects from "./pages/projects/projects.jsx";
import Contact from "./pages/contact/contact.jsx";
import Gallery from "./pages/projects/gallery.jsx"; // ✅ correct path

function App() {
  return (
    <BrowserRouter basename="/portfolio">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;