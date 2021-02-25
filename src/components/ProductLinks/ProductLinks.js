import React from "react";
import PropTypes from "prop-types";
import ProductLink from "../ProductLink/ProductLink";
import "./ProductLinks.scss";

const ProductLinks = ({ products }) => {
  return (
    <div className="ProductLinks">
      {/* ToDo Pool einbauen */}
      {products &&
        products.map((element, index) => (
          <ProductLink
            label={element.lable}
            text={element.text}
            path={element.productPage}
            key={index}
          />
        ))}
    </div>
  );
};

ProductLinks.propTypes = {
  products: PropTypes.array,
};

export default ProductLinks;
