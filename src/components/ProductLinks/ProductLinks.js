import React, { useState } from "react";
import PropTypes from "prop-types";
import ProductLink from "../ProductLink/ProductLink";
import "./ProductLinks.scss";
import FadeIn from "../share/FadeIn/FadeIn";

const ProductLinks = ({ products }) => {
  const [activeId, setActiveId] = useState(4);

  return products ? (
    <div className="ProductLinks">
      <div className="ProductLinks__links">
        {products.map((element, index) => (
          <ProductLink
            label={element.lable}
            text={element.text}
            path={element.productPage}
            key={index}
            onMouseEnter={() => {
              setActiveId(index);
            }}
            onMouseLeave={() => {
              setActiveId(4);
            }}
          />
        ))}
      </div>
        <div
          className={`ProductLinks__image${
            " ProductLinks__image--" + activeId
          }`}
        />
    </div>
  ) : null;
};

ProductLinks.propTypes = {
  products: PropTypes.array,
};

export default ProductLinks;
