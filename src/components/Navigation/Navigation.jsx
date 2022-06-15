import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Navigation = () => {
  return (
    <nav>
      <div className="nav">
        <h3>
          <NavLink to="/">FS</NavLink>
        </h3>
        <div className="nav__links-inner">
          <NavLink to="/about">About</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
        <div className="nav__links-outer">
          <a
            href="https://github.com/FrankoSaf"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon="fa-brands fa-github" />
          </a>
          <a
            href="https://www.linkedin.com/in/franko-s-06495623b/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon="fa-brands fa-linkedin" />
          </a>
          <a
            href="mailto:franko.safradin13@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon="fa-solid fa-envelope" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
