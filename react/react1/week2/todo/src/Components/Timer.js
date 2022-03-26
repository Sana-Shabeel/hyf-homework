import { useState, useEffect } from "react";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((prev) => prev + 1);
    }, 1000);
  });

  return <p>You have used {count} on this website</p>;
}

export default Timer;
