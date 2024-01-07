import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {

let [counter, setCounter] = useState(0)
let [errormsg, setErrormsg] = useState('')

  //let counter = 5;

  const addValue = () => {
    if(counter<20) {
      setCounter(counter+1)
      setErrormsg('')
    }
    else{
     setErrormsg('Counter Greater than 20 not allowed.')
    }
  }

  const removeValue = () => {
    if(counter>0) {
      setCounter(counter-1)
      setErrormsg('')
    }
    else{
      setErrormsg('Counter Less than 0 not allowed.')
    }
  }
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value:  {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
      {errormsg}
    </>
  )
}

export default App
