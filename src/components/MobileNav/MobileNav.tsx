import React, { useState } from "react";
import { Link } from "gatsby";
import bgImage from "../../img/water.jpg";
import logo from "../../img/hp-logo_white.png";
import AnimateHeight from "react-animate-height";

import "./MobileNav.scss";

interface IMobileNavProps {
  show?: boolean;
}

const MobileNav: React.FC<IMobileNavProps> = () => {
  const [showDrop, setShowDrop] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const getLink = (to, label) => {
    return (
      <Link className="navbar-item" to={to}>
        {label}
      </Link>
    );
  };

  return (
    <div className="MobileNav">
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
          <div className="MobileNav__content">
            <img src={logo} alt="Poool" />
            {getLink("/service", "Leistungen")}
            <div className="MobileNav__ext">
              <button
                className="MobileNav__link"
                onClick={() => setShowDrop(!showDrop)}
              >
                <div
                  className={`Navbar__plus${
                    showDrop ? " Navbar__plus--active" : ""
                  }`}
                >
                  +
                </div>
                Produkte
              </button>
              <AnimateHeight height={showDrop ? "auto" : 0} duration={300}>
                <div className={`MobileNav__dropdown`}>
                  {getLink("/products", "Übersicht")}
                  {getLink("/product/pools", "Pools")}
                  {getLink("/product/überdachung", "Überdachung")}
                  {getLink("/product/wasserpflege", "Wasserpflege")}
                  {getLink("/product/zubehör", "Zubehör")}
                </div>
              </AnimateHeight>
            </div>
            {getLink("/portfolio","Projekte")}
            {getLink("/about","Über uns")}
            {getLink("/about#contact","Kontakt")}
            {getLink("/faq","FAQ")}
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
