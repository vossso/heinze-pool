import React from "react";
import { TransitionLink } from "gatsby-plugin-transition-link/components/TransitionLink";

import "./Link.scss";
import arrow from "../../../img/icons/arrow-blue-2.svg";

const Link = ({ label, link }) => {
  return link ? (
    <TransitionLink className="Link" to={link}>
      <img src={arrow} alt="scroll" />
      {label}
    </TransitionLink>
  ) : null;
};

export default Link;
