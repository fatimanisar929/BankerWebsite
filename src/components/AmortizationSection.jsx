import React from "react";
import "./AmortizationSection.css";
import image from "../assets/10011.jpg";

const AmortizationSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    document.getElementById("hero").scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section className="amortization-section">
      <div className="amortization-container">
        <div className="amortization-image">
          <img src={image} style={{ width: "550px" }} alt="Amortization" />
        </div>

        <div className="amortization-content">
          <h2>Amortization Computation</h2>
          <p>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </p>
          <ul className="feature-list">
            <li> Officia quaerat eaque neque</li>
            <li> Lorem ipsum dolor sit amet</li>
            <li> Consectetur adipisicing elit</li>
          </ul>
          <form onSubmit={handleSubmit}>
            <div className="email-form">
              <input type="email" required placeholder="Enter your email" />
              <button type="submit">Submit Email</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AmortizationSection;
