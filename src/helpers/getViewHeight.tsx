import { useEffect, useState } from "react";

const getViewHeight = () => {
    let vh = 0;
  const handleResize = () => {
    vh = window.innerHeight * 0.01;
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return vh;
};
export default getViewHeight;
