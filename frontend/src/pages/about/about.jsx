import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./about.css";
import profile from "../../assets/profile.jpg";
import isitetop from "../../assets/isite_top.jpg";
import python3rd from "../../assets/python_3rd.jpg";

gsap.registerPlugin(ScrollTrigger);

// ================= AUTOMATICALLY IMPORT ALL OJT IMAGES =================
const ojtImagesGlob = import.meta.glob("../../assets/ojt/*.{png,jpg,jpeg,svg,webp}", { eager: true });

const ojtGallery = Object.keys(ojtImagesGlob).map((key, index) => {
  return {
    id: index + 1,
    image: ojtImagesGlob[key].default,
  };
});

// ================= AUTOMATICALLY IMPORT ALL CAPSTONE IMAGES =================
const capstoneImagesGlob = import.meta.glob("../../assets/capstone/*.{png,jpg,jpeg,svg,webp}", { eager: true });

const capstoneGallery = Object.keys(capstoneImagesGlob).map((key, index) => {
  return {
    id: index + 1,
    image: capstoneImagesGlob[key].default,
  };
});

function About() {
  const container = useRef(null);
  
  // States to track gallery expansions separately
  const [isOjtExpanded, setIsOjtExpanded] = useState(false);
  const [isCapstoneExpanded, setIsCapstoneExpanded] = useState(false);

  // Slice individual arrays to handle their independent "See More" toggles
  const visibleOjtGallery = isOjtExpanded ? ojtGallery : ojtGallery.slice(0, 5);
  const visibleCapstoneGallery = isCapstoneExpanded ? capstoneGallery : capstoneGallery.slice(0, 5);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add({
      isDesktop: "(min-width: 769px)",
      isMobile: "(max-width: 768px)"
    }, (context) => {
      const { isDesktop } = context.conditions;

      gsap.from(".about-image", {
        scrollTrigger: {
          trigger: ".about-container",
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
        x: isDesktop ? -120 : 0,
        y: isDesktop ? 0 : 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".about-content", {
        scrollTrigger: {
          trigger: ".about-container",
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
        x: isDesktop ? 120 : 0,
        y: isDesktop ? 0 : 40,
        opacity: 0,
        duration: 1,
        delay: isDesktop ? 0.2 : 0.1,
        ease: "power3.out",
      });
    });

    // OJT Scroll Animation Trigger
    gsap.from(".ojt-animate-item", {
      scrollTrigger: {
        trigger: ".ojt-section",
        start: "top 75%",
        toggleActions: "play reverse play reverse",
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.12,
      ease: "power3.out",
    });

    // Capstone Scroll Animation Trigger
    gsap.from(".capstone-animate-item", {
      scrollTrigger: {
        trigger: ".capstone-section",
        start: "top 75%",
        toggleActions: "play reverse play reverse",
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.12,
      ease: "power3.out",
    });

    // Achievements Scroll Animation Trigger
    gsap.from(".achievement-card", {
      scrollTrigger: {
        trigger: ".achievements",
        start: "top 75%",
        toggleActions: "play reverse play reverse",
      },
      y: 60,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
    });

  }, { scope: container });

  return (
    <>
      {/* ABOUT */}
      <section id="about" className="about" ref={container}>
        <div className="about-container">
          <div className="about-image">
            <img src={profile} alt="Mark Jayson Alicman" />
          </div>

          <div className="about-content">
            <h2>Programmer | Web Developer | Software Developer</h2>
            <p>
              I am Mark Jayson Alicman, a passionate developer focused on
              building responsive websites, software applications, and database-driven systems using modern technologies.
            </p>
            <p>
              I enjoy solving programming challenges, learning new technologies, and creating systems that provide practical solutions for users.
            </p>

            <div className="about-details">
              <div>
                <h3>Personal Info</h3>
                <p>
                  <strong>Birthdate:</strong> October 21, 2002
                  <br />
                  <strong>Age:</strong> 23 Years Old
                  <br />
                  <strong>Address:</strong> Sabang, Naic, Cavite
                  <br />
                  <strong>Religion:</strong> Iglesia ni Cristo (INC)
                </p>
              </div>

              <div>
                <h3>Education & Family</h3>
                <p>
                  Bachelor of Science in IT
                  <br />
                  Cavite State University
                  <br />
                  Trece Martires City Campus
                  <br />
                  <span style={{ display: 'block', marginTop: '8px' }}>
                    <strong>Parents:</strong>
                    <br />
                    Gerry Alicman & Lily Alicman
                  </span>
                </p>
              </div>

              <div>
                <h3>Skills</h3>
                <p>
                  React.js <br />
                  ASP.NET <br />
                  Laravel <br />
                  Python <br />
                  MySQL
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= OJT EXPERIENCE SECTION ================= */}
      <section id="ojt" className="ojt-section">
        <div className="section-title">
          <h1>OJT Experience</h1>
          <p>Internship and practical field experience in software development and network administration.</p>
        </div>

        <div className="ojt-container">
          <div className="ojt-content ojt-animate-item">
            <h2>Tech Lead & Head Developer</h2>
            <h3>GEAHM Hospital</h3>
            <p>
              During my On-the-Job Training (OJT) at GEAHM Hospital, I served as the 
              <strong> Tech Lead and Head Developer </strong> of our development team. 
              I was responsible for leading the planning, development, testing, and implementation 
              of multiple systems while coordinating with my teammates to ensure projects were completed 
              efficiently and flawlessly met the hospital's strict requirements.
            </p>
          </div>

          <div className="ojt-grid">
            <div className="ojt-grid-card ojt-animate-item">
              <h3>💻 Software & Systems Development</h3>
              <p>Contributed to the development, maintenance, and deployment of critical internal hospital information systems:</p>
              <ul>
                <li><strong>Queue Management System:</strong> Designed and developed a system to optimize patient flow and drastically reduce waiting times.</li>
                <li><strong>Human Resource Information System (HRIS):</strong> Assisted in managing employee digital profiles, tracking attendance, and automating HR workflows.</li>
                <li><strong>Clearance Management System:</strong> Developed a digital clearance framework to streamline cross-department approval documentation.</li>
                <li><strong>Internal Modules:</strong> Participated in the enhancement of auxiliary infrastructure assigned directly by the Head of the IT Department.</li>
              </ul>
            </div>

            <div className="ojt-grid-card ojt-animate-item">
              <h3>🔌 IT Infrastructure & Tech Support</h3>
              <p>Handled real-world deployment challenges, network topology setups, and hardware maintenance protocols:</p>
              <ul>
                <li>Configured and managed routers, managed switches, and Local Area Networks (LAN).</li>
                <li>Built, organized, and deployed physical network cabling runs across facilities.</li>
                <li>Created and logged professional network topology diagrams for IT asset documentation.</li>
                <li>Diagnosed, repaired, and troubleshooted computer hardware, peripherals, and OS environments.</li>
                <li>Provided high-priority helpdesk technical support to medical and administrative hospital staff.</li>
                <li>Assisted in strategic system production deployment, security maintenance, and performance metrics optimization.</li>
              </ul>
            </div>
          </div>

          {/* DYNAMIC GALLERY COMPONENT FOR OJT */}
          {ojtGallery.length > 0 && (
            <div className="ojt-documentation">
              <h3 className="ojt-doc-title ojt-animate-item">📸 Field Documentation</h3>
              <div className="ojt-gallery-grid">
                {visibleOjtGallery.map((item) => (
                  <div className="ojt-doc-card ojt-animate-item" key={item.id}>
                    <div className="ojt-doc-img-wrapper">
                      <img src={item.image} alt="OJT Documentation" />
                    </div>
                  </div>
                ))}
              </div>
              
              {ojtGallery.length > 5 && (
                <div className="gallery-actions ojt-animate-item" style={{ textAlign: 'center', marginTop: '20px' }}>
                  <button 
                    onClick={() => setIsOjtExpanded(!isOjtExpanded)}
                    className="see-more-btn"
                    style={{ padding: '10px 24px', cursor: 'pointer', fontWeight: 'bold' }}
                  >
                    {isOjtExpanded ? "See Less" : "See More"}
                  </button>
                </div>
              )}
            </div>
          )}

          <div className="ojt-summary ojt-content ojt-animate-item">
            <p>
              🚀 <strong>Core Competencies Grown:</strong> System Analysis & Design, Database Management, 
              Advanced Networking, Hardware Troubleshooting, Project Architecture Leadership, Team Collaboration, 
              and Crisis Resolution in a fast-paced healthcare tech environment.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CAPSTONE PROJECT SECTION ================= */}
      <section id="capstone" className="capstone-section ojt-section">
        <div className="section-title">
          <h1>Capstone Project</h1>
          <p>Academic research implementation and advanced systems development design.</p>
        </div>

        <div className="ojt-container">
          <div className="ojt-content capstone-animate-item">
            <h2>Project Leader & Main Programmer</h2>
            <h3>Incident Profiling with Face Recognition System</h3>
            <p>
              Served as the <strong>Project Leader and Main Programmer</strong> for our system deployment engineered for 
              <strong> Barangay Sabang, Naic, Cavite</strong>. Built entirely using <strong>Native Python</strong>, this real-time solution automated local incident reporting and identification logistics. I led the architectural blueprint, algorithmic integrations, and system-wide backend stability to bring high-accuracy automation to barangay security workflows.
            </p>
          </div>

          <div className="ojt-grid">
            <div className="ojt-grid-card capstone-animate-item">
              <h3>🔍 Face Recognition & Processing</h3>
              <p>Engineered core functional logic for identification pipelines and secure logging mechanics:</p>
              <ul>
                <li><strong>Native Python Framework:</strong> Written natively to maintain light footprints, fast parsing execution, and modular expansion capacity.</li>
                <li><strong>Biometric Facial Parsing:</strong> Integrated low-latency spatial analysis frames to recognize profile coordinates from live feeds.</li>
                <li><strong>Dynamic Match Scoring:</strong> Tuned specific confidence metrics to prevent false profiles when logging individual entries.</li>
              </ul>
            </div>

            <div className="ojt-grid-card capstone-animate-item">
              <h3>📊 Incident Profiling & Dashboard Features</h3>
              <p>Constructed operational metrics handling to support local security investigations:</p>
              <ul>
                <li><strong>Profile Case Linking:</strong> Connected captured biometric hits directly to existing incident databases and case files.</li>
                <li><strong>Location & Hotspot Audits:</strong> Filtered automated incident timelines targeted around the Sabang jurisdiction area.</li>
                <li><strong>Administrative Controls:</strong> Structured analytical reporting controls allowing high-accuracy record queries for local officials.</li>
              </ul>
            </div>
          </div>

          {/* DYNAMIC GALLERY COMPONENT FOR CAPSTONE */}
          {capstoneGallery.length > 0 && (
            <div className="ojt-documentation">
              <h3 className="ojt-doc-title capstone-animate-item">📸 Project & Interface Gallery</h3>
              <div className="ojt-gallery-grid">
                {visibleCapstoneGallery.map((item) => (
                  <div className="ojt-doc-card capstone-animate-item" key={item.id}>
                    <div className="ojt-doc-img-wrapper">
                      <img src={item.image} alt="Capstone Documentation" />
                    </div>
                  </div>
                ))}
              </div>
              
              {capstoneGallery.length > 5 && (
                <div className="gallery-actions capstone-animate-item" style={{ textAlign: 'center', marginTop: '20px' }}>
                  <button 
                    onClick={() => setIsCapstoneExpanded(!isCapstoneExpanded)}
                    className="see-more-btn"
                    style={{ padding: '10px 24px', cursor: 'pointer', fontWeight: 'bold' }}
                  >
                    {isCapstoneExpanded ? "See Less" : "See More"}
                  </button>
                </div>
              )}
            </div>
          )}

          <div className="ojt-summary ojt-content capstone-animate-item">
            <p>
              🛠️ <strong>Technical Framework Highlights:</strong> Native Python Development, Real-Time Biometric Identifications, Database Architecture Relations, Local Security Workflow Optimization, and Agile Development Project Management.
            </p>
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section id="achievements" className="achievements">
        <div className="section-title">
          <h1>Achievements</h1>
          <p>Milestones and accomplishments throughout my academic journey.</p>
        </div>

        <div className="achievement-card">
          <div className="achievement-image">
            <img src={isitetop} alt="Programming Competition" />
          </div>
          <div className="achievement-info">
            <h2>Top 15 C++ Programming Competition</h2>
            <span>Cavite State University</span>
            <p>
              Represented Cavite State University – Trece Martires City Campus in the university-wide C++ Programming Competition.
              I successfully secured a place in the <strong> Top 15 finalists </strong> and became the only representative from our campus to achieve this recognition.
            </p>
            <ul>
              <li>🏆 Top 15 Finalist</li>
              <li>💻 Competitive Programming</li>
              <li>🎓 CvSU Representative</li>
              <li>🚀 Advanced Problem Solving Skills</li>
            </ul>
          </div>
        </div>

        <div className="achievement-card">
          <div className="achievement-image">
            <img src={python3rd} alt="Top 3 Python Programmer" />
          </div>
          <div className="achievement-info">
            <h2>Top 3 Python Programmer</h2>
            <span>Cavite State University - Trece Martires City Campus</span>
            <p>
              Recognized as one of the top Python programmers at CvSU Trece Martires City Campus. This distinction highlights advanced capabilities in structural problem-solving, clean algorithm design, and practical software application development using Python.
            </p>
            <ul>
              <li>🏆 Top 3 Rank</li>
              <li>🐍 Python Algorithm Design</li>
              <li>💡 Software Application Development</li>
              <li>⚡ Logic & Problem Solving</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;