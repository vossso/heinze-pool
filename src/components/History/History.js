import React from "react";
import PropTypes from "prop-types";

import HistoryTeaser from "../HistoryTeaser/HistoryTeaser";
import Container from "../share/Container/Container";

import "./History.scss";

const History = ({ data }) => {
  return data ? (
    <div className="History">
      <Container>
        <div className="History__intro">
          <h2>Unsere Geschichte</h2>
        </div>
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
