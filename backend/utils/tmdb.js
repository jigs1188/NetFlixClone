// backend/utils/tmdb.js
const axios = require('axios');

const TMDB_API_KEY = process.env.TMDB_API_KEY;

const tmdb = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: TMDB_API_KEY,
    language: 'en-US',
  },
});

module.exports = tmdb;
