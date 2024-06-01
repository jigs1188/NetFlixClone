import React from 'react';
import { Link } from 'react-router-dom';

const Browse = () => {
  const movies = [
    { id: 1, title: 'Movie 1', description: 'Description 1' },
    { id: 2, title: 'Movie 2', description: 'Description 2' },
    // Add more movies here
  ];

  return (
    <div className="browse">
      <h2>Browse Movies</h2>
      <div className="movie-list">
        {movies.map(movie => (
          <div key={movie.id} className="movie-item">
            <h3>{movie.title}</h3>
            <p>{movie.description}</p>
            <Link to={`/watch/${movie.id}`}>Watch Now</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Browse;
