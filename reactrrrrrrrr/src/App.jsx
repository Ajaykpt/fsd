import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cs from './Cs'
import Ec from './Ec'
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

     <h1>wejlhfwe</h1>
        <BrowserRouter>

        <Routes>

          <Route path="/Cs" Component={Cs} />
          <Route path="/Ec" Component={Ec} />
          
        </Routes>
        
      </BrowserRouter>

    </>
  )
}

export default App
