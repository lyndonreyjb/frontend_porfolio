import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import profile from "../../assets/profile.png";

import "./about.style.scss";
import { urlFor, client } from "../../client";

const About = () => {
  const [about, setAbout] = useState([]);
  useEffect(() => {
    const query = '*[_type == "about"]';
    client.fetch(query).then((data) => setAbout(data));
  }, []);

  return (
    <div className="about">
      <div className="profiles">
        {about.map((about, index) => (
          <motion.div
            className="profile-item"
            key={about.title + index}
            whileHover={{ scale: 1.1 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, type: "tween" }}>
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2>{about.title}</h2>
            <p>{about.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.img
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
        alt="profile"
        src={profile}
        className="profile-overlay"
      />
    </div>
  );
};

export default About;
