import React from "react";
import Link from "../Link/Link";

import "./CookieNotice.scss";

const CookieNotice = () => {
  return (
    <div>
      <p>
        Diese Internetseite verwendet Cookies, Google Analytics und den
        Facebook-Pixel für die Analyse und Statistik. Cookies helfen uns, die
        Benutzerfreundlichkeit unserer Website zu verbessern. Durch die weitere
        Nutzung der Website stimmen Sie der Verwendung zu. Weitere Informationen
        hierzu finden Sie in unserer Datenschutzerklärung.
      </p>
      <Link label="Akzeptieren" link=""/>
      <Link label="Nur notwenidge Cookies" link=""/>
    </div>
  );
};

export default CookieNotice;
