import React from "react";
import Link from "../Link/Link";
import getVariantClasses from "../../../helpers/getVariantClass";
import PreviewCompatibleImage from "../Image/PreviewCompatibleImage";
import Markdown from "markdown-to-jsx";

import "./TextBox.scss";

const TextBox = ({ title, text, label, link, variant, icon, isRichText = false }) => {
  const className = getVariantClasses("TextBox", variant);
  return (
    <div className={className}>
      {icon && (
        <div className="TextBox__icon">
          <PreviewCompatibleImage imageInfo={icon} />
        </div>
      )}
      {title && <h4>{title}</h4>}
      {text && isRichText ? <Markdown>{text}</Markdown>:<p>{text}</p>}
      {link && <Link label={label} link={link} />}
    </div>
  );
};

export default TextBox;
