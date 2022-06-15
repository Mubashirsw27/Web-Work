import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Back from "./images/Back.mp4";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="video w-full h-full">
        <video src={Back}></video>
      </div>
    </div>
  );
}

export default App;
