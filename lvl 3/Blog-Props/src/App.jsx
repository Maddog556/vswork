import React from 'react'
import Header from'./components/Header'
import BlogList from './components/BlogList'
import Footer from'./components/Footer'
import './App.css'

export default function App() {

  return (
    <div className= "app" >
      
     <Header />
     <BlogList />
     <Footer />

    </div>
  )
};