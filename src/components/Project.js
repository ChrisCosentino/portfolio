import React from "react";

const Project = ({ project }) => {
  return (
    <a
      className="project-container"
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={project.img} alt="project img" />
      <div className="project-info">
        <span className="p-title">{project.name}</span>
        <span className="p-desc">{project.desc}</span>
        <a
          className="see-more"
          target="_blank"
          rel="noopener noreferrer"
          href={project.link}
        >
          Visit Project
        </a>
      </div>
    </a>
  );
};

export default Project;
