import React from "react";
import PropTypes from "prop-types";
import "./Stage.scss";
import Container from "../share/Container/Container";
import useBreakpoint from "../../hooks/useBreakpoint";
import Img from "gatsby-image";

const Stage = ({ image, title, isStarter = true, description = null }) => {
  const BreakpointM = useBreakpoint("m");
  const variant = isStarter
    ? ["half-height--start", "full-width", "no-padding", "starter"]
    : ["half-height--start", "full-width", "no-padding"];

  const getContent = (
    <div className="Stage">
      {image && (
        <div className="Stage__image">
          <Img fluid={{src: !!image.childImageSharp ? image.childImageSharp.fluid.src : image}} style={{position: "relative", height: "100%", width: "100vw"}} fadeIn={true} alt={title}/> 
        </div>
      )}

      <div className="Stage__content">
        <Container>
          {title && <h2>{title}</h2>}
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
