import React from "react";
import PropTypes from "prop-types";

import "./ProductOverviewElement.scss";
import ArrowLink from "../share/ArrowLink/ArrowLink";
import TextBox from "../share/TextBox/TextBox";

const ProductOverviewElement = ({ title, description, image }) => {
  return (
    <div className="ProductOverviewElement">
      <div className="ProductOverviewElement__content">
        <TextBox title={title} text={description} variant="full-height" icon={{image}}/>
        <div className="ProductOverviewElement__button">
          <ArrowLink link={`#${title}`} />
        </div>
      </div>
    </div>
  );
};

ProductOverviewElement.propTypes = {
  products: PropTypes.array,
};

export default ProductOverviewElement;
