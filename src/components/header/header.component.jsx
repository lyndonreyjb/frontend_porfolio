import React from "react";
import "./header.style.scss";
import { motion } from "framer-motion";
import profile from "../../assets/profile.png";
import overlayImg from "../../assets/circle.svg";
import Typewriter from "typewriter-effect";

import contact from "../../assets/contact.svg";
import about from "../../assets/about.svg";
import home from "../../assets/home.svg";
import skills from "../../assets/skills.svg";
import projects from "../../assets/projects.svg";
import experience from "../../assets/experience.svg";

import { Wrap } from "../wrap";

const Header = () => {
  const leftLinks = [
    { text: "home", image: home },
    { text: "skills", image: skills },
    { text: "projects", image: projects },
    { text: "experience", image: experience },
  ];

  const rightLinks = [
    { text: "about", image: about },
    { text: "contact", image: contact },
  ];

  return (
    <div id="home" className="app-header app-flex">
      <motion.div
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="links">
        <ul className="header-top-links">
          {leftLinks.map((item, index) => (
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, type: "tween" }}
              key={`leftLink-${index}`}>
              <div>
                <li className="app-flex p-text">
                  <a href={`#${item.text}`}>
                    <img className="image-links" src={item.image} alt="img" />
                    {item.text}
                  </a>
                </li>
              </div>
            </motion.div>
          ))}
        </ul>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1, delayChildren: 1 }}
        className="header-img">
        <img src={profile} alt="profile" />

        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          alt="profile"
          src={overlayImg}
          className="overlay"
        />
      </motion.div>
      <motion.div className="links">
        <motion.div
          whileInView={{ x: [100, 0], opacity: [0, 1] }}
          transition={{ duration: 1 }}>
          <div className="header-badge">
            <div className="app-flex badge-cmp">
              <div>
                <div className="typewriter">
                  <Typewriter
                    options={{
                      strings: ["LYNDON REY"],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </div>
                <h1>FULL STACK </h1>
                <h1>WEB DEVELOPER </h1>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="links">
          <ul className="header-bot-links">
            {rightLinks.map((item, index) => (
              <motion.div
                whileHover={{ scale: 1.2 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, type: "tween" }}
                key={`rightLink-${index}`}>
                <div>
                  <li className="app-flex p-text">
                    <a href={`#${item.text}`}>
                      <img className="image-links" src={item.image} alt="img" />
                      {item.text}
                    </a>
                  </li>
                </div>
              </motion.div>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Wrap(Header, "home");
