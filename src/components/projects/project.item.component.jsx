import React from "react";
import { urlFor } from "../../client";
import { AiFillGithub } from "react-icons/ai";
import { RiComputerLine } from "react-icons/ri";
const ProjectItem = ({
  title,
  description,
  imgUrl,
  projectLink,
  codeLink,
  tags,
}) => {
  const imageUrl = urlFor(imgUrl);
  const handleClick = () => {
    // Handle the onClick event here
    console.log("Project info clicked!");
    // You can perform any necessary actions or navigate to a different page
  };
  return (
    <div>
      <div className="project-item">
        <div className="project-info" onClick={handleClick}>
          <div className="project-details">
            <div className="project-links">
              <div>
                <h2>{title}</h2>
                <p className="description">{description}</p>
              </div>

              <div>
                <div className="tags">
                  {tags.map((tag, index) => {
                    return (
                      <div key={tag + index}>
                        <div className="tag">
                          <p>{tag}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="img-container">
            <img src={imageUrl} alt={title} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
