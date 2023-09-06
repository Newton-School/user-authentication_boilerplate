// Define action types as constants
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT = 'LOGOUT';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

// Action creators with comments for students to implement
export const loginSuccess = (user) => ({
  // TODO: Define action type for login success

  // Replace this comment with your action type
  payload: user,
});

export const logout = () => ({
  // TODO: Define action type for logout
  // Replace this comment with your action type
});

export const loginFailure = (error) => ({
  // TODO: Define action type for login failure

  // Replace this comment with your action type
  payload: error,
});
