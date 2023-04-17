import React,{useEffect,useState, useContext} from "react";
import axios from './Data/axios'
import requests from "./Data/Requests.jsx";
import NavBar from "./Navbar";
import {Context} from '../App.jsx'
import "./Intro.css"

function Intro() {
    
    const [movie,setMovie] = useState([])

    useEffect(() => {
   
        async function fetchData(){
          const Request = await axios.get(requests.fetchPopular);
          setMovie(
            Request.data.results[
              Math.floor(Math.random() * Request.data.results.length)
            ]
          )
          return Request;
        }
        fetchData()
    },[]);

    console.log(movie)

const [signedIn, setSignedIn] = useContext(Context)

return(

  <div className='blockWrapper'>
    <NavBar/>
    <div className="intro">
   <h1 className="intro-title"> Welcome to FunnyFlix</h1>
   <div className="Flexintro">
   <button className="Signbtn" onClick={() => setSignedIn(!signedIn)}>{
    signedIn ? 'Sign out': 'Sign in'
   }</button>
  </div>
   <h3 className="sub-title">What to find here.</h3>
   <p className="Why">Welcome to our TV and movie review website, where we offer the latest reviews and recommendations for your entertainment needs.</p>
    <p className="why2">Our team of experts watches and analyzes a wide range of TV shows and movies, providing you with insightful and honest reviews to help you make informed decisions 
    about what to watch. Whether you're into drama, comedy, sci-fi, or horror, we've got you covered with our extensive selection of reviews. 
   So, sit back, grab some popcorn, and let us guide you through the world of television and cinema.</p>
   <p className="intro-P1">
        @2023Terms and Conditions for FunnyFlix:
        By using our service, you agree to the following terms and conditions:
        All content on FunnyFlix is purely fictional and intended for entertainment purposes only. None of the events or characters depicted in our content are real.
        You agree to never take any legal action against FunnyFlix, its owners, or employees, no matter how much our content offends you or causes you emotional distress.
        Our streaming service is intended for use by individuals over the age of 18 only. If you are under the age of 18, you must have parental permission to use our service.
    </p>
    <p className="intro-P2">
        We reserve the right to change our pricing and subscription plans at any time, without notice.
        FunnyFlix is not responsible for any damages or harm caused by the use of our service, including but not limited to eye strain, headaches, or loss of brain cells.
        By using our service, you agree to become a part of our secret society and vow to never reveal any of our secret rituals, passwords, or handshakes to anyone.
        We reserve the right to collect and use your personal information for our own nefarious purposes.
        </p>
    <p className="intro-P3">
        If you are caught sharing your login information with anyone else, we will send the Fun Police after you.
        FunnyFlix is not responsible for any addictive behavior caused by our service, including binge-watching, uncontrollable laughter, or insatiable cravings for popcorn.
        By using our service, you agree to let us use your likeness in any of our upcoming reality shows or mockumentaries, without compensation.
        Thank you for choosing FunnyFlix as your source of humor and entertainment. If you have any questions, please don't hesitate to reach out to our customer service team, who are trained to answer all of your questions with witty comebacks and sarcastic remarks.
    </p>
    </div>
    </div>
)

} 



export default Intro