import React from "react";
import UploadForm from "./UploadForm";
import AchievementsList from "./AchievementsList";

function FrontendProjects() {
  return (
    <div>
      <UploadForm type="frontend" />
      <AchievementsList type="frontend" />
    </div>
  );
}

export default FrontendProjects;
