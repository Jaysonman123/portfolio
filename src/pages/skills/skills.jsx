import React, { useState } from 'react';
import './skills.css'; 

function Skills() {
  const [activeFilter, setActiveFilter] = useState('All');

  const skillCategories = [
    {
      category: "Strongest Skills (Featured)",
      icon: "⭐",
      isHighlight: true,
      filterGroup: "Core",
      skills: [
        "Python", "React.js", "JavaScript", "ASP.NET", "Laravel", "CodeIgniter", 
        "MySQL", "SQLite", "HTML5", "CSS3", "REST API Development", "Full-Stack Web Development", 
        "Software Development", "System Analysis & Design", "Database Design", "Database Management", 
        "Face Recognition", "Computer Vision", "Image Processing", "Biometric Identification", 
        "GSAP Animations", "Responsive Web Design", "Git", "GitHub", "Object-Oriented Programming (OOP)", 
        "Data Structures & Algorithms", "Software Testing", "Debugging", "LAN Configuration", "Hardware Troubleshooting", "Technical Support", "Agile Development", 
        "Technical Leadership", "Project Leadership", "Team Collaboration", "Problem Solving"
      ]
    },
    {
      category: "Programming Languages",
      icon: "💻",
      filterGroup: "Development",
      skills: ["Python", "JavaScript (ES6+)", "Java", "C++", "C", "SQL"]
    },
    {
      category: "Frontend Development",
      icon: "🎨",
      filterGroup: "Development",
      skills: [
        "React.js", "HTML5", "CSS3", "JavaScript", "Bootstrap", "Tailwind CSS", 
        "Responsive Web Design", "Responsive User Interfaces", "GSAP", "GSAP ScrollTrigger", "CSS Animations"
      ]
    },
    {
      category: "Backend Development",
      icon: "⚙️",
      filterGroup: "Development",
      skills: [
        "ASP.NET", ".NET Framework", "Laravel", "CodeIgniter", "REST API Development", 
        "Backend Development", "Authentication Systems", "CRUD Systems", "API Integration"
      ]
    },
    {
      category: "Database Technologies",
      icon: "🗄️",
      filterGroup: "Development",
      skills: [
        "MySQL", "SQLite", "Database Design", "Database Management", 
        "Database Relationships", "Data Modeling", "CRUD Operations", "Query Optimization", "XAMPP"
      ]
    },
    {
      category: "Computer Vision & AI",
      icon: "🤖",
      filterGroup: "Specialized",
      skills: [
        "Face Recognition", "Biometric Identification", "Real-Time Face Detection", 
        "Image Processing", "Confidence Score Optimization", "Incident Profiling Systems", 
        "Live Camera Processing", "Facial Recognition Systems"
      ]
    },
    {
      category: "Software Engineering & Concepts",
      icon: "📚",
      filterGroup: "Specialized",
      skills: [
        "Full-Stack Web Development", "Software Development", "Desktop Application Development", 
        "Web Application Development", "Software Engineering", 
        "System Development", "System Maintenance", "Software Deployment", "Software Testing", 
        "Clean Code Practices",
        "Application Maintenance", "Object-Oriented Programming (OOP)", "Data Structures", 
        "Algorithms", "System Analysis", "System Design", "Requirements Analysis", 
        "Version Control", "Debugging", "Code Optimization", "Performance Optimization", 
      ]
    },
    {
      category: "Networking & Infrastructure",
      icon: "🌐",
      filterGroup: "IT Infrastructure",
      skills: [
        "LAN Configuration", "Router Configuration", "Managed Switch Configuration", 
        "Network Topology","Network Deployment", "IT Infrastructure", "Network Troubleshooting"
      ]
    },
    {
      category: "Technical Support & Hardware",
      icon: "🔧",
      filterGroup: "IT Infrastructure",
      skills: [
        "Hardware Troubleshooting", "Computer Repair", "Operating System Troubleshooting", 
        "Technical Support", "Helpdesk Support", 
        "Hardware Maintenance", "Software Installation", "System Deployment"
      ]
    },
    {
      category: "UI / UX & Problem Solving",
      icon: "🧩",
      filterGroup: "Professional",
      skills: [
        "UI Design Fundamentals", "UX Design Fundamentals", "User-Centered Design", 
        "Responsive Interface Design", "Interactive User Interfaces", "Competitive Programming", 
        "Algorithm Design", "Logical Thinking", "Analytical Thinking", "Critical Thinking", 
        "Problem Solving"
      ]
    },
    {
      category: "Leadership & Project Management",
      icon: "👨‍💼",
      filterGroup: "Professional",
      skills: [
        "Technical Leadership", "Tech Lead", "Head Developer", "Project Leadership", 
        "Agile Development", "Agile Methodology", "Project Planning", "Team Collaboration", 
        "Software Architecture Planning", "Technical Decision Making",
        "Project Coordination"
      ]
    },
    {
      category: "Specialized Domains & Built Systems",
      icon: "📋",
      filterGroup: "Specialized",
      skills: [
        "Computer Vision Development",  
        "Incident Management Systems",  
        "Real-Time Monitoring Systems","Information System Development",
        "Queue Management System", "Human Resource Information System (HRIS)", "Clearance Management System", 
        "Face Recognition System", "Incident Profiling System", "Portfolio Website", 
        "Administrative Information Systems"
      ]
    },
    {
      category: "Certifications & Achievements",
      icon: "🏆",
      filterGroup: "Professional",
      skills: [
        "Top 3 Python Programmer", "Top 15 C++ Programming Competition Finalist", 
        "ASP.NET & MySql Bootcamp Graduate", "iSITE Member", "Python Programming Certification", 
        "C++ Programming Certification", "ASP.NET Development Certification", "MySQL Development Certification"
      ]
    },
    {
      category: "Professional Skills",
      icon: "🌟",
      filterGroup: "Professional",
      skills: [
        "Communication", "Teamwork", "Leadership", "Time Management", 
        "Adaptability", "Continuous Learning", "Attention to Detail", "Fast Learner"
      ]
    }
  ];

  const filterTabs = ['All', 'Core', 'Development', 'Specialized', 'IT Infrastructure', 'Professional'];

  const filteredCategories = activeFilter === 'All' 
    ? skillCategories 
    : skillCategories.filter(cat => cat.filterGroup === activeFilter);

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        
        <div className="skills-header">
          <h1>Skills & Expertise</h1>
          <p>
            A comprehensive breakdown of my capabilities, spanning full-stack web engineering, 
            artificial intelligence, enterprise architectures, and infrastructure management.
          </p>
        </div>

        {/* Dynamic Filter Controls */}
        <div className="skills-filter-bar">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              className={`filter-btn ${activeFilter === tab ? 'active' : ''}`}
              onClick={() => setActiveFilter(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Cards Grid Grid */}
        <div className="skills-grid">
          {filteredCategories.map((group, index) => {
            // Apply a staggered entry animation delay for aesthetic layout loading
            const gridAnimationDelay = { animationDelay: `${index * 0.05}s` };

            return (
              <div 
                key={group.category} 
                className={`skill-card ${group.isHighlight ? 'featured-card' : ''}`}
                style={gridAnimationDelay}
              >
                <h3>
                  <span>{group.icon}</span>
                  {group.category}
                </h3>
                
                <div className="skills-tags">
                  {group.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="skill-pill">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Skills;