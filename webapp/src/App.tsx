import { useState } from "react";
import logo from "./assets/images/logo-universal.png";
import "./App.css";
import { Greet } from "../wailsjs/go/main/App";
import { FindAll, Create } from "../wailsjs/go/controllers/CustomerController";

function App() {
  const [resultText, setResultText] = useState(
    "Please enter your name below 👇"
  );
  const [name, setName] = useState("");
  const [arr, setArr] = useState<any[]>([]);
  const updateName = (e: any) => setName(e.target.value);
  const updateResultText = (result: string) => setResultText(result);

  function greet() {
    Greet(name).then(updateResultText);
    FindAll().then(setArr);
    Create({
      FirstName: "Daniel",
      LastName: "Cunha",
      BirthDate: "1991-09-18",
      Obs: "1991-09-18",
    }).then(console.log);
  }

  return (
    <div id="App">
      <img src={logo} id="logo" alt="logo" />
      <div id="result" className="result">
        {arr.map((c) => (
          <>{c.FirstName}</>
        ))}
      </div>
      <div id="input" className="input-box">
        <input
          id="name"
          className="input"
          onChange={updateName}
          autoComplete="off"
          name="input"
          type="text"
        />
        <button className="btn" onClick={greet}>
          Greet
        </button>
      </div>
    </div>
  );
}

export default App;
