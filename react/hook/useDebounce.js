import { useState, useEffect } from "react";

export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // set timer when value or dealy changes
    const timeOut = setTimeout(() => setDebouncedValue(value), delay);
    // return a clean up funtction
    return () => clearTimeout(timeOut);
  }, [value, delay]);

  return debouncedValue;
};

/*
  usage
*/
const [param, setParam] = useState({});

const debouncedParam = useDebounce(param, 2000);

useEffect(() => {
  fetcth(``);
}, [debouncedParam]);
