// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import VideoPlayer from './components/VideoPlayer';
import Visualization from './components/Visualization';
import VisualizationPage from './components/VisualizationPage';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/watch" element={<VideoPlayer />} />
            <Route path="/visualization" element={<Visualization />} />
            <Route path="/visualization-page" element={<VisualizationPage />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
