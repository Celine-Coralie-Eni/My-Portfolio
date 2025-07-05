import React, { useEffect, useState } from "react";

function AchievementsList({ type }) {
  const [achievements, setAchievements] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAchievements = async () => {
      try {
        const res = await fetch("http://localhost:5000/achievements");
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

  if (loading) return <div>Loading achievements...</div>;
  if (achievements.length === 0)
    return <div>No achievements uploaded yet.</div>;

  return (
    <div>
      <h2>Uploaded Achievements</h2>
      <ul>
        {achievements.map((ach) => (
          <li key={ach.id || ach.filename} style={{ marginBottom: "1em" }}>
            <strong>{ach.title}</strong>
            <div>{ach.description}</div>
            <div>
              <a
                href={`http://localhost:5000/uploads/${ach.filename}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                View File
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AchievementsList;
