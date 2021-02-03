import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import "./HexaPattern.scss";

import HexaColumn from "../HexaColumn/HexaColumn";
import useBreakpoint from "../../hooks/useBreakpoint";

const HexaPattern = ({ imageList }) => {
  const [content, setContent] = useState(() => null);

  const BreakpointS = useBreakpoint('s');
  // console.log(BreakpointS)

  var all = [];
  var column = [];

  useEffect(() => {
    imageList &&
      imageList.forEach((element, index) => {
        if (index % 3 === 0 && index !== 0) {
          all.push(column);
          column = [element];
        } else if (index === imageList.length - 1 && column.length > 0) {
          column.push(element);
          all.push(column);
        } else {
          column.push(element);
        }
      });
    all.map((element) => console.log(element));
  }, [imageList]);

  useEffect(() => {
    setContent(() =>
      all.map((element, index) => (
        <div className="HexaPattern__column" key={index}>
          <HexaColumn
            elements={element}
          />
        </div>
      ))
    );
  }, []);

  return imageList && all ? (
    <div className="HexaPattern">
      <div className="HexaPattern__content">{content}</div>
    </div>
  ) : null;
};

HexaPattern.propTypes = {
  imageList: PropTypes.array,
};

export default HexaPattern;
