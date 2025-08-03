import React, { useState, useEffect } from "react";
import "./working.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import img1 from "../assets/10020.jpg";
import img2 from "../assets/10021.jpg";
import img3 from "../assets/10022.jpg";

const slides = [
  {
    id: 1,
    image: img1,
    title: "01. Online Applications",
    description:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
  },
  {
    id: 2,
    image: img2,
    title: "02. Get an approval",
    description:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
  },
  {
    id: 3,
    image: img3,
    title: "03. Card Delivery",
    description:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
  },
];

const Working = () => {
  const handleClick = (e) => {
    e.preventDefault();

    document.getElementById("hero").scrollIntoView({ behavior: "smooth" });
  };
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState("next");

  const nextSlide = () => {
    setDirection("next");
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection("prev");
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-section">
      <div className="heading">
        <h1>How It Works</h1>
        <p>Follow these simple steps to get started with your application.</p>
      </div>

      <div className="slider-container">
        {slides.map((slide, index) => (
          <div
            className={`slide ${index === current ? "active" : ""} ${
              direction === "next" ? "slide-in-right" : "slide-in-left"
            }`}
            key={slide.id}
          >
            <div className="slider-image">
              <img src={slide.image} alt={`Slide ${slide.id}`} />
            </div>
            <div className="slider-content">
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
              <button onClick={handleClick} className="learn-more" to="/navbar">
                Learn More
              </button>
            </div>
          </div>
        ))}

        <div className="slider-buttons">
          <button onClick={prevSlide}>
            <FaArrowLeft />
          </button>
          <button onClick={nextSlide}>
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Working;
