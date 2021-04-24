import "./Cookie.scss";
import React, { useContext, useEffect, useState } from "react";
import AnimateHeight from "react-animate-height";
import { useCookies } from "react-cookie";

import VisibilityContext from "../../../contexts/VisibilityContext";
import useCookiePolicy from "../../../hooks/useCookiePolicy";
import Link from "../Link/Link";
import Button from "../Button/Button";

const CookieNotice: React.FC = () => {
  const [isRendered, setIsRendered] = useState<boolean>(true);
  const cookieName = "cookie-policy";
  const [cookies] = useCookies();

  const { setCookiePolicy } = useCookiePolicy();

  const { visibleItems, showItem, hideItem } = useContext(VisibilityContext);

  const isVisible = visibleItems.includes("cookieNotice");

  useEffect(() => {
    if (!cookies[cookieName]) {
      setTimeout(() => showItem("cookieNotice"), 500);
    } else {
      hideItem("cookieNotice");
    }
  }, [cookies, showItem, hideItem]);

  return isRendered ? (
    <AnimateHeight
      duration={500}
      height={isVisible ? "auto" : 0}
      style={{ position: "fixed", bottom: "0", zIndex: 101 }}
      className="CookieNotice"
      onAnimationEnd={() => {
        if (!isVisible) {
          setIsRendered(false);
        }
      }}
    >
      <div className="CookieNotice__wrapper">
        <div className="CookieNotice__inner">
          <div className="CookieNotice__text">
            <span>
              Diese Website verwendet Funktionen und Cookies von Drittanbietern,
              um sicherzustellen, dass Sie die bestmögliche Erfahrung beim
              Besuch der Website haben. Bitte beachten Sie, dass das
              Nicht-Akzeptieren von Cookies von Drittanbietern die
              Website-Nutzung beeinträchtigt.
            </span><br/>
            <Link link="/meta/impressum" label="Weitere Infos" transition={true}/>
          </div>
          <div className="CookieNotice__buttons">
            <Button onClickHandler={() => setCookiePolicy(0)} label="Ablehnen"/>
            <Button onClickHandler={() => setCookiePolicy(1)} label="Akzeptieren" variant="dark" />
          </div>
        </div>
      </div>
    </AnimateHeight>
  ) : null;
};

export default CookieNotice;
