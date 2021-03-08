import React from "react";
import PropTypes from "prop-types";
import ArrowLink from "../share/ArrowLink/ArrowLink";
import "./ProductLink.scss";
import TextBox from "../share/TextBox/TextBox";
import useBreakpoint from "../../hooks/useBreakpoint";

const ProductLink = ({
  label,
  text,
  path,
  className,
  onMouseEnter,
  onMouseLeave,
}) => {
  const BreakpointM = useBreakpoint("m");
  const size = BreakpointM ? "4rem" : "6rem";

  return path ? (
    <a
      className={`ProductLink${className ? " " + className : ""}`}
      href={`/product/${path}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <TextBox title={label} text={text} variant="auto-height" />
      <div className="ProductLink__button">
        <ArrowLink size={size} />
      </div>
    </a>
  ) : null;
};

ProductLink.propTypes = {
  label: PropTypes.string,
  text: PropTypes.string,
  path: PropTypes.string,
};

export default ProductLink;
