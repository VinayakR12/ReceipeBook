import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const DB_API = import.meta.env.VITE_API_BASE_URL;
const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const response = await fetch(`${DB_API}api/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password }) // Send name along with email and password
    });

    const data = await response.json();

    if (data.message === 'User registered successfully') {
      
      navigate('/login');
    } else {
      
      setMessage(data.message);
    }
  };

  useEffect(() => {
    if (message) {
      alert(message); // Show browser alert
    }
  }, [message]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 to-orange-500 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Register</h2>
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition ease-in-out duration-200"
            />
          </div>
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
            Register
          </button>
        </form>
        {message && <p className="mt-4 text-red-500 text-center">{message}</p>}
      </div>
    </div>
  );
};

export default Register;
