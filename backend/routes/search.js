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

    const results = await Promise.all(
      [...movieRes.data.results, ...tvRes.data.results].map(async (item) => {
        const isMovie = item.title !== undefined;
        const mediaType = isMovie ? 'movie' : 'tv';
        const title = isMovie ? item.title : item.name;
        const posterUrl = item.poster_path
          ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
          : null;

        let videoUrl = '';

        try {
          const videoRes = await axios.get(`https://api.themoviedb.org/3/${mediaType}/${item.id}/videos`, {
            params: { api_key: TMDB_API_KEY }
          });

          const trailer = videoRes.data.results.find(
            (v) => v.type === 'Trailer' && v.site === 'YouTube'
          );

          if (trailer) {
            videoUrl = `https://www.youtube.com/watch?v=${trailer.key}`;
          }
        } catch (err) {
          console.warn(`Trailer not found for ${title}`);
        }

        return {
          id: item.id,
          type: isMovie ? 'Movie' : 'TV Show',
          title,
          posterUrl,
          videoUrl,
        };
      })
    );

    res.json(results);
  } catch (err) {
    console.error('Search failed:', err.message);
    res.status(500).json({ error: 'Search failed' });
  }
});

module.exports = router;
