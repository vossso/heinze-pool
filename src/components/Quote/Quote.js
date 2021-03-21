import React from "react";
import PropTypes from "prop-types";
import "./Quote.scss";
import Container from "../share/Container/Container";

const Quote = ({ quote }) => {
  return quote.text ? (
    <div className="Quote">
      <Container variant={["half-height--start"]}>
        <div className="Quote__wrapper">
          <p className="Quote__text">{quote.text}</p>
          {quote.author && <p className="Quote__author">{quote.author}</p>}
        </div>
      </Container>
    </div>
  ) : null;
};

Quote.propTypes = {
  quote: PropTypes.shape({
    text: PropTypes.string,
    author: PropTypes.string,
  }),
};

export default Quote;
