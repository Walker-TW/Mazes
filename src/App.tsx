import React from "react";
import PointerReport from "./Components/PointerReport/PointerReport";
import ReadOut from './Components/Readout/ReadOut'
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="title">
        Maze In The Dark
      </div>
      &nbsp;
      <PointerReport/>
      <ReadOut/>
    </div>
  );
}

export default App;
