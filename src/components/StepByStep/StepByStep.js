import React, { useRef } from "react";
import PropTypes from "prop-types";
// import SteppedLineTo from "react-lineto";

import "./StepByStep.scss";
import Container from "../share/Container/Container";
import Step from "../Step/Step";

const StepByStep = ({ steps }) => {
  const lineRef = useRef(null);

  return steps ? (
    <Container variant={["full-height", "starter"]}>
      <div className="StepByStep" ref={lineRef}>
        <h3 className="A">Step by Step zu deinem Pool</h3>
        <p className="B">
          Von der Idee in Ihrem Kopf bis hin zum fertigen Pool.
        </p>
        {steps.map((element, index) => {
          return (
            <Step title={element.text} key={index} className={`no${index}`} />
          );
        })}
      </div>
      {/* <SteppedLineTo
        from={`Step no0`}
        fromAnchor="center right"
        to={`Step no1`}
        toAnchor="center left"
        borderColor="#1E3769"
        borderWidth="2px"

        orientation="h"

      /> */}
    </Container>
  ) : null;
};

StepByStep.propTypes = {
  steps: PropTypes.array,
};

export default StepByStep;
