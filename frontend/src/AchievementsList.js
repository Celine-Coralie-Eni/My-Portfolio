import React, { useEffect, useState } from "react";
import "./AchievementsList.css";

function AchievementsList({ type }) {
  const [achievements, setAchievements] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAchievements = async () => {
      try {
        const res = await fetch("/projects.json");
        if (!res.ok) throw new Error("Failed to fetch achievements");
        const data = await res.json();
        setAchievements(type ? data.filter((a) => a.type === type) : data);
      } catch (err) {
        setAchievements([]);
      } finally {
        setLoading(false);
      }
    };
    fetchAchievements();
  }, [type]);

  if (loading) return <div>Loading projects...</div>;
  if (achievements.length === 0) return <div>No projects yet.</div>;

  return (
    <div className="projects-grid">
      {achievements.map((ach, idx) => (
        <div
          className="project-card"
          key={ach.title + idx}
          tabIndex={0}
          aria-label={ach.title}
        >
          {ach.image && (
            <img
              src={ach.image}
              alt={ach.title + " screenshot"}
              className="project-image"
            />
          )}
          <div className="project-content">
            <h3>{ach.title}</h3>
            <p>{ach.description}</p>
            {ach.liveLink && (
              <a
                href={ach.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
                aria-label={`Live link to ${ach.title}`}
              >
                Live Link
              </a>
            )}
            {ach.github && (
              <a
                href={ach.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
                aria-label={`GitHub repository for ${ach.title}`}
              >
                GitHub
              </a>
            )}
            {ach.tech && (
              <div className="project-tech">
                {ach.tech.map((t, i) => (
                  <span key={t + i} className="project-tech-tag">
                    {t}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default AchievementsList;
