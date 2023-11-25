import React from "react";
import ProjectItem from "./project.item.component";
const Project = ({ project }) => {
  return (
    <div>
      <div className="projects-page">
        {project
          .sort((a, b) =>
            a.name && b.name
              ? a.name.localeCompare(b.name, undefined, { sensitivity: "base" })
              : 0
          )
          .map((project, index) => (
            <ProjectItem key={index} {...project} />
          ))}
      </div>
    </div>
  );
};

export default Project;
