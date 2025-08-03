// Gallery.js
import React, { useState, useEffect, useRef } from "react";
import {
  FaSearch,
  FaTimes,
  FaArrowLeft,
  FaArrowRight,
  FaPlay,
  FaPause,
} from "react-icons/fa";
import "./Gallery.css";
import img1 from "../assets/10011.jpg";
import img2 from "../assets/10017.jpg";
import img3 from "../assets/10013.jpg";
import img4 from "../assets/10016.jpg";
import img5 from "../assets/10025.webp";
import img6 from "../assets/10011.jpg";
import img7 from "../assets/10017.jpg";
import img8 from "../assets/10013.jpg";
import img9 from "../assets/10016.jpg";
import img10 from "../assets/10025.webp";
import img11 from "../assets/10011.jpg";
import img12 from "../assets/10017.jpg";
import img13 from "../assets/10011.jpg";
import img14 from "../assets/10013.jpg";

const categories = ["All", "Events", "Party", "Holidays"];

const images = [
  { src: img1, category: "Events" },
  { src: img2, category: "Events" },
  { src: img3, category: "Party" },
  { src: img4, category: "Party" },
  { src: img5, category: "Events" },
  { src: img6, category: "Events" },
  { src: img7, category: "Events" },
  { src: img8, category: "Party" },
  { src: img9, category: "Events" },
  { src: img10, category: "Party" },
  { src: img11, category: "Holidays" },
  { src: img12, category: "Party" },
  { src: img13, category: "Holidays" },
  { src: img14, category: "Holidays" },
];

const Gallery = () => {
  const [filter, setFilter] = useState("All");
  const [modalIndex, setModalIndex] = useState(null);
  const [zoomed, setZoomed] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const progressRef = useRef(null);

  const filteredImages =
    filter === "All" ? images : images.filter((img) => img.category === filter);

  const handleScroll = () => {
    const navbar = document.querySelector(".navbar");
    if (navbar) {
      if (window.scrollY > 100) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (playing) {
      progressRef.current = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setModalIndex(
              (prevIndex) => (prevIndex + 1) % filteredImages.length
            );
            return 0;
          }
          return prev + 1;
        });
      }, 30);
    } else {
      clearInterval(progressRef.current);
    }
    return () => clearInterval(progressRef.current);
  }, [filteredImages.length, playing]);

  const openModal = (index) => {
    setModalIndex(index);
    setZoomed(false);
    setProgress(0);
    setPlaying(false);
  };

  const closeModal = () => {
    setModalIndex(null);
    setZoomed(false);
    setPlaying(false);
    setProgress(0);
  };

  const nextImage = () => {
    setModalIndex((prev) => (prev + 1) % filteredImages.length);
    setProgress(0);
  };

  const prevImage = () => {
    setModalIndex(
      (prev) => (prev - 1 + filteredImages.length) % filteredImages.length
    );
    setProgress(0);
  };
  const toggleZoom = () => setZoomed((prev) => !prev);

  return (
    <div className="gallery-section">
      <h2 className="gallery-title">Gallery</h2>

      <div className="gallery-buttons">
        {categories.map((cat) => (
          <button
            key={cat}
            className={filter === cat ? "active" : ""}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="gallery-grid">
        {filteredImages.map((img, index) => (
          <div
            className="gallery-item"
            key={index}
            style={{ animationDelay: `${index * 0.1}s` }}
            onClick={() => openModal(index)}
          >
            <img src={img.src} alt="gallery" />
            <div className="overlay">
              <FaSearch className="search-icon" />
            </div>
          </div>
        ))}
      </div>

      {modalIndex !== null && (
        <div
          className={`modal-overlay ${zoomed ? "zoomed" : ""}`}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "85vh",
            backgroundColor: "rgba(30, 29, 29, 0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
        >
          <div className="modal-header">
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <span className="modal-counter">
              {modalIndex + 1}/{filteredImages.length}
            </span>
          </div>

          <FaTimes className="icon close-btn" onClick={closeModal} />
          {playing ? (
            <FaPause
              className="icon search-pause"
              onClick={() => setPlaying(false)}
            />
          ) : (
            <FaPlay
              className="icon search-pause"
              onClick={() => setPlaying(true)}
            />
          )}

          <FaSearch className="search-close" onClick={toggleZoom} />

          <FaArrowLeft className="arrow left" onClick={prevImage} />
          <img
            src={filteredImages[modalIndex].src}
            className={`modal-image ${zoomed ? "zoomed" : ""}`}
            alt="fullscreen"
            style={{
              maxHeight: "85vh",
              maxWidth: "90vw",
              objectFit: "contain",
            }}
          />
          <FaArrowRight className="arrow right" onClick={nextImage} />
        </div>
      )}
    </div>
  );
};

export default Gallery;
