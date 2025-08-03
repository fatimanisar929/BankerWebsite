import React from "react";
import "./GallerySection.css";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import img1 from "../assets/10012.jpg";
import img2 from "../assets/10010.jpg";
import img3 from "../assets/10026.webp";
import img4 from "../assets/10015.jpg";
import img5 from "../assets/10014.png";
import img6 from "../assets/10023.png";
import img7 from "../assets/10019.png";
import img8 from "../assets/10024.png";

const teamMembers = [
  {
    name: "Kaiara Spencer",
    position: "FINANCE MANAGER",
    image: img1,
  },
  {
    name: "Dave Simpson",
    position: "MARKETING MANAGER",
    image: img2,
  },
  {
    name: "Ben Thompson",
    position: "ACCOUNTANT",
    image: img3,
  },
  {
    name: "Kyla Stewart",
    position: "ACCOUNTANT",
    image: img4,
  },
  {
    name: "Kaiara Spencer",
    position: "ACCOUNTANT",
    image: img5,
  },
  {
    name: "Dave Simpson",
    position: "BANK TELLER",
    image: img6,
  },
  {
    name: "Ben Thompson",
    position: "BANK TELLER",
    image: img7,
  },
  {
    name: "Chris Stewart",
    position: "BANK TELLER",
    image: img8,
  },
];

const GallerySection = () => {
  const scrollToHero = () => {
    const hero = document.getElementById("hero");
    if (hero) {
      hero.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="gallery-section">
      <div className="heading">
        <h1>Meet Team</h1>
        <p>
          A small river named Duden flows by their place and supplies it with
          the necessary regelialia.
        </p>
      </div>
      <div className="gallery-container">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <div className="image-wrapper">
              <img src={member.image} alt={member.name} />
              <div className="social-icons1">
                <span onClick={scrollToHero}>
                  <FaFacebookF />
                </span>
                <span onClick={scrollToHero}>
                  <FaTwitter />
                </span>
                <span onClick={scrollToHero}>
                  <FaLinkedinIn />
                </span>
              </div>
            </div>
            <h3>{member.name}</h3>
            <p>{member.position}</p>
          </div>
        ))}
      </div>
      <hr></hr>
    </section>
  );
};

export default GallerySection;
