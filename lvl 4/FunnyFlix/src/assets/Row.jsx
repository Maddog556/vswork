import React, { useEffect, useState } from 'react';
import axios from "./Data/axios";
import './Row.css';

function Row({title, fetchUrl,}){

    const [movies, setMovies] = useState([]);

    const base_url = "https://image.tmdb.org/t/p/original";

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }

        fetchData();

    },[fetchUrl]);

        console.log(movies)
  
    return(
        <div className='row'>
            <h2 className='title'>{title}</h2>
            <div className='rowPosters'>
                {movies?.map((movie) => (
                    
                    <div key={movie.id} >
        
                    <img
                    className='rowPoster' 
                    src={`${base_url}${movie.poster_path}`}
                    alt={movie.name}/>
                   
                    <h1 className='Rating'>Rating {movie?.vote_average} out of 10</h1>
                    <h3 className='Date'>{movie?.first_air_date || movie?.release_date}</h3>
                    
                    </div>
                
                ))}
            </div>
        </div>
    )
}
export default Row




