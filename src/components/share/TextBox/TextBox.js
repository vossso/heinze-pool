import React from "react";
import Link from "../Link/Link";
import getVariantClasses from "../../../helpers/getVariantClass";
import PreviewCompatibleImage from "../Image/PreviewCompatibleImage";
import Markdown from "markdown-to-jsx";
import { CSSTransition } from "react-transition-group";

import "./TextBox.scss";

const TextBox = ({
  title,
  text,
  label,
  link,
  variant,
  icon,
  isRichText = false,
  isAnimated,
  isOver,
}) => {
  const className = getVariantClasses("TextBox", variant);
  const getContent = (
    <div className={className}>
      {icon && (
        <div className="TextBox__icon">
          <PreviewCompatibleImage imageInfo={icon} />
        </div>
      )}
      {title && <h4>{title}</h4>}
      {text && isRichText ? <Markdown>{text}</Markdown> : <p>{text}</p>}
      {link && <Link label={label} link={link} />}
    </div>
  );
  return isAnimated ? (
    <CSSTransition
      in={isOver}
      timeout={300}
      classNames="slideIn"
      unmountOnExit
      mountOnEnter
    >
      {getContent}
    </CSSTransition>
  ) : (
    getContent
  );
};

export default TextBox;
