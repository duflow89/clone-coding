import { RefObject, useEffect } from 'react';

type useOutsideClick = (ref: RefObject<any>, handler: (e?: Event) => void) => void;

const useOutsideClick: useOutsideClick = (ref, handler) => {
  useEffect(() => {
    const listener = (e: Event) => {
      if (!ref.current || ref.current.contains(e.target)) {
        return;
      }
      handler(e);
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
};

export default useOutsideClick;
