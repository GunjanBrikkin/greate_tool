import { useRef, useState } from "react";

export default function Counter() {
  const countRef = useRef(0);
  const [state, setState] = useState(0);

  const incrementRef = () => {
    countRef.current += 1;
    console.log("Ref Count:", countRef.current); // Updates but does not trigger re-render
  };

  const incrementState = () => {
    setState(state + 1); // Triggers re-render
  };

  return (
    <div>
      <p>Ref Count (Doesn't Re-render): {countRef.current}</p>
      <p>State Count (Triggers Re-render): {state}</p>
      <button onClick={incrementRef}>Increment Ref</button>
      <button onClick={incrementState}>Increment State</button>
    </div>
  );
}
