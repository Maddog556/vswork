import React,{useEffect,useState} from "react";
import axios from '../MovieData/axios'
import requests from "../MovieData/Requests.jsx";
import Banner from "./Banner";
import NavBar from "./Navbar";
import Row from "./Row";
import "../AppPagesCss/Home.css"

function Home() {
    
 
return(
  <>
  <NavBar/>

  <Banner/>
  
  <Row 
  title='FUNNYFLIX Picks'
  fetchUrl = {requests.fetchPopular}
  // isLargeRow
  />
 <Row 
  title='Romance Movies'
  fetchUrl = {requests.fetchRomanceMovies}
  />
  <Row 
  title='Top Rated'
  fetchUrl = {requests.fetchTopRated}
  // isLargeRow
  />
  <Row 
  title='Comedy Movies'
  fetchUrl = {requests.fetchComedyMovies}
  />
  <Row 
  title='Horror Movies'
  fetchUrl = {requests.fetchHorrorMovies}
  />
   <Row 
  title='Popular TV Show'
  fetchUrl = {requests.fetchTvPopular}
  // isLargeRow
  />
  <Row 
  title='Action Movies'
  fetchUrl = {requests.fetchActionMovies}
  />
  <Row 
  title='Documentaries'
  fetchUrl = {requests.fetchDocumentaries}
  />
  <div className="Flexterms">
    <p className="termsP">
        @2023Terms and Conditions for FunnyFlix:
        By using our service, you agree to the following terms and conditions:
        All content on FunnyFlix is purely fictional and intended for entertainment purposes only. None of the events or characters depicted in our content are real.
        You agree to never take any legal action against FunnyFlix, its owners, or employees, no matter how much our content offends you or causes you emotional distress.
        Our streaming service is intended for use by individuals over the age of 18 only. If you are under the age of 18, you must have parental permission to use our service.
    </p>
  </div>
  <div className="flexlogo">
  <div  className="funnyFlixbottomlogo"></div>
  </div>
  </>
 )

} 

export default Home