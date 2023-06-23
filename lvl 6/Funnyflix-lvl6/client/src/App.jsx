

import React,{useState} from 'react'
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom'

import Home from './AppPages/Home'

import './App.css'



function App() {
  
 
 

  return (
    <div className="App">
      
    <Router>
   
    <Routes>
    
      <Route path='/' index element={<Home />}/>
    
    
    </Routes>
   
  </Router>

  </div>
  )
}

export default App
