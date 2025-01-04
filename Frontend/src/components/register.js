import React, { useState } from 'react';
import { registerUser } from '../AuthContext';
import { useNavigate } from 'react-router-dom';

const Register = ({ setIsAuthenticated }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const response = await registerUser({ name, email, password });
    if (response.message === 'User registered successfully') {
      setMessage('Registration successful! Please log in.');
      navigate('/login');  // Redirect to login page after successful registration
    } else {
      setMessage(response.message);  // Show error message
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Register</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default Register;
