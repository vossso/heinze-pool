import React from "react";
import hexa from "../../../img/icons/hexa-arrow.svg";
import { goToAnchor, configureAnchors } from 'react-scrollable-anchor'

import "./ArrowLink.scss";

const ArrowLink = ({ variant, link, size, anchor }) => {
  const className = `ArrowLink${variant ? " ArrowLink--" + variant : ""}`;
  const setSize = {
    width: size ? size : "6rem",
  };
  configureAnchors({ offset: -80, scrollDuration: 200 });

  return link ? (
    <a className={className} href={link} style={setSize}>
      <img src={hexa} alt="Poool" />
    </a>
  ) : anchor ? (
    <div
      className={className}
      style={setSize}
      onClick={() => goToAnchor(anchor)}
    >
      <img src={hexa} alt="Poool" />
    </div>
  ) : (
    <div className={className} style={setSize}>
      <img src={hexa} alt="Poool" />
    </div>
  );
};

export default ArrowLink;
