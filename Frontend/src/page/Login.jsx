import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext';
const DB_API = import.meta.env.VITE_API_BASE_URL;
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const { login } = useContext(AuthContext); // Access the login function
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    // Make API call to login
    const response = await fetch(`${DB_API}api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    
    const data = await response.json();

    if (data.token) {
      login(data.token); // Call the login function from context
      navigate('/'); // Redirect to home page after successful login
    } else {
      setMessage(data.message); // Show error message if login failed
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition ease-in-out duration-200"
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition ease-in-out duration-200"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition ease-in-out duration-300"
          >
            Login
          </button>
        </form>
        {message && <p className="mt-4 text-red-500 text-center">{message}</p>}
      </div>
    </div>
  );
};

export default Login;
