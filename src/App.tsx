import React, {useState} from "react";
import PointerReport from "./Components/PointerReport/PointerReport";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import Alerts from './Components/PointerReport/Alerts'

export const AlertContext = React.createContext('')

function App() {
  const [alertMessage, setAlertMessage] = useState('oh Dear')

  function toggleAlert(error: any) {
    setAlertMessage(error)
  }
  return (
  <AlertContext.Provider value={alertMessage}>
    <Alerts/>
    <div className="App">
        Maze in The Dark
        <PointerReport />
    </div>
  </AlertContext.Provider>

  );
}

export default App;
