import React, { useState } from "react";
import PropTypes from "prop-types";

import "./Reasons.scss";
import Container from "../share/Container/Container";
import HexaIcon from "../share/HexaIcon/HexaIcon";
import TextBox from "../share/TextBox/TextBox";
import useBreakpoint from "../../hooks/useBreakpoint";
import { CSSTransition } from "react-transition-group";

const Reasons = ({ title, reasonsList }) => {
  const BreakpointL = useBreakpoint("xl");
  const [isOver, setIsOver] = useState(false);

  return reasonsList.length > 0 ? (
    <div className="Reasons" onMouseEnter={() => setIsOver(true)}>
      {/* ToDo Starter */}
      <Container variant={["full-height"]}>
        <div className="Reasons__wrapper">
          <h3>{title}</h3>
          <div className="Reasons__content">
            {reasonsList.map((element, index) => {
              const { reason, description } = element;
              return !BreakpointL ? (
                <CSSTransition
                  in={isOver}
                  timeout={300}
                  classNames="slideIn"
                  unmountOnExit
                  mountOnEnter
                  key={index}
                >
                  <div className="Reasons__reason">
                    <div className="Reasons__hexa">
                      <HexaIcon size="5rem" number={index + 1} />
                    </div>
                    <TextBox
                      title={reason}
                      text={description}
                      variant={BreakpointL ? "auto-height" : null}
                    />
                  </div>
                </CSSTransition>
              ) : (
                <div className="Reasons__reason">
                  <div className="Reasons__hexa">
                    <HexaIcon size="5rem" number={index + 1} />
                  </div>
                  <TextBox
                    title={reason}
                    text={description}
                    variant={BreakpointL ? "auto-height" : null}
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
