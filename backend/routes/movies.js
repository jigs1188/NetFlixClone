// backend/routes/movies.js
const express = require('express');
const router = express.Router();

const movies = [
  { id: 1, title: 'Bird Box', posterUrl: "https://m.media-amazon.com/images/M/MV5BNjk5ZTk5NTAtYTQ4MS00NWI2LTg2NzQtZTBhYmEzOWU3MDQ0XkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_.jpg",VideoUrl:"https://youtu.be/o2AsIXSh2xo" },
  { id: 2, title: 'Extraction', posterUrl: 'https://ourmuchnessguide.com/wp-content/uploads/2020/07/netflix-extraction-pinterest.jpg',VideoUrl:"https://www.youtube.com/watch?v=174861588d88bdff39ce52ed13c1dc4c" },
  { id: 3, title: 'The Irihman', posterUrl: 'https://m.media-amazon.com/images/M/MV5BMGUyM2ZiZmUtMWY0OC00NTQ4LThkOGUtNjY2NjkzMDJiMWMwXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_FMjpg_UX1000_.jpg',VideoUrl:"https://www.youtube.com/watch?v=174861588d88bdff39ce52ed13c1dc4c" },
  { id: 4, title: 'To all the boys I\'ve loved before', posterUrl: 'https://m.media-amazon.com/images/I/71KRISpGfZL._AC_UF1000,1000_QL80_.jpg',VideoUrl:"https://www.youtube.com/watch?v=174861588d88bdff39ce52ed13c1dc4c" },
  { id: 5, title: 'The Old guard', posterUrl: 'https://m.media-amazon.com/images/M/MV5BZTY5YTk0ZDMtODg0Zi00OGM4LTgxMTQtODAzODg2ZjE2MmM1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg',VideoUrl:"https://www.youtube.com/watch?v=174861588d88bdff39ce52ed13c1dc4c" },
  { id: 6, title: '6 Underground', posterUrl: 'https://m.media-amazon.com/images/M/MV5BNzE2ZjQxNjEtNmI2ZS00ZmU0LTg4M2YtYzVhYmRiYWU0YzI1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg',VideoUrl:"https://www.youtube.com/watch?v=174861588d88bdff39ce52ed13c1dc4c" },
  { id: 7, title: 'Enola Holmes', posterUrl: 'https://m.media-amazon.com/images/M/MV5BZjNkNzk0ZjEtM2M1ZC00MmMxLTlmOWEtNWRlZTc1ZTUyNzY4XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg',VideoUrl:"https://www.youtube.com/watch?v=174861588d88bdff39ce52ed13c1dc4c" },
  { id: 8, title: 'Project Power', posterUrl: 'https://m.media-amazon.com/images/M/MV5BYzBhOWU4ODAtZDYzYi00NDU1LWIzZWUtNDZmMDgxODljZTVmXkEyXkFqcGdeQXVyMTAwMzM3NDI3._V1_.jpg',VideoUrl:"https://www.youtube.com/watch?v=174861588d88bdff39ce52ed13c1dc4c" },
  { id: 9, title: 'The kissing booth', posterUrl: 'https://m.media-amazon.com/images/M/MV5BNjQ0Mzk0OTE5MF5BMl5BanBnXkFtZTgwNDkyOTI0NTM@._V1_.jpg',VideoUrl:"https://www.youtube.com/watch?v=174861588d88bdff39ce52ed13c1dc4c" },
  { id: 1, title: 'Tarot', posterUrl: "https://img.goku.sx/xxrz/250x400/576/2f/79/2f79ebeecb03b392627dab6b2f70bc4e/2f79ebeecb03b392627dab6b2f70bc4e.jpg", videoUrl: "https://www.youtube.com/watch?v=xyz" },
  // Add more movies here
];

router.get('/', (req, res) => {
  res.json(movies);
});

module.exports = router;


