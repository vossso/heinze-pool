import React from "react";
import PropTypes from "prop-types";
import ProductTeaser from "../ProductTeaser/ProductTeaser";
import GroupTeaser from "../GroupTeaser/GroupTeaser";
import ProductOverview from "../ProductOverview/ProductOverview";

import "./ProductTeasers.scss";
import useBreakpoint from "../../hooks/useBreakpoint";

const ProductTeasers = ({ products }) => {
  const BreakpointL = useBreakpoint("l");
  const productTeasers = products
    ? BreakpointL
      ? products
      : products.filter((element) => element.single)
    : [];
  const groupTeasers =
    BreakpointL || !products
      ? []
      : products.filter((element) => !element.single);

  return productTeasers ? (
    <div className="ProductTeasers">
      <ProductOverview
        primeProducts={productTeasers}
        secondProducts={groupTeasers}
      />
      <div className="ProductTeasers__products">
        {productTeasers.map((product, index) => {
          const { title, description, images } = product;
          return (
            <ProductTeaser
              key={index}
              title={title}
              description={description}
              images={images}
              link={"/about#contact"}
              linkLabel={"Nehmen Sie mit uns Kontakt auf"}
            />
          );
        })}
      </div>
      {groupTeasers.length > 0 && <GroupTeaser products={groupTeasers} />}
    </div>
  ) : null;
};

ProductTeasers.propTypes = {
  products: PropTypes.array,
};

export default ProductTeasers;
