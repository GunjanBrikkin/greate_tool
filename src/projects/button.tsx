import { useEffect, useState } from "react";

const Button = () => {
  const [countNumber, setCountNumber] = useState(0);

  const letsChangeIncreament = () => {
    setCountNumber(countNumber + 1);
  };

  const letsChangeDecrement = () => {
    setCountNumber(countNumber - 1);
  };

  const letsResetValue = () => {
    setCountNumber(0);
  };

  useEffect(() => {
    console.log("3️⃣ useEffect runs (after render)");
  }, []);

  return (
    <div>
      <pre>{countNumber}</pre>
      <button onClick={letsChangeIncreament}>increment</button>
      <button onClick={letsChangeDecrement}>decrement</button>
      <button onClick={letsResetValue}>reset</button>
      <h1>Count: {countNumber}</h1>
      <button onClick={letsChangeIncreament}>increment</button>
    </div>
  );
};

export default Button;
