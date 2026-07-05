import React, { useState, useEffect, useRef } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import "./gallery.css";

function Gallery() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // State to track the currently active preview image
  const [selectedImage, setSelectedImage] = useState(null);

  // Refs for GSAP targets
  const titleRef = useRef(null);
  const gridRef = useRef(null);

  const id = searchParams.get("id");
  const name = searchParams.get("name");

  const [projectTitle, setProjectTitle] = useState(
    name ? decodeURIComponent(name) : "Project Gallery"
  );

  useEffect(() => {
    if (!id || id.trim() === "") {
      navigate("/projects");
      return;
    }

    if (name) {
      setProjectTitle(decodeURIComponent(name));
    }

    const loadProjectImages = async () => {
      setLoading(true);
      try {
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

        const targetFolder = folderMapping[id];

        if (!targetFolder) {
          setImages([]);
          setLoading(false);
          return;
        }

        const imageModules = import.meta.glob(
          "../../assets/project/**/images/*.{png,jpg,jpeg,svg,webp}",
          { eager: true }
        );

        const projectImages = [];
        const targetFolderPattern = `/project/${targetFolder}/images/`.toLowerCase();

        for (const path in imageModules) {
          if (path.toLowerCase().includes(targetFolderPattern)) {
            const imageUrl = imageModules[path].default || imageModules[path];
            projectImages.push(imageUrl);
          }
        }

        setImages(projectImages);
      } catch (error) {
        console.error("Error loading local gallery images:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProjectImages();
  }, [id, name, navigate]);

  // GSAP Animation Logic
  useEffect(() => {
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: -30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
      );
    }

    if (!loading && images.length > 0 && gridRef.current) {
      const items = gridRef.current.querySelectorAll(".gallery-item");
      
      gsap.fromTo(
        items,
        { opacity: 0, y: 40, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.1,
          clearProps: "all"
        }
      );
    }
  }, [loading, images, projectTitle]);

  return (
    <section className="gallery-container">
      <div className="gallery-header">
        <h1 ref={titleRef} style={{ opacity: 0 }}>{projectTitle}</h1>
      </div>

      {loading ? (
        <div className="gallery-status">Loading project assets...</div>
      ) : images.length > 0 ? (
        <div ref={gridRef} className="gallery-grid">
          {images.map((imgSrc, index) => (
            <div 
              key={index} 
              className="gallery-item" 
              style={{ opacity: 0 }}
              onClick={() => setSelectedImage(imgSrc)}
            >
              <img
                src={imgSrc}
                alt={`Project snapshot ${index + 1}`}
                className="gallery-image"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="gallery-status empty-state">
          <p>No preview images found for this project yet.</p>
        </div>
      )}

      {/* Image Preview Modal/Dialog */}
      {selectedImage && (
        <div className="gallery-modal" onClick={() => setSelectedImage(null)}>
          <button className="modal-close-btn" onClick={() => setSelectedImage(null)}>
            &times;
          </button>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Preview Target" className="modal-image" />
          </div>
        </div>
      )}
    </section>
  );
}

export default Gallery;