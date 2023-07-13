import React, { useState, useRef } from "react";
import Logo from "../../assets/logo.svg";
import { FaBars } from "react-icons/fa";
import { links, social } from "../../data.jsx";
import { IconContext } from "react-icons";

import "./navbar.style.scss";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuContainerRef = useRef(null);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const menuStyles = {
    height: showMenu
      ? `${menuRef.current.getBoundingClientRect().height}px`
      : "0px",
  };
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="navbar-collapse">
          <div className="logo-container">
            <a href={`#home`}>
              {" "}
              <img src={Logo} className="logo" alt="logo" />
            </a>
          </div>

          <button className="nav-toggle" onClick={toggleMenu}>
            <FaBars />
          </button>
        </div>

        <div
          className="menu-container"
          ref={menuContainerRef}
          style={menuStyles}>
          <ul className="menu" ref={menuRef}>
            {links.map((item, index) => (
              <div key={index}>
                <div>
                  <li>
                    <a href={`#${item.text}`}>
                      <div className="nav-icons">
                        <div className="nav-link-icons"> {item.icon}</div>
                        <div className="nav-text"> {item.text}</div>
                      </div>
                    </a>
                  </li>
                </div>
              </div>
            ))}
          </ul>
        </div>
        <IconContext.Provider value={{ className: "react-icons" }}>
          <div className="nav-socials">
            <ul className="social-icons">
              {social.map((socialIcon) => {
                const { id, url, icon } = socialIcon;
                return (
                  <li key={id}>
                    <a href={url}>{icon}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </IconContext.Provider>
      </div>
    </nav>
  );
};

export default Navbar;
