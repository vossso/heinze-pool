import { useEffect, useState } from "react";

//ToDo @ilja @sophie add option to use ref

const useScrollPos = () => {
  const [currentScrollY, setCurrentScrollY] = useState<number>(0);
  const handleScroll = () => {
    setCurrentScrollY(window.pageYOffset);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return currentScrollY;
};

export default useScrollPos;
