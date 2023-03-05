import './App.css';
import Buttons from './Component/Buttons';
import Display from './Component/Display';
import { useState,useEffect } from 'react';
function App() {
  const [input,setInput]=useState("")
  const [display,setdisplay]=useState("")
  function Calc(e){
    setInput(input+e);
  }
  function getResult(){
    setdisplay(eval(input))
  }
  function resetsfunc(){
    setdisplay("")
    setInput("")
  }
  useEffect(()=>{
    setdisplay(input)

  },[input])
  return (
    <div className="App">
      <div className="container">
      <Display display={display} />
      <Buttons Calc={Calc} getResult={getResult} resetsfunc={resetsfunc}/>
      </div>
    </div>
  );
}

export default App;
