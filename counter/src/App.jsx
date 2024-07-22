import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {

  const [counter, setCount] = useState(9)
  const inc = () => {
    console.log(counter)
    setCount(counter+1)
  }

  const dec = () => {
    console.log(counter)
    setCount(counter-1)
  }
  
  return (
    <>

    <h1> my counter </h1>



    <button onClick={inc} >+++++{counter}</button>
    <button onClick={dec}>-----{counter}</button>
    </>
  )
}

export default App
