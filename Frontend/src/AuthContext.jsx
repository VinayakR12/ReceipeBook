


import React, { createContext, useState, useEffect } from 'react';

// Create the context
export const AuthContext = createContext();

// AuthProvider wraps your application and provides the authentication context
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState(''); // State for storing username

  // Check if the user is authenticated when the component is mounted
  useEffect(() => {
    const token = localStorage.getItem('token');
    const storedUserName = localStorage.getItem('userName'); // Fetch username from localStorage

    if (token) {
      setIsAuthenticated(true);
      setUserName(storedUserName); // Set the username if authenticated
    }
  }, []);

  // Login function to authenticate the user
  const login = (token, name) => {
    localStorage.setItem('token', token);
    localStorage.setItem('userName', name); // Store the username in localStorage
    setIsAuthenticated(true);
    setUserName(name); // Set the username in context
  };

  // Logout function to log the user out
  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userName');
    setIsAuthenticated(false);
    setUserName(''); // Reset username after logout
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, userName }}>
      {children}
    </AuthContext.Provider>
  );
};
