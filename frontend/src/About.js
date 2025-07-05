import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about-section">
      <div className="about-card">
        <h2 className="about-title">📖 About Me</h2>
        <p className="about-bio">
          I'm a passionate software developer and designer with experience in
          building modern, user-focused web applications.
          <br />
          <span className="about-bio-cont">
            A systems-minded problem solver who loves crafting clean UIs and
            seamless user experiences.
          </span>
        </p>
        <h3 className="about-skills-title">🧠 Skills</h3>
        <ul className="about-skills-list">
          <li>JavaScript (React, Node.js)</li>
          <li>HTML &amp; CSS</li>
          <li>UI/UX Design</li>
          <li>Express.js</li>
          <li>PostgreSQL</li>
        </ul>
      </div>
    </section>
  );
}

export default About;
