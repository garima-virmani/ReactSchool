import logo from "./logo.svg";
import "./App.css";
import { useCallback, useMemo, useState } from "react";

function App() {
  // declaring state variable
  const [count, setCount] = useState(0);

  const otp = 30_000_000_0;
  const arr = useMemo(() => {
   return Array(otp).map(() => {});
  },[]);

  // fn memoising
  useCallback(() => {
    for (let i = 0; i < otp; i++) {}
  },[]);

  return (
    <>
      <div style={{ marginLeft: "40%", marginTop: "10%" }}>
        <h2>Value: {count}</h2>

        <div
          style={{
            width: "200px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <button onClick={() => setCount(count + 1)}>Increment</button>
          <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
      </div>
    </>
  );
}

export default App;
