import { useRef } from "react";

const useRefFunctionDemostration = () => {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus(); // Focuses the input field
  };

  return (
    <>
      <button onClick={handleFocus}>input</button>
      <input
        type="text"
        placeholder="this is placeholder name"
        ref={inputRef}
      />
    </>
  );
};

export default useRefFunctionDemostration;
