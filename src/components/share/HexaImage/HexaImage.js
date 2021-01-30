import React, {useState} from "react";

import "./HexaImage.scss";
import Overlay from "../Overlay/Overlay";
import Hexagon from "react-hexagon";

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

  return (
    <div className="HexaImage">
      <button onClick={() => setShowOverlay(!showOverlay)}>
        <Hexagon
          className="HexaImage__poly"
          backgroundImage={getImagePath()}
          flatTop
          onClick={() => console.log("clicked")}
          style={{ stroke: "transparent" }}
          backgroundScale={2}
          hexProps={{ strokeLinecap: "round" }}
        />
      </button>
      {showOverlay && (
        <Overlay
          title={title}
          image={imageInfo}
          description={description}
          onClick={() => setShowOverlay(!showOverlay)}
        />
      )}
    </div>
  );
};

export default HexaImage;
