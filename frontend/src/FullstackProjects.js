import React from "react";
import UploadForm from "./UploadForm";
import AchievementsList from "./AchievementsList";

function FullstackProjects() {
  return (
    <div>
      <UploadForm type="fullstack" />
      <AchievementsList type="fullstack" />
    </div>
  );
}

export default FullstackProjects;
