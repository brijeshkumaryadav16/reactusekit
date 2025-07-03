import { useEffect, useLayoutEffect, useRef } from "react";

/**
 * A custom hook that sets up an timeout to call a callback function at specified intervals.
 * @param callback - The function to be called at each timeout.
 * @param delay - The time in milliseconds between each call. If null, the timeout is not set.
 */

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export function useTimeout(callback, delay) {
  const savedCallback = useRef(callback);

  // Remember the latest callback if it changes.
  useIsomorphicLayoutEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay === null || delay < 0) {
      return;
    }

    const tick = () => savedCallback.current();
    const id = setTimeout(tick, delay);

    return () => clearTimeout(id);
  }, [delay]);
}
