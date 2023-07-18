import { useContext } from "react";
import { ProjectContext } from "../../ProjectContext";
import { urlFor } from "../../client";
import { AiFillGithub } from "react-icons/ai";
import { HiOutlineExternalLink, HiOutlineXCircle } from "react-icons/hi";
import { IconContext } from "react-icons";
import { motion, AnimatePresence } from "framer-motion";

const ProjectDetail = () => {
  const { selectedItem, setIsOpen, isOpen } = useContext(ProjectContext);

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!selectedItem) {
    return null;
  }

  const { title, description, imgUrl, projectLink, codeLink, tags } =
    selectedItem;
  const imageUrl = urlFor(imgUrl);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="project-sidebar"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.3 }}>
          <div className="close-top">
            <HiOutlineXCircle className="close-icon" onClick={handleClose} />
          </div>
          <div className="sidebar-content">
            <IconContext.Provider value={{ className: "project-icons" }}>
              <div>
                <div className="project-content">
                  <div className="sidebar-img">
                    <img src={imageUrl} alt={title} />
                  </div>
                  <div>
                    <h1>{title}</h1>
                    <p className="desc">{description}</p>
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
                    <div className="buttons">
                      <a href={projectLink} target="_blank" rel="noreferrer">
                        <p>View Project</p>
                        <HiOutlineExternalLink className="project-icon" />
                      </a>
                      <a href={codeLink} target="_blank" rel="noreferrer">
                        <p>View Code</p>
                        <AiFillGithub className="project-icon" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </IconContext.Provider>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectDetail;
