import React, { useState } from 'react';
import { Navigate, Redirect } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [redirectToDashboard, setRedirectToDashboard] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    // Simulated user credentials
    const dummyUsername = 'admin';
    const dummyPassword = 'password';

    if (username === dummyUsername && password === dummyPassword) {
      onLogin(username); // Notify parent component about successful login
      setRedirectToDashboard(true); // Redirect to dashboard
    } else {
      setError('Invalid username or password');
    }
  };

  if (redirectToDashboard) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div>
      <h2>Login for Admins</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Login;



//ww 