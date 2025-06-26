import { useEffect, useRef } from 'react';

// Hook for adding and removing event listeners with automatic cleanup
export function useEventListener(
  eventName,
  handler,
  element = window,
  options
) {
  const savedHandler = useRef(handler);

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    if (!element) return;

    const eventListener = event => savedHandler.current(event);

    element.addEventListener(eventName, eventListener, options);

    return () => {
      element.removeEventListener(eventName, eventListener, options);
    };
  }, [eventName, element, options]);
}
