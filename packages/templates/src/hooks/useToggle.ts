import { useCallback, useState } from 'react';

// Hook for managing boolean state with toggle functionality
export function useToggle(initialValue: boolean = false): [
  boolean,
  {
    toggle: () => void;
    setTrue: () => void;
    setFalse: () => void;
    setValue: (value: boolean) => void;
  },
] {
  const [value, setValue] = useState<boolean>(initialValue);

  const toggle = useCallback(() => {
    setValue((prev: boolean) => !prev);
  }, []);

  const setTrue = useCallback(() => {
    setValue(true);
  }, []);

  const setFalse = useCallback(() => {
    setValue(false);
  }, []);

  const setValueCallback = useCallback((newValue: boolean) => {
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
