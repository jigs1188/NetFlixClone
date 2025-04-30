const express = require('express');
const axios = require('axios');
const router = express.Router();

const TMDB_API_KEY = process.env.TMDB_API_KEY;

router.get('/', async (req, res) => {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/tv/popular`, {
      params: {
        api_key: TMDB_API_KEY,
        language: 'en-US',
        page: 1,
      },
    });

    const shows = await Promise.all(
      response.data.results.map(async (show) => {
        let trailerUrl = '';

        try {
          const videosRes = await axios.get(
            `https://api.themoviedb.org/3/tv/${show.id}/videos`,
            {
              params: {
                api_key: TMDB_API_KEY,
                language: 'en-US',
              },
            }
          );

          const trailer = videosRes.data.results.find(
            (v) => v.type === 'Trailer' && v.site === 'YouTube'
          );

          if (trailer) {
            trailerUrl = `https://www.youtube.com/watch?v=${trailer.key}`;
          }
        } catch (err) {
          console.warn(`No trailer found for TV show: ${show.name}`);
        }

        return {
          id: show.id,
          title: show.name,
          posterUrl: `https://image.tmdb.org/t/p/w500${show.poster_path}`,
          videoUrl: trailerUrl || '', // fallback: show nothing if no trailer
        };
      })
    );

    res.json(shows);
  } catch (err) {
    console.error('Failed to fetch shows:', err.message);
    res.status(500).json({ error: 'Failed to fetch shows' });
  }
});

module.exports = router;
