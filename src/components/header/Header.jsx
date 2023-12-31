import React from "react";
import { Link } from "react-router-dom";
import "../header/index.css";

/* update */
const Header = () => {
  return (
    <>
      <header>
        <Link to="#"></Link>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
