import React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../share/Image/PreviewCompatibleImage";

import "./Brands.scss";
import Container from "../share/Container/Container";

const Brands = ({ brands }) => {
  return brands ? (
    <Container variant={["half-height--top", "starter"]}>
      <div className="Brands">
        {brands.map((brand, index) => {
          return (
            brand &&
            (brand.link ? (
              <a className="Brands__element" key={index} href={brand.link}>
                <PreviewCompatibleImage imageInfo={brand} />
              </a>
            ) : (
              <div className="Brands__element" key={index}>
                <PreviewCompatibleImage imageInfo={brand} />
              </div>
            ))
          );
        })}
      </div>
    </Container>
  ) : null;
};

Brands.propTypes = {
  products: PropTypes.array,
};

export default Brands;
