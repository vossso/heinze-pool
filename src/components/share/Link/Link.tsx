import React from "react";
import { TransitionLink } from "gatsby-plugin-transition-link/components/TransitionLink";
// import { Link } from "gatsby";

import "./Link.scss";
import arrow from "../../../img/icons/arrow-blue-2.svg";

interface ILink {
  label: string;
  link: string;
  transition?: boolean;
  extraClass?: string;
}

const Link: React.FC<ILink> = ({ label, link, transition, extraClass }) => {
  return link ? (
    transition ? (
      <TransitionLink
        className={`${extraClass ? extraClass : "Link"}`}
        to={link}
      >
        <img src={arrow} alt="arrow" />
        {label}
      </TransitionLink>
    ) : (
      <a className={`${extraClass ? extraClass : "Link"}`} href={link}>{label}</a>
    )
  ) : null;
};

export default Link;
