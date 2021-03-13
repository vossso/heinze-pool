import React from "react";

import "./Link.scss";
import arrow from "../../../img/icons/arrow-blue-2.svg";

const Link = ({ label, link }) => {
  return link ? (
    <a className="Link" href={link}>
      <img src={arrow} alt="scroll" />
      {label}
    </a>
  ) : null;
};

export default Link;
