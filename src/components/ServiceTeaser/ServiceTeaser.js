import React from "react";
import PropTypes from "prop-types";

import "./ServiceTeaser.scss";
import Container from "../share/Container/Container";
import ServiceTeaserElement from "../ServiceTeaserElement/ServiceTeaserElement";
import ArrowLink from "../share/ArrowLink/ArrowLink";
import useBreakpoint from "../../hooks/useBreakpoint";

const ServiceTeaser = ({ content }) => {
  const { title, labor } = content;
  const BreakpointL = useBreakpoint("l");

  return content ? (
    <Container variant={BreakpointL ? "" : ["full-height", "starter"]} id="wa">
      <div className="ServiceTeaser">
        <h2>{title}</h2>
        <div className="ServiceTeaser__boxes">
          {labor &&
            labor.map((element, index) => {
              const { title, text, image, alt } = element;
              return (
                <div className="ServiceTeaser__box" key={index}>
                  <ServiceTeaserElement
                    title={title}
                    text={text}
                    image={image}
                    alt={alt}
                    key={index}
                  />
                  {index !== labor.length - 1 && <ArrowLink size="4rem" />}
                </div>
              );
            })}
        </div>
      </div>
    </Container>
  ) : null;
};

ServiceTeaser.propTypes = {
  content: PropTypes.object,
};

export default ServiceTeaser;
