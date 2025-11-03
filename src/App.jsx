import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>React Js - Ruiz Iván</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Conteo de clicks: {count}
        </button>
        <p>Primera entrega, para el profe con mucho cariño</p>
      </div>
    </>
  );
}

export default App;
