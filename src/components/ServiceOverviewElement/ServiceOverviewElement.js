import React from "react";
import PropTypes from "prop-types";

import "./ServiceOverviewElement.scss";
import HexaIcon from "../share/HexaIcon/HexaIcon";
import TextBox from "../share/TextBox/TextBox";

const ServiceOverviewElement = ({ icon, title, description, link }) => {
  return (
    <div className="ServiceOverviewElement">
      <div className="ServiceOverviewElement__content">
        <HexaIcon icon={icon} size="9rem" />
        <TextBox title={title} text={description} link={link} label="Mehr erfahren" isRichText={true}/>
      </div>
    </div>
  );
};

ServiceOverviewElement.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  description: PropTypes.string,
};

export default ServiceOverviewElement;
