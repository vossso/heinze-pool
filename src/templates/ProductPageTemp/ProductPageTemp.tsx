import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";

import Stage from "../../components/Stage/Stage";
import ProductTeasers from "../../components/ProductTeasers/ProductTeasers";
import Brands from "../../components/Brands/Brands";

interface IProductPageTempProps {
  product: any;
}

const ProductPageTemp: React.FC<IProductPageTempProps> = ({ product }) => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    if (product && product.node) {
      setContent(product.node.frontmatter);
    } else if (product && product.templateKey) {
      setContent(product);
    }
  }, [product]);

  return content ? (
    <div className="ProductPageTemp">
      <Stage title={content.title} image={content.image} />
      <div className="ProductPageTemp__overview"></div>
      <div className="ProductPageTemp__content">
        <ProductTeasers products={content.productElement} />
        <Brands brands={content.brands} />
      </div>
    </div>
  ) : null;
};

export default ProductPageTemp;
