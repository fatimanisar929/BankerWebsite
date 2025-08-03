import React from "react";
import "./AboutUs.css";
import image from "../assets/10018.jpg";

const AboutUs = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="heading">
          <h1>About Us</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            minima neque tempora reiciendis.
          </p>
        </div>
        <div className="about-image">
          <img src={image} style={{ width: "550px" }} alt="AboutUs" />
        </div>

        <div className="about-content">
          <h2>We Solve Your Financial Problem</h2>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
          <p>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country, in which
            roasted parts of sentences fly into your mouth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
