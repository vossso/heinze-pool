import { useCookies } from "react-cookie";

export const pushToDataLayer = (
  obj: Record<string, any> | Record<string, any>[]
) => {
  if (
    typeof window !== "undefined" &&
    typeof window["dataLayer"] !== "undefined"
  ) {
    const dataLayer = window["dataLayer"];
    obj && (obj as Record<string, any>[]).length
      ? (obj as Record<string, any>[]).forEach((value) => dataLayer.push(value))
      : dataLayer.push(obj);
  }
};


const useCookiePolicy = () => {
  const [, setCookie] = useCookies();

  const setCookiePolicy = (value: number) => {
    pushToDataLayer([{ marketingCookieConsent: value === 1 }]);
    if (value === 1) {
      pushToDataLayer({ event: "consentChange" });
      pushToDataLayer({"js" : new Date()});
      pushToDataLayer({"config":  "G-QLNEWDJ89S"});
    }
    setCookie("cookie-policy", value);
  };

  return { setCookiePolicy };
};

export default useCookiePolicy;
