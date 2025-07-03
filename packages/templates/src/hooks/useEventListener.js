import { useEffect, useLayoutEffect, useRef } from "react";

/**
 * A custom hook that adds an event listener to a specified element or the window.
 * @param eventName - The name of the event to listen for.
 * @param handler - The function to call when the event is triggered.
 * @param element - The element to attach the event listener to. Defaults to `window`.
 * @param options - Options for the event listener.
 */

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

function useEventListener(eventName, handler, element, options) {
  const savedHandler = useRef(handler);

  useIsomorphicLayoutEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const targetElement = element?.current ?? window;

    if (!targetElement?.addEventListener) return;

    const listener = (event) => savedHandler.current(event);

    targetElement.addEventListener(eventName, listener, options);

    return () => {
      targetElement.removeEventListener(eventName, listener, options);
    };
  }, [eventName, element, options]);
}

export default useEventListener;
