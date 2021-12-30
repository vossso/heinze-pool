import React from "react";
import HexaImage from "../share/HexaImage/HexaImage";

import "./HexaColumn.scss";

const HexaColumn = ({ column }) => {
  return (
    <div className="HexaColumn">
      {column &&
        column.map((hexa, index) => {
          const { imageObject, description, id } = hexa;

          return (
            <div className="HexaColumn__element" key={index}>
              <HexaImage
                description={description}
                imageInfo={imageObject}
                index={id}
              />
            </div>
          );
        })}
    </div>
  );
};

export default HexaColumn;
