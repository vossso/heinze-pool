import React, { useEffect, useState } from "react";
import close from "../../../img/icons/close.svg";
import arrow from "../../../img/icons/arrow-blue.svg";
import getVariantClasses from "../../../helpers/getVariantClasses";

import "./Overlay.scss";
import Container from "../Container/Container";
import PreviewCompatibleImage from "../Image/PreviewCompatibleImage";

const Overlay = ({
  variant,
  content,
  onClick,
  onPrev = null,
  onNext = null,
}) => {
  const className = getVariantClasses("Overlay", variant);
  const [image, setImage] = useState(null);
  const [imageContent, setImageContent] = useState(null);
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (content) {
      content.imageObject && setImage(content.imageObject);
      setDescription(content.description);
    }
  }, [content]);

  useEffect(() => {
    image &&
      setImageContent(
        <div className="Overlay__image">
          <PreviewCompatibleImage
            imageInfo={image}
            styles={{ objectFit: "contain" }}
            objectFit="contain"
          />
        </div>
      );
  }, [image]);

  const onPrevClick = () => {
    imageContent && image && setImageContent(null);
    onPrev();
  };
  const onNextClick = () => {
    imageContent && image && setImageContent(null);
    onNext();
  };

  const getContent = (
    <>
      <div className="Overlay__bg" />
      <div className="Overlay__content">
        <div className="Overlay__text">
          <p>{description}</p>
        </div>
        {imageContent}
      </div>
      <button
        className="Overlay__arrow Overlay__arrow--prev"
        onClick={() => onPrevClick()}
      >
        <img src={arrow} alt="InfoBox" />
      </button>
      <button
        className="Overlay__arrow Overlay__arrow--next"
        onClick={() => onNextClick()}
      >
        <img src={arrow} alt="InfoBox" />
      </button>
      <button className="Overlay__close" onClick={() => onClick()}>
        <img className="InfoBox__close-icon" src={close} alt="InfoBox" />
      </button>
    </>
  );
  return (
    <div className={className}>
      <Container variant={["full-height"]}>{getContent}</Container>
    </div>
  );
};

export default Overlay;
