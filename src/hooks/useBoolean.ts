import { useCallback, useState } from "react";

interface UseBooleanReturn {
  value: boolean;
  setValue: (value: boolean) => void;
  setTrue: () => void;
  setFalse: () => void;
  toggle: () => void;
}

/**
 * A custom hook that manages a boolean state.
 * @param defaultValue The initial value of the boolean state.
 */

export function useBoolean(defaultValue: boolean = false): UseBooleanReturn {
  if (typeof defaultValue !== "boolean") {
    throw new Error("defaultValue must be `true` or `false`");
  }

  const [value, setValue] = useState<boolean>(defaultValue);

  const setTrue = useCallback(() => {
    setValue(true);
  }, []);

  const setFalse = useCallback(() => {
    setValue(false);
  }, []);

  const toggle = useCallback(() => {
    setValue((x) => !x);
  }, []);

  return { value, setValue, setTrue, setFalse, toggle };
}
