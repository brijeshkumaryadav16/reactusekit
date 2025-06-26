import { useEffect, useState } from 'react';
import { useDebounce } from './useDebounce';

// Hook for tracking window dimensions with optional debouncing
export function useWindowSize(debounceDelay: number = 100): {
  width: number;
  height: number;
} {
  const [windowSize, setWindowSize] = useState<{
    width: number;
    height: number;
  }>({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  // Debounce the window size to avoid excessive re-renders
  const debouncedSize = useDebounce(windowSize, debounceDelay);

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);

    // Set initial size
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return debouncedSize;
}
