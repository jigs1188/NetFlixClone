// src/components/Header.js
import React, { useContext, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import './Header.css';
import logo from '../assets/netflix-logo.png'; // Move image to /src/assets/ and rename

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
      <Link to="/" className="logo-link">
        <img src={logo} alt="Netflix" className="logo-img" />
      </Link>

      <nav>
        <ul>
          <li><Link to="/" className='home'>Home</Link></li>
          <li><Link to="/visualization-page" className='visualization'>Visualization</Link></li>
          <form className="search-bar" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search movies/shows..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {/* <button type="submit">Search</button> */}
      </form>
          {state.isAuthenticated ? (
            <>
              <li><Link to="/profile">Profile</Link></li>
              <li><button onClick={handleLogout}>Logout</button></li>
            </>
          ) : (
            <>
              <li><Link to="/register" className="join">Join now</Link></li>
              <li><Link to="/login" className="sign-in">Sign in</Link></li>
            </>
          )}
        </ul>
      </nav>

      

      {showMessage && <div className="message-popup">{state.message}</div>}
    </header>
  );
};

export default Header;
