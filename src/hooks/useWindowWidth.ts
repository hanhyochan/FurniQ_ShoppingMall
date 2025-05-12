import { useState, useEffect } from 'react';
import useUiStore from '@/store/useUiStore';

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const setZustandWindowWidth = useUiStore(state => state.setWindowWidth);

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      setWindowWidth(newWidth);
      setZustandWindowWidth(newWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [setZustandWindowWidth]);

  return windowWidth;
};

export default useWindowWidth;
