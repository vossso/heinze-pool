import React, { useState } from "react";

import "./HexaImage.scss";
import Overlay from "../Overlay/Overlay";
import Hexagon from "react-hexagon";
import { CSSTransition } from "react-transition-group";

const HexaImage = ({ title, description, imageInfo }) => {
  const [showOverlay, setShowOverlay] = useState(false);

  const getImagePath = () => {
    const { childImageSharp, image } = imageInfo;
    if (!!image && !!image.childImageSharp) {
      return image.childImageSharp.fluid.src;
    }
    if (!!childImageSharp) {
      return childImageSharp.fluid.src;
    }

    if (!!image && typeof image === "string") return image.src;

    return null;
  };

  const onClick = () => {
    setShowOverlay(!showOverlay);
  };

  return (
    <div className="HexaImage">
      <button onClick={onClick}>
        <Hexagon
          className="HexaImage__poly"
          backgroundImage={getImagePath()}
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
            title={title}
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
