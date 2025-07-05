import React from "react";
import { Link } from "react-router-dom";
import "./Projects.css";

function Projects() {
  return (
    <section className="projects-section">
      <h2 className="projects-main-title">Projects & Achievements</h2>
      <div className="projects-cards-nav">
        <Link to="/projects/frontend" className="projects-card-link">
          <div className="projects-card">
            <h3>Frontend Projects</h3>
            <p>Showcase of UI/UX and client-side work</p>
          </div>
        </Link>
        <Link to="/projects/backend" className="projects-card-link">
          <div className="projects-card">
            <h3>Backend Projects</h3>
            <p>APIs, databases, and server-side logic</p>
          </div>
        </Link>
        <Link to="/projects/fullstack" className="projects-card-link">
          <div className="projects-card">
            <h3>Full Stack Projects</h3>
            <p>End-to-end solutions and integrations</p>
          </div>
        </Link>
      </div>
    </section>
  );
}

export default Projects;
