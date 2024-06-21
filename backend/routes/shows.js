// backend/routes/shows.js
const express = require('express');
const router = express.Router();

const shows = [
  { id: 1, title: 'Stranger Things ', posterUrl: 'https://people.com/thmb/3pq-PIWD_dfGwKfkcwQ9hXMYnhE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(515x809:517x811)/stranger-things-2-ba4b0d54a0d146e4a715cec0a7a29976.jpg',videoUrl:'https://www.youtube.com/watch?v=b9EkMc79ZSU' },
  { id: 2, title: 'The Witcher  ', posterUrl: 'https://br.web.img3.acsta.net/pictures/19/11/29/17/57/5161763.jpg',videoUrl:'https://www.youtube.com/watch?v=ndl1W4ltcmg' },
  { id: 3, title: 'Money Heist', posterUrl: 'https://resizing.flixster.com/ITt1FPrFePNR6FSqZrZK7BocG2U=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vUlRUVjEwMTMyOTMud2VicA==',videoUrl:'https://www.youtube.com/watch?v=fvCdLmxnkj0' },
  { id: 4, title: 'The Crown', posterUrl: 'https://images.squarespace-cdn.com/content/v1/5b15d26ce749408e659ba6eb/1608323718044-PIH4MCJP59WCK6ME9UVA/IMG_4527.JPG',videoUrl:'https://www.youtube.com/watch?v=JWtnJjn6ng0' },
  { id: 5, title: 'Dark', posterUrl: 'https://i.pinimg.com/736x/e6/42/e9/e642e9496e7b403f760c840dfee7a52d.jpg',videoUrl:'https://www.youtube.com/watch?v=rrwycJ08PSA' },
  { id: 6, title: 'Ozark', posterUrl: 'https://resizing.flixster.com/3ko6zO6791p1QPOXHUI2eCwmHXQ=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvMDIyOTBmN2QtMzM0Yi00ODUxLWE0MWYtMmViYWJiOGViZjRkLmpwZw==',videoUrl:'https://www.youtube.com/watch?v=5hAXVqrljbs' },
  { id: 7, title: 'Umbrella Academy', posterUrl: 'https://m.media-amazon.com/images/I/71+RSlRCMUS._AC_UF1000,1000_QL80_.jpg',videoUrl:'https://www.youtube.com/watch?v=0DAmWHxeoKw' },
  { id: 8, title: 'Bridgerton', posterUrl: 'https://leadership.ng/wp-content/uploads/2024/05/WhatsApp-Image-2024-05-17-at-17.34.47.jpeg',videoUrl:'https://www.youtube.com/watch?v=gpv7ayf_tyE' },
  { id: 9, title: 'Narcos', posterUrl: 'https://m.media-amazon.com/images/I/91jkF8kLQqL._AC_UF1000,1000_QL80_.jpg',videoUrl:'https://www.youtube.com/watch?v=U7elNhHwgBU' },
  { id: 10, title: 'The friends', posterUrl: 'https://m.media-amazon.com/images/M/MV5BNDVkYjU0MzctMWRmZi00NTkxLTgwZWEtOWVhYjZlYjllYmU4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg',videoUrl:'https://www.youtube.com/watch?v=RasWhgd4vao' },
  // Add more shows here
];

router.get('/', (req, res) => {
  
  res.json(shows);
});

module.exports = router;








