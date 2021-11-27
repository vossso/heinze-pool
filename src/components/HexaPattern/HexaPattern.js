import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import "./HexaPattern.scss";

import HexaColumn from "../HexaColumn/HexaColumn";
import useBreakpoint from "../../hooks/useBreakpoint";
import hexaPatternDivisions from "./HexaPatternDivisions";

const HexaPattern = ({ imageList }) => {
  const listLength = imageList.length;
  const [content, setContent] = useState(() => null);
  const BreakpointXL = useBreakpoint("xl");
  const BreakpointL = useBreakpoint("l");
  const BreakpointM = useBreakpoint("m");
  const BreakpointS = useBreakpoint("s");
  const [pattern, setPattern] = useState([]);
  const [styling, setStyling] = useState([]);
  const { divisions, stylings } = hexaPatternDivisions;

  const mobileDivsion = BreakpointS ? 3 : 4;

  const mobileSize = Math.ceil(listLength / mobileDivsion);
  console.log(mobileDivsion, mobileSize);

  const padding = BreakpointS
    ? 11 / 2
    : BreakpointM
    ? 150 / 2
    : BreakpointXL
    ? 16 / 2
    : 20 / 2;
  const getPadding = (count) => {
    return { paddingTop: `${count * padding}rem` };
  };

  useEffect(() => {
    setPattern(
      BreakpointL
        ? [mobileSize, mobileSize, mobileSize, mobileSize]
        : divisions[listLength - 1]
    );
    BreakpointL
      ? setStyling([1, 0, 1, 0])
      : setStyling(stylings[listLength - 1]);
  }, [BreakpointL]);

  useEffect(() => {
    const imageListCopy = [...imageList];
    let sorted = [];
    pattern &&
      pattern.map((column, index) => {
        sorted[index] = [];
        for (let i = 0; i < column; i++) {
          const element = imageListCopy.pop();
          element && sorted[index].push(element);
        }
      });
    setContent(
      () =>
        sorted &&
        sorted.map((column, index) => {
          return (
            column.length > 0 && (
              <div
                className="HexaPattern__column"
                style={styling && getPadding(styling[index])}
                key={index}
              >
                <HexaColumn elements={column} />
              </div>
            )
          );
        })
    );
  }, [pattern, imageList]);

  return listLength ? (
    <div className="HexaPattern">
      <div className="HexaPattern__content">{content}</div>
    </div>
  ) : null;
};

HexaPattern.propTypes = {
  imageList: PropTypes.array,
};

export default HexaPattern;
