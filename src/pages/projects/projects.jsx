import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useNavigate } from "react-router-dom";
import "./projects.css";

gsap.registerPlugin(useGSAP);

function Projects() {
  const containerRef = useRef(null);
  const navigate = useNavigate();

  // 1. Same folder mapping as your gallery component
  const folderMapping = {
    3: "Incident", 
    6: "Mood",
    7: "Qsystem",
    2: "Hris",
    1: "Clearance",
    0: "brgy",
    4: "japan",
    5: "milktea"
  };

  // 2. Load all project image modules eagerly, exactly like your gallery component
  const imageModules = import.meta.glob(
    "../../assets/project/**/images/*.{png,jpg,jpeg,svg,webp}",
    { eager: true }
  );

  // 3. Helper function to find the first available image for a given project ID
  const getProjectThumbnailById = (id) => {
    const targetFolder = folderMapping[id];
    if (!targetFolder) return "https://via.placeholder.com/400x250";

    const targetFolderPattern = `/project/${targetFolder}/images/`.toLowerCase();

    // Loop through the imported modules to find the first matching path
    for (const path in imageModules) {
      if (path.toLowerCase().includes(targetFolderPattern)) {
        // Return the resolved asset string (handling both default or direct string outputs)
        return imageModules[path].default || imageModules[path];
      }
    }

    // Fallback if the folder exists but doesn't contain any images yet
    return "https://via.placeholder.com/400x250";
  };

  const projectList = [
    {
      id: 3,
      title: "Incident Profiling with Face Recognition",
      description:
        "A security-focused desktop system designed to identify and profile incidents by recognizing faces in real-time.",
      tag: "Python / AI / Computer Vision",
    },
    {
      id: 6,
      title: "Mood Detection System",
      description:
        "An interactive application leveraging client-side recognition to analyze user moods and track emotional data over time.",
      tag: "React.js / Web / AI",
    },
    {
      id: 7,
      title: "Queuing System in GEAHM",
      description:
        "An efficient patient queuing module integrated within a Hospital Information System to streamline waiting workflows.",
      tag: "Enterprise / Healthcare",
    },
    {
      id: 2,
      title: "HRIS in GEAHM Hospital",
      description:
        "A comprehensive Human Resource Information System built specifically to manage medical employee records, tracking, and payroll data.",
      tag: "Enterprise / Management",
    },
    {
      id: 1,
      title: "Clearance System in GEAHM Hospital",
      description:
        "A digital clearance workflow system for hospital staff and administrators to handle organizational exit processes smoothly.",
      tag: "Workflow / Automation",
    },
    {
      id: 0,
      title: "Barangay Information Website",
      description:
        "A localized governance web portal built to digitize community announcements, public records, and resident requests.",
      tag: "HTML5 / CSS3 / JavaScript / Bootstrap",
    },
    {
      id: 4,
      title: "Japan Surplus E-Commerce Website",
      description:
        "A responsive showcasing and inventory-focused web platform built for browsing imported Japanese surplus goods.",
      tag: "HTML5 / CSS3 / JavaScript / Bootstrap",
    },
    {
      id: 5,
      title: "POS Milktea Shop Website",
      description:
        "A sleek frontend design tailored for a modern milktea business to present products, handle menus, and organize sales layouts.",
      tag: "HTML5 / CSS3 / JavaScript / Bootstrap",
    },
    {
      id: "",
      title: "Personal Portfolio Website",
      description:
        "An immersive, interactive developer portfolio featuring advanced layout aesthetics and high-performance UI motion design.",
      tag: "React.js / GSAP / Animation",
    },
    {
      id: "",
      title: "Custom Desktop Applications",
      description:
        "A suite of tailor-made standalone desktop tools designed to optimize localized data crunching and productivity tasks.",
      tag: "Python / GUI / Desktop",
    },
    {
      id: "",
      title: "Cross-Platform Mobile Applications",
      description:
        "Dynamic mobile solutions focusing on fluid layouts, native hardware access, and highly reactive user experiences.",
      tag: "React Native / Mobile / UI",
    },
    {
      id: "",
      title: "Responsive CRUD Web Applications",
      description:
        "An array of secure database-driven enterprise applications utilizing robust design patterns for scalable content management.",
      tag: "Laravel / ASP.NET / PHP / MySQL",
    },
  ];

  useGSAP(
    () => {
      gsap.from(".animate-header > *", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
      });

      gsap.from(".project-card", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.4,
      });
    },
    { scope: containerRef }
  );

  const goToGallery = (id, title) => {
    if (id === "" || id === undefined || id === null) return;
    const encodedName = encodeURIComponent(title);
    navigate(`/gallery?id=${id}&name=${encodedName}`);
  };

  return (
    <section id="projects" className="projects-container" ref={containerRef}>
      <div className="projects-header animate-header">
        <h1>Projects</h1>
        <p className="subtitle">Frontend Developer Portfolio</p>
        <div className="header-bar"></div>
      </div>

      <div className="projects-grid">
        {projectList.map((project, index) => {
          const hasValidId = project.id !== "";
          // 4. Resolves the thumbnail using the exact pattern matching logic from your gallery
          const projectImage = getProjectThumbnailById(project.id);

          return (
            <div key={index} className="project-card">
              <div className="project-image-container">
                <img
                  src={projectImage}
                  alt={project.title}
                  className="project-image"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/400x250";
                  }}
                />
              </div>

              <div className="project-content">
                <span className="project-tag">{project.tag}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-footer">
                  {hasValidId ? (
                    <span
                      className="view-project"
                      onClick={() => goToGallery(project.id, project.title)}
                      style={{ cursor: "pointer" }}
                    >
                      View Details →
                    </span>
                  ) : (
                    <span 
                      className="view-project disabled" 
                      style={{ opacity: 0.5, cursor: "not-allowed" }}
                    >
                      Coming Soon
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;