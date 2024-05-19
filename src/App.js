import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <div style={{ marginLeft: "40%", marginTop: "10%" }}>
        <h2>Value: 0</h2>

        <div
          style={{
            width: "200px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <button>Increment</button>
          <button>Decrement</button>
        </div>
      </div>
    </>
  );
}

export default App;
