import React from "react";
import PropTypes from "prop-types";

import HistoryTeaser from "../HistoryTeaser/HistoryTeaser";
import Container from "../share/Container/Container";

import "./History.scss";

const History = ({ data }) => {
  return data ? (
    <div className="History">
      <Container>
        <h3>Unsere Geschichte</h3>
        <p>
          Seit über 50 Jahren haben wir als Familie das große Glück unsere
          Leidenschaft für die Schwimmbadtechnik leben zu können. Dabei stehen
          wir seither für höchste Qualität, Kundenzufriedenheit und Service.
          Erschaffen Sie sich Ihr eigenes Bild und entdecken unsere Geschichte:
        </p>
      </Container>
      <div className="History__teasers">
        {data.length > 0 &&
          data.map((item, index) => <HistoryTeaser data={item} key={index} />)}
      </div>
    </div>
  ) : null;
};

History.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      historyimage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      title: PropTypes.string,
      description: PropTypes.string,
    })
  ).isRequired,
  getAsset: PropTypes.func,
};

export default History;
