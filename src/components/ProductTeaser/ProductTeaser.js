import React, { useState } from "react";
import PropTypes from "prop-types";

import "./ProductTeaser.scss";
import ImageGallery from "../share/ImageGallery/ImageGallery";
import Container from "../share/Container/Container";
import TextBox from "../share/TextBox/TextBox";
import useBreakpoint from "../../hooks/useBreakpoint";

const ProductTeaser = ({ title, description, images, link, linkLabel }) => {
  const BreakpointL = useBreakpoint("l");
  const [isOver, setIsOver] = useState(false);
  const variant = BreakpointL
    ? ["full-width"]
    : ["full-height", "starter", "full-width"];

  return (
    <Container variant={variant} id={title} >
      <div className="ProductTeaser" onMouseEnter={() => setIsOver(true)}>
        {images && (
          <div className="ProductTeaser__gallery">
            <ImageGallery images={images} />
          </div>
        )}
        <div className="ProductTeaser__description">
            <TextBox
              title={title}
              text={description}
              link={link}
              label={linkLabel}
              isAnimated={true}
              isOver={isOver}
            />
        </div>
      </div>
    </Container>
  );
};

ProductTeaser.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  images: PropTypes.array,
};

export default ProductTeaser;
