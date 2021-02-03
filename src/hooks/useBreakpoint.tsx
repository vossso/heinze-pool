import { useEffect, useState } from 'react';

export type Viewport = 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';

const useBreakpoint = (viewport: Viewport): boolean => {
  const [isMaxVp, setIsMaxVp] = useState<boolean>(false);

  const breakpoints: { [key in Viewport]: number } = {
    xxs: 0,
    xs: 360,
    s: 480,
    m: 568,
    l: 800,
    xl: 1024,
    xxl: 1280,
  };

  let currentViewport: Viewport;
  

  const isMaxViewport = (viewport: Viewport) => {
    let vpIndex: number;
    let currentIndex: number;
    Object.keys(breakpoints).forEach((bp, i) => {
      if (viewport === bp) {
        vpIndex = i;
      }
      if (currentViewport === bp) {
        currentIndex = i;
      }
    });
    setIsMaxVp(vpIndex >= currentIndex);
  };
  const setWidths = () => {
    const currentWidth = window.innerWidth;

    Object.keys(breakpoints).forEach(bp => {
      if (currentWidth > breakpoints[bp]) {
        currentViewport = bp as Viewport;
      } else {
        return;
      }
    });

    isMaxViewport(viewport);
  };

  useEffect(() => {
    setWidths();
    window.addEventListener('resize', setWidths);
    return () => {
      window.removeEventListener('resize', setWidths);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isMaxVp;
};

export default useBreakpoint;
