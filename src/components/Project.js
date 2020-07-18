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
        <a className="see-more" href={project.link}>
          See Project
        </a>
      </div>
    </a>
  );
};

export default Project;
