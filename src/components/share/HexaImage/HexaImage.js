import React, { useContext } from "react";

import "./HexaImage.scss";
import Hexagon from "react-hexagon";
import { getImage } from "gatsby-plugin-image";
import { HexaPatternContext } from "../../HexaPattern/HexaPattern";

const HexaImage = ({ imageInfo, index }) => {
  const { onClick } = useContext(HexaPatternContext) || {};
  const imgagePath =
    imageInfo.image && getImage(imageInfo.image).images.fallback.src;

  return (
    <div className="HexaImage">
      <button
        onClick={() => {
          onClick(index);
        }}
        aria-label="Show Project"
      >
        <Hexagon
          className="HexaImage__poly"
          backgroundImage={imgagePath}
          flatTop
          style={{ stroke: "transparent" }}
          backgroundScale={2}
          hexProps={{ strokeLinecap: "round" }}
        />
      </button>
    </div>
  );
};

export default HexaImage;
