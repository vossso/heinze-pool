import React from "react";
import PropTypes from "prop-types";
import ProductOverviewElement from "../ProductOverviewElement/ProductOverviewElement";
import useBreakpoint from "../../hooks/useBreakpoint";

import "./ProductOverview.scss";
import Container from "../share/Container/Container";

const ProductOverview = ({ primeProducts, secondProducts }) => {
  const Breakpoint = useBreakpoint("xxl");
  const variant = Breakpoint ? ["half-height", "full-width"] : "half-height";
  const secondIntro = [];

  secondProducts.forEach( element => {
    secondIntro.push(element.introtext)
  });

  return (
    <div className="ProductOverview">
      <Container variant={variant}>
        <div className="ProductOverview__content">
          {primeProducts.map((product, index) => {
            const { title, introtext, image } = product;
            return (
              <ProductOverviewElement
                key={index}
                title={title}
                description={introtext}
                image={image}
              />
            );
          })}
          {secondProducts.length > 0 && <ProductOverviewElement
            title="Sonstige"
            description={secondIntro[0]}
          />}
        </div>
      </Container>
    </div>
  );
};

ProductOverview.propTypes = {
  products: PropTypes.array,
};

export default ProductOverview;
