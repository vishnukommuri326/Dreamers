import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token'); // Check if a token exists
    if (token) {
      setIsLoggedIn(true); // Set logged-in state
      try {
        const decodedToken = JSON.parse(atob(token.split('.')[1])); // Decode token
        setUsername(decodedToken.username || ''); // Set username
      } catch (error) {
        console.error('Error decoding token:', error);
        setUsername('');
      }
    }
  }, []);

  const logout = () => {
    localStorage.removeItem('token'); // Clear token
    setIsLoggedIn(false);
    setUsername('');
  };

  return (
    <UserContext.Provider value={{ isLoggedIn, username, logout }}>
      {children}
    </UserContext.Provider>
  );
};