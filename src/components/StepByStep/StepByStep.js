import React from "react";
import PropTypes from "prop-types";

import "./StepByStep.scss";
import Container from "../share/Container/Container";
import Step from "../Step/Step";

const StepByStep = ({ steps }) => {
  return steps ? (
    <Container variant={["full-height", "starter"]}>
      <div className="StepByStep">
      <h3>Step by Step zu deinem Pool</h3>
        {steps.map((element, index) => {
          return <Step title={element.text} key={index} />;
        })}
      </div>
    </Container>
  ) : null;
};

StepByStep.propTypes = {
  steps: PropTypes.array,
};

export default StepByStep;
