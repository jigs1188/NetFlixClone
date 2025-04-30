// src/components/Header.js
import React, { useContext, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import './Header.css';

const Header = () => {
  const { state, dispatch } = useContext(AuthContext);
  const [showMessage, setShowMessage] = useState(false);
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  useEffect(() => {
    if (state.message) {
      setShowMessage(true);
      const timer = setTimeout(() => {
        setShowMessage(false);
        dispatch({ type: 'CLEAR_MESSAGE' });
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [state.message, dispatch]);

  return (
    <header className="header">
      <div className="logo">Netflix</div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/visualization-page">Visualization</Link></li>
          {state.isAuthenticated ? (
            <>
              <li><Link to="/profile">Profile</Link></li>
              <li><button onClick={handleLogout}>Logout</button></li>
            </>
          ) : (
            <>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/register">Register</Link></li>
            </>
          )}
        </ul>
      </nav>
      <form className="search-bar" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search movies/shows..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">🔍</button>
      </form>
      {showMessage && <div className="message-popup">{state.message}</div>}
    </header>
  );
};

export default Header;
