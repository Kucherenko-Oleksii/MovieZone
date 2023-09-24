import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const Header = () => {
  const [activeLink, setActiveLink] = useState('/');
  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  return (
    <header className='header'>
      <div className='header-content'>
        <h1>~ MovieZone ~</h1>
        <nav className='navigation'>
          <a
            href='/'
            className={activeLink === '/' ? 'active' : ''}
            onClick={() => setActiveLink('/')}
          >
            Home
          </a>
          <a
            href='/movies'
            className={activeLink === '/movies' ? 'active' : ''}
            onClick={() => setActiveLink('/movies')}
          >
            Movies
          </a>
        </nav>
      </div>
    </header>
  );
};
