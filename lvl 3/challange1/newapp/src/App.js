import React from 'react';
import './App.css';
import Main from "./components/main";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className = "app--container">
        <Navbar />
        <Main />
        <Footer />
    </div>
  )
}



