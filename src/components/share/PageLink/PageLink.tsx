import { TransitionLink } from "gatsby-plugin-transition-link/components/TransitionLink";
import PropTypes from "prop-types";
import React, { memo, useEffect, useRef } from "react";
import { simulateClick } from "../../helpers/simulateClick";
import { theme } from "../../theme/theme";
import { StyledLink } from "./styles";

import "./PageLink.scss";

const PageLink = ({ children, to, active, state, navigate }) => {
  const linkElement = useRef(null);

  const exitTransition = {
    length:
      theme.duration.raw.pageTransition +
      theme.duration.raw.pageTransitionDelay,
  };

  const entryTransition = {
    delay:
      theme.duration.raw.pageTransition +
      theme.duration.raw.pageTransitionDelay,
  };

  useEffect(() => {
    navigate && simulateClick(linkElement.current);
  }, [navigate]);

  return (
    <div className={`PageLink__styled-link${active ? " --active" : ""}`}>
      <TransitionLink
        to={to}
        exit={exitTransition}
        entry={entryTransition}
        ref={linkElement}
        state={state}
      >
        {children}
      </TransitionLink>
    </div>
  );
};

PageLink.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string,
  activeStyle: PropTypes.object,
  active: PropTypes.bool,
  state: PropTypes.object,
  display: PropTypes.oneOf(["block", "inline", "inline-block"]),
  hoverEffect: PropTypes.bool,
  navigate: PropTypes.bool,
  fullWidth: PropTypes.bool,
};

PageLink.defaultProps = {
  to: "/",
  variant: "default",
  display: "inline-block",
  navigate: false,
};

export default memo(PageLink);
