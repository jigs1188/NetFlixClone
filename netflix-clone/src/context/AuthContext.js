// src/context/AuthContext.js
import React, { createContext, useReducer, useEffect } from 'react';
import axios from '../utils/axios';

const AuthContext = createContext();

const initialState = {
  isAuthenticated: false,
  user: null,
  token: localStorage.getItem('token'),
  message: ''
};

const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token,
        message: action.payload.message,
      };
    case 'LOGOUT':
      localStorage.removeItem('token');
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        token: null,
        message: '',
      };
    case 'CLEAR_MESSAGE':
      return {
        ...state,
        message: '',
      };
    default:
      return state;
  }
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    const loadUser = async () => {
      if (state.token) {
        try {
          const res = await axios.get('/auth/user', {
            headers: { 'x-auth-token': state.token },
          });
          dispatch({ type: 'LOGIN_SUCCESS', payload: { user: res.data, token: state.token, message: '' } });
        } catch (err) {
          console.error(err);
        }
      }
    };
    loadUser();
  }, [state.token]);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
