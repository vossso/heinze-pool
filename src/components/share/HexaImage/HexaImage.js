import React, { useState } from "react";

import "./HexaImage.scss";
import Overlay from "../Overlay/Overlay";
import Hexagon from "react-hexagon";
import { CSSTransition } from "react-transition-group";
import { getImage } from "gatsby-plugin-image";

const HexaImage = ({ description, imageInfo }) => {
  const [showOverlay, setShowOverlay] = useState(false);
  const imgagePath =
    imageInfo.image && getImage(imageInfo.image).images.fallback.src;

  const onClick = () => {
    setShowOverlay(!showOverlay);
  };

  return (
    <div className="HexaImage">
      <button onClick={onClick}>
        <Hexagon
          className="HexaImage__poly"
          backgroundImage={imgagePath}
          flatTop
          style={{ stroke: "transparent" }}
          backgroundScale={2}
          hexProps={{ strokeLinecap: "round" }}
        />
      </button>
      {
        <CSSTransition
          in={showOverlay}
          timeout={300}
          classNames="alert"
          unmountOnExit
        >
          <Overlay
            image={imageInfo}
            description={description}
            onClick={onClick}
          />
        </CSSTransition>
      }
    </div>
  );
};

export default HexaImage;
