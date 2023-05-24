import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { urlFor, client } from "../../client";
import { Wrap } from "../wrap";

import "./projects.style.scss";

const Projects = () => {
  const [project, setProject] = useState([]);

  useEffect(() => {
    const query = '*[_type == "project"]';
    client.fetch(query).then((data) => setProject(data));
  }, []);

  return (
    <div className="project-container">
      <h1 className="project-title">Projects</h1>
      <div className="projects-page">
        {project.map((project, index) => (
          <motion.div
            className="project-item"
            key={index}
            style={{ backgroundImage: `url(${urlFor(project.imgUrl)})` }}
            whileHover={{ scale: 1.1 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, type: "tween" }}>
            <div className="project-content">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Wrap(Projects, "projects");
