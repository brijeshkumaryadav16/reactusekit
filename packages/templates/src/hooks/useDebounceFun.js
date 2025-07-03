import { useCallback, useRef } from "react";

/**
 * A custom hook that debounces a function.
 * @param func The function to debounce.
 * @param delay The debounce delay in milliseconds.
 * @returns A debounced version of the function.
 */

export function useDebounceFun(...args) {
  const [func, delay] = args;
  const timerRef = useRef(null);

  const debouncedFunc = useCallback(
    (...args) => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      timerRef.current = setTimeout(() => {
        func(...args);
      }, delay);
    },
    [func, delay]
  );

  return debouncedFunc;
}
