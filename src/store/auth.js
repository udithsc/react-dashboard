import { createSlice } from '@reduxjs/toolkit';
import { apiCallBegan } from './api';

const initialState = {
  isLoading: false,
  accessToken: '',
  refreshToken: '',
  expires_in: 0,
  user: {},
  isLoggedIn: false,
  notification: {
    isOpen: false,
    message: '',
    type: ''
  }
};

const url = '/auth';

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginRequested: (state) => {
      state.isLoading = true;
    },

    loginRequestFailed: (state) => {
      state.isLoading = false;
      state.message = '';
    },

    loggedIn: (state, action) => {
      state.isLoading = false;
      state.isLoggedIn = true;
      state.accessToken = action.payload.accessToken;
      // state.refreshToken = action.payload?.refreshToken;
      state.notification = initialState.notification;
    },

    loggedOut: (state, action) => {
      state = initialState;
    },

    tokenRefreshed: (state, action) => {
      state.isLoading = false;
      state.accessToken = action.payload.data.accessToken;
      state.refreshToken = action.payload.data.refreshToken;
    },

    showNotification: (state, action) => {
      state.notification = {
        isOpen: true,
        message: action.payload.message,
        type: action.payload.type
      };
    },

    closeNotification: (state, action) => {
      state.notification = initialState.notification;
    }
  }
});

export const {
  loggedIn,
  loggedOut,
  loginRequested,
  tokenRefreshed,
  loginRequestFailed,
  closeNotification,
  showNotification
} = authSlice.actions;

export default authSlice.reducer;

// Selectors
export const selectUser = (state) => state.auth.user;
export const selectAccessToken = (state) => state.auth.accessToken;
export const selectDataStatus = (state) => state.auth.loading;
export const selectNotification = (state) => state.auth.notification;
export const selectLoginStatus = (state) => state.auth.isLoggedIn;

// Action Creators
export const login = (data) =>
  apiCallBegan({
    url,
    method: 'post',
    data,
    onSuccess: loggedIn.type,
    onError: loginRequestFailed.type
  });
