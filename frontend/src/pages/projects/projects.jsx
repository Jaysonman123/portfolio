import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './projects.css'; // Importing the CSS file

// Register the hook plugin (optional but recommended for safety)
gsap.registerPlugin(useGSAP);

function Projects() {
  const containerRef = useRef(null); // Ref for the main section container

  const projectList = [
    {
      title: "Incident Profiling with Face Recognition",
      description: "A security-focused desktop system designed to identify and profile incidents by recognizing faces in real-time.",
      tag: "Python / AI / Computer Vision",
      image: "https://via.placeholder.com/400x250"
    },
    {
      title: "Mood Detection System",
      description: "An interactive application leveraging client-side recognition to analyze user moods and track emotional data over time.",
      tag: "React.js / Web / AI",
      image: "https://via.placeholder.com/400x250"
    },
    {
      title: "Queuing System in GEAHM",
      description: "An efficient patient queuing module integrated within a Hospital Information System to streamline waiting workflows.",
      tag: "Enterprise / Healthcare",
      image: "https://via.placeholder.com/400x250"
    },
    {
      title: "HRIS in GEAHM Hospital",
      description: "A comprehensive Human Resource Information System built specifically to manage medical employee records, tracking, and payroll data.",
      tag: "Enterprise / Management",
      image: "https://via.placeholder.com/400x250"
    },
    {
      title: "Clearance System in GEAHM Hospital",
      description: "A digital clearance workflow system for hospital staff and administrators to handle organizational exit processes smoothly.",
      tag: "Workflow / Automation",
      image: "https://via.placeholder.com/400x250"
    },
    {
      title: "Barangay Information Website",
      description: "A localized governance web portal built to digitize community announcements, public records, and resident requests.",
      tag: "HTML5 / CSS3 / JavaScript / Bootstrap",
      image: "https://via.placeholder.com/400x250"
    },
    {
      title: "Japan Surplus E-Commerce Website",
      description: "A responsive showcasing and inventory-focused web platform built for browsing imported Japanese surplus goods.",
      tag: "HTML5 / CSS3 / JavaScript / Bootstrap",
      image: "https://via.placeholder.com/400x250"
    },
    {
      title: "POS Milktea Shop Website",
      description: "A sleek frontend design tailored for a modern milktea business to present products, handle menus, and organize sales layouts.",
      tag: "HTML5 / CSS3 / JavaScript / Bootstrap",
      image: "https://via.placeholder.com/400x250"
    },
    {
      title: "Personal Portfolio Website",
      description: "An immersive, interactive developer portfolio featuring advanced layout aesthetics and high-performance UI motion design.",
      tag: "React.js / GSAP / Animation",
      image: "https://via.placeholder.com/400x250"
    },
    {
      title: "Custom Desktop Applications",
      description: "A suite of tailor-made standalone desktop tools designed to optimize localized data crunching and productivity tasks.",
      tag: "Python / GUI / Desktop",
      image: "https://via.placeholder.com/400x250"
    },
    {
      title: "Cross-Platform Mobile Applications",
      description: "Dynamic mobile solutions focusing on fluid layouts, native hardware access, and highly reactive user experiences.",
      tag: "React Native / Mobile / UI",
      image: "https://via.placeholder.com/400x250"
    },
    {
      title: "Responsive CRUD Web Applications",
      description: "An array of secure database-driven enterprise applications utilizing robust design patterns for scalable content management.",
      tag: "Laravel / ASP.NET / PHP / MySQL",
      image: "https://via.placeholder.com/400x250"
    }
  ];

  // GSAP animation logic
  useGSAP(() => {
    // 1. Animate Header Elements together
    gsap.from(".animate-header > *", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out"
    });

    // 2. Animate Project Cards with a staggered entry
    gsap.from(".project-card", {
      opacity: 0,
      y: 40,
      duration: 0.8,
      stagger: 0.15, // Delay between each card's animation
      ease: "power3.out",
      delay: 0.4 // Small delay so it waits slightly for the header
    });
  }, { scope: containerRef }); // Scope ensures GSAP only selects elements inside this component

  return (
    <section id="projects" className="projects-container" ref={containerRef}>
      <div className="projects-header animate-header">
        <h1>Projects</h1>
        <p className="subtitle">Frontend Developer Portfolio</p>
        <div className="header-bar"></div>
      </div>

      <div className="projects-grid">
        {projectList.map((project, index) => (
          <div key={index} className="project-card">
            {/* Added Image Container */}
            <div className="project-image-container">
              <img src={project.image} alt={project.title} className="project-image" />
            </div>
            
            <div className="project-content">
              <span className="project-tag">{project.tag}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-footer">
                <span className="view-project">View Details →</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;