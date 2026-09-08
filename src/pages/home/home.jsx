import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./home.css";
import bg from "../../assets/bg2.jpg";
import certAsp from "../../assets/cert_asp.jpg";
import certIsiteCpp from "../../assets/isite_cpp.jpg";
import python3rd from "../../assets/python_3rd.jpg";

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const contentRef = useRef(null);
  const certSectionRef = useRef(null);
  const techSectionRef = useRef(null); // Ref for the Tech Stack ScrollTrigger

  const certificates = [
    {
      image: certAsp,
      rotate: true,
      title: "Digital Skills Bootcamp - ASP.NET and MySQL Training",
      issuer: "Barangay Lapidario",
      year: "May 21, 2026",
      location: "Trece Martires City",
      description:
        "Completed Digital Skills Bootcamp training focused on ASP.NET web development and MySQL database management.",
      link: certAsp,
    },
    {
      image: certIsiteCpp,
      rotate: false,
      title: "Certificate of Membership - iSITE C++",
      issuer:
        "Integrated Society of Information Technology Enthusiasts (iSITE) Inc.",
      year: "Academic Year 2023-2024",
      location: "115 Purok 2 Antipolo Del Sur, Lipa City, Batangas",
      description:
        "Awarded as a bona fide member of the organization. Membership Number: 2023-04-001184. Signed by Dr. Neil P. Balba, iSITE President.",
      link: certIsiteCpp,
    },
    {
      image: python3rd,
      rotate: false,
      title: "Top 3 Python Programmer - CvSU Trece Martires City Campus",
      issuer: "Cavite State University - Trece Martires City Campus",
      year: "2025",
      location: "Trece Martires City, Cavite",
      description:
        "Recognized as one of the top Python programmers in CvSU Trece Martires City Campus, demonstrating strong programming skills, problem-solving ability, algorithm development, and software application development using Python.",
      link: python3rd,
    },
  ];

  const techStack = [
    {
      category: "Programming Languages",
      skills: ["Python", "Java", "C++", "C"],
    },
    {
      category: "Web Development",
      skills: ["HTML", "CSS", "JavaScript", "React.js", "ASP.NET", "Laravel", "CodeIgniter"],
    },
    {
      category: "Backend & Database",
      skills: ["MySQL", "SQLite", "XAMPP", "REST API"],
    },
    {
      category: "Frameworks & Tools",
      skills: [".NET Framework", "Bootstrap", "Tailwind CSS", "Git", "GitHub", "VS Code"],
    },
    {
      category: "Software Development",
      skills: [
        "OOP",
        "Data Structures",
        "Database Design",
        "CRUD Systems",
        "Web Applications",
        "Desktop Apps",
        "Responsive Design",
      ],
    },
    {
      category: "Other Skills",
      skills: ["UI/UX Basics", "Debugging", "Version Control", "Software Testing", "System Dev"],
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {

      // ================= HERO ANIMATION =================
      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current.children,
          {
            y: -60,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.15,
            ease: "power3.out",
          }
        );
      }


      // ================= TECH STACK ANIMATION =================
      if (techSectionRef.current) {

        const techCards =
          techSectionRef.current.querySelectorAll(".tech-card");

        gsap.fromTo(
          techCards,
          {
            opacity: 0,
            y: 80,
            scale: 0.9,
            rotateX: 20,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateX: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: "power3.out",

            scrollTrigger: {
              trigger: techSectionRef.current,
              start: "top 80%",
              end: "bottom 20%",

              // replay every scroll
              toggleActions:
                "play reverse play reverse",

              markers: false,
            },
          }
        );
      }



      // ================= CERTIFICATE ANIMATION =================
      if (certSectionRef.current) {

        const certCards =
          certSectionRef.current.querySelectorAll(
            ".certificate-card"
          );


        gsap.fromTo(
          certCards,
          {
            opacity: 0,
            y: 100,
            scale: 0.85,
            rotateY: 20,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateY: 0,

            duration: 0.9,
            stagger: 0.15,
            ease: "power3.out",

            scrollTrigger: {
              trigger: certSectionRef.current,

              start:
                "top 80%",

              end:
                "bottom 20%",


              // replay every scroll
              toggleActions:
                "play reverse play reverse",

              markers: false,
            },
          }
        );

      }


      // Refresh positions after images load
      ScrollTrigger.refresh();


    });


    return () => {
      ctx.revert();
    };

  }, []);

  const slideNext = () => {
    const container = certSectionRef.current?.querySelector(".certificate-container");
    container?.scrollBy({ left: 350, behavior: "smooth" });
  };

  const slidePrev = () => {
    const container = certSectionRef.current?.querySelector(".certificate-container");
    container?.scrollBy({ left: -350, behavior: "smooth" });
  };

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section id="home" className="home" style={{ backgroundImage: `url(${bg})` }}>
        <div className="overlay">
          <div className="content-box">
            <div className="home-content" ref={contentRef}>
              <h1>Mark Jayson Alicman</h1>
              <p>
                I am a Programmer, Web Developer, and Software Developer passionate about creating modern,
                scalable, and efficient digital solutions. I build responsive websites, software
                applications, and user-focused systems using modern technologies and clean coding practices.
              </p>
              <div className="home-buttons">
                <a href="#tech-stack" className="btn primary-btn">
                  View Tech Stack
                </a>
                <a href="#certificates" className="btn secondary-btn">
                  Certificates
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TECH STACK SECTION ================= */}
      <section id="tech-stack" className="tech-stack" ref={techSectionRef}>
        <h2>Technologies I Know</h2>
        <div className="tech-grid">
          {techStack.map((item, index) => (
            <div className="tech-card" key={index}>
              <h3>{item.category}</h3>
              <div className="skills-tags">
                {item.skills.map((skill, sIdx) => (
                  <span className="skill-tag" key={sIdx}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CERTIFICATES SECTION ================= */}
      <section id="certificates" className="certificates" ref={certSectionRef}>
        <h2>My Certificates</h2>
        <div className="certificate-wrapper">
          <button className="carousel-btn prev" onClick={slidePrev}>❮</button>
          <div className="certificate-container">
            {certificates.map((certificate, index) => (
              <a 
                href={certificate.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="certificate-card" 
                key={index}
                style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
              >
                {certificate.image ? (
                  <div className="certificate-image-box">
                    <img
                      src={certificate.image}
                      alt={certificate.title}
                      className={
                        certificate.rotate ? "certificate-image rotate-image" : "certificate-image"
                      }
                    />
                  </div>
                ) : (
                  <div className="certificate-placeholder">Certificate</div>
                )}

                <div className="certificate-content">
                  <h3>{certificate.title}</h3>
                  <h4>{certificate.issuer}</h4>
                  <span>{certificate.year}</span>
                  <small>{certificate.location}</small>
                  <p>{certificate.description}</p>
                </div>
              </a>
            ))}
          </div>
          <button className="carousel-btn next" onClick={slideNext}>❯</button>
        </div>
      </section>
    </>
  );
}

export default Home;