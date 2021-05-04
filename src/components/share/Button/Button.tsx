import React from "react";
import getVariantClasses from "../../../helpers/getVariantClasses";

import Link from "../Link/Link";
import './Button.scss'

interface ILink {
  label: string;
  link?: string;
  variant?: 'dark';
  onClickHandler?: () => void;
}

const Button: React.FC<ILink> = ({
  label,
  link,
  variant,
  onClickHandler,
}) => {
    const className = getVariantClasses("Button", variant)

  return onClickHandler ? (
    <button className={className+' ga-hp_test'} onClick={onClickHandler}>
      {label}
    </button>
  ) : <Link extraClass={className} link={link} label={label}/>
};

export default Button;
