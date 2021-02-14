import React from "react";
import PropTypes from "prop-types";
import "./Stage.scss";
import Container from "../share/Container/Container";
import Navbar from "../Navbar/Navbar";
import useBreakpoint from "../../hooks/useBreakpoint";

const Stage = ({ image, title }) => {
  const BreakpointM = useBreakpoint("m");

  const getContent = (
    <div className="Stage">
      <Navbar variant="transparent" />
      {image && (
        <div className="Stage__image">
          <img
            src={
              !!image.childImageSharp ? image.childImageSharp.fluid.src : image
            }
            alt="Poool"
          />
        </div>
      )}

      <div className="Stage__content">
        <Container>{title && <h2>{title}</h2>}</Container>
      </div>
    </div>
  );

  return BreakpointM ? (
    getContent
  ) : (
    <Container variant={["half-height", "full-width", "no-padding"]}>
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
