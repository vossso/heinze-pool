import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

import "./ProductTeaser.scss";
import ImageGallery from "../share/ImageGallery/ImageGallery";
import Container from "../share/Container/Container";
import TextBox from "../share/TextBox/TextBox";
import useBreakpoint from "../../hooks/useBreakpoint";
import useElementScroll from "../../hooks/useElementScroll";

const ProductTeaser = ({ title, description, images, link, linkLabel }) => {
  const BreakpointL = useBreakpoint("l");
  const ref = useRef(null);
  const [isOver, setIsOver] = useState(false);
  const [isTop,] = useElementScroll(ref);
  const variant = BreakpointL
    ? ["full-width"]
    : ["full-height", "starter", "full-width"];

  useEffect(() => {
    console.log(isTop)
    setIsOver(isTop);
  }, [isTop]);
  return (
    <Container variant={variant} id={title}>
      <div className="ProductTeaser" ref={ref}>
        {images && (
          <div className="ProductTeaser__gallery">
            <ImageGallery images={images} styles={{ objectFit: "cover", height: "100%", width: "100%", minHeight: "50rem" }}/>
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
