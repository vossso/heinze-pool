import React, { useState } from "react";
import PropTypes from "prop-types";

import "./StepByStep.scss";
import Container from "../share/Container/Container";
import Step from "../Step/Step";
import useBreakpoint from "../../hooks/useBreakpoint";

const StepByStep = ({ steps }) => {
  const [start, setStart] = useState(false);
  const BreakpointXL = useBreakpoint("xl");

  return steps ? (
    <div className="StepByStep" onMouseOver={() => setStart(true)}>
      <Container variant={["full-height", "starter"]}>
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
      <div className={`LineAnimation${start ? " LineAnimation--start" : ""}`}>
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
                  return <div className={`line-even no${index}`} />;
                } else {
                  return <div className={`line-odd no${index}`} />;
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
