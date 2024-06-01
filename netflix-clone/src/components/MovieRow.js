import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MovieRow.css';

const MovieRow = ({ title, items }) => {
  const navigate = useNavigate();

  const handleClick = (videoUrl) => {
    navigate(`/watch?videoUrl=${encodeURIComponent(videoUrl)}`);
  };

  return (
    <div className="movie-row">
      <h2>{title}</h2>
      <div className="movie-row__posters">
        {items.map(item => (
          <div
            key={item.id}
            className="movie-row__poster-container"
            onClick={() => handleClick(item.videoUrl)}
          >
            <img
              className="movie-row__poster"
              src={item.posterUrl}
              alt={item.title}
            />
            <div className="movie-row__overlay">
              <button className="movie-row__play-button">Play</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieRow;
