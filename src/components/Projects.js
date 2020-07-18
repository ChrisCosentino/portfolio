import React, { useEffect, useState } from "react";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";
import { Link } from "react-scroll";

import Project from "./Project";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("./projects.json")
      .then((res) => {
        setProjects(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  console.log(projects);

  if (projects.length === 0) {
    return <ClipLoader />;
  }

  return (
    <div className="container">
      <Link
        className="projects-name"
        activeClass="active"
        to="projects"
        spy={true}
        smooth={true}
        duration={500}
      >
        Projects
      </Link>
      <div className="projects-container" id="projects">
        {projects.map((project) => (
          <Project key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
