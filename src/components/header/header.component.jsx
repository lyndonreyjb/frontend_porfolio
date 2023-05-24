import React from "react";
import "./header.style.scss";
import { motion } from "framer-motion";
import profile from "../../assets/profile.png";
import overlayImg from "../../assets/circle.svg";
import Typewriter from "typewriter-effect";

import {
  FaHome,
  FaCode,
  FaProjectDiagram,
  FaMailBulk,
  FaInfoCircle,
} from "react-icons/fa";

import { Wrap } from "../wrap";
import { IconContext } from "react-icons";

const Header = () => {
  const leftLinks = [
    { text: "home", icon: <FaHome /> },
    { text: "skills", icon: <FaCode /> },
    { text: "projects", icon: <FaProjectDiagram /> },
  ];

  const rightLinks = [
    { text: "about", icon: <FaInfoCircle /> },
    { text: "contact", icon: <FaMailBulk /> },
  ];

  return (
    <div id="home" className="app-header app-flex">
      <IconContext.Provider value={{ className: "react-icons" }}>
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
                  <li>
                    <a href={`#${item.text}`}>
                      {item.icon}
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
                    <li>
                      <a href={`#${item.text}`}>
                        {item.icon}
                        {item.text}
                      </a>
                    </li>
                  </div>
                </motion.div>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </IconContext.Provider>
    </div>
  );
};

export default Wrap(Header, "home");
