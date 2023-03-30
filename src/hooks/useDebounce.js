import { useState, useEffect } from "react";

export const useDebounce = (value, delay) => {
  const [debounceValue, setDebounceValue] = useState(value);
  console.log("debounceValue :", debounceValue);
  useEffect(() => {
    const handler = setTimeout(() => setDebounceValue(value), delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  console.log("debounceValue:", debounceValue);
  return debounceValue;
};
