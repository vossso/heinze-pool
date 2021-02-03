import React from "react";
import HexaImage from "../share/HexaImage/HexaImage";

import "./HexaColumn.scss";

const HexaColumn = ({ elements }) => {
  const getContent = () => {
    return (
      <>
        {elements.map((element, index) => {
            const {title, description, imageObject} = element;
          return (
            <div
            className="HexaColumn__element"
              key={index}
            >
              <HexaImage title={title} description={description} imageInfo={imageObject} />
            </div>
          );
        })}
      </>
    );
  };
  return <div className="HexaColumn">{getContent()}</div>;
};

export default HexaColumn;
