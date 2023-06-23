import React from "react";
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom'
import '../AppPagesCss/Navbar.css'

function NavBar() {
    
return(

    <nav className='nav-tabs'>
                <div className="logo"></div>
                
                <Link className="Links" to="/" style={{ padding: 20 }}> 
                Intro
                </Link> 
                <Link className="Links" to="/Home" style={{ padding: 20}}>
                Home
                </Link>
                <Link className="Links"to="/About" style={{ padding: 20 }}>
                About
                </Link>
          
    </nav>
)
} 

export default NavBar