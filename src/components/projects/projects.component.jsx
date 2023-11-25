import React, { useState, useEffect } from "react";
import { client } from "../../client";
import { Wrap } from "../wrap";

import "./projects.style.scss";
import Project from "./project.component";

const Projects = () => {
  const [project, setProject] = useState([]);

  useEffect(() => {
    const query = '*[_type == "project"] | order(_createdAt desc)';
    client.fetch(query).then((data) => setProject(data));
  }, []);

  return (
    <div id="project">
      <div className="project-container">
        <h1 className="project-title">Projects</h1>
        <Project project={project} />
      </div>
    </div>
  );
};

export default Wrap(Projects, "projects");
