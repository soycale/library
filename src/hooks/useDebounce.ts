import { useState, useEffect } from "react";

type TUseDebounceDeps<T> = {
  value: T;
  delay: number; //milliseconds
};

// We use the UseDebounce to reduce the update frequency of the states.
export const UseDebounce = <T extends unknown>({
  value,
  delay,
}: TUseDebounceDeps<T>): T => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

export default UseDebounce;
