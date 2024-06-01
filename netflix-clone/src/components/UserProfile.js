// src/components/UserProfile.js
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import axios from '../utils/axios';

const UserProfile = () => {
  const { state } = useContext(AuthContext);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      if (state.token) {
        try {
          const res = await axios.get('/auth/user', {
            headers: { 'x-auth-token': state.token },
          });
          setUser(res.data);
        } catch (err) {
          console.error(err);
        }
      }
    };

    fetchUserData();
  }, [state.token]);

  if (!user) return <div>Loading...</div>;

  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
    </div>
  );
};

export default UserProfile;
