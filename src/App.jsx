import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Movies from './movies/Movies'
import Movie from './movies/Movie'
function App() {
  return (
    
    <BrowserRouter>
     
      <Routes>

         <Route path='/' element={<Movies/>}/>
         <Route path='/movie/:imdbID' element={<Movie/>}/>
      </Routes>
    </BrowserRouter>
 
)
}

export default App
