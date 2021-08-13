import React from "react";
import { StateProvider } from "./store/store";
import Navigation from "./routes/Navigation";
import "./styles/base.css";

function App() {
  return (
    <div className="App">
      <button id="click" onClick={handleclick}></button>
      <p id="para"></p>
    </div>
  )
    function handleclick()
      {
      //let htc1=document.createElement('p');
     // htc1.id="para";
     let htc=document.getElementById("para");
      htc.innerHTML="Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"
  }
}

export default App;
