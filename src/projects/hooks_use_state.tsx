import { useState } from "react";

const Useofhook = () => {
  const [count, setcount] = useState(0);

  const updateTheState = () => {
    setcount(count + 1);
  };

  const [message, setmessage] = useState("");

  const supriceState = () => {
    setmessage(
      "---  Gunjan you got your valentaine girl !! , congratulation  -----"
    );
  };

  return (
    <div>
      <div>Kiss count : {count}</div>
      <button onClick={updateTheState}>
        Gunjan , KISS count on kiss day to ****
      </button>
      <div>
        <button onClick={supriceState}>
          shhh!! press me to see suprice message
        </button>
        <div>{message}</div>
      </div>
    </div>
  );
};

export default Useofhook;
