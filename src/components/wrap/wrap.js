import React from "react";
import Navdots from "../navdots/navdots.component";

const Wrap = (Component, idName, classNames) =>
  function HOX() {
    return (
      <div id={idName} className={`app-container ${classNames} `}>
        <Component />
        <Navdots active={idName} />
      </div>
    );
  };

export default Wrap;
