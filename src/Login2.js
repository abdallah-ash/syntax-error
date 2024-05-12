import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import AdminLogin from './AdminLogin';

const Login2 = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogin = (username) => {
    setLoggedInUser(username);
  };

  return (
    <div>
      {loggedInUser ? (
        <Redirect to="/dashboard" />
      ) : (
        <AdminLogin onLogin={handleLogin} />
      )}
    </div>
  );
};

export default Login2;
