import React from "react";
import PropTypes from "prop-types";
import ProductOverviewElement from "../ProductOverviewElement/ProductOverviewElement";
import useBreakpoint from "../../hooks/useBreakpoint";

import "./ProductOverview.scss";
import Container from "../share/Container/Container";

const ProductOverview = ({ primeProducts, secondProducts }) => {
  const Breakpoint = useBreakpoint("xl");
  const variant = Breakpoint ? ["half-height", "full-width"] : "half-height";

  return (
    <div className="ProductOverview">
      <Container variant={variant}>
        <div className="ProductOverview__content">
          {primeProducts.map((product, index) => {
            const { title, introtext } = product;
            return (
              <ProductOverviewElement
                key={index}
                title={title}
                description={introtext}
              />
            );
          })}
          <ProductOverviewElement
            title="Sonstige"
            description="Hier findest du noch weitere Produkte"
          />
        </div>
      </Container>
    </div>
  );
};

ProductOverview.propTypes = {
  products: PropTypes.array,
};

export default ProductOverview;
