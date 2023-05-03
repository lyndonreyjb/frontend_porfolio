import React from "react";
import "./header.style.scss";
import { motion } from "framer-motion";
import profile from "../../assets/profile.png";
import circleImg from "../../assets/circle.svg";
import sass from "../../assets/sass.png";
import javascript from "../../assets/javascript.png";
import react from "../../assets/react.png";
import node from "../../assets/node.png";
import tailwind from "../../assets/tailwind.png";

const Header = () => {
  const scaleVariants = {
    whileInView: {
      scale: [0, 1],
      opacity: [0.1],
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div id="home" className="app-header app-flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
        className="header">
        <div className="header-badge">
          <div className="app-flex badge-cmp">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am Lyndon Rey</p>
              <h1>I BUILD WEBSITES</h1>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1, delayChildren: 0.5 }}
        className="header-img">
        <img src={profile} alt="profile" />

        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          alt="profile"
          src={circleImg}
          className="overlay-circle"
        />
      </motion.div>

      <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="header-circle">
        {[sass, tailwind, react, javascript, node].map((circle, index) => (
          <div className="circle-cmo app-flex" key={`circle-${index}`}>
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Header;
