import { useCallback, useState } from "react";

// Hook for managing boolean state with toggle functionality
export function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback(() => {
    setValue((prev) => !prev);
  }, []);

  const setTrue = useCallback(() => {
    setValue(true);
  }, []);

  const setFalse = useCallback(() => {
    setValue(false);
  }, []);

  const setValueCallback = useCallback((newValue) => {
    setValue(newValue);
  }, []);

  return [
    value,
    {
      toggle,
      setTrue,
      setFalse,
      setValue: setValueCallback,
    },
  ];
}
