import { useState, useEffect } from "react";

// return value and input value have samp type
export const useDebounce = <V>(value:V, delay?:number) => {
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
  fetch(``);
}, [debouncedParam]);
