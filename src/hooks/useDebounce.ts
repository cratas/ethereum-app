import { useEffect, useState } from "react";

export const useDebounce = <T>(value: T, delay = 500) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  const [isDebouncing, setIsDebouncing] = useState(false);

  useEffect(() => {
    setIsDebouncing(true);
    const timeoutHandler = setTimeout(() => {
      setDebouncedValue(value);
      setIsDebouncing(false);
    }, delay);

    return () => {
      clearTimeout(timeoutHandler);
      setIsDebouncing(false);
    };
  }, [value, delay]);

  return { debouncedValue, isDebouncing };
};
