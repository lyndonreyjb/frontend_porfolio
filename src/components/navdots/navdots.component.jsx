import React from "react";

const Navdots = ({ active }) => {
  return (
    <div className="navigation">
      {["home", "about", "skills", "projects", "contact"].map((item, index) => (
        <a
          style={active === item ? { backgroundColor: "#b3aaf0" } : {}}
          className="navdot"
          key={`#${item}`}
          href={`#${item}`}>
          {" "}
        </a>
      ))}
    </div>
  );
};

export default Navdots;
