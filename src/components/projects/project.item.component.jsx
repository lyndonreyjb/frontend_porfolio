import React from "react";
import { urlFor } from "../../client";
import { AiFillGithub } from "react-icons/ai";
import { RiComputerLine } from "react-icons/ri";
const ProjectItem = ({ title, description, imgUrl, projectLink, codeLink }) => {
  const imageUrl = urlFor(imgUrl);

  return (
    <div>
      <div className="project-item">
        <div className="project-info">
          <img src={imageUrl} alt={title} />
          <div>
            <div className="project-links">
              <h2>{title}</h2>
              <div className="buttons">
                <a href={projectLink}>
                  <RiComputerLine className="icons" />
                </a>
                <a href={codeLink}>
                  <AiFillGithub className="icons" />
                </a>
              </div>
            </div>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
