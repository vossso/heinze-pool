import React from "react";
import getVariantClasses from "../../../helpers/getVariantClasses";

import "./Overlay.scss";
import Container from "../Container/Container";
import HexaIcon from "../HexaIcon/HexaIcon";
import PreviewCompatibleImage from "../Image/PreviewCompatibleImage";

const Overlay = ({ title, description, image, variant, onClick }) => {
  const className = getVariantClasses("Overlay", variant);
  return (
    <div className={className}>
      <Container variant={["full-height"]}>
        <div className="Overlay__bg" />
        <div className="Overlay__content">
          <div className="Overlay__text">
          {title && <h3>{title}</h3>}
            <p>{description}</p>
          </div>
          <div className="Overlay__image">
            <PreviewCompatibleImage imageInfo={image} />
          </div>
        </div>
        <button className="Overlay__close" onClick={onClick}>
          <HexaIcon number="X" size="4rem"/>
        </button>
      </Container>
    </div>
  );
};

export default Overlay;
