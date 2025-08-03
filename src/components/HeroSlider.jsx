import React, { useEffect, useState } from "react";
import "./HeroSlider.css";

const slides = [
  {
    id: 1,
    text: "Banking Solutions",
    subtext:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident cupiditate suscipit, magnam libero velit esse sapiente officia inventore!",
    bgImage: "./assets/10002.jpg",
    ic: ".",
  },
  {
    id: 2,
    text: "Financing Solutions",
    subtext:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident cupiditate suscipit, magnam libero velit esse sapiente officia inventore!",
    bgImage: "./assets/10002.jpg",
    ic: "..",
  },
  {
    id: 3,
    text: "Savings Accounts",
    subtext:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident cupiditate suscipit, magnam libero velit esse sapiente officia inventore!",
    bgImage: "./assets/10002.jpg",
    ic: "...",
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      triggerSlide((currentSlide + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const triggerSlide = (index) => {
    setAnimating(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setAnimating(false);
    }, 300); // Match animation duration
  };

  const handleScroll = () => {
    const features = document.getElementById("features");
    if (features) {
      features.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero-slider">
      <div className={`hero-conent ${animating ? "animate" : ""}`}>
        <h1>{slides[currentSlide].text}</h1>
        <p>{slides[currentSlide].subtext}</p>
      </div>
      <button className="scroll-button" onClick={handleScroll}>
        ↓
      </button>
      <div className="dots-container">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentSlide === index ? "active" : ""}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
