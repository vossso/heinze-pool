import React from "react";
import PropTypes from "prop-types";

import "./Reasons.scss";
import Container from "../share/Container/Container";
import HexaIcon from "../share/HexaIcon/HexaIcon";
import TextBox from "../share/TextBox/TextBox";
import useBreakpoint from "../../hooks/useBreakpoint";

const Reasons = ({ title, reasonsList }) => {
  const BreakpointXL = useBreakpoint("xl");

  const contVariant = BreakpointXL ? "" : ["full-height"];

  return reasonsList.length > 0 ? (
    <div className="Reasons">
      <Container variant={contVariant}>
        <div className="Reasons__wrapper">
          <h2>{title}</h2>
          <div className="Reasons__content">
            {reasonsList.map((element, index) => {
              const { reason, description } = element;
              return (
                <div className="Reasons__reason" key={index}>
                  <div className="Reasons__hexa">
                    <HexaIcon size="5rem" number={index + 1} />
                  </div>
                  <TextBox
                    title={reason}
                    text={description}
                    variant={BreakpointXL ? "auto-height" : null}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  ) : null;
};

Reasons.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  reasonsList: PropTypes.array,
};

export default Reasons;
