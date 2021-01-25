import React from "react";
import PropTypes from "prop-types";

import "./Step.scss";
import hexa from "../../img/icons/hexa.svg";
import TextBox from "../share/TextBox/TextBox";

const Step = ({ title }) => {
  return (
    <div className="Step">
      <div className="Step__content">
        <TextBox title={title} variant="auto-height" />
        <div className="Step__hexa">
          <img src={hexa} alt="Poool" />
        </div>
      </div>
    </div>
  );
};

Step.propTypes = {
  title: PropTypes.string,
};

export default Step;
