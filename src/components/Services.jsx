import React from "react";
import "./Services.css";
import img1 from "../assets/10003.svg";
import img2 from "../assets/10004.svg";
import img3 from "../assets/10005.svg";
import img4 from "../assets/10006.svg";
import img5 from "../assets/10007.svg";
import img6 from "../assets/10008.svg";

import { Link } from "react-router-dom";

const services = [
  {
    icon: img1,
    title: "Business Consulting",
    description:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
  },
  {
    icon: img2,
    title: "Credit Card",
    description:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
  },
  {
    icon: img3,
    title: "Income Monitoring",
    description:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
  },
  {
    icon: img4,
    title: "Insurance Consulting",
    description:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
  },
  {
    icon: img5,
    title: "Financial Investment",
    description:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
  },
  {
    icon: img6,
    title: "Financial Management",
    description:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
  },
];

const Services = () => {
  const handleClick = (e) => {
    e.preventDefault();

    document.getElementById("hero").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="services-section">
      <div className="heading">
        <h1>Our Services</h1>
      </div>
      <div className="services-container">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="icon-wrapper">
              <img
                src={service.icon}
                style={{ width: 80, height: 80 }}
                alt={service.title}
              />
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <Link onClick={handleClick} className="learn" to="/navbar">
              Learn More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
