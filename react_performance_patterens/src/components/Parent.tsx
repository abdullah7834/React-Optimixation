import { useMemo, useState } from "react";
import Child from "./Chlid";
// import Child from "./Child";

const Parent = () => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(5000);

  // Expensive Calculation
  const total = useMemo(() => {
    console.log("Expensive Calculation Running...");

    let sum = 0;

    for (let i = 0; i < 10000; i++) {
      sum += i;
    }

    return sum + number;
  }, [number]);

  return (
    <div>
      <h2>Parent Component</h2>

      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>

      <button onClick={() => setNumber(number + 1)}>
        Change Number
      </button>

      <Child total={total} />
    </div>
  );
};

export default Parent;