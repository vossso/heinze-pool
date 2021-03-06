import React, { useState } from "react";
import { Link } from "gatsby";
import bgImage from "../../img/water.jpg";
import logo from "../../img/Logo-line_white.png";
import AnimateHeight from "react-animate-height";
import useWindowLocation from "../../hooks/useWindowLocation";

import "./MobileNav.scss";
import getVariantClasses from "../../helpers/getVariantClass";

interface IMobileNavProps {
  variant?: string;
}

const MobileNav: React.FC<IMobileNavProps> = ({ variant }) => {
  const [showDrop, setShowDrop] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const className = getVariantClasses("MobileNav", variant);
  const location = useWindowLocation().pathname;

  const getLink = (to, label) => {
    return to.includes(location) ? (
      <a className="navbar-item" href={to} onClick={() => setShowMenu(false)} >{label}</a>
    ) : (
      <Link className="navbar-item" to={to}>
        {label}
      </Link>
    );
  };

  return (
    <div className={className}>
      {!showMenu ? (
        <div className="MobileNav__bar">
          <button
            className="MobileNav__burger"
            onClick={() => setShowMenu(true)}
          >
            <div />
            <div />
            <div />
          </button>
        </div>
      ) : (
        <div className={`MobileNav__wrapper`}>
          <div className="MobileNav__bg-image">
            <img src={bgImage} alt="Poool" />
          </div>
          <button
            className="MobileNav__close"
            onClick={() => setShowMenu(false)}
          >
            <div></div>
          </button>
          <div className="MobileNav__content">
            <div className="MobileNav__logo">
              {getLink("/", <img src={logo} alt="Poool" />)}
            </div>
            {getLink("/service", "Leistungen")}
            <div className="MobileNav__ext">
              <a
                className="MobileNav__link"
                onClick={() => setShowDrop(!showDrop)}
              >
                Produkte
              </a>
              <AnimateHeight
                height={showDrop ? "auto" : 0}
                duration={300}
                className={`MobileNav__dropdown`}
              >
                {getLink("/products", "Übersicht")}
                {getLink("/product/pools", "Pools")}
                {getLink("/product/überdachung", "Überdachung")}
                {getLink("/product/wasserpflege", "Wasserpflege")}
                {getLink("/product/zubehör", "Zubehör")}
              </AnimateHeight>
            </div>
            {getLink("/portfolio", "Projekte")}
            {getLink("/about", "Über uns")}
            {getLink("/about#contact", "Kontakt")}
            {getLink("/faq", "FAQ")}
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
