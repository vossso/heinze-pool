import React from "react";
import getVariantClasses from "../../../helpers/getVariantClass";

import "./Overlay.scss";
import Container from "../Container/Container";
import HexaIcon from "../HexaIcon/HexaIcon";

const Overlay = ({ title, description, image, variant, onClick }) => {
  const className = getVariantClasses("Overlay", variant);

  return (
    <div className={className}>
      <Container variant={["full-height"]}>
        <div className="Overlay__bg" />
        <div className="Overlay__content">
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
        <button onClick={() => onClick()}>
          <HexaIcon number="X" />
        </button>
      </Container>
    </div>
  );
};

export default Overlay;
