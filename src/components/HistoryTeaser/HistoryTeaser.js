import React from "react";
import PropTypes from "prop-types";

import TextBox from "../share/TextBox/TextBox";
import "./HistoryTeaser.scss";
import Container from "../share/Container/Container";
import useBreakpoint from "../../hooks/useBreakpoint";
import PreviewCompatibleImage from "../share/Image/PreviewCompatibleImage";

const HistoryTeaser = ({ data }) => {
  const { title: year, description, historyimage } = data;
  const BreakpointM = useBreakpoint("m");
  const variant = BreakpointM ? "full-width" : ["no-padding", "no-top", "no-bottom"];

  return (
    <div className="HistoryTeaser">
      <Container variant={variant}>
        <div className="HistoryTeaser__wrapper">
          <div className="HistoryTeaser__content">
            <span>{year}</span>
            <TextBox text={description} isRichText={true}/>
          </div>
          {historyimage && (
            <div className="HistoryTeaser__image">
              <PreviewCompatibleImage imageInfo={historyimage} />
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
