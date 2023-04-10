import React,{useEffect,useState} from "react";
import './Banner.css'
import axios from './Data/axios'
import requests from "./Data/Requests";

function Banner() {


// this method is called Truncate it allows you to set a charcater limit and ends it with ...
  function truncate(string,n){
    return string?.length > n ? string.substr(0, n -1) + '...' : string;
  }
    
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
   <header className="banner"
   style={{

    backgroundSize: 'cover',
    backgroundImage:`url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
    backgroundPosition: "top center",
    
   }}
   >
   <div className="banner_contents">
    <h1 className="banner_title">{movie?.title || movie?.name || movie?.orignal_Name}</h1>
    <div className="banner_buttons">
      <button className="banner_button">Play</button>
      <button className="banner_button">My list</button>
    </div>
    <h1 className="banner_description">{truncate(movie?.overview || `No Movie Description`,150)}</h1>
   </div>
   {/* use empty div to put fade at the bootom of the banner */}
   <div className="banner--fadeBottom"/>
   </header>
  </>
)

} 



export default Banner
