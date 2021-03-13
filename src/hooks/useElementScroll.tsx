import { RefObject, useEffect, useState } from "react";
import useScrollPos from "./useScrollPos";

const useElementScroll = (ref: RefObject<HTMLElement>) => {
  const currentScrollY = useScrollPos();
  const [isTop, setIsTop] = useState(false);
  const [isInView, setIsView] = useState(false);

  useEffect(() => {
    ref.current.offsetTop <= currentScrollY + 80 && setIsTop(true);
    ref.current.offsetTop <= currentScrollY + (window.innerHeight/2) &&
      setIsView(true);

  }, [currentScrollY]);

  return [isTop, isInView];
};

export default useElementScroll;
