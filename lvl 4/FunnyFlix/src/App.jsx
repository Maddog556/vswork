

import React,{useState} from 'react'
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom'
import Intro from './assets/Intro'
import Home from './assets/Home'
import About from './assets/About'
import './App.css'

export const Context = React.createContext();

function App() {
  
const [signedIn, setSignedIn] = useState(false)  
 

  return (
    <div className="App">
      
    <Router>
    <Context.Provider value={[signedIn, setSignedIn]}>
    <Routes>
    
      <Route path='/' index element={<Intro />}/>
      <Route path='/Home' element={<Home />}/>
      <Route path='/About' element={<About />}/>
    
    </Routes>
    </Context.Provider>
  </Router>

  </div>
  )
}

export default App
