import React from "react";
import "./Features.css";
import img1 from "../assets/10003.svg";
import img2 from "../assets/10007.svg";
import img3 from "../assets/10004.svg";

const features = [
  {
    image: img1,
    title: "Money Savings",
    description:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
  },
  {
    image: img2,
    title: "Online Shoppings",
    description:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
  },
  {
    image: img3,
    title: "Credit / Debit Cards",
    description:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
  },
];

const Features = () => {
  return (
    <section id="features" className="feature-section">
      <div className="feature-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <img
              style={{ height: "80px" }}
              className="feature-icon"
              src={feature.image}
              alt={feature.title}
            />

            <h5 className="feature-title">{feature.title}</h5>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
