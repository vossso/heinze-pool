import React from "react";
import PropTypes from "prop-types";

import "./ProductOverviewElement.scss";
import ArrowLink from "../share/ArrowLink/ArrowLink";
import TextBox from "../share/TextBox/TextBox";
import useBreakpoint from "../../hooks/useBreakpoint";

const ProductOverviewElement = ({ title, description, image }) => {
  const BreakpointM = useBreakpoint("m");
  return (
    <div className="ProductOverviewElement">
      <div className="ProductOverviewElement__content">
        {BreakpointM ? (
          <a href={`#${title}`}>
            <TextBox
              title={title}
              text={description}
              variant="full-height"
              icon={{ image }}
            />
          </a>
        ) : (
          <>
            <TextBox
              title={title}
              text={description}
              variant="full-height"
              icon={{ image }}
            />
            <div className="ProductOverviewElement__button">
              <ArrowLink link={`#${title}`} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

ProductOverviewElement.propTypes = {
  products: PropTypes.array,
};

export default ProductOverviewElement;
