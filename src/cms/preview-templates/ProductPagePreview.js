import React from "react";
import PropTypes from "prop-types";
import ProductPageTemp from "../../templates/ProductPageTemp/ProductPageTemp";

const ProductPagePreview = ({ entry }) => {
  const data = entry.getIn(["data"]).toJS();
  return <ProductPageTemp product={data} />;
};

ProductPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default ProductPagePreview;
