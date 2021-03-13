import { useEffect, useState } from "react";


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
