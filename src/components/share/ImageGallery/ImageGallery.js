import React from "react";
import PropTypes from "prop-types";

import "./ImageGallery.scss";
import PreviewCompatibleImage from "../Image/PreviewCompatibleImage";

const ImageGallery = ({ images, styles }) => {
  return (
    images && (
      <div className="ImageGallery">
        {images.length > 1 ? (
          images.map((element, index) => {
            return (
              <div className="ImageGallery__image" key={index}>
                <PreviewCompatibleImage
                  imageInfo={element}
                  styles={styles ? styles : { objectFit: "cover", height: "100%", width: "100%" }}
                />
              </div>
            );
          })
        ) : (
          <div className="ImageGallery__image">
            <PreviewCompatibleImage imageInfo={images[0]} />
          </div>
        )}
      </div>
    )
  );
};

ImageGallery.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  images: PropTypes.array,
};

export default ImageGallery;
