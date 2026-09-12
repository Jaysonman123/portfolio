import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./SinglePagePortfolio.css";

gsap.registerPlugin(ScrollTrigger);

// Assets
import bg2 from "../assets/bg2.jpg";
import profile from "../assets/profile.jpg";
import certAsp from "../assets/cert_asp.jpg";
import certIsiteCpp from "../assets/isite_cpp.jpg";
import python3rd from "../assets/python_3rd.jpg";
import isitetop from "../assets/isite_top.jpg";
import treceEgov from "../assets/Trece_Egov.jpg";
import alicmanEgovPdf from "../assets/Alicman_Egov.pdf";

// Eager load documentation and project images
const ojtImagesGlob = import.meta.glob("../assets/ojt/*.{png,jpg,jpeg,svg,webp}", { eager: true });
const ojtGallery = Object.keys(ojtImagesGlob).map((key, index) => ({
  id: index + 1,
  image: ojtImagesGlob[key].default || ojtImagesGlob[key],
}));

const capstoneImagesGlob = import.meta.glob("../assets/capstone/*.{png,jpg,jpeg,svg,webp}", { eager: true });
const capstoneGallery = Object.keys(capstoneImagesGlob).map((key, index) => ({
  id: index + 1,
  image: capstoneImagesGlob[key].default || capstoneImagesGlob[key],
}));

const projectImagesGlob = import.meta.glob(
  "../assets/project/**/images/*.{png,jpg,jpeg,svg,webp}",
  { eager: true }
);

const tickerItems = [
  "Lilyanz Hardware E-Commerce (Live)",
  "Python & AI Systems",
  "React.js Web Applications",
  "Computer Vision & Biometrics",
  "ASP.NET & MySQL Architecture",
  "REST APIs & Backend Engineering",
  "Responsive UI/UX Design",
  "IT Network Infrastructure",
  "Tech Lead & Systems Architecture",
];

function SinglePagePortfolio() {
  const rootRef = useRef(null);
  const tickerRef = useRef(null);

  // Filter states
  const [skillFilter, setSkillFilter] = useState("All");
  const [projectFilter, setProjectFilter] = useState("All");
  const [activeExpTab, setActiveExpTab] = useState("ojt");

  // Expansion toggles
  const [isOjtExpanded, setIsOjtExpanded] = useState(false);
  const [isCapstoneExpanded, setIsCapstoneExpanded] = useState(false);

  // Lightbox / Modal state
  const [lightbox, setLightbox] = useState({
    isOpen: false,
    title: "",
    description: "",
    images: [],
    currentIndex: 0,
  });

  // GSAP animations: Initial load entrance + continuous motion + scroll reveals
  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. PAGE LOAD / RELOAD ENTRANCE TIMELINE
      const introTl = gsap.timeline({
        defaults: { ease: "power3.out" },
        onComplete: () => {
          // Start continuous floating on badge & stat cards after entrance finishes
          gsap.to(".hero-badge", {
            y: -7,
            repeat: -1,
            yoyo: true,
            duration: 2.2,
            ease: "sine.inOut",
          });

          gsap.to(".stat-card", {
            y: -4,
            stagger: {
              each: 0.25,
              repeat: -1,
              yoyo: true,
            },
            duration: 2.6,
            ease: "sine.inOut",
          });
        },
      });

      introTl
        .from(".hero-wallpaper", {
          scale: 1.18,
          opacity: 0,
          duration: 1.2,
          ease: "power2.out",
        })
        .from(
          ".hero-badge",
          {
            y: -25,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.8"
        )
        .from(
          ".hero-title",
          {
            y: 40,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.5"
        )
        .from(
          ".hero-role",
          {
            y: 25,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.5"
        )
        .from(
          ".hero-bio",
          {
            y: 25,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.4"
        )
        .from(
          ".hero-actions .btn-minimal",
          {
            y: 20,
            opacity: 0,
            stagger: 0.1,
            duration: 0.5,
          },
          "-=0.4"
        )
        .from(
          ".hero-stats-glass-box",
          {
            x: 40,
            opacity: 0,
            duration: 0.8,
            ease: "back.out(1.1)",
          },
          "-=0.7"
        )
        .from(
          ".moving-ticker-wrap",
          {
            opacity: 0,
            y: 25,
            duration: 0.8,
          },
          "-=0.4"
        );

      // 2. CONTINUOUS MOVING TICKER
      if (tickerRef.current) {
        gsap.to(tickerRef.current, {
          xPercent: -50,
          repeat: -1,
          duration: 25,
          ease: "none",
        });
      }

      // 3. CONTINUOUS FLOATING / MOVING ELEMENTS
      gsap.to(".hero-wallpaper", {
        scale: 1.08,
        y: -12,
        duration: 12,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".hero-ambient-glow", {
        x: 35,
        y: -20,
        scale: 1.15,
        repeat: -1,
        yoyo: true,
        duration: 5,
        ease: "sine.inOut",
      });

      // 4. CONTINUOUS CHANGING COLOR ANIMATION
      gsap.to(".color-cycle-text", {
        filter: "hue-rotate(360deg)",
        repeat: -1,
        duration: 8,
        ease: "linear",
      });

      gsap.to(".section-divider", {
        filter: "hue-rotate(360deg)",
        repeat: -1,
        duration: 9,
        ease: "linear",
      });

      gsap.to(".color-cycle-glow", {
        filter: "blur(60px) hue-rotate(360deg)",
        repeat: -1,
        duration: 12,
        ease: "linear",
      });

      // 5. SIMPLE SCROLL ENTRANCE ANIMATIONS
      gsap.utils.toArray(".section-header").forEach((header) => {
        gsap.from(header, {
          scrollTrigger: {
            trigger: header,
            start: "top 88%",
            toggleActions: "play none none none",
          },
          y: 25,
          opacity: 0,
          duration: 0.7,
          ease: "power2.out",
        });
      });

      gsap.from(".skill-category-card", {
        scrollTrigger: {
          trigger: ".skills-grid",
          start: "top 85%",
          toggleActions: "play none none none",
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: "power2.out",
      });

      gsap.from(".project-minimal-card", {
        scrollTrigger: {
          trigger: ".projects-grid",
          start: "top 85%",
          toggleActions: "play none none none",
        },
        y: 35,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightbox.isOpen) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextLightboxImage();
      if (e.key === "ArrowLeft") prevLightboxImage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightbox]);

  // Project Folder Mapping
  const folderMapping = {
    8: "lilyanz",
    3: "Incident",
    6: "Mood",
    7: "Qsystem",
    2: "Hris",
    1: "Clearance",
    0: "brgy",
    4: "japan",
    5: "milktea",
  };

  const getProjectImages = (id) => {
    const targetFolder = folderMapping[id];
    if (!targetFolder) return [];

    const targetPattern = `/project/${targetFolder}/images/`.toLowerCase();
    const matches = [];

    for (const path in projectImagesGlob) {
      if (path.toLowerCase().includes(targetPattern)) {
        matches.push(projectImagesGlob[path].default || projectImagesGlob[path]);
      }
    }
    return matches;
  };

  const getProjectThumbnail = (id) => {
    const imgs = getProjectImages(id);
    return imgs.length > 0 ? imgs[0] : "https://via.placeholder.com/600x380/121622/38bdf8?text=Project+Preview";
  };

  // Open Lightbox for Projects
  const openProjectModal = (project) => {
    const imgs = getProjectImages(project.id);
    setLightbox({
      isOpen: true,
      title: project.title,
      description: project.description,
      tag: project.tag,
      liveUrl: project.liveUrl,
      images: imgs.length > 0 ? imgs : [getProjectThumbnail(project.id)],
      currentIndex: 0,
    });
  };

  // Open Lightbox for single image (Certificates, Documentation)
  const openSingleImageModal = (title, imageSrc, description = "") => {
    setLightbox({
      isOpen: true,
      title,
      description,
      tag: "Verification Document",
      images: [imageSrc],
      currentIndex: 0,
    });
  };

  // Open Lightbox for collection (OJT, Capstone)
  const openCollectionModal = (title, images, initialIndex = 0) => {
    setLightbox({
      isOpen: true,
      title,
      description: "Photo Documentation & System Snapshots",
      tag: "Field Documentation",
      images: images.map((item) => item.image),
      currentIndex: initialIndex,
    });
  };

  const closeLightbox = () => {
    setLightbox((prev) => ({ ...prev, isOpen: false }));
  };

  const nextLightboxImage = () => {
    setLightbox((prev) => ({
      ...prev,
      currentIndex: (prev.currentIndex + 1) % prev.images.length,
    }));
  };

  const prevLightboxImage = () => {
    setLightbox((prev) => ({
      ...prev,
      currentIndex: (prev.currentIndex - 1 + prev.images.length) % prev.images.length,
    }));
  };


  // ================= DATA =================
  const techStackData = [
    {
      category: "Programming Languages",
      group: "Languages",
      skills: ["Python", "JavaScript (ES6+)", "Java", "C++", "C", "SQL"],
    },
    {
      category: "Frontend Development",
      group: "Frontend",
      skills: ["React.js", "HTML5", "CSS3", "JavaScript", "Tailwind CSS", "Bootstrap", "GSAP Animations", "Responsive UI"],
    },
    {
      category: "Backend & Database",
      group: "Backend",
      skills: ["ASP.NET", ".NET Framework", "Laravel", "CodeIgniter", "REST API Development", "MySQL", "SQLite", "XAMPP", "CRUD Architectures"],
    },
    {
      category: "Computer Vision & AI",
      group: "AI",
      skills: ["Face Recognition", "Biometric Identification", "Computer Vision", "Real-Time OpenCV", "Incident Profiling Logic", "Spatial Coordinates Analysis"],
    },
    {
      category: "Infrastructure & Networking",
      group: "Infrastructure",
      skills: ["LAN Configuration", "Router & Switch Setup", "Network Topology Design", "Hardware Repair & Maintenance", "Technical Support", "Helpdesk Diagnostics"],
    },
    {
      category: "Engineering & Leadership",
      group: "Core",
      skills: ["Tech Lead & Project Management", "System Analysis & Design", "Database Architecture", "Agile Methodologies", "Git & GitHub Version Control", "Software Testing & QA"],
    },
  ];

  const skillTabs = [
    { id: "All", label: "All Skills" },
    { id: "Languages", label: "Languages" },
    { id: "Frontend", label: "Frontend" },
    { id: "Backend", label: "Backend & DB" },
    { id: "AI", label: "AI & Vision" },
    { id: "Infrastructure", label: "Infrastructure" },
    { id: "Core", label: "Architecture & Lead" },
  ];

  const filteredSkills = skillFilter === "All"
    ? techStackData
    : techStackData.filter((item) => item.group === skillFilter);

  // Projects Data
  const projectsData = [
    {
      id: 8,
      title: "Lilyanz Hardware & Supply E-Commerce",
      category: "Web",
      categoryLabel: "E-Commerce · Live App",
      status: "Current Working Project",
      tag: "React.js · E-Commerce · Live Deployment",
      description: "A production-grade, responsive e-commerce web application engineered for Lilyanz Hardware & Supply in Naic, Cavite. Features real-time catalog search, construction tools & materials categories, dynamic shopping cart calculation, and streamlined online order workflows.",
      metrics: "Live on Vercel · Production E-Commerce",
      liveUrl: "https://lilyanz-ecom.vercel.app/",
      isLive: true,
      isFeatured: true,
    },
    {
      id: 3,
      title: "Incident Profiling with Face Recognition",
      category: "AI",
      categoryLabel: "AI & Computer Vision",
      tag: "Python · OpenCV · AI · Biometrics",
      description: "A high-accuracy desktop security system engineered with Native Python to detect faces in real-time, link identities to localized incident case files, and automate police/barangay safety logs.",
      metrics: "Sub-second biometric match rate",
    },
    {
      id: 6,
      title: "Mood Detection System",
      category: "AI",
      categoryLabel: "Web & AI",
      tag: "React.js · Client AI · Web",
      description: "An interactive web application leveraging client-side facial analysis algorithms to detect user emotions in real-time and visualize mood timeline trends over time.",
      metrics: "Live browser emotion inference",
    },
    {
      id: 7,
      title: "Hospital Queuing System (GEAHM)",
      category: "Enterprise",
      categoryLabel: "Enterprise Healthcare",
      tag: "Healthcare · Queue Module · Database",
      description: "A patient management and queue dispatching system built during OJT at GEAHM Hospital to organize patient department queues, reducing hospital lobby waiting times significantly.",
      metrics: "Deployed in active hospital workflow",
    },
    {
      id: 2,
      title: "GEAHM Hospital HRIS",
      category: "Enterprise",
      categoryLabel: "Enterprise Systems",
      tag: "ASP.NET · MySQL · HR Management",
      description: "A Human Resource Information System created for healthcare personnel to manage digital employee credentials, daily shifts, departments, and administrative leave tracking.",
      metrics: "Centralized staff database",
    },
    {
      id: 1,
      title: "Hospital Clearance Management System",
      category: "Enterprise",
      categoryLabel: "Workflow Automation",
      tag: "Web Framework · Workflow · Database",
      description: "A digital exit and departmental sign-off framework that streamlines approvals between administration, pharmacy, laboratory, and HR departments.",
      metrics: "100% paperless sign-off",
    },
    {
      id: 0,
      title: "Barangay Information Web Portal",
      category: "Web",
      categoryLabel: "Web Portal",
      tag: "HTML5 · CSS3 · JavaScript · Bootstrap",
      description: "A community portal enabling localized residents to query official community announcements, download civic clearance forms, and access administrative records.",
      metrics: "Clean responsive governance portal",
    },
    {
      id: 4,
      title: "Japan Surplus E-Commerce Platform",
      category: "Web",
      categoryLabel: "E-Commerce",
      tag: "HTML5 · CSS3 · JavaScript · UI/UX",
      description: "An inventory showcase and commercial catalog built for browsing imported Japanese surplus goods with filtering, search categorization, and product cards.",
      metrics: "Fast responsive catalog display",
    },
    {
      id: 5,
      title: "POS Milktea Shop Ordering Website",
      category: "Web",
      categoryLabel: "POS & Retail",
      tag: "HTML5 · CSS3 · JavaScript · Bootstrap",
      description: "A modern, responsive beverage menu and order-taking interface crafted for milktea shop operations, featuring dynamic cart calculation and quick category switches.",
      metrics: "Intuitive quick-order workflow",
    },
  ];

  const projectTabs = [
    { id: "All", label: "All Projects" },
    { id: "Live", label: "🔥 Live / Current" },
    { id: "AI", label: "AI & Computer Vision" },
    { id: "Enterprise", label: "Enterprise & Healthcare" },
    { id: "Web", label: "Web Applications" },
  ];

  const filteredProjects = projectFilter === "All"
    ? projectsData
    : projectFilter === "Live"
    ? projectsData.filter((p) => p.isLive)
    : projectsData.filter((p) => p.category === projectFilter);

  // Certificates Data
  const certificatesData = [
    {
      image: certAsp,
      title: "Digital Skills Bootcamp - ASP.NET and MySQL",
      issuer: "Barangay Lapidario · Trece Martires City",
      date: "May 21, 2026",
      desc: "Comprehensive training on building secure web applications with ASP.NET backend architecture and MySQL database relational design.",
    },
    {
      image: certIsiteCpp,
      title: "Certificate of Membership - iSITE C++",
      issuer: "Integrated Society of IT Enthusiasts (iSITE) Inc.",
      date: "Academic Year 2023-2024",
      desc: "Conferred as a bona fide active member of the premiere national IT society. Membership # 2023-04-001184.",
    },
    {
      image: python3rd,
      title: "Top 3 Python Programmer Award",
      issuer: "Cavite State University - Trece Martires City",
      date: "Academic Year 2025",
      desc: "Distinguished as one of the top Python developers across the campus, demonstrating mastery of algorithmic design, data structures, and practical software creation.",
    },
    {
      title: "Egov Hackathon 2026 - Top 30 Finalist",
      issuer: "eGov Philippines · National Hackathon",
      date: "2026",
      desc: "Recognized as a Top 30 Finalist in the national eGov Hackathon 2026, competing against teams nationwide in developing innovative e-governance digital solutions.",
      isPdf: true,
      pdfLink: alicmanEgovPdf,
      image: treceEgov,
    },
  ];

  const visibleOjtImages = isOjtExpanded ? ojtGallery : ojtGallery.slice(0, 6);
  const visibleCapstoneImages = isCapstoneExpanded ? capstoneGallery : capstoneGallery.slice(0, 6);

  return (
    <div className="single-page-root" ref={rootRef}>
      {/* ==========================================================
          1. HERO SECTION (FULL SCREEN & WIDE LAYOUT)
          ========================================================== */}
      <section id="hero" className="hero-section">
        {/* Clearly Visible Wallpaper Background */}
        <div className="hero-wallpaper" style={{ backgroundImage: `url(${bg2})` }}>
          <div className="hero-wallpaper-overlay"></div>
        </div>
        <div className="hero-ambient-glow color-cycle-glow"></div>

        <div className="hero-full-container">
          <div className="hero-left-content">
            <div className="hero-badge">
              <span className="status-dot"></span>
              <span>Available for Full-Stack & Software Roles</span>
            </div>

            <h1 className="hero-title">
              Mark Jayson <span className="gradient-text color-cycle-text">Alicman</span>
            </h1>

            <p className="hero-role">
              Programmer · Full-Stack Web Developer · Software Engineer
            </p>

            <p className="hero-bio">
              I specialize in engineering robust software systems, intuitive web applications, and computer vision
              solutions. Passionate about clean architecture, high-performance code, and solving real-world challenges.
            </p>

            {/* Action Buttons */}
            <div className="hero-actions">
              <a href="#projects" className="btn-minimal btn-primary">
                <span>View Projects</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </a>

              <a href="#experience" className="btn-minimal btn-secondary">
                <span>Experience & OJT</span>
              </a>

              <a href="#contact" className="btn-minimal btn-ghost">
                <span>Contact Me</span>
              </a>
            </div>
          </div>

          {/* Right Column / Quick Highlights Box Filling the Screen */}
          <div className="hero-right-content">
            <div className="hero-stats-glass-box">
              <div className="glass-box-header">
                <span className="glass-indicator"></span>
                <span className="glass-box-title">Key Highlights</span>
              </div>
              <div className="hero-stats-grid">
                <div className="stat-card">
                  <span className="stat-value">9+</span>
                  <span className="stat-label">Deployed Systems</span>
                </div>
                <div className="stat-card">
                  <span className="stat-value">Live</span>
                  <span className="stat-label">Lilyanz E-Commerce</span>
                </div>
                <div className="stat-card">
                  <span className="stat-value">Lead</span>
                  <span className="stat-label">Hospital OJT Tech Lead</span>
                </div>
                <div className="stat-card">
                  <span className="stat-value">Top 3</span>
                  <span className="stat-label">Python Programmer (CvSU)</span>
                </div>
                <div className="stat-card">
                  <span className="stat-value">Top 30</span>
                  <span className="stat-label">Egov Hackathon Finalist</span>
                </div>
              </div>
              <div className="glass-box-footer">
                <span className="mini-tag">Lilyanz E-Com</span>
                <span className="mini-tag">Python & AI</span>
                <span className="mini-tag">React.js</span>
                <span className="mini-tag">ASP.NET</span>
                <span className="mini-tag">MySQL</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================
          CONTINUOUS MOVING TECH BANNER
          ========================================================== */}
      <div className="moving-ticker-wrap">
        <div className="moving-ticker" ref={tickerRef}>
          {tickerItems.concat(tickerItems).map((item, i) => (
            <span key={i} className="ticker-item">
              <span className="ticker-dot color-cycle-text">✦</span>
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ==========================================================
          2. ABOUT SECTION
          ========================================================== */}
      <section id="about" className="section-padding about-section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Biography</span>
            <h2 className="section-title">About Me</h2>
            <div className="section-divider"></div>
          </div>

          <div className="about-grid">
            {/* Left Column: Photo & Quick Facts */}
            <div className="about-photo-wrapper">
              <div className="photo-card">
                <div className="photo-frame">
                  <img src={profile} alt="Mark Jayson Alicman" className="profile-img" />
                </div>
                <div className="photo-meta">
                  <h3>Mark Jayson Alicman</h3>
                  <p>BS in Information Technology (Batch 2025-2026)</p>
                  <span className="meta-institution">Cavite State University - Trece Martires</span>
                </div>
              </div>
            </div>

            {/* Right Column: Narrative & Details */}
            <div className="about-narrative">
              <div className="narrative-card">
                <h3>Crafting Reliable, Purpose-Built Software</h3>
                <p>
                  I am a passionate software developer based in <strong>Sabang, Naic, Cavite</strong>. 
                  My work spans responsive modern web applications, enterprise database systems, 
                  and artificial intelligence algorithms including real-time facial recognition.
                </p>
                <p>
                  I led development teams through challenging real-world environments, serving as 
                  <strong> Tech Lead & Head Developer</strong> during my hospital internship and 
                  <strong> Project Leader</strong> for our native Python incident biometric system.
                </p>

                {/* Personal & Academic Pills */}
                <div className="about-pills-grid">
                  <div className="about-pill-item">
                    <span className="pill-icon">🎓</span>
                    <div>
                      <strong>Degree</strong>
                      <p>Bachelor of Science in Information Technology</p>
                    </div>
                  </div>

                  <div className="about-pill-item">
                    <span className="pill-icon">🏛️</span>
                    <div>
                      <strong>Campus</strong>
                      <p>Cavite State University (CvSU) - Trece Martires</p>
                    </div>
                  </div>

                  <div className="about-pill-item">
                    <span className="pill-icon">📍</span>
                    <div>
                      <strong>Location</strong>
                      <p>Sabang, Naic, Cavite, Philippines</p>
                    </div>
                  </div>

                  <div className="about-pill-item">
                    <span className="pill-icon">🎂</span>
                    <div>
                      <strong>Age & Birthdate</strong>
                      <p>23 Years Old (October 21, 2002)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================
          3. SKILLS SECTION
          ========================================================== */}
      <section id="skills" className="section-padding skills-section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Technical Competencies</span>
            <h2 className="section-title">Skills & Capabilities</h2>
            <div className="section-divider"></div>
          </div>

          {/* Minimalist Filter Bar */}
          <div className="filter-pill-bar">
            {skillTabs.map((tab) => (
              <button
                key={tab.id}
                className={`filter-pill-btn ${skillFilter === tab.id ? "active" : ""}`}
                onClick={() => setSkillFilter(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="skills-grid">
            {filteredSkills.map((category, idx) => (
              <div key={idx} className="skill-category-card">
                <div className="category-header">
                  <span className="category-indicator"></span>
                  <h3>{category.category}</h3>
                </div>
                <div className="tags-container">
                  {category.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="minimal-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================================
          4. EXPERIENCE & LEADERSHIP (OJT, CAPSTONE & AWARDS)
          ========================================================== */}
      <section id="experience" className="section-padding experience-section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Proven Track Record</span>
            <h2 className="section-title">Experience & Milestones</h2>
            <div className="section-divider"></div>
          </div>

          {/* Tab Switcher */}
          <div className="experience-tabs">
            <button
              className={`exp-tab-btn ${activeExpTab === "ojt" ? "active" : ""}`}
              onClick={() => setActiveExpTab("ojt")}
            >
              🏥 OJT: GEAHM Hospital
            </button>
            <button
              className={`exp-tab-btn ${activeExpTab === "capstone" ? "active" : ""}`}
              onClick={() => setActiveExpTab("capstone")}
            >
              🔍 Capstone: Face Recognition
            </button>
            <button
              className={`exp-tab-btn ${activeExpTab === "achievements" ? "active" : ""}`}
              onClick={() => setActiveExpTab("achievements")}
            >
              🏆 Awards & Recognition
            </button>
          </div>

          {/* TAB 1: OJT */}
          {activeExpTab === "ojt" && (
            <div className="exp-tab-content">
              <div className="exp-card highlight-border">
                <div className="exp-card-header">
                  <div>
                    <span className="exp-role-badge">Tech Lead & Head Developer</span>
                    <h3 className="exp-title">GEAHM Hospital Internship</h3>
                    <p className="exp-subtitle">Software Engineering & Network Infrastructure</p>
                  </div>
                  <span className="exp-period">Hospital Systems Deployment</span>
                </div>

                <p className="exp-description">
                  Led the development team in architectural planning, software engineering, end-to-end testing, 
                  and operational rollout of vital clinical information systems for GEAHM Hospital. Coordinated 
                  directly with hospital department heads to streamline medical workflows and optimize patient throughput.
                </p>

                {/* Sub-cards */}
                <div className="exp-subgrid">
                  <div className="subgrid-card">
                    <h4>💻 Systems Engineered</h4>
                    <ul>
                      <li><strong>Queue Management System:</strong> Architected real-time patient queue sorting to minimize waiting lobby congestion.</li>
                      <li><strong>Human Resource Information System (HRIS):</strong> Built modules for digital personnel records, attendance, and shift schedules.</li>
                      <li><strong>Clearance Management System:</strong> Automated cross-department sign-offs between pharmacy, laboratory, and finance.</li>
                    </ul>
                  </div>

                  <div className="subgrid-card">
                    <h4>🔌 IT Infrastructure & Networking</h4>
                    <ul>
                      <li>Configured managed switches, multi-subnet routers, and Local Area Network (LAN) routing.</li>
                      <li>Architected structured network cabling runs and documented physical network topologies.</li>
                      <li>Diagnosed workstation hardware, system software crashes, and provided on-call hospital tech support.</li>
                    </ul>
                  </div>
                </div>

                {/* OJT Photo Gallery */}
                {ojtGallery.length > 0 && (
                  <div className="doc-gallery-wrapper">
                    <div className="gallery-header-row">
                      <h4>📸 Field Documentation ({ojtGallery.length} Photos)</h4>
                      <button
                        className="text-toggle-btn"
                        onClick={() => setIsOjtExpanded(!isOjtExpanded)}
                      >
                        {isOjtExpanded ? "Show Less" : "Show All"}
                      </button>
                    </div>

                    <div className="doc-photo-grid">
                      {visibleOjtImages.map((item, index) => (
                        <div
                          key={item.id}
                          className="doc-photo-item"
                          onClick={() => openCollectionModal("GEAHM Hospital OJT Documentation", ojtGallery, index)}
                        >
                          <img src={item.image} alt="OJT Documentation" loading="lazy" />
                          <div className="photo-hover-overlay">
                            <span>Enlarge 🔍</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB 2: CAPSTONE */}
          {activeExpTab === "capstone" && (
            <div className="exp-tab-content">
              <div className="exp-card highlight-border">
                <div className="exp-card-header">
                  <div>
                    <span className="exp-role-badge">Project Leader & Main Programmer</span>
                    <h3 className="exp-title">Incident Profiling with Face Recognition</h3>
                    <p className="exp-subtitle">Barangay Sabang, Naic, Cavite · Security Automation</p>
                  </div>
                  <span className="exp-period">Academic Research & Deployment</span>
                </div>

                <p className="exp-description">
                  Spearheaded the research, software architecture, and full algorithmic implementation of an 
                  autonomous incident profiling desktop system built natively in <strong>Python</strong>. Engineered 
                  real-time biometric feature detection to identify individuals from camera feeds and immediately cross-reference 
                  local blotter and incident records.
                </p>

                <div className="exp-subgrid">
                  <div className="subgrid-card">
                    <h4>🔍 Algorithmic & AI Engine</h4>
                    <ul>
                      <li><strong>Native Python Execution:</strong> Built with zero heavy overhead, ensuring ultra-fast local inference.</li>
                      <li><strong>Biometric Facial Parsing:</strong> Real-time spatial feature landmarks extraction and comparison.</li>
                      <li><strong>Dynamic Confidence Tuning:</strong> Calibrated match score thresholds to virtually eliminate false positives.</li>
                    </ul>
                  </div>

                  <div className="subgrid-card">
                    <h4>📊 Incident Intelligence System</h4>
                    <ul>
                      <li><strong>Profile Case Linking:</strong> Automatically links positive biometric hits to open barangay investigation files.</li>
                      <li><strong>Hotspot & Timeline Tracking:</strong> Logs incident locations around Sabang jurisdiction for pattern analysis.</li>
                      <li><strong>Officer Audit Dashboard:</strong> Provides secure administrative queries and PDF exportable incident briefs.</li>
                    </ul>
                  </div>
                </div>

                {/* Capstone Photo Gallery */}
                {capstoneGallery.length > 0 && (
                  <div className="doc-gallery-wrapper">
                    <div className="gallery-header-row">
                      <h4>📸 System Interface & Field Photos ({capstoneGallery.length} Items)</h4>
                      <button
                        className="text-toggle-btn"
                        onClick={() => setIsCapstoneExpanded(!isCapstoneExpanded)}
                      >
                        {isCapstoneExpanded ? "Show Less" : "Show All"}
                      </button>
                    </div>

                    <div className="doc-photo-grid">
                      {visibleCapstoneImages.map((item, index) => (
                        <div
                          key={item.id}
                          className="doc-photo-item"
                          onClick={() => openCollectionModal("Capstone Project Documentation", capstoneGallery, index)}
                        >
                          <img src={item.image} alt="Capstone Screenshot" loading="lazy" />
                          <div className="photo-hover-overlay">
                            <span>Enlarge 🔍</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB 3: ACHIEVEMENTS */}
          {activeExpTab === "achievements" && (
            <div className="exp-tab-content">
              <div className="achievements-minimal-grid">
                {/* Award 1: Top 15 C++ */}
                <div className="achievement-minimal-card">
                  <div className="achievement-img-box" onClick={() => openSingleImageModal("Top 15 C++ Programming Competition Finalist", isitetop)}>
                    <img src={isitetop} alt="Top 15 C++ Finalist" />
                    <div className="photo-hover-overlay"><span>Enlarge 🔍</span></div>
                  </div>
                  <div className="achievement-content">
                    <span className="award-badge">Finalist · Competitive Programming</span>
                    <h3>Top 15 C++ Programming Competition</h3>
                    <p className="award-source">Cavite State University (CvSU)</p>
                    <p className="award-desc">
                      Represented Cavite State University - Trece Martires City Campus university-wide. 
                      Successfully secured a place in the prestigious Top 15 finalists and was the sole campus 
                      representative to achieve this recognition.
                    </p>
                  </div>
                </div>

                {/* Award 2: Top 3 Python */}
                <div className="achievement-minimal-card">
                  <div className="achievement-img-box" onClick={() => openSingleImageModal("Top 3 Python Programmer", python3rd)}>
                    <img src={python3rd} alt="Top 3 Python Programmer" />
                    <div className="photo-hover-overlay"><span>Enlarge 🔍</span></div>
                  </div>
                  <div className="achievement-content">
                    <span className="award-badge">Top 3 Award</span>
                    <h3>Top 3 Python Programmer</h3>
                    <p className="award-source">CvSU Trece Martires City Campus</p>
                    <p className="award-desc">
                      Distinguished in algorithmic problem-solving, structural code performance, 
                      and software development using Python, recognized among all computer science and IT peers.
                    </p>
                  </div>
                </div>

                {/* Award 3: Egov Hackathon 2026 - Top 30 Finalist */}
                <div className="achievement-minimal-card">
                  <div className="achievement-img-box" onClick={() => openSingleImageModal("Egov Hackathon 2026 - Top 30 Finalist", treceEgov)}>
                    <img src={treceEgov} alt="Egov Hackathon 2026 Top 30 Finalist" />
                    <div className="photo-hover-overlay"><span>Enlarge 🔍</span></div>
                  </div>
                  <div className="achievement-content">
                    <span className="award-badge">Top 30 Finalist · National Hackathon</span>
                    <h3>Egov Hackathon 2026 - Top 30 Finalist</h3>
                    <p className="award-source">eGov Philippines</p>
                    <p className="award-desc">
                      Competed in the national eGov Hackathon 2026 and achieved Top 30 Finalist standing, 
                      developing innovative e-governance digital solutions alongside top teams from across the Philippines.
                    </p>
                    <a
                      href={alicmanEgovPdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cert-download-link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      📄 View Certificate (PDF) ↗
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ==========================================================
          5. PROJECTS SECTION
          ========================================================== */}
      <section id="projects" className="section-padding projects-section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Portfolio</span>
            <h2 className="section-title">Featured Projects</h2>
            <div className="section-divider"></div>
          </div>

          {/* Category Filter */}
          <div className="filter-pill-bar">
            {projectTabs.map((tab) => (
              <button
                key={tab.id}
                className={`filter-pill-btn ${projectFilter === tab.id ? "active" : ""}`}
                onClick={() => setProjectFilter(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Projects Card Grid */}
          <div className="projects-grid">
            {filteredProjects.map((project) => {
              const thumbnail = getProjectThumbnail(project.id);
              const projectImages = getProjectImages(project.id);

              return (
                <div key={project.id} className={`project-minimal-card ${project.isFeatured ? "featured-project-card" : ""}`}>
                  <div
                    className="card-thumbnail-wrapper"
                    onClick={() => openProjectModal(project)}
                  >
                    <img
                      src={thumbnail}
                      alt={project.title}
                      className="card-thumbnail"
                      loading="lazy"
                    />
                    <div className="thumbnail-badge-group">
                      <div className="thumbnail-badge">{project.categoryLabel}</div>
                      {project.isLive && (
                        <div className="thumbnail-live-badge">
                          <span className="live-dot-pulse"></span>
                          <span>LIVE</span>
                        </div>
                      )}
                    </div>
                    <div className="thumbnail-overlay">
                      <span>View Gallery & Details ({projectImages.length || 1} Images) ↗</span>
                    </div>
                  </div>

                  <div className="project-card-body">
                    <span className="project-tech-tag">{project.tag}</span>
                    <h3 className="project-card-title">{project.title}</h3>
                    <p className="project-card-desc">{project.description}</p>

                    <div className="project-card-footer">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-live-link"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <span className="live-dot-pulse"></span>
                          <span>Live Demo</span>
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="7" y1="17" x2="17" y2="7"></line>
                            <polyline points="7 7 17 7 17 17"></polyline>
                          </svg>
                        </a>
                      )}
                      <button
                        className="btn-view-gallery"
                        onClick={() => openProjectModal(project)}
                      >
                        <span>View Gallery</span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                          <circle cx="8.5" cy="8.5" r="1.5"></circle>
                          <polyline points="21 15 16 10 5 21"></polyline>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==========================================================
          6. CERTIFICATES SECTION
          ========================================================== */}
      <section id="certificates" className="section-padding certificates-section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Credentials</span>
            <h2 className="section-title">Certifications & Accreditations</h2>
            <div className="section-divider"></div>
          </div>

          <div className="certificates-grid">
            {certificatesData.map((cert, index) => (
              <div
                key={index}
                className="certificate-minimal-card"
                onClick={() => openSingleImageModal(cert.title, cert.image, cert.desc)}
              >
                <div className="cert-preview-wrapper">
                  <img src={cert.image} alt={cert.title} loading="lazy" />
                  <div className="cert-hover-hint">
                    <span>Click to Enlarge 🔍</span>
                  </div>
                </div>

                <div className="cert-content">
                  <h3>{cert.title}</h3>
                  <span className="cert-issuer">{cert.issuer}</span>
                  <span className="cert-date">{cert.date}</span>
                  <p className="cert-desc">{cert.desc}</p>
                  {cert.isPdf && (
                    <a
                      href={cert.pdfLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cert-download-link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      📄 View Certificate (PDF) ↗
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================================
          7. CONTACT SECTION
          ========================================================== */}
      {/* ==========================================================
          7. CONTACT SECTION
          ========================================================== */}
      <section id="contact" className="section-padding contact-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-subtitle">Connect</span>
            <h2 className="section-title">Get In Touch</h2>
            <div className="section-divider mx-auto"></div>
            <p className="contact-section-lead">
              Have an upcoming software project, career opportunity, or want to collaborate on web and AI solutions?
              Feel free to reach out directly through any of the channels below.
            </p>
          </div>

          <div className="contact-cards-grid">
            <a href="mailto:jaysonman790@gmail.com" className="contact-card">
              <div className="contact-card-icon">✉️</div>
              <span className="contact-card-label">Email</span>
              <strong className="contact-card-value">jaysonman790@gmail.com</strong>
              <span className="contact-card-action">Send Email ↗</span>
            </a>

            <a href="tel:+639811954487" className="contact-card">
              <div className="contact-card-icon">📱</div>
              <span className="contact-card-label">Phone & SMS</span>
              <strong className="contact-card-value">+63 981 195 4487</strong>
              <span className="contact-card-action">Call / Text ↗</span>
            </a>

            <a
              href="https://t.me/markjaysonalicman"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <div className="contact-card-icon">✈️</div>
              <span className="contact-card-label">Telegram</span>
              <strong className="contact-card-value">@markjaysonalicman</strong>
              <span className="contact-card-action">Message on Telegram ↗</span>
            </a>

            <a
              href="https://www.facebook.com/mark.jayson.alicman"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <div className="contact-card-icon">👤</div>
              <span className="contact-card-label">Facebook</span>
              <strong className="contact-card-value">Mark Jayson Alicman</strong>
              <span className="contact-card-action">View Profile ↗</span>
            </a>

            <a
              href="https://www.instagram.com/mj.alicman"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <div className="contact-card-icon">📸</div>
              <span className="contact-card-label">Instagram</span>
              <strong className="contact-card-value">@mj.alicman</strong>
              <span className="contact-card-action">Follow on Instagram ↗</span>
            </a>

            <div className="contact-card static">
              <div className="contact-card-icon">📍</div>
              <span className="contact-card-label">Location</span>
              <strong className="contact-card-value">Sabang, Naic, Cavite</strong>
              <span className="contact-card-sub">Philippines</span>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================
          8. UNIFIED IN-PAGE LIGHTBOX & GALLERY MODAL
          ========================================================== */}
      {lightbox.isOpen && (
        <div className="lightbox-backdrop" onClick={closeLightbox}>
          <div className="lightbox-modal" onClick={(e) => e.stopPropagation()}>
            {/* Header */}
            <div className="lightbox-header">
              <div>
                <span className="lightbox-tag">{lightbox.tag}</span>
                <h3 className="lightbox-title">{lightbox.title}</h3>
              </div>
              <div className="lightbox-header-actions">
                {lightbox.liveUrl && (
                  <a
                    href={lightbox.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="lightbox-live-badge-btn"
                  >
                    <span className="live-dot-pulse"></span>
                    <span>Live Website ↗</span>
                  </a>
                )}
                <button className="lightbox-close-btn" onClick={closeLightbox} aria-label="Close modal">
                  ✕
                </button>
              </div>
            </div>

            {/* Main Stage */}
            <div className="lightbox-stage">
              {lightbox.images.length > 1 && (
                <button
                  className="lightbox-nav-btn prev"
                  onClick={prevLightboxImage}
                  aria-label="Previous image"
                >
                  ❮
                </button>
              )}

              <div className="lightbox-image-container">
                <img
                  src={lightbox.images[lightbox.currentIndex]}
                  alt={`${lightbox.title} Snapshot ${lightbox.currentIndex + 1}`}
                  className="lightbox-active-img"
                />
              </div>

              {lightbox.images.length > 1 && (
                <button
                  className="lightbox-nav-btn next"
                  onClick={nextLightboxImage}
                  aria-label="Next image"
                >
                  ❯
                </button>
              )}
            </div>

            {/* Footer / Description / Counter */}
            <div className="lightbox-footer">
              {lightbox.description && (
                <p className="lightbox-desc">{lightbox.description}</p>
              )}

              {lightbox.liveUrl && (
                <div className="lightbox-live-bar">
                  <span>🌐 Live Application URL:</span>
                  <a
                    href={lightbox.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="lightbox-url-link"
                  >
                    {lightbox.liveUrl} ↗
                  </a>
                </div>
              )}

              {lightbox.images.length > 1 && (
                <div className="lightbox-counter">
                  <span>Image {lightbox.currentIndex + 1} of {lightbox.images.length}</span>
                </div>
              )}

              {/* Thumbnails strip */}
              {lightbox.images.length > 1 && (
                <div className="lightbox-thumb-strip">
                  {lightbox.images.map((thumb, tIdx) => (
                    <button
                      key={tIdx}
                      className={`thumb-btn ${tIdx === lightbox.currentIndex ? "active" : ""}`}
                      onClick={() => setLightbox((prev) => ({ ...prev, currentIndex: tIdx }))}
                    >
                      <img src={thumb} alt={`Thumbnail ${tIdx + 1}`} />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SinglePagePortfolio;
