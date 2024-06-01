// backend/routes/shows.js
const express = require('express');
const router = express.Router();

const shows = [
  { id: 1, title: 'Show 1', posterUrl: 'https://img.goku.sx/xxrz/250x400/576/c6/7b/c67ba0b941ad8ecc14ae9ea5f55f60bb/c67ba0b941ad8ecc14ae9ea5f55f60bb.jpg',VideoUrl:'' },
  { id: 2, title: 'Show 2', posterUrl: 'https://img.goku.sx/xxrz/250x400/576/86/14/861420950a66ce2dffb1104e0bf24039/861420950a66ce2dffb1104e0bf24039.jpg',VideoUrl:'' },
  { id: 3, title: 'Show 3', posterUrl: 'https://img.goku.sx/xxrz/250x400/576/62/ce/62ced9a7bae6c17904a9b3e7e4f973c8/62ced9a7bae6c17904a9b3e7e4f973c8.jpg',VideoUrl:'' },
  { id: 4, title: 'Show 4', posterUrl: 'https://img.goku.sx/xxrz/250x400/576/77/97/77970b42ee34d9ba921c61a1f291a9ba/77970b42ee34d9ba921c61a1f291a9ba.jpg',VideoUrl:'' },
  { id: 5, title: 'Show 5', posterUrl: 'https://img.goku.sx/xxrz/250x400/576/8e/cd/8ecda10e7b637147fb0cac4112d80b9e/8ecda10e7b637147fb0cac4112d80b9e.jpg',VideoUrl:'' },
  { id: 6, title: 'Show 6', posterUrl: 'https://img.goku.sx/xxrz/250x400/576/b4/09/b40905910ce58a8a49fc17af13696728/b40905910ce58a8a49fc17af13696728.jpg',VideoUrl:'' },
  { id: 7, title: 'Show 7', posterUrl: 'https://img.goku.sx/xxrz/250x400/576/2d/7b/2d7bf31874564e747a53077577598df9/2d7bf31874564e747a53077577598df9.jpg',VideoUrl:'' },
  { id: 8, title: 'Show 8', posterUrl: 'https://img.goku.sx/xxrz/250x400/576/bb/9a/bb9a8fc97651fd904aae5d54225e4e6c/bb9a8fc97651fd904aae5d54225e4e6c.jpg',VideoUrl:'' },
  // Add more shows here
];

router.get('/', (req, res) => {
  res.json(shows);
});

module.exports = router;
