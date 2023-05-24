import React from "react";

const Wrap = (Component, idName, classNames) =>
  function HOX() {
    return (
      <div id={idName} className={`${classNames} `}>
        <Component />
      </div>
    );
  };

export default Wrap;
