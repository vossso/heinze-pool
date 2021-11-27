import React from "react";
import HexaImage from "../share/HexaImage/HexaImage";

import "./HexaColumn.scss";

const HexaColumn = ({ elements }) => {
  return (
    <div className="HexaColumn">
      {elements &&
        elements.map((element, index) => {
          const { description, imageObject } = element;
          return (
            <div className="HexaColumn__element" key={index}>
              <HexaImage description={description} imageInfo={imageObject} />
            </div>
          );
        })}
    </div>
  );
};

export default HexaColumn;
