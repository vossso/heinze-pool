import hexa from "../../../img/icons/hexa-3.svg";
import close from "../../../img/icons/close.svg";
import closeW from "../../../img/icons/close-white.svg";
import arrow from "../../../img/icons/arrow.svg";
import React, { useEffect, useState } from "react";

import "./InfoBox.scss";
import useBreakpoint from "../../../hooks/useBreakpoint";

interface IInfoBox {
  title?: string;
  text: string;
  introText?: string;
}

const InfoBox: React.FC<IInfoBox> = ({
  title = "Neuste Infos",
  text,
  introText,
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const BreakpointS = useBreakpoint("s");

  return (
    <div
      className={`InfoBox${isVisible ? " InfoBox--visible" : ""}${
        isOpen && isVisible ? " InfoBox--open" : ""
      }`}
    >
      {BreakpointS && (
        <div className={`InfoBox__bg${isVisible ? " InfoBox--visible" : ""}`} />
      )}
      <div className="InfoBox__wrapper">
        <button className="InfoBox__button" onClick={() => setIsOpen(!isOpen)}>
          <img className="InfoBox__hexa" src={hexa} alt="InfoBox" />
          <div className="InfoBox__content">
            <h3 className="InfoBox__title">{title}</h3>
            <p className="InfoBox__text">
              {isOpen ? (
                text
              ) : (
                <>
                  {introText}
                  <img
                    className="InfoBox__arrow-icon"
                    src={arrow}
                    alt="InfoBox"
                  />
                </>
              )}
            </p>
          </div>
        </button>
        <button className="InfoBox__close" onClick={() => setIsVisible(false)}>
          <img className="InfoBox__close-icon" src={close} alt="InfoBox" />
        </button>
      </div>
      <div className="InfoBox__details">
        <div className="InfoBox__content">
          <h3 className="InfoBox__title">{title}</h3>
          <p className="InfoBox__text">{text}</p>
        </div>
        <button
            className="InfoBox__close"
            onClick={() => BreakpointS ? setIsVisible(false) : setIsOpen(false)}
          >
            <img className="InfoBox__close-icon" src={closeW} alt="InfoBox" />
          </button>
      </div>
    </div>
  );
};

export default InfoBox;
