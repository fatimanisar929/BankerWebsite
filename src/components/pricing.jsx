import React from "react";
import "./pricing.css";

const plans = [
  {
    title: "Basic",
    price: "$47",
    features: [
      { text: "Officia quaerat eaque neque", included: true },
      { text: "Possimus aut consequuntur incidunt", included: true },
      { text: "Lorem ipsum dolor sit amet", included: false },
      { text: "Consectetur adipisicing elit", included: false },
      { text: "Dolorum esse odio quas architecto sint", included: false },
    ],
    buttonColor: "#5e6367",
  },
  {
    title: "Premium",
    price: "$200",
    features: [
      { text: "Officia quaerat eaque neque", included: true },
      { text: "Possimus aut consequuntur incidunt", included: true },
      { text: "Lorem ipsum dolor sit amet", included: true },
      { text: "Consectetur adipisicing elit", included: true },
      { text: "Dolorum esse odio quas architecto sint", included: false },
    ],
    buttonColor: "#ff7a00",
  },
  {
    title: "Professional",
    price: "$750",
    features: [
      { text: "Officia quaerat eaque neque", included: true },
      { text: "Possimus aut consequuntur incidunt", included: true },
      { text: "Lorem ipsum dolor sit amet", included: true },
      { text: "Consectetur adipisicing elit", included: true },
      { text: "Dolorum esse odio quas architecto sint", included: true },
    ],
    buttonColor: "#5e6367",
  },
];

const Pricing = () => {
  const handleClick = (e) => {
    e.preventDefault();

    document.getElementById("hero").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="pricing-section">
      <div className="heading">
        <h1>Pricing</h1>
      </div>
      <div className="pricing-container">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`pricing-card ${index === 1 ? "highlight-card" : ""}`}
          >
            <h2>{plan.title}</h2>
            <p className="price">
              <span className="amount">{plan.price}</span>{" "}
              <span className="per">/ year</span>
            </p>
            <ul>
              {plan.features.map((feature, i) => (
                <li
                  key={i}
                  className={feature.included ? "included" : "excluded"}
                >
                  <span className="check">{feature.included ? "✔" : "✔"}</span>
                  {feature.text}
                </li>
              ))}
            </ul>
            <button
              style={{ backgroundColor: plan.buttonColor }}
              onClick={handleClick}
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
