import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";

import { useState } from "react";
import Alert from "./components/Alert";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);

  const [modeName, setmodeName] = useState("Enable Dark Mode");

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has set", "success");
      setmodeName("Enable Dark Mode");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#181f5e";
      showAlert("Dark mode has set", "success");
      setmodeName("Enable Light Mode");
    }
  };

  return (
    <>
     <Router>
        <Navbar title="TextUtils"
          mode={mode}
          toggleMode={toggleMode}
          modeName={modeName}
        />
        <Alert alert={alert} />                   
         
          <Routes>
          <Route path="/" element={<TextForm heading="Try Text Utils- Word counter, Text counter, copy text and remove extra spaces"  mode={mode} showAlert={showAlert}        />} />
          <Route path="/about" element={<About mode={mode} />} />
          </Routes>

          </Router>
          
       
     
      
    </>
  );
}

export default App;
