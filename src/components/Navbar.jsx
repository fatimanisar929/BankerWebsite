import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    document.getElementById("hero").scrollIntoView({ behavior: "smooth" });
  };
  const handleClick = (e) => {
    e.preventDefault();

    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          Banker<span style={{ color: "red" }}>.</span>
        </div>

        <div className="hamburger" onClick={() => setMenuOpen(true)}>
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </div>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <span className="close-btn" onClick={() => setMenuOpen(false)}>
            ×
          </span>

          <li>
            <Link to="#" onClick={handleSubmit} className="nav-link">
              Home
            </Link>
          </li>

          <li className="dropdown">
            <span
              className="nav-link"
              onClick={() => setAboutOpen((prev) => !prev)}
            >
              About Us ▼
            </span>

            <ul className={`dropdown-menu ${aboutOpen ? "show" : ""}`}>
              <li>
                <a
                  href="#gallerysection"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("team")
                      .scrollIntoView({ behavior: "smooth" });
                  }}
                  className="nav-link"
                >
                  Team
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("pricing")
                      .scrollIntoView({ behavior: "smooth" });
                  }}
                  className="nav-link"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("faq")
                      .scrollIntoView({ behavior: "smooth" });
                  }}
                  className="nav-link"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#gallerysection"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("gallery")
                      .scrollIntoView({ behavior: "smooth" });
                  }}
                  className="nav-link"
                >
                  Gallery
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
                  href="#testimonials"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("test")
                      .scrollIntoView({ behavior: "smooth" });
                  }}
                  className="nav-link"
                >
                  Testimonials
                </a>
              </li>

              <li className="more-dropdown">
                <span>More Links ▶</span>
                <ul className="sub-dropdown">
                  <li>
                    <Link to="/menu1">Menu One</Link>
                  </li>
                  <li>
                    <Link to="/menu2">Menu Two</Link>
                  </li>
                  <li>
                    <Link to="/menu3">Menu Three</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <li>
            <a
              href="#blog"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("blog")
                  .scrollIntoView({ behavior: "smooth" });
              }}
              className="nav-link"
            >
              Blog
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
              Contact
            </a>
          </li>

          <li className="social-icons">
            <a onClick={handleClick} to="/contact" href="#contact">
              <FaFacebookF />
            </a>
            <a onClick={handleClick} to="/contact" href="#contact">
              <FaTwitter />
            </a>
            <a onClick={handleClick} to="/contact" href="#contact">
              <FaLinkedinIn />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
