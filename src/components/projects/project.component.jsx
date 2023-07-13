import React from "react";
import ProjectItem from "./project.item.component";
const Project = ({ project }) => {
  return (
    <div>
      <div className="projects-page">
        {project.map((project, index) => {
          return <ProjectItem key={index} {...project} />;
        })}
      </div>
    </div>
  );
};

export default Project;
