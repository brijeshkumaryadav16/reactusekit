import { useEffect, useState } from "react";

export function useThrottle(value, limit) {
  const [throttled, setThrottled] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setThrottled(value), limit);
    return () => clearTimeout(handler);
  }, [value, limit]);

  return throttled;
}
