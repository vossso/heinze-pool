import React, { useRef } from "react";
import PropTypes from "prop-types";

import "./StepByStep.scss";
import Container from "../share/Container/Container";
import Step from "../Step/Step";
import useBreakpoint from "../../hooks/useBreakpoint";
import useElementScroll from "../../hooks/useElementScroll";

const StepByStep = ({ steps }) => {
  const BreakpointXL = useBreakpoint("xl");
  const ref = useRef(null)
  const [, isInView] = useElementScroll(ref)

  return steps ? (
    <div className="StepByStep" ref={ref}>
      <Container variant={BreakpointXL ? "" : ["full-height", "starter"]}>
        <div className="StepByStep__wrapper">
          {/* <div className="StepByStep__line" /> */}
          <h3>Schritt für Schritt zu Ihrem Pool</h3>
          <p>Von Ihrer Idee zum fertigen Pool.</p>
          <div className="StepByStep__steps">
            {steps.map((element, index) => {
              return (
                <Step
                  title={element.text}
                  key={index}
                  className={`no${index}`}
                />
              );
            })}
          </div>
        </div>
      </Container>
      <div className={`LineAnimation${isInView ? " LineAnimation--start" : ""}`}>
        {BreakpointXL ? (
          <div className="line-single" />
        ) : (
          <>
            <div className="line-0" />
            <div className="zigzag">
              {steps.map((element, index) => {
                if (index === 0) {
                  return null;
                } else if (index % 2 === 0) {
                  return <div className={`line-even no${index}`} key={index}/>;
                } else {
                  return <div className={`line-odd no${index}`} key={index}/>;
                }
              })}
            </div>
          </>
        )}
      </div>
    </div>
  ) : null;
};

StepByStep.propTypes = {
  steps: PropTypes.array,
};

export default StepByStep;
