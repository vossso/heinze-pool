import React from "react";
import hexa from "../../../img/icons/hexa-arrow.svg";

import "./ArrowLink.scss";

const ArrowLink = ({ variant, link, size }) => {
  const className = `ArrowLink${variant ? " ArrowLink--" + variant : ""}`;
  const setSize = {
    width: size ? size : "6rem",
  };

  return link ? (
    <a className={className} href={link} style={setSize}>
      <img src={hexa} alt="Poool" />
    </a>
  ) : (
    <div className={className} style={setSize}>
      <img src={hexa} alt="Poool" />
    </div>
  );
};

export default ArrowLink;
