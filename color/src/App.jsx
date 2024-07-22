import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {

  const [color ,setColor ] = useState("yellow")

  document.body.style.backgroundColor= color;
  return (
    <>
     <button onClick = { () => setColor("red") } >RED</button>
     <button onClick ={ () => setColor("yellow") }>YELLOW</button>
     <button onClick ={ () => setColor("green") } >GREEN</button>
     <button  onClick ={ () => setColor("blue") } >BLUE</button>
     <button onClick ={ () => setColor("black") } >BLACk</button>
     <button onClick ={ () => setColor("white") } >WHITE</button>
    </>
  )
}

export default App
