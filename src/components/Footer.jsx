import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  const handleClick = (e) => {
    e.preventDefault();
    document.getElementById("hero").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="container">
        {/* About Us */}
        <div>
          <h3 className="footer-heading">About Us</h3>
          <p className="footer-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            facere laudantium magnam voluptatum autem. Amet aliquid nesciunt
            veritatis aliquam.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            <li>
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("about")
                    .scrollIntoView({ behavior: "smooth" });
                }}
                className="nav-link"
              >
                Terms
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("about")
                    .scrollIntoView({ behavior: "smooth" });
                }}
                className="nav-link"
              >
                Policy
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("about")
                    .scrollIntoView({ behavior: "smooth" });
                }}
                className="nav-link"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("services")
                    .scrollIntoView({ behavior: "smooth" });
                }}
                className="nav-link"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("about")
                    .scrollIntoView({ behavior: "smooth" });
                }}
                className="nav-link"
              >
                Testimonials
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("contact")
                    .scrollIntoView({ behavior: "smooth" });
                }}
                className="nav-link"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="footer-heading">Follow Us</h3>
          <div className="social-icons">
            <a onClick={handleClick} href="#hero">
              <FaFacebookF />
            </a>
            <a onClick={handleClick} href="#hero">
              <FaTwitter />
            </a>
            <a onClick={handleClick} href="#hero">
              <FaInstagram />
            </a>
            <a onClick={handleClick} href="#hero">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="footer-heading">Subscribe Newsletter</h3>
          <div className="input-footer">
            <input
              type="email"
              placeholder="Enter Email"
              className="newsletter-input"
            />
            <button>Send</button>
          </div>
        </div>
      </div>
      <hr style={{ color: "grey" }}></hr>
      {/* Bottom text */}
      <div className="footer-bottom">
        <p>
          Copyright ©2025 All rights reserved | This template is made with ❤️ by
          <span className="brand-name"> Colorlib</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
