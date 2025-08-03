import React, { useState } from "react";

import "./Contact.css"; // Make sure to create the CSS file
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    document.getElementById("hero").scrollIntoView({ behavior: "smooth" });
    alert("Message sent!");
  };
  const handleClick = (e) => {
    e.preventDefault();

    document.getElementById("hero").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <ul className="contact-links">
        <li className="contact-icons">
          <div className="location-section">
            <a onClick={handleClick} to="/contact" href="#contact">
              <FaMapMarkerAlt />
            </a>
            <span>
              203 Fake St. Mountain View, San Francisco, California, USA
            </span>
          </div>
          <div className="phone-section">
            <a onClick={handleClick} to="/contact" href="#contact">
              <FaPhone />
            </a>
            <span onClick={handleClick}>+1 232 3235 324</span>
          </div>
          <div className="mail-section">
            <a onClick={handleClick} to="/contact" href="#contact">
              <FaEnvelope />
            </a>
            <span onClick={handleClick}>youremail@domain.com</span>
          </div>
        </li>
      </ul>
      <form className="contact-form" onSubmit={handleSubmit}>
        <h3>Contact Form</h3>

        <div className="row">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Write your notes or questions here.."
          value={formData.message}
          onChange={handleChange}
          rows="5"
          required
        />

        <button onSubmit={handleSubmit} type="submit">
          Send Message
        </button>
      </form>
    </div>
  );
};
export default Contact;
