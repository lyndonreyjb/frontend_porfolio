import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Wrap } from "../wrap";
import { FaDownload } from "react-icons/fa";

import "./about.style.scss";
import { urlFor, client } from "../../client";
import resume from "./resume.pdf";
const About = () => {
  const [about, setAbout] = useState([]);

  useEffect(() => {
    const query = '*[_type == "about"]';
    client.fetch(query).then((data) => setAbout(data));
  }, []);

  const handleDownloadResume = () => {
    // Replace "resume.pdf" with the actual URL or path to your PDF file
    window.open(resume, "_blank");
  };

  return (
    <div className="about-page">
      <div className="about-me">
        <div>
          <h1>About Me</h1>

          <button className="download-button" onClick={handleDownloadResume}>
            View Resume
            <FaDownload className="download-icon" />
          </button>
        </div>
        <p>
          I'm passionate about web development and creating dynamic and
          interactive websites, applications, and digital experiences. I'm
          constantly striving to improve my skills and keep up with the latest
          trends and technologies in the industry. There's nothing more
          satisfying than seeing my work come to life on the internet.
        </p>
      </div>

      <div className="profiles">
        {about.map((about, index) => (
          <motion.div className="profile-item" key={about.title + index}>
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2>{about.title}</h2>
            <p>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Wrap(About, "about");
