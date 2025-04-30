// backend/routes/search.js
const express = require('express');
const axios = require('axios');
const router = express.Router();

const TMDB_API_KEY = process.env.TMDB_API_KEY;

router.get('/', async (req, res) => {
  const query = req.query.q;
  if (!query) return res.status(400).json({ error: 'Missing search query' });

  try {
    const [movieRes, tvRes] = await Promise.all([
      axios.get(`https://api.themoviedb.org/3/search/movie`, {
        params: { api_key: TMDB_API_KEY, query, language: 'en-US' }
      }),
      axios.get(`https://api.themoviedb.org/3/search/tv`, {
        params: { api_key: TMDB_API_KEY, query, language: 'en-US' }
      }),
    ]);

    const movieResults = movieRes.data.results.map(item => ({
      id: item.id,
      type: 'Movie',
      title: item.title,
      posterUrl: item.poster_path
        ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
        : null,
      videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    }));

    const tvResults = tvRes.data.results.map(item => ({
      id: item.id,
      type: 'TV Show',
      title: item.name,
      posterUrl: item.poster_path
        ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
        : null,
      videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    }));

    res.json([...movieResults, ...tvResults]);
  } catch (err) {
    res.status(500).json({ error: 'Search failed' });
  }
});

module.exports = router;
