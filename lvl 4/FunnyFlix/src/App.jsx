


import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom'


import Intro from './assets/Intro'
import Home from './assets/Home'
import About from './assets/About'
import './App.css'

function App() {
  

  return (
    <Router>
    <nav style={{ margin: 5}}>
                
        <Link to="/" style={{ padding: 5 }}> 
        Intro
        </Link> 
        <Link to="/Home" style={{ padding: 5 }}>
        Home
        </Link>
        <Link to="/About" style={{ padding: 5 }}>
       About
        </Link>
  
    </nav>

    <div className="App">
    <Routes>
    <Route path='/' index element={<Intro />}/>
    <Route path='/Home' element={<Home />}/>
    <Route path='/About' element={<About />}/>
   
    </Routes>
    </div> 
  </Router>
  )
}

export default App
