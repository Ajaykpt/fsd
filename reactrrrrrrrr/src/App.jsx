import { useState } from 'react'
import './App.css'
import Cs from './Cs'
import Ec from './Ec'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Nav from './Nav'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
     
    <Nav/>  

    <h1>wejlhfwe</h1>
        <Routes>

          <Route path="/Cs" Component={Cs} />
          <Route path="/Ec" Component={Ec} />
          
        </Routes>
        
      </BrowserRouter>

    </>
  )
}

export default App
