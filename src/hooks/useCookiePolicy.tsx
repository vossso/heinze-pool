import { useCookies } from "react-cookie";
import ReactGA from "react-ga";

const useCookiePolicy = () => {
  const [, setCookie] = useCookies();

  const setCookiePolicy = (value: number) => {
    if (value === 1) {
      ReactGA.initialize("G-289WBD66JY");
      ReactGA.pageview(window.location.pathname + window.location.search);
    }
    setCookie("cookie-policy", value);
  };

  return { setCookiePolicy };
};

export default useCookiePolicy;
