// backend/routes/movies.js
const express = require('express');
const router = express.Router();

const movies = [
  { id: 1, title: 'Tarot', posterUrl: "https://img.goku.sx/xxrz/250x400/576/2f/79/2f79ebeecb03b392627dab6b2f70bc4e/2f79ebeecb03b392627dab6b2f70bc4e.jpg",VideoUrl:"https://www.youtube.com/watch?v=bvDArsKoTOE" },
  { id: 2, title: 'Movie 2', posterUrl: 'https://img.goku.sx/xxrz/250x400/576/c4/33/c4331df0660bc6e832452094a36c5d53/c4331df0660bc6e832452094a36c5d53.jpg',VideoUrl:"https://goku.sx/watch-movie/watch-furiosa-a-mad-max-saga-109111/1442653" },
  { id: 3, title: 'Movie 3', posterUrl: 'https://img.goku.sx/xxrz/250x400/576/17/48/174861588d88bdff39ce52ed13c1dc4c/174861588d88bdff39ce52ed13c1dc4c.jpg',VideoUrl:"https://www.youtube.com/watch?v=174861588d88bdff39ce52ed13c1dc4c" },
  { id: 4, title: 'Movie 3', posterUrl: 'https://img.goku.sx/xxrz/250x400/576/29/32/293217609b7bdf410b1d287b96bef12a/293217609b7bdf410b1d287b96bef12a.jpg',VideoUrl:"https://www.youtube.com/watch?v=174861588d88bdff39ce52ed13c1dc4c" },
  { id: 5, title: 'Movie 3', posterUrl: 'https://img.goku.sx/xxrz/250x400/576/27/f3/27f3354bd7d6505d92ac8aadfff3280e/27f3354bd7d6505d92ac8aadfff3280e.jpg',VideoUrl:"https://www.youtube.com/watch?v=174861588d88bdff39ce52ed13c1dc4c" },
  { id: 6, title: 'Movie 3', posterUrl: 'https://img.goku.sx/xxrz/250x400/576/9d/e2/9de27aa84a87d97a8aaa7296cd759122/9de27aa84a87d97a8aaa7296cd759122.jpg',VideoUrl:"https://www.youtube.com/watch?v=174861588d88bdff39ce52ed13c1dc4c" },
  { id: 7, title: 'Movie 3', posterUrl: 'https://img.goku.sx/xxrz/250x400/576/11/3d/113da32063078e9747a8a4ec1f5b2b3c/113da32063078e9747a8a4ec1f5b2b3c.jpg',VideoUrl:"https://www.youtube.com/watch?v=174861588d88bdff39ce52ed13c1dc4c" },
  { id: 8, title: 'Movie 3', posterUrl: 'https://img.goku.sx/xxrz/250x400/576/db/10/db10820a0dd20ada5d02c2a77f22c6da/db10820a0dd20ada5d02c2a77f22c6da.jpg',VideoUrl:"https://www.youtube.com/watch?v=174861588d88bdff39ce52ed13c1dc4c" },
  { id: 9, title: 'Movie 3', posterUrl: 'https://img.goku.sx/xxrz/250x400/576/35/a5/35a539a691894ad48432d70dd1171801/35a539a691894ad48432d70dd1171801.jpg',VideoUrl:"https://www.youtube.com/watch?v=174861588d88bdff39ce52ed13c1dc4c" },
  // Add more movies here
];

router.get('/', (req, res) => {
  res.json(movies);
});

module.exports = router;
