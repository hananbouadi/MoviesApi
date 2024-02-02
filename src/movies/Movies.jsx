import React from "react"
import { useState , useEffect } from "react"
import { Link } from "react-router-dom"
import '../App.css'


function Movies() {
    const[movies, setMovies]=useState([])
    const[search, setSearch]=useState({
      title:"",
      type:"",
      year:""
    })
    
    useEffect(()=>{
       
    },[])
     
    const showMovies = () =>{
        if (!search.title) return
        async  function fetchMovies (){
  
          await fetch(`https://www.omdbapi.com/?apikey=6e30c4b4&s=${search.title}&y=${search.year}&type=${search.type}`)
          .then(res=> res.json())
          .then(res=> {
            console.log(res.Search)
            setMovies(res.Search)}
            )
        }
         fetchMovies()
       
    }
    const onhandleChange = (e ,key)=>{
         
         setSearch({
          ...search ,
          [key]:e.target.value})
    }
    const filterM = movies.filter((movie)=>movie.Type == search.type)
    return(
      <div className="container">
        <div className="inp">
          <input value={search.title}  placeholder="enter Title" onChange={(e)=>onhandleChange(e,"title")}/>
          <input value={search.type} placeholder="enter Type" onChange={(e)=>onhandleChange(e,"type")}/>
          <input value={search.year}  placeholder="enter Year" onChange={(e)=>onhandleChange(e,"year")}/><br/>
          <button className="search" onClick={showMovies}>Show</button>
        </div>
        
        <div className="elements">
          {
              filterM.map(movie=>(
                <div className="main" key={movie.imdbID}>
                    <p >{movie.Title}</p>
                    <div className="img" ><img className="image" src={movie.Poster} alt="N/A"/></div>
                    <Link to={`/movie/${movie.imdbID}`}>
                      <div className="btn">
                        <button className="detail">Details</button>
                      </div>
                    </Link>
                    
                </div>
                    
                ))
              }
         </div>
      </div>
        
    )
}
export default Movies;