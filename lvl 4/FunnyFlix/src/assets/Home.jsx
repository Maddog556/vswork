import React,{useEffect,useState} from "react";
import axios from './Data/axios'
import requests from "./Data/Requests";
import Banner from "./Banner";
import NavBar from "./Navbar";
import Row from "./Row";

function Home() {
    
 
return(
  <>
  <NavBar/>

  <Banner/>
  
  <Row 
  title='NETFLIX ORIGINALS'
  fetchUrl = {requests.fetchNeflixOriginals}
  isLargeRow
  />
  <Row 
  title='Trending Now'
  fetchUrl = {requests.fetchTrending}
  isLargeRow
  />
  <Row 
  title='Top Rated'
  fetchUrl = {requests.fetchTopRated}
  isLargeRow
  />
  <Row 
  title='Action Movies'
  fetchUrl = {requests.fetchActionMovies}
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
  title='Romance Movies'
  fetchUrl = {requests.fetchRomanceMovies}
  />
  <Row 
  title='Documentaries'
  fetchUrl = {requests.fetchDocumentaries}
  />
  </>
 )

} 

export default Home