import { useState, useEffect } from "react";

export default function App() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState("");
  function loadData() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setData("HI");
    }, 1000);
  }

  useEffect(loadData, []);

  return (
    <>
      {loading && <p>Loading...</p>}
      {data && <pre>{JSON.stringify(data, null, 1)}</pre>}
    </>
  );
}
