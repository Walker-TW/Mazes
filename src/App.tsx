import React from "react";
import PointerReport from "./Components/PointerReport/PointerReport";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import Alerts from './Components/PointerReport/Alerts'
import { AlertProvider } from "./Contexts/ErrorContext"

function App() {
  return (
    <AlertProvider>
      <Alerts/>
        <div className="App">
            Maze in The Dark
          <PointerReport />
        </div>
  </AlertProvider>

  );
}

export default App; 
