import React, { useState } from 'react';
import { connect } from 'react-redux';
import { login } from '../redux/thunks/auth';

const LoginForm = ({ login }) => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

  const handleLogin = () => {
    // TODO: Implement login button click logic here
    // Replace this comment with your code for handling the login button click
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type='text'
        placeholder='Username'
        name='username'
        value={credentials.username}
        onChange={(e) => {
          // TODO: Handle username input change
          // Replace this comment with your code for handling username input change
        }}
      />
      <input
        type='password'
        placeholder='Password'
        name='password'
        value={credentials.password}
        onChange={(e) => {
          // TODO: Handle password input change
          // Replace this comment with your code for handling password input change
        }}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default connect(null, { login })(LoginForm);
