import React from "react";
import close from "../../../img/icons/close.svg";
import getVariantClasses from "../../../helpers/getVariantClasses";

import "./Overlay.scss";
import Container from "../Container/Container";
import PreviewCompatibleImage from "../Image/PreviewCompatibleImage";

const Overlay = ({ description, image, variant, onClick }) => {
  const className = getVariantClasses("Overlay", variant);
  return (
    <div className={className}>
      <Container variant={["full-height"]}>
        <div className="Overlay__bg" />
        <div className="Overlay__content">
          <div className="Overlay__text">
            <p>{description}</p>
          </div>
          <div className="Overlay__image">
            <PreviewCompatibleImage
              imageInfo={image}
              loading="eager"
              styles={{ objectFit: "contain" }}
            />
          </div>
        </div>
        <button className="Overlay__close" onClick={onClick}>
          <img className="InfoBox__close-icon" src={close} alt="InfoBox" />
        </button>
      </Container>
    </div>
  );
};

export default Overlay;
