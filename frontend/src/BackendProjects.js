import React from "react";
import UploadForm from "./UploadForm";
import AchievementsList from "./AchievementsList";

function BackendProjects() {
  return (
    <div>
      <UploadForm type="backend" />
      <AchievementsList type="backend" />
    </div>
  );
}

export default BackendProjects;
