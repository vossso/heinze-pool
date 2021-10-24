import React from "react";
import PropTypes from "prop-types";
import "./Stage.scss";
import Container from "../share/Container/Container";
import useBreakpoint from "../../hooks/useBreakpoint";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Stage = ({ image, title, isStarter = true, description = null }) => {
  const BreakpointM = useBreakpoint("m");
  const variant = isStarter
    ? ["half-height--start", "full-width", "no-padding", "starter"]
    : ["half-height--start", "full-width", "no-padding"];
  const getContent = (
    <div className="Stage">
      {image && (
        <div className="Stage__image">
          {getImage(image) ? (
            <GatsbyImage
              image={getImage(image)}
              style={{ position: "relative", height: "100%", width: "100vw" }}
              fadeIn={true}
              alt={title}
            />
          ) : (
            <img
              style={{ position: "relative", height: "100%", width: "100vw" }}
              src={image}
              alt={title}
            />
          )}
        </div>
      )}

      <div className="Stage__content">
        <Container>
          {title && <h1>{title}</h1>}
          {description && <p>{description}</p>}
        </Container>
      </div>
    </div>
  );

  return BreakpointM ? (
    getContent
  ) : (
    <Container variant={variant}>
      {/* ToDo Starter */}
      {getContent}
    </Container>
  );
};

Stage.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  title: PropTypes.string,
};

export default Stage;
