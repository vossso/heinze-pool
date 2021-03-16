
import { RefObject, useCallback, useEffect } from 'react';

import getSanitizedHash from '../helpers/getSanitizedHash';
import useWindowLocation from './useWindowLocation';

const useScrollToAnchor = (
  ref: RefObject<HTMLElement>,
  offset: number,
  hash: string,
  delay?: number
) => {
  const location = useWindowLocation();

  const urlHash = null;

  const sanHash = getSanitizedHash(hash);

  const scrollToRef = useCallback(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: ref.current.offsetTop - offset,
        behavior: 'smooth',
      });
    }
  }, [offset, ref]);

  return useEffect(() => {
    if (ref && ref.current && sanHash && urlHash === sanHash) {
      delay
        ? setTimeout(() => {
            scrollToRef();
          }, delay)
        : scrollToRef();
    }
    import('smoothscroll-polyfill').then(smoothscroll =>
      smoothscroll.polyfill()
    );
  }, [delay, ref, sanHash, scrollToRef, urlHash]);
};

export default useScrollToAnchor;
