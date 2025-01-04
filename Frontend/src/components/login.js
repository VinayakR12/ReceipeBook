import React, { useState } from 'react';
import { loginUser } from '.././AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await loginUser({ email, password });
    if (response.token) {
      localStorage.setItem('token', response.token);  // Store the token
      setIsAuthenticated(true);  // Update the authenticated status
      setMessage('Login successful!');
      navigate('/protected');  // Redirect to the protected route (or dashboard)
    } else {
      setMessage(response.message);  // Show error message
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
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
        <button type="submit">Login</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default Login;
