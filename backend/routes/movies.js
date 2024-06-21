// backend/routes/movies.js
const express = require('express');
const router = express.Router();

const movies = [
  { id: 1, title: 'Bird Box', posterUrl: "https://m.media-amazon.com/images/M/MV5BNjk5ZTk5NTAtYTQ4MS00NWI2LTg2NzQtZTBhYmEzOWU3MDQ0XkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_.jpg",videoUrl: "https://www.youtube.com/watch?v=o2AsIXSh2xo" },
  { id: 2, title: 'Extraction', posterUrl: 'https://ourmuchnessguide.com/wp-content/uploads/2020/07/netflix-extraction-pinterest.jpg',videoUrl:"https://www.youtube.com/watch?v=L6P3nI6VnlY" },
  { id: 3, title: 'The Irihman', posterUrl: 'https://m.media-amazon.com/images/M/MV5BMGUyM2ZiZmUtMWY0OC00NTQ4LThkOGUtNjY2NjkzMDJiMWMwXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_FMjpg_UX1000_.jpg',videoUrl:"https://www.youtube.com/watch?v=WHXxVmeGQUc" },
  { id: 4, title: 'To all the boys I\'ve loved before', posterUrl: 'https://m.media-amazon.com/images/I/71KRISpGfZL._AC_UF1000,1000_QL80_.jpg',videoUrl:"https://www.youtube.com/watch?v=555oiY9RWM4" },
  { id: 5, title: 'The Old guard', posterUrl: 'https://m.media-amazon.com/images/M/MV5BZTY5YTk0ZDMtODg0Zi00OGM4LTgxMTQtODAzODg2ZjE2MmM1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg',videoUrl:"https://www.youtube.com/watch?v=aK-X2d0lJ_s" },
  { id: 6, title: '6 Underground', posterUrl: 'https://m.media-amazon.com/images/M/MV5BNzE2ZjQxNjEtNmI2ZS00ZmU0LTg4M2YtYzVhYmRiYWU0YzI1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg',videoUrl:"https://www.youtube.com/watch?v=YLE85olJjp8" },
  { id: 7, title: 'Enola Holmes', posterUrl: 'https://m.media-amazon.com/images/M/MV5BZjNkNzk0ZjEtM2M1ZC00MmMxLTlmOWEtNWRlZTc1ZTUyNzY4XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg',videoUrl:"https://www.youtube.com/watch?v=1d0Zf9sXlHk" },
  { id: 8, title: 'Project Power', posterUrl: 'https://m.media-amazon.com/images/M/MV5BYzBhOWU4ODAtZDYzYi00NDU1LWIzZWUtNDZmMDgxODljZTVmXkEyXkFqcGdeQXVyMTAwMzM3NDI3._V1_.jpg',videoUrl:"https://www.youtube.com/watch?v=xw1vQgVaYNQ" },
  { id: 9, title: 'The kissing booth', posterUrl: 'https://m.media-amazon.com/images/M/MV5BNjQ0Mzk0OTE5MF5BMl5BanBnXkFtZTgwNDkyOTI0NTM@._V1_.jpg',videoUrl:"https://www.youtube.com/watch?v=7bfS6seiLhk" },
  { id: 1, title: 'The Amazing Spiderman', posterUrl: "https://www.algeria.ubuy.com/productimg/?image=aHR0cHM6Ly9pLmViYXlpbWcuY29tL2ltYWdlcy9nLzBUZ0FBT3h5ZWdsVFl2Qmovcy1sMTYwMC5qcGc.jpg", videoUrl: "https://www.youtube.com/watch?v=DlM2CWNTQ84" },
  // Add more movies here
];

router.get('/', (req, res) => {
  res.json(movies);
});

module.exports = router;


