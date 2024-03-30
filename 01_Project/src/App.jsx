import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [Counter,setCounter]=useState(0);
  var addValue=()=>
  {
    console.log("Value added");
    Counter=Counter+1;
    setCounter(Counter)
    
  }
  var removeValue=()=>
  {
    if(Counter<=0)
    {
      return 
    }
    console.log("Value deleted");
    Counter=Counter-1;
    setCounter(Counter)

  }

  return (
    <>
      <center>
     <h1>Creating Counter App</h1>
     <p>Counter is :{Counter}</p>
     <button onClick={addValue}>Add Number {Counter}</button>
     <br />
     <br />
     <button onClick={removeValue}>Remove Number {Counter}</button>
     </center>
    </>
  )
}

export default App
