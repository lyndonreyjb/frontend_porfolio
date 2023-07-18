import { useContext } from "react";
import { ProjectContext } from "../../ProjectContext.jsx";
import { urlFor } from "../../client";

const ProjectItem = ({
  title,
  description,
  imgUrl,
  projectLink,
  codeLink,
  tags,
}) => {
  const imageUrl = urlFor(imgUrl);
  const { selectItem, setIsOpen } = useContext(ProjectContext);

  const handleClick = () => {
    setIsOpen(true);
    selectItem({
      title,
      description,
      imgUrl,
      projectLink,
      codeLink,
      tags,
    });
  };

  return (
    <div>
      <div className="project-item">
        <div className="project-info" onClick={handleClick}>
          <div className="img-container">
            <img src={imageUrl} alt={title} />
          </div>
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
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
