import React from "react";
import "./header.style.scss";
import { motion } from "framer-motion";
import profile from "../../assets/profile.png";
import overlayImg from "../../assets/circle.svg";
import Typewriter from "typewriter-effect";

import { Wrap } from "../wrap";
import { IconContext } from "react-icons";

const Header = () => {
  return (
    <div id="home">
      <div className="app-header">
        <IconContext.Provider value={{ className: "react-icons" }}>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 2 }}
            className="header-img">
            <img src={profile} alt="profile" />

            <motion.img
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 2 }}
              alt="profile"
              src={overlayImg}
              className="overlay"
            />
          </motion.div>

          <div className="header-badge">
            <div className="badge-cmp">
              <div>
                <h3>Hello, I Am</h3>
              </div>
              <div>
                <h1>Lyndon Rey</h1>
                <div className="typewriter">
                  <Typewriter
                    options={{
                      strings: ["WEB DEVELOPER", "WEB DESIGNER"],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </div>
                <div>
                  <p>
                    I am a Web Developer based in Calgary, Alberta. Crafting
                    innovative solutions for websites, web services and design.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default Wrap(Header, "home");
