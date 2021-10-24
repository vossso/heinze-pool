import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const PreviewCompatibleImage = ({ imageInfo, styles, loading = 'lazy' }, objectFit="cover") => {
  const imageStyle = styles ? styles : { objectFit: "cover" };
  const { alt = "", childImageSharp, image } = imageInfo;
  const imagePath = getImage(image);
  if (!!image && !!image.childImageSharp) {
    return (
      <GatsbyImage image={imagePath} alt={alt} loading={loading}  style={imageStyle} objectFit={objectFit}/>
    );
  }

  if (!!childImageSharp) {
    return <GatsbyImage image={imagePath} alt={alt} loading={loading} style={imageStyle} objectFit={objectFit}/>
  }

  if (!!image && typeof image === "string") {
    return <img style={imageStyle} src={image} alt={alt} loading={loading}/>;
  }

  if (!!image && !!image.publicURL) {
    return <img style={imageStyle} src={image.publicURL} alt={alt} loading={loading}/>;
  }

  return null;
};

PreviewCompatibleImage.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    style: PropTypes.object,
  }).isRequired,
};

export default PreviewCompatibleImage;
