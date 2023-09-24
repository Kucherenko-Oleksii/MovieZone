import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

export const Popup = ({ movie, onClose }) => {

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const openRegistration = () => {
    setIsLoading(true); 
    setTimeout(() => {
      navigate('/registration'); 
      setIsLoading(false); 
    }, 2000);
  };

  return (
    <>
        <div className='popup-background' onClick={onClose}></div>
        
        <div className='popup'>

            <div className='popup-content'>

                <h2>{movie.title}</h2>

                <img src={movie.poster} alt={movie.title}/>

                <p><strong>Year:</strong> {movie.release_year}</p>

                <p><strong>Genre:</strong> {movie.genre}</p>

                <p><strong>Short description: </strong>{movie.description}</p>

                <div className='button-container'>
                    <button onClick={onClose}>Close</button>
                    <button className='registration' onClick={openRegistration}>Book a session</button>
                </div>
            </div>
            {isLoading && (
              <div class="loader-container">
                <div class="loader">
                  <div class="circle"></div>
                  <div class="circle"></div>
                  <div class="circle"></div>
                </div>
              </div>
           )}
        </div>
      
    </>

  )
}
