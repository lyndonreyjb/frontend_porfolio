import React, { useState, useEffect } from "react";
import { client } from "../../client";
import { Wrap } from "../wrap";

import "./projects.style.scss";
import Project from "./project.component";

const Projects = () => {
  const [project, setProject] = useState([]);

  useEffect(() => {
    const query = '*[_type == "project"]';
    client.fetch(query).then((data) => setProject(data));
  }, []);

  return (
    <div className="project-container">
      <h1 className="project-title">Projects</h1>
      <Project project={project} />
    </div>
  );
};

export default Wrap(Projects, "projects");
