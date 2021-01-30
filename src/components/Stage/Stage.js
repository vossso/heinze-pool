import React from "react";
import PropTypes from "prop-types";
import "./Stage.scss";
import Container from "../share/Container/Container";
import Navbar from "../Navbar";

const Stage = ({ image, title }) => {

  return (
    <Container variant={["half-height", "full-width", "no-padding", "starter"]}>
      <div className="Stage">
        <Navbar variant="transparent" />
        {image && (
          <div className="Stage__image">
            <img
              src={
                !!image.childImageSharp
                  ? image.childImageSharp.fluid.src
                  : image
              }
              alt="Poool"
            />
          </div>
        )}

        <div className="Stage__content">
          <Container>
            {title && <h2>{title}</h2>}
          </Container>
        </div>
      </div>
    </Container>
  );
};

Stage.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  title: PropTypes.string,
};

export default Stage;
