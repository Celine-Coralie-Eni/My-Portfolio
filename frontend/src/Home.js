import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const SOCIALS = [
  { name: "GitHub", url: "https://github.com/Celine-Coralie-Eni", icon: "🐙" },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/celine-coralie-eni-a726a0342/",
    icon: "🔗",
  },
];

function Home() {
  const navigate = useNavigate();
  const [profilePic, setProfilePic] = useState(null);
  const [preview, setPreview] = useState(null);

  const handlePicChange = (e) => {
    const file = e.target.files[0];
    setProfilePic(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  };

  return (
    <section className="hero-fade-in home-hero-layout home-hero-reverse">
      <div className="home-main-col">
        <h1 className="home-h1">
          Hello!
          <br />
          I'm Celine-Coralie
        </h1>
        <h2 className="home-h2">I'm a Software Developer</h2>
        <p>
          💻 A systems-minded software engineer building secure, scalable web
          solutions with JavaScript, Rust, and containers.
        </p>
      </div>
      <div className="home-profile-col profile-card">
        <div className="profile-pic-wrapper">
          <img
            src={preview || "/default-profile.png"}
            alt="Profile"
            className="profile-pic"
          />
          <input
            type="file"
            accept="image/*"
            id="profile-upload"
            style={{ display: "none" }}
            onChange={handlePicChange}
          />
          <label htmlFor="profile-upload" className="profile-upload-btn">
            Upload Photo
          </label>
        </div>
        <div className="profile-socials">
          <span className="profile-socials-label">Check me on:</span>
          <div className="profile-socials-links">
            {SOCIALS.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="profile-social-icon"
                title={s.name}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
