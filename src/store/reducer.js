import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './users';
import authReducer from './auth';

export default combineReducers({
  auth: authReducer,
  users: userReducer
});
