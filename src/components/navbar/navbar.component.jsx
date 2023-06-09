import React, { useState, useEffect, useRef } from "react";
import Logo from "../../assets/logo.svg";
import { FaBars } from "react-icons/fa";
import { links, social } from "./data";
import { IconContext } from "react-icons";
import "./navbar.style.scss";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuContainerRef = useRef(null);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
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

  const menuStyles = {
    height: showMenu
      ? `${menuRef.current.getBoundingClientRect().height}px`
      : "0px",
  };
  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-center">
        <div className="navbar-header">
          <img src={Logo} className="logo" alt="logo" />
          <button className="nav-toggle" onClick={toggleMenu}>
            <FaBars />
          </button>
        </div>

        <div
          className="menu-container"
          ref={menuContainerRef}
          style={menuStyles}>
          <ul className="menu" ref={menuRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <IconContext.Provider value={{ className: "react-icons" }}>
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
        </IconContext.Provider>
      </div>
    </nav>
  );
};

export default Navbar;
