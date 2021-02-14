import React from "react";

import "./ScrollArrow.scss";
import arrow from "../../../img/icons/arrow-blue.svg";
import arrowwhite from "../../../img/icons/arrow.svg";

const ScrollArrow = ({ color }) => {
  return (
    <div className="ScrollArrow">
      <a className="ScrollArrow__element">
        <img src={color === 'white' ? arrowwhite : arrow} alt="scroll" />
      </a>
    </div>
  );
};

export default ScrollArrow;
