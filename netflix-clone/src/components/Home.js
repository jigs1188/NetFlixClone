// src/components/Home.js
import React, { useEffect, useState } from 'react';
import axios from '../utils/axios';
import MovieRow from './MovieRow';
import './Home.css';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [moviesResponse, showsResponse] = await Promise.all([
          axios.get('/movies'),
          axios.get('/shows'),
        ]);
        setMovies(moviesResponse.data);
        setShows(showsResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="home">
      <div className="home__content">
        {movies.length > 0 && <MovieRow title="Movies" items={movies} />}
        {shows.length > 0 && <MovieRow title="TV Shows" items={shows} />}
      </div>
    </div>
  );
};

export default Home;
