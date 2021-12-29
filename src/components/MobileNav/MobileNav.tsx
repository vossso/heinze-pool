import React, { useState } from "react";
import AnimateHeight from "react-animate-height";
import useWindowLocation from "../../hooks/useWindowLocation";
import { TransitionLink } from "gatsby-plugin-transition-link/components/TransitionLink";
import { StaticImage } from "gatsby-plugin-image";

import "./MobileNav.scss";
import getVariantClasses from "../../helpers/getVariantClasses";

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
      <TransitionLink
        className="navbar-item"
        to={to}
        onClick={() => setShowMenu(false)}
      >
        {label}
      </TransitionLink>
    ) : (
      <TransitionLink className="navbar-item" to={to}>
        {label}
      </TransitionLink>
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
            <StaticImage
              src="../../img/water.webp"
              height={600}
              alt="Heinze-Pool"
            />
          </div>
          <button
            className="MobileNav__close"
            onClick={() => setShowMenu(false)}
          >
            <div></div>
          </button>
          <div className="MobileNav__content">
            <div className="MobileNav__logo">
              {getLink(
                "/",
                <StaticImage
                  src="../../img/Logo-line_white.png"
                  height={300}
                  alt="Heinze-Pool"
                />
              )}
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
                {getLink("/product/überdachung", "Abdeckung")}
                {getLink("/product/wasserpflege", "Wasserpflege")}
                {getLink("/product/zubehör", "Zubehör")}
              </AnimateHeight>
            </div>
            {getLink("/portfolio", "Projekte")}
            {getLink("/about", "Über uns")}
            {getLink("/about#contact", "Kontakt")}
            {getLink("/faq", "FAQ")}
          </div>
          <div className="MobileNav__meta">
            <TransitionLink to="/meta/impressum">
              Impressum & Datenschutz
            </TransitionLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
