import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';

// Create the Redux store with comments for students to implement
const store = createStore(
  // TODO: Pass your rootReducer here

  // Replace this comment with your rootReducer
  applyMiddleware(thunk)
);

export default store;
