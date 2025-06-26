import { useCallback, useEffect, useRef, useState } from 'react';

// Hook for using setInterval with declarative API and automatic cleanup
export function useInterval(callback, delay, options = {}) {
  const savedCallback = useRef();
  const intervalId = useRef(null);
  const [isActive, setIsActive] = useState(delay !== null);

  // Remember the latest callback
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Execute callback immediately if specified
  useEffect(() => {
    if (options.immediate && delay !== null) {
      savedCallback.current?.();
    }
  }, [options.immediate, delay]);

  // Set up the interval
  useEffect(() => {
    if (delay !== null) {
      intervalId.current = setInterval(() => {
        savedCallback.current?.();
      }, delay);

      return () => {
        if (intervalId.current) {
          clearInterval(intervalId.current);
          intervalId.current = null;
        }
      };
    }

    return () => {
      if (intervalId.current) {
        clearInterval(intervalId.current);
        intervalId.current = null;
      }
    };
  }, [delay]);

  const start = useCallback(() => {
    setIsActive(true);
  }, []);

  const stop = useCallback(() => {
    setIsActive(false);
    if (intervalId.current) {
      clearInterval(intervalId.current);
      intervalId.current = null;
    }
  }, []);

  const toggle = useCallback(() => {
    setIsActive(prev => !prev);
  }, []);

  const reset = useCallback(() => {
    stop();
    if (options.immediate) {
      savedCallback.current?.();
    }
  }, [stop, options.immediate]);

  return {
    start,
    stop,
    toggle,
    reset,
  };
}
