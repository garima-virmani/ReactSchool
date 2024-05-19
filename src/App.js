import logo from "./logo.svg";
import "./App.css";
import { useCallback, useMemo, useRef, useState } from "react";

function App() {
  
const [value, setValue] = useState('');

  const access = useRef(null);

  return (
    <>
      <form onSubmit={(e)=> {
        e.preventDefault();
        setValue(access.current.value)
      }}>
        <input ref={access}></input>
        <br/><button >Submit</button>
      </form>

      <div>displaying input -- {value} </div>
    </>
  );
}

export default App;
