import React, { useState } from "react";
import "./UploadForm.css";

const TYPE_OPTIONS = [
  { value: "frontend", label: "Frontend" },
  { value: "backend", label: "Backend" },
  { value: "fullstack", label: "Full Stack" },
];

function UploadForm({ type }) {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [projectType, setProjectType] = useState(type || "frontend");
  const [uploadPassword, setUploadPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("achievement", file);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("type", projectType);
    formData.append("uploadPassword", uploadPassword);

    const res = await fetch("http://localhost:5000/upload", {
      method: "POST",
      body: formData,
    });
    if (res.ok) {
      alert("Uploaded!");
      setFile(null);
      setTitle("");
      setDescription("");
      setUploadPassword("");
      if (!type) setProjectType("frontend");
    } else {
      const data = await res.json();
      alert(data.error || "Upload failed");
    }
  };

  return (
    <form className="upload-form-card" onSubmit={handleSubmit}>
      {!type && (
        <div className="upload-form-group">
          <label htmlFor="project-type">Project Type</label>
          <select
            id="project-type"
            value={projectType}
            onChange={(e) => setProjectType(e.target.value)}
            className="upload-form-input"
            required
          >
            {TYPE_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      )}
      <div className="upload-form-group">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          placeholder="Enter project title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="upload-form-input"
          required
        />
      </div>
      <div className="upload-form-group">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          placeholder="Enter project description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="upload-form-input"
          rows={3}
          required
        />
      </div>
      <div className="upload-form-group">
        <label htmlFor="file">Choose Project File (.zip)</label>
        <input
          id="file"
          type="file"
          accept=".zip"
          onChange={(e) => setFile(e.target.files[0])}
          className="upload-form-input"
          required
        />
        <small className="upload-form-note">
          Please upload your project as a <b>.zip</b> file.
        </small>
      </div>
      <div className="upload-form-group">
        <label htmlFor="uploadPassword">Upload Password</label>
        <input
          id="uploadPassword"
          type="password"
          placeholder="Enter upload password"
          value={uploadPassword}
          onChange={(e) => setUploadPassword(e.target.value)}
          className="upload-form-input"
          required
        />
      </div>
      <button type="submit" className="upload-form-btn">
        Upload
      </button>
    </form>
  );
}

export default UploadForm;
