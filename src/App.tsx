import React from "react";
import PointerReport from "./Components/PointerReport/PointerReport";
import Header from './Components/Navbar/Header'
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Header/>
        <div className="App">
          Maze In The Dark
          <PointerReport />
        </div>
    </React.Fragment>
  );
}

export default App
