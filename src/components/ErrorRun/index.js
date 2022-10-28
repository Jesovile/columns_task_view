import { useEffect, useState } from "react";

const ErrorRun = () => {
  const [count, setCount] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCount(count + 1);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [count]);

  if (count > 2) {
    throw new Error('For test components')
  }

  return null;
};
export default ErrorRun;
