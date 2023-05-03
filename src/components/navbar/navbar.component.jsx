import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import Logo from "../../assets/logo.svg";
import "./navbar.style.scss";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={Logo} alt="logo" />
      </div>
      <ul className="navbar-links">
        {["home", "skills", "projects", "about", "contact"].map((item) => (
          <li className="app-flex p-text" key={`link-${item}`}>
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}>
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {["home", "skills", "projects", "about", "contact"].map(
                (item) => (
                  <li className="app-flex p-text" key={item}>
                    <a href={`#${item}`} onClick={() => setToggle(true)}>
                      {item}{" "}
                    </a>
                  </li>
                )
              )}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
