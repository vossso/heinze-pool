import React from "react";
import PropTypes from "prop-types";

import "./ServiceTeaserElement.scss";
import TextBox from "../share/TextBox/TextBox";
import FaqBox from "../FaqBox/FaqBox";
import useBreakpoint from "../../hooks/useBreakpoint";

const ServiceTeaserElement = ({ title, text, image, alt }) => {
  const BreakpointXL = useBreakpoint("xl");

  return (
    <div className="ServiceTeaserElement">
      <div className="ServiceTeaserElement__content">
        {BreakpointXL ? (
          <FaqBox title={title} description={text} />
        ) : (
          <TextBox
            title={title}
            text={text}
            icon={{ image, alt }}
            variant="full-height"
          />
        )}
      </div>
    </div>
  );
};

ServiceTeaserElement.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  alt: PropTypes.string,
};

export default ServiceTeaserElement;
