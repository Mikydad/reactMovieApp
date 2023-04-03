import React, { useEffect, useState } from "react";
import './App.css';
import MovieCard from "./MovieCard";
import SearchIcon from './search.svg';
const Api_Url = 'http://www.omdbapi.com?apikey=8857cc84';



const App = () => {
  const [movies, setMovies] = useState([]);

  const[searchTerm, setSearchTerm] = useState([]);

  const searchMovies = async (title) => {
   const response = await fetch(`${Api_Url}&s=${title}`)
   const data = await response.json();

   setMovies(data.Search);
  }
  useEffect(() => {
     searchMovies('SpiderMan');
  }, []);
 return(

  <div className="app">
  <h1>MovieLand</h1>

  <div className="search">
    <input 
    placeholder="Search For Movies" 
    value={searchTerm} 
    onChange={(e) => 
    setSearchTerm(e.target.value)}/>
    
    <img src={SearchIcon}
    alt='search' 
    onClick={() => searchMovies(searchTerm)} 
  />
  </div>
  {
    movies?.length > 0 ? (
    <div className="container">
      {movies.map( (movie) => (
        <MovieCard movie={movie}/>
      ))}
    </div> ) :
    (
      <div>
        <h2>No Movies Found</h2>
        </div>
    )
  }
  
  </div>
 );
}

export default App;