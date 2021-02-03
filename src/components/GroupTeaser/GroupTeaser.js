import React from "react";
import PropTypes from "prop-types";

import "./GroupTeaser.scss";
import PreviewCompatibleImage from "../share/Image/PreviewCompatibleImage";
import Container from "../share/Container/Container";
import TextBox from "../share/TextBox/TextBox";

const GroupTeaser = ({ products }) => {
  return (
    <Container variant={["full-height", "starter"]} id="Sonstige">
      <div className="GroupTeaser">
        {products.map((product, index) => {
          const { title, description, images } = product;
          return (
            <div className="GroupTeaser__content" key={index}>
              <div className="GroupTeaser__image">
                {images && images[0] && <PreviewCompatibleImage imageInfo={images[0]} />}
              </div>
              <div className="GroupTeaser__text">
                <TextBox title={title} text={description} />
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

GroupTeaser.propTypes = {
  products: PropTypes.array,
};

export default GroupTeaser;
