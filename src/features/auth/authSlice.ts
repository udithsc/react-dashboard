import { createSlice } from '@reduxjs/toolkit';
import { apiCallBegan } from '../../app/actions';
import type { RootState } from '../../app/store';

type User = {
  id: number;
  name: string;
};

type InitialState = {
  loading: boolean;
  user: User;
  error: string;
  accessToken: string;
  refreshToken: string;
};

const initialState: InitialState = {
  loading: false,
  user: {
    id: 0,
    name: ''
  },
  error: '',
  accessToken: '',
  refreshToken: ''
};

const url = '/auth';

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    apiPending: (state) => {
      state.loading = true;
    },

    apiFailed: (state) => {
      state.loading = false;
    },

    loggedIn: (state, action) => {
      state.loading = false;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },

    loggedOut: (state, action) => {
      state = initialState;
    },

    tokenRefreshed: (state, action) => {
      state.loading = false;
      state.accessToken = action.payload.data.accessToken;
      state.refreshToken = action.payload.data.refreshToken;
    }
  }
});

export const { apiPending, apiFailed, loggedIn, loggedOut, tokenRefreshed } = authSlice.actions;

export default authSlice.reducer;

// Selectors
export const selectUser = (state: RootState) => state.auth.user;
export const selectAccessToken = (state: RootState) => state.auth.accessToken;
export const selectDataStatus = (state: RootState) => state.auth.loading;

// Action Creators
export const login = (data: any) =>
  apiCallBegan({
    url,
    method: 'post',
    data,
    onStart: apiPending.type,
    onSuccess: loggedIn.type,
    onError: apiFailed.type
  });
