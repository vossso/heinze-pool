import React from "react";
import PropTypes from "prop-types";
import Markdown from "markdown-to-jsx";

import TextBox from "../share/TextBox/TextBox";
import "./HistoryTeaser.scss";
import Container from "../share/Container/Container";
import useBreakpoint from "../../hooks/useBreakpoint";

const HistoryTeaser = ({ data }) => {
  const { title: year, description, historyimage } = data;
  const BreakpointM = useBreakpoint("m");
  const variant = BreakpointM ? "full-width" : ["no-padding"];

  return (
    <div className="HistoryTeaser">
      <Container variant={variant}>
        <div className="HistoryTeaser__wrapper">
          <div className="HistoryTeaser__content">
            <span>{year}</span>
            <TextBox text={<Markdown>{description}</Markdown>} />
          </div>
          {historyimage && (
            <div className="HistoryTeaser__image">
              <img
                src={
                  !!historyimage.image.childImageSharp
                    ? historyimage.image.childImageSharp.fluid.src
                    : historyimage.image
                }
                style={{ height: "100%", width: "100%" }}
                alt="oldpic"
              />
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

HistoryTeaser.propTypes = {
  data: PropTypes.shape({
    historyimage: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
      .isRequired,
    title: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default HistoryTeaser;
