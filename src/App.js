import logo from "./logo.svg";
import "./App.css";
import { useCallback, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setValue } from "./redux/feature";

function App() {
  const {value} = useSelector(state => state.operation);
  const dispatch = useDispatch();

  const access = useRef(null);

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(setValue(access.current.value))
        }}
      >
        <input ref={access}></input>
        <br />
        <button>Submit</button>
      </form>

      <div>displaying input -- {value} </div>
    </>
  );
}

export default App;
