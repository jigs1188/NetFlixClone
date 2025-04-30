// backend/routes/movies.js
const express = require('express');
const axios = require('axios');
const router = express.Router();

const TMDB_API_KEY = process.env.TMDB_API_KEY;

router.get('/', async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}&language=en-US&page=1`
    );

    const results = await Promise.all(
      response.data.results.map(async movie => {
        let trailerUrl = null;

        try {
          const videosRes = await axios.get(
            `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${TMDB_API_KEY}`
          );

          const trailer = videosRes.data.results.find(
            v => v.type === 'Trailer' && v.site === 'YouTube'
          );

          if (trailer) {
            trailerUrl = `https://www.youtube.com/watch?v=${trailer.key}`;
          }
        } catch (err) {
          console.warn(`No trailer found for movie ${movie.title}`);
        }

        return {
          id: movie.id,
          title: movie.title,
          posterUrl: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
          videoUrl: trailerUrl || '', // fallback if no trailer
        };
      })
    );

    res.json(results);
  } catch (error) {
    console.error('TMDB Movies Fetch Failed:', error.message);
    res.status(500).json({ error: 'Failed to fetch movies' });
  }
});


// ADD THIS BELOW /movies route

router.get('/top-rated', async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${TMDB_API_KEY}&language=en-US&page=1`
    );

    const results = await Promise.all(
      response.data.results.map(async movie => {
        let trailerUrl = null;

        try {
          const videosRes = await axios.get(
            `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${TMDB_API_KEY}`
          );

          const trailer = videosRes.data.results.find(
            v => v.type === 'Trailer' && v.site === 'YouTube'
          );

          if (trailer) {
            trailerUrl = `https://www.youtube.com/watch?v=${trailer.key}`;
          }
        } catch (err) {
          console.warn(`No trailer found for movie ${movie.title}`);
        }

        return {
          id: movie.id,
          title: movie.title,
          posterUrl: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
          videoUrl: trailerUrl || '',
        };
      })
    );

    res.json(results);
  } catch (error) {
    console.error('TMDB Top Rated Fetch Failed:', error.message);
    res.status(500).json({ error: 'Failed to fetch top rated movies' });
  }
});

module.exports = router;
