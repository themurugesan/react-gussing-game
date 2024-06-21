// import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Result from "./Result";
const secureNum=Math.floor(Math.random()*10)
function App() {
  const [term,setTerm]=useState("")
  const handleChange=(e)=>{
    setTerm(e.target.value)
  }
  return (
    <div className="App">
      <div className="container">
          <div className="head">
            <label htmlFor="term">Guess the, number between 1 to 10 </label>
          </div>
            <input type="text" id='term' name="term" onChange={handleChange} />
            <Result secureNum={secureNum} term={term}/>
      </div>
    </div>
  );
}

export default App;
