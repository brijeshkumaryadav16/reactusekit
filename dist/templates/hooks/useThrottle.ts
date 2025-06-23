import { useEffect, useState } from "react";

export function useThrottle<T>(value: T, limit: number): T {
  const [throttled, setThrottled] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setThrottled(value), limit);
    return () => clearTimeout(handler);
  }, [value, limit]);

  return throttled;
}
