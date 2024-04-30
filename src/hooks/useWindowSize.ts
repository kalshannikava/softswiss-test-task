import { useState, useEffect } from 'react';

type Dimensions = { width: number, height: number };

const getDimensions = (): Dimensions  => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
};

/**
 * Returns window's width and height.
 * @returns {Dimensions} dimensions - width and height.
 */
const useWindowSize = (): Dimensions => {
  const [dimensions, setDimensions] = useState<Dimensions>(getDimensions());

  useEffect(() => {
    function handleResize() {
      setDimensions(getDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return dimensions;
};

export default useWindowSize;
