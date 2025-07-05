import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar";
import LandingPage from "./LandingPage";
import Home from "./Home";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import FrontendProjects from "./FrontendProjects";
import BackendProjects from "./BackendProjects";
import FullstackProjects from "./FullstackProjects";

function App() {
  const [theme, setTheme] = useState(() => {
    // Try to use system preference or default to light
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      return "dark";
    }
    return "light";
  });

  useEffect(() => {
    document.body.className = theme + "-theme";
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <Router>
      <Navbar onToggleTheme={toggleTheme} theme={theme} />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/frontend" element={<FrontendProjects />} />
          <Route path="/projects/backend" element={<BackendProjects />} />
          <Route path="/projects/fullstack" element={<FullstackProjects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
