import React from 'react';
import { connect } from 'react-redux';
import LoginForm from './LoginForm';
import UserProfile from './UserProfile';

const App = ({ isAuthenticated }) => {
  return (
    <div>
      <h1>User Authentication App</h1>
      {/* TODO: Conditionally render LoginForm or UserProfile based on isAuthenticated */}
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(App);
