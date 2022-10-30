// Test component for the error trigger
// Just insert the component anywhere to create an error after a certain time

import { useEffect, useState } from "react";

const ErrorBoundaryRun = () => {
  const [count, setCount] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);
    return () => clearTimeout(timer);
  }, [count]);

  if (count > 2) {
    throw new Error('Test component for the error trigger')
  }

  return null;
};
export default ErrorBoundaryRun;
