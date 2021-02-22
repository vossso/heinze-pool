import React from "react";
import PropTypes from "prop-types";

import "./StepByStep.scss";
import Container from "../share/Container/Container";
import Step from "../Step/Step";

const StepByStep = ({ steps }) => {
  return steps ? (
    <Container variant={["full-height", "starter"]}>
      <div className="StepByStep">
        {/* <div className="StepByStep__line" /> */}
        <h3>Schritt für Schritt zu deinem Pool</h3>
        <p>Von der Idee in Ihrem Kopf bis hin zum fertigen Pool.</p>
        <div className="StepByStep__steps">
          {steps.map((element, index) => {
            return (
              <Step title={element.text} key={index} className={`no${index}`} />
            );
          })}
        </div>
      </div>
    </Container>
  ) : null;
};

StepByStep.propTypes = {
  steps: PropTypes.array,
};

export default StepByStep;
