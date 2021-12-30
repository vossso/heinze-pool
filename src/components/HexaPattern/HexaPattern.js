import React, { useEffect, useState, createContext } from "react";
import PropTypes from "prop-types";

import "./HexaPattern.scss";

import HexaColumn from "../HexaColumn/HexaColumn";
import useBreakpoint from "../../hooks/useBreakpoint";
import hexaPatternDivisions from "./HexaPatternDivisions";
import { CSSTransition } from "react-transition-group";
import Overlay from "../share/Overlay/Overlay";
import getArrayIds from "../../helpers/getArrayIds";

export const HexaPatternContext = createContext(null);

const HexaPattern = ({ imageList }) => {
  const listLength = imageList.length;
  const [showOverlay, setShowOverlay] = useState(false);
  const [activeProject, setActiveProject] = useState(0);
  const onClick = (index) => {
    setActiveProject(index);
    setShowOverlay(true);
  };
  const onPrev = () => {
    activeProject > 0
      ? setActiveProject(activeProject - 1)
      : setActiveProject(listLength - 1);
  };
  const onNext = () => {
    activeProject < listLength - 1
      ? setActiveProject(activeProject + 1)
      : setActiveProject(0);
  };
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
  const imageListCopy = getArrayIds(imageList);
  useEffect(() => {
    let sorted = [];
    let overallIndex = 0;
    pattern &&
      pattern.map((column, index) => {
        sorted[index] = [];
        for (let i = 0; i < column; i++) {
          const element = imageListCopy.reverse().pop();
          element && sorted[index].push(element);
          overallIndex++;
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
                <HexaColumn column={column} />
              </div>
            )
          );
        })
    );
  }, [pattern, imageList]);

  return listLength > 0 ? (
    <>
      <div className="HexaPattern">
        <HexaPatternContext.Provider value={{ onClick }}>
          <div className="HexaPattern__content">{content}</div>
        </HexaPatternContext.Provider>
      </div>
      {
        <CSSTransition
          in={
            imageListCopy.find((element) => element.id === activeProject) &&
            showOverlay
          }
          timeout={300}
          classNames="alert"
          unmountOnExit
        >
          <Overlay
            content={imageListCopy.find(
              (element) => element.id === activeProject
            )}
            onClick={() => setShowOverlay(false)}
            onPrev={() => onPrev()}
            onNext={() => onNext()}
          />
        </CSSTransition>
      }
    </>
  ) : null;
};

HexaPattern.propTypes = {
  imageList: PropTypes.array,
};

export default HexaPattern;
