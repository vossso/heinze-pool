import hexa from "../../../img/icons/hexa-3.svg";
import close from "../../../img/icons/close.svg";
import React, { useEffect, useState } from "react";

import "./InfoBox.scss";

interface IInfoBox {
  title?: string;
  text: string;
}

const InfoBox: React.FC<IInfoBox> = ({ title, text }) => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className={`InfoBox${isVisible ? " InfoBox--visible" : ""}`}>
      <img className="InfoBox__hexa" src={hexa} alt="InfoBox" />
      <div className="InfoBox__content">
        {title && <h3>{title}</h3>}
        <p>{text}</p>
      </div>
      <button className="InfoBox__close" onClick={() => setIsVisible(false)}>
        <img className="InfoBox__close-icon" src={close} alt="InfoBox" />
      </button>
    </div>
  );
};

export default InfoBox;
