import React from "react";
import Home from "./home";

import "./App.css";

function App() {


  fetch("http://localhost:5000/get")
  .then((data)=>{console.log(data)})
  .then((d)=> {console.log(d)})

  return (
    <div>
      <Home />
    </div>
  );
}

export default App;
