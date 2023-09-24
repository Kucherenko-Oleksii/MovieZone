import React, { useState, useEffect } from "react";
import { Popup } from "./popup/Popup";

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState(null);

    const openPopup = (movie) => {
        setSelectedMovie(movie);
        setShowPopup(true);
    };
    const closePopup = () => {
        setShowPopup(false);
        setSelectedMovie(null);
    };

    useEffect(() => {
      fetch("http://localhost:4003/api/movies")
        .then((response) => response.json())
        .then((data) => setMovies(data.movies))
        .catch((error) => console.error("Error fetching movies:", error));
    }, []);

  return (
    <>
        <div className="movie-container">
            {movies.map((movie, index) => (
                <div className="movie" key={index} onClick={() => openPopup(movie)}>
                    <h2>{movie.title}</h2>
                    <img src={movie.poster} alt={movie.title}/>
                </div>
            ))}
        </div>

        {showPopup && <Popup movie = {selectedMovie} onClose={closePopup}/>}
        
    </>
    
  )
}

export default Movies