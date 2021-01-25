import React from "react";

import "./Link.scss";

const Link = ({ label, link }) => {
  return link ? (
    <a className="Link" href={link}>
      {label}
    </a>
  ) : null;
};

export default Link;
