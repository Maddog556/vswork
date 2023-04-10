import React,{useEffect,useState} from "react";
import axios from './Data/axios'
import requests from "./Data/Requests";

function Intro() {
    
    const [movie,setMovie] = useState([])

    useEffect(() => {
   
        async function fetchData(){
          const Request = await axios.get(requests.fetchNeflixOriginals);
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


return(
    <>
   <h1> Welcome to FunnyFlix</h1>
   <h3>What to find here.</h3>
   <p>This site is to help you find the latest reviews of the hottest and newest Movies and Tv shows.</p>
    </>
)

} 



export default Intro