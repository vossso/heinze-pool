import React from "react";

import "./ScrollArrow.scss";
import arrow from "../../../img/icons/hexa-arrow.svg";

const ScrollArrow = ({ color }) => {
  return (
    <div className="ScrollArrow">
      <a className="ScrollArrow__element">
        <img src={arrow} alt="scroll" />
      </a>
    </div>
  );
};

export default ScrollArrow;
