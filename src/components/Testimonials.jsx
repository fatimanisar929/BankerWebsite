import React, { useEffect, useState } from "react";
import "./Testimonials.css";
import img1 from "../assets/10019.png";
import img2 from "../assets/10023.png";
import img3 from "../assets/10024.png";
import img4 from "../assets/10024.png";

const testimonials = [
  {
    id: 1,
    name: "John Smith",
    review:
      "“ Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. ”",
    image: img1,
  },
  {
    id: 2,
    name: "Christine Aguilar",
    review:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
    image: img2,
  },
  {
    id: 3,
    name: "Robert Spears",
    review:
      "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.",
    image: img3,
  },
  {
    id: 4,
    name: "Bruce Rogers",
    review:
      "The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way. ",
    image: img4,
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      triggerAnimation((current + 1) % testimonials.length);
    }, 5000); // every 5 sec

    return () => clearInterval(interval);
  }, [current]);

  const triggerAnimation = (index) => {
    setAnimating(true);
    setTimeout(() => {
      setCurrent(index);
      setAnimating(false);
    }, 300); // Match the animation duration
  };
  return (
    <div className="testimonial-slider">
      <div className="heading">
        <h1>Happy Customers</h1>
      </div>

      <div className={`testimonial-conent ${animating ? "animate" : ""}`}>
        <p className="review">“{testimonials[current].review}”</p>
        <div className="person">
          <img
            src={testimonials[current].image}
            alt={testimonials[current].name}
            className="person-img"
          />
          <h4>{testimonials[current].name}</h4>
        </div>
      </div>

      <div className="testimonial-dots">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`testimonial-dot ${current === index ? "active" : ""}`}
            onClick={() => triggerAnimation(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
