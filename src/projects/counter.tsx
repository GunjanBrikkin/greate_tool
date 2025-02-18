import { useReducer } from "react";

type Action = { type: "increment" } | { type: "decrement" };
type State = number;

const reducer = (state: State, action: Action): number => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};

const initialState = 0;

const MainFunction = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div>
        <pre>count == {count}</pre>
      </div>
      <button onClick={() => dispatch({ type: "increment" })}>+ karo</button>
      <button onClick={() => dispatch({ type: "decrement" })}>- karo</button>
    </>
  );
};

export default MainFunction;
