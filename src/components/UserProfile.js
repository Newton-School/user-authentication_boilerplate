import React from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../redux/thunks/auth';

const UserProfile = ({ user, logoutUser }) => {
  const handleLogout = () => {
    // TODO: Implement logout button click logic here
    // Replace this comment with your code for handling the logout button click
  };

  return (
    <div>
      <h2>User Profile</h2>
      {/* TODO: Display user's username if user is logged in */}
      {/* TODO: Display a welcome message */}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  // TODO: Map user data from the Redux store state to props
  // Replace this comment with your code for mapping user data
});

export default connect(mapStateToProps, { logoutUser })(UserProfile);
