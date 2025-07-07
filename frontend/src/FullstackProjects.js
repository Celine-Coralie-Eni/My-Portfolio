import React, { useState, useEffect } from "react";
import UploadForm from "./UploadForm";
import AchievementsList from "./AchievementsList";

const OWNER_PASSWORD = "yourSecretPassword"; // Change this to your own password

function FullstackProjects() {
  const [isOwner, setIsOwner] = useState(false);
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (localStorage.getItem("isOwner") === "true") {
      setIsOwner(true);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === OWNER_PASSWORD) {
      setIsOwner(true);
      localStorage.setItem("isOwner", "true");
    } else {
      alert("Incorrect password");
    }
  };

  const handleLogout = () => {
    setIsOwner(false);
    localStorage.removeItem("isOwner");
  };

  return (
    <div>
      {isOwner ? (
        <>
          <button
            onClick={handleLogout}
            style={{ float: "right", marginBottom: "1rem" }}
          >
            Logout
          </button>
          <UploadForm type="fullstack" />
        </>
      ) : (
        <form onSubmit={handleLogin} style={{ marginBottom: "2rem" }}>
          <input
            type="password"
            placeholder="Owner password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              padding: "0.7rem",
              fontSize: "1rem",
              borderRadius: "0.5rem",
              border: "1.5px solid #ccc",
              marginRight: "0.7rem",
            }}
            required
          />
          <button type="submit" className="say-hello-btn">
            Login as Owner
          </button>
        </form>
      )}
      <AchievementsList type="fullstack" />
    </div>
  );
}

export default FullstackProjects;
