import React from "react";
import PropTypes from "prop-types";
import ProductOverviewElement from "../ProductOverviewElement/ProductOverviewElement";
import useBreakpoint from "../../hooks/useBreakpoint";
import dots from "../../img/icons/icon_Plus-blue.png";

import "./ProductOverview.scss";
import Container from "../share/Container/Container";

const ProductOverview = ({ primeProducts, secondProducts }) => {
  const Breakpoint = useBreakpoint("xxl");
  const variant = Breakpoint
    ? ["half-height--start", "full-width"]
    : "half-height--start";
  const secondIntro = [];

  secondProducts.forEach((element) => {
    secondIntro.push(element.introtext);
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
          {secondProducts.length > 0 && (
            <ProductOverviewElement
              title="Sonstige"
              description={secondIntro[0]}
              image={dots}
            />
          )}
        </div>
      </Container>
    </div>
  );
};

ProductOverview.propTypes = {
  products: PropTypes.array,
};

export default ProductOverview;
