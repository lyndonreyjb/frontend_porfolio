import React, { useState, useEffect } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import Logo from "../../assets/logo.svg";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { IconContext } from "react-icons";
import "./navbar.style.scss";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-logo">
        <img src={Logo} alt="logo" />
      </div>
      <IconContext.Provider value={{ className: "navbar-icons" }}>
        <ul className={`navbar-links ${scrolled ? "scrolled" : ""}`}>
          {["home", "about", "skills", "projects", "contact"].map((item) => (
            <li className="app-flex p-text" key={`link-${item}`}>
              <a href={`#${item}`}>{item}</a>
            </li>
          ))}
        </ul>
        <ul className="socials">
          <li className="app-flex p-text">
            <a
              href="https://github.com/lyndonreyjb"
              target="_blank"
              rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/lyndon-rey-bualat/"
              target="_blank"
              rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/l_reyb/"
              target="_blank"
              rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </li>
        </ul>
      </IconContext.Provider>
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
                    <a
                      className="menu-links"
                      href={`#${item}`}
                      onClick={() => setToggle(true)}>
                      {item}{" "}
                    </a>
                  </li>
                )
              )}

              <li className="app-flex p-text">
                <a
                  href="https://github.com/lyndonreyjb"
                  target="_blank"
                  rel="noopener noreferrer">
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/lyndon-rey-bualat/"
                  target="_blank"
                  rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
                <a
                  href="https://www.instagram.com/l_reyb/"
                  target="_blank"
                  rel="noopener noreferrer">
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
