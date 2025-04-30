// src/utils/axios.js
import axios from 'axios';



export default axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});


// const instance = axios.create({
//   baseURL: 'http://localhost:5000/api', // Ensure this matches your backend URL
// });

// export default instance;
