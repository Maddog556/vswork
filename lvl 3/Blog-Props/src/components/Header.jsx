import React from 'react'
import Navbar from "../components2/Navbar"

export default function Header() {
    return (
        <header className="backgroundimg">
            <div className='headerContainer'>
            <Navbar />
           </div> 
            <div className='header-block'>
            <h1 className='headerTitle'>Clean Blog</h1>
            <h2 className='headerSub'>A Blog Theme by Start Bootstrap</h2>
            </div> 
        </header>
    )
};



