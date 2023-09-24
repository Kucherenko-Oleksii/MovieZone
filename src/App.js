import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from "./components/Header";
import Home from "./components/Home";
import Movies from "./components/Movies";
import { Registration } from "./components/Registration";

import './App.scss';

const MovieList = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/registration" element={<Registration/>}/>
      </Routes>
    </Router>
  );
};

export default MovieList;
