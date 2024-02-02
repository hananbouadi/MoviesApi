import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Movie() {
    const {imdbID} = useParams()
    const[movies,setMovies]=useState([])
  
  
    useEffect(()=>{
        async function fetchdata(){
             await fetch(`https://www.omdbapi.com/?apikey=6e30c4b4&i=${imdbID}`)
                    .then(res => res.json())
                    .then(res => {
                        setMovies(res)
                        console.log(res)
                    })
        }
        fetchdata()
    },[])

    
    return(
        <div className='main'>
           <ul>
            <li><img src={movies.Poster}/></li>
            <li><p className='title'>{movies.Title}</p></li>
            <li><p>{movies.Plot}</p></li><br/>
            <li><p>Director : {movies.Director}</p></li>
            <li><p>Writer : {movies.Writer}</p></li>
            <li><p>Country : {movies.Country}</p></li>
            <li><p>ImdbRating : {movies.imdbRating} </p></li>
            <li><p>RunTime : {movies.Runtime}</p></li>
            <li><p>Actors : {movies.Actors}</p></li>
           </ul>
        </div>
        
        
    )
}
export default Movie;