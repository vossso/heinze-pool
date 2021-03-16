import React, { useRef } from "react";
import PropTypes from "prop-types";

import "./Reasons.scss";
import Container from "../share/Container/Container";
import HexaIcon from "../share/HexaIcon/HexaIcon";
import TextBox from "../share/TextBox/TextBox";
import useBreakpoint from "../../hooks/useBreakpoint";
import { CSSTransition } from "react-transition-group";
import useElementScroll from "../../hooks/useElementScroll";

const Reasons = ({ title, reasonsList }) => {
  const BreakpointXL = useBreakpoint("xl");
  const BreakpointXXL = useBreakpoint("xxl");
  const ref = useRef(null);
  const [, isInView] = useElementScroll(ref);

  const contVariant = BreakpointXXL ? "" : ["full-height"];

  return reasonsList.length > 0 ? (
    <div className="Reasons" ref={ref}>
      <Container variant={contVariant}>
        <div className="Reasons__wrapper">
          <h3>{title}</h3>
          <div className="Reasons__content">
            {reasonsList.map((element, index) => {
              const { reason, description } = element;
              return !BreakpointXL ? (
                <CSSTransition
                  in={isInView}
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
                      variant={BreakpointXL ? "auto-height" : null}
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
