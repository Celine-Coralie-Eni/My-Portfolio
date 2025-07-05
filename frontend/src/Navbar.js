import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ onToggleTheme, theme }) {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span className="logo-circle">C</span>
        <span className="logo-text">Portfolio</span>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <button
        className="theme-toggle-btn"
        onClick={onToggleTheme}
        aria-label="Toggle light/dark mode"
      >
        {theme === "dark" ? "🌙" : "☀️"}
      </button>
    </nav>
  );
}

export default Navbar;
