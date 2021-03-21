import React, {useState, useEffect, useContext} from "react";
import Link from "../Link/Link";
import VisibilityContext from '../../../contexts/VisibilityContext';
import useCookieByKey from '../../../hooks/useCookieByKey';
import useCookiePolicy from '../../../hooks/useCookiePolicy';

import "./CookieNotice.scss";

const CookieNotice = () => {
  const targetScope: string[] = [
    'Speichern von notwendigen Cookies zur Bereitstellung grundlegender Funktionen auf dieser Webseite',
    'Speichern anonymisierter statistischer Daten',
    'Speichern anonymisierter Daten des Browsing-Verhaltens',
    'Speichern anonymisierter Daten zur Bereitstellung von personalisierter Werbung (Targeting)',
  ];

  const scopeOptions: ScopeOption[] = [
    {
      label: 'Notwendig',
      scope: [0],
    },
    { label: 'Targeting', scope: [0, 1, 2, 3] },
  ];

  const cookiePolicy = +useCookieByKey('cookie-policy', '1');

  const [selectedCategory, setSelectedCategory]: [number, any] = useState(
    cookiePolicy
  );

  useEffect(() => {
    setSelectedCategory(cookiePolicy);
  }, [cookiePolicy]);

  const { setCookiePolicy } = useCookiePolicy();

  interface ScopeOption {
    label: string;
    scope: number[];
  }

  const setCategory = index => {
    setSelectedCategory(index);
  };

  const { visibleItems, hideItem } = useContext(VisibilityContext);

  const isVisible = visibleItems.includes('cookieLayer');

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
