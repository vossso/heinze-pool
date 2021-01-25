import React from "react";
import PropTypes from "prop-types";

import "./ServiceTeaser.scss";
import Container from "../share/Container/Container";
import ServiceTeaserElement from "../ServiceTeaserElement/ServiceTeaserElement";
import ArrowLink from '../share/ArrowLink/ArrowLink';


const ServiceTeaser = ({ content }) => {
  const { title, labor } = content;

  return content ? (
    <Container variant={["full-height", "starter"]}>
      <div className="ServiceTeaser">
        <h3>{title}</h3>
        <div className="ServiceTeaser__boxes">
          {labor &&
            labor.map((element, index) => {
              const { title, text, image, alt } = element;
              return (
                <div className="ServiceTeaser__box">
                  <ServiceTeaserElement
                    title={title}
                    text={text}
                    image={image}
                    alt={alt}
                    key={index}
                  />
                  {index !== labor.length-1 && <ArrowLink size="4rem"/>  }
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
