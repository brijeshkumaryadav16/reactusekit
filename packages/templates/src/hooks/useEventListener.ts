import { useEffect, useRef } from "react";

// Hook for adding and removing event listeners with automatic cleanup
export function useEventListener<T extends keyof WindowEventMap>(
  eventName: T,
  handler: (event: WindowEventMap[T]) => void,
  element?: Window | null,
  options?: boolean | AddEventListenerOptions
): void;

export function useEventListener<T extends keyof DocumentEventMap>(
  eventName: T,
  handler: (event: DocumentEventMap[T]) => void,
  element: Document,
  options?: boolean | AddEventListenerOptions
): void;

export function useEventListener<T extends keyof HTMLElementEventMap>(
  eventName: T,
  handler: (event: HTMLElementEventMap[T]) => void,
  element: HTMLElement | null,
  options?: boolean | AddEventListenerOptions
): void;

export function useEventListener(
  eventName: string,
  handler: (event: Event) => void,
  element: Window | Document | HTMLElement | null = window,
  options?: boolean | AddEventListenerOptions
): void {
  const savedHandler = useRef(handler);

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    if (!element) return;

    const eventListener = (event: Event) => savedHandler.current(event);

    element.addEventListener(eventName, eventListener, options);

    return () => {
      element.removeEventListener(eventName, eventListener, options);
    };
  }, [eventName, element, options]);
}
