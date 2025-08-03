import React from "react";
import "./consult.css";
import image from "../assets/10018.jpg";
import image1 from "../assets/ss2.png";
import image2 from "../assets/ss1.png";
import { Link } from "react-router-dom";

const Consult = () => {
  const handleClick = (e) => {
    e.preventDefault();

    document.getElementById("hero").scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section className="consult-section">
      <div className="consult-container">
        <div className="consult-image">
          <img src={image} style={{ width: "550px" }} alt="ConsultUs" />
        </div>

        <div className="consult-content">
          <h2>Bank Loan</h2>
          <div className="consult-paragraph">
            <img
              src={image1}
              style={{ width: "70px", height: "70px" }}
              alt="ConsultUs"
            />
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
          <Link onClick={handleClick} className="learn-link" to="/navbar">
            Learn More
          </Link>

          <h2>Banking Consultation</h2>
          <div className="consult-paragraph">
            <img
              src={image2}
              style={{ width: "70px", height: "70px" }}
              alt="ConsultUs"
            />
            <p>
              Separated they live in Bookmarksgrove right at the coast of the
              Semantics, a large language ocean.
            </p>
          </div>
          <Link onClick={handleClick} className="learn-link" to="/navbar">
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Consult;
