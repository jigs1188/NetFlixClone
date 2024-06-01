Great to hear that it's working! Let's create a comprehensive README file for your project. This README will cover the project setup, structure, and usage instructions for both the backend and frontend parts.

### README.md

```markdown
# Netflix Clone

This project is a Netflix clone that includes a frontend built with React and a backend built with Express and MongoDB. The application features user authentication, browsing movies and TV shows, and a video player.

## Table of Contents

- [Project Structure](#project-structure)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Project Structure

The project has the following structure:

```
netflix/
├── backend/
│   ├── models/
│   │   └── User.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── movies.js
│   │   └── show.js
│   ├── middleware/
│   │   └── auth.js
│   ├── server.js
│   ├── package.json
│   └── ...
├── netflix-clone/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.js
│   │   │   ├── Home.js
│   │   │   ├── Login.js
│   │   │   ├── MovieRow.js
│   │   │   ├── Register.js
│   │   │   ├── UserProfile.js
│   │   │   └── VideoPlayer.js
│   │   ├── context/
│   │   │   └── AuthContext.js
│   │   ├── utils/
│   │   │   └── axios.js
│   │   ├── App.js
│   │   ├── index.js
│   │   ├── styles.css
│   │   └── ...
│   ├── package.json
│   └── ...
```

## Installation

Follow these steps to set up the project on your local machine.

### Backend

1. Navigate to the `backend` directory:

   ```bash
   cd netflix/backend
   ```

2. Install backend dependencies:

   ```bash
   npm install
   ```

3. Start the MongoDB server (if not already running). You can use MongoDB locally or a service like MongoDB Atlas.

4. Start the backend server:

   ```bash
   node server.js
   ```

### Frontend

1. Navigate to the `netflix-clone` directory:

   ```bash
   cd netflix/netflix-clone
   ```

2. Install frontend dependencies:

   ```bash
   npm install
   ```

3. Start the frontend development server:

   ```bash
   npm start
   ```

The frontend server will run on `http://localhost:3000` and the backend server on `http://localhost:5000`.

## API Endpoints

### Authentication

- **Register:** `POST /api/auth/register`
  - Request Body: `{ "name": "string", "email": "string", "password": "string" }`
  - Response: `{ "token": "string" }`

- **Login:** `POST /api/auth/login`
  - Request Body: `{ "email": "string", "password": "string" }`
  - Response: `{ "token": "string" }`

- **Get User Info:** `GET /api/auth/user`
  - Headers: `{ "x-auth-token": "string" }`
  - Response: `{ "name": "string", "email": "string" }`

### Movies

- **Get Movies:** `GET /api/movies`
  - Response: `[{ "id": "number", "title": "string", "posterUrl": "string", "videoUrl": "string" }]`

### TV Series

- **Get TV Show:** `GET /api/tv-series`
  - Response: `[{ "id": "number", "title": "string", "posterUrl": "string", "videoUrl": "string" }]`

## Environment Variables

Create a `.env` file in the `backend` directory and add the following environment variables:

```
MONGO_URI=mongodb://localhost:27017/netflix-clone
JWT_SECRET=yourSecretKey
```

## Technologies Used

- **Frontend:**
  - React
  - React Router
  - Axios
  - CSS

- **Backend:**
  - Node.js
  - Express
  - MongoDB
  - Mongoose
  - JWT (JSON Web Token)
  - bcryptjs

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you have any improvements or new features.

## License

This project is licensed under the MIT License.
```

### Instructions for Uploading the README

1. Save the above content into a file named `README.md`.
2. Place the `README.md` file at the root of your `netflix` directory.

This README file will provide clear instructions and information about your project, making it easier for others to understand and contribute to it. If you have any more requests or need further assistance, feel free to ask!
