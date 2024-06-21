// src/components/Header.js
import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import './Header.css';

const Header = () => {
  const { state, dispatch } = useContext(AuthContext);
  const [showMessage, setShowMessage] = useState(false);

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
  };
  useEffect(() => {
    if (state.message) {
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
        dispatch({ type: 'CLEAR_MESSAGE' });
      }, 3000); // Hide message after 3 seconds
    }
  }, [state.message, dispatch]);

  return (
    <header className="header">
      <div className="logo">Netflix </div>
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
      {showMessage && <div className="message-popup">{state.message}</div>}
    </header>
  );
};

export default Header;

