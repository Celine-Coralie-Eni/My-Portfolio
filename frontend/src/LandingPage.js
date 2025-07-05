import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

const my_name = "Celine-Coralie";

function LandingPage() {
  const navigate = useNavigate();
  return (
    <div className="landing-root">
      <h1 className="landing-title">Welcome to {my_name}'s portfolio</h1>
      <button
        className="landing-get-started-btn"
        onClick={() => navigate("/home")}
      >
        Get Started
      </button>
    </div>
  );
}

export default LandingPage;
