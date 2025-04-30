const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const movieRoutes = require('./routes/movies');
const showRoutes = require('./routes/shows');
const searchRoutes = require('./routes/search');
const authRoutes = require('./routes/auth');

app.use('/api/auth', authRoutes);
app.use('/api/movies', movieRoutes);
app.use('/api/search', searchRoutes);
app.use('/api/shows', showRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));