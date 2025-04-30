# 🎬 Netflix Clone (MERN Stack Project)

A full-stack Netflix Clone built with MERN (MongoDB, Express.js, React, Node.js). Users can register, log in, browse trending movies and shows fetched dynamically from the TMDB API, watch trailers via YouTube, visualize Netflix data, and search for specific titles.

---

## 🚀 Features

- 🔐 User Authentication (Register/Login/Logout)
- 🎞️ Browse trending Movies & TV Shows (via TMDB API)
- ▶️ Play trailers (YouTube embeds)
- 📊 Netflix Data Visualization (Pie, Bar, Line charts)
- 🔍 Search functionality for movies/shows only
- 🧑 User Profile page
- 🧼 Fully responsive design

---

## 🧱 Tech Stack

- **Frontend:** React, React Router, Axios, Chart.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose)
- **Authentication:** JWT & Context API
- **API Integration:** TMDB API
- **Visualization:** Chart.js, real Netflix CSV dataset

---

## 📁 Project Structure
netflix-clone/ ├── backend/ │ ├── routes/ │ ├── utils/ │ ├── models/ │ └── server.js ├── frontend/ │ └── src/ │ ├── components/ │ ├── context/ │ ├── utils/ │ ├── App.js │ └── index.js


---

## 🔧 Getting Started

### 🔹 Clone the repo

```bash
git clone https://github.com/jigs1188/NetFlixClone.git
cd NetFlixClone

#🔹 Backend Setup
cd backend
npm install

node server.js

#🔹 Frontend Setup
cd netflix-clone
npm install
npm start

Visit: http://localhost:3000
#📊 Visualization

    Navigate to /visualization-page to explore Netflix insights

    Built using real netflix_titles.csv dataset

    Includes charts on type, rating, year, genre distributions

---

#🔍 Search Functionality

    Input field in the navbar

    Auto fetches Movies & Shows only (filters out cast/others)

    Results displayed using TMDB API

---

#📸 Screenshots

#🌐 Deployment Options

    Backend: Render

    Frontend: Vercel or Netlify

    DB: MongoDB Atlas
---

#👤 Author

Jigs Parmar
📎 GitHub: @jigs1188


