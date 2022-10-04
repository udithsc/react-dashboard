import { createSlice } from '@reduxjs/toolkit';
import moment from 'moment';
import { apiCallBegan } from './api';

const initialState = {
  list: [],
  loading: false,
  lastFetch: null,
  notification: {
    isOpen: false,
    message: '',
    type: ''
  },
  totalElements: 0,
  refresh: false
};

const url = '/users';

export const userSlice = createSlice({
  name: 'users',
  initialState,

  reducers: {
    userRequested: (state) => {
      state.loading = true;
    },

    userReceived: (state, action) => {
      state.list = action.payload;
      state.loading = false;
      state.lastFetch = Date.now();
      state.refresh = false;
      state.notification = initialState.notification;
      state.totalElements = 12; // action.payload.totalElements;
    },

    userRequestFailed: (state) => {
      state.loading = false;
    },

    userAdded: (state) => {
      state.refresh = true;
      state.notification = {
        isOpen: true,
        message: 'User Added',
        type: 'success'
      };
    },

    userUpdated: (state) => {
      state.refresh = true;
      state.notification = {
        isOpen: true,
        message: 'User Updated',
        type: 'success'
      };
    },

    userDeleted: (state) => {
      state.refresh = true;
      state.notification = {
        isOpen: true,
        message: 'User Deleted ',
        type: 'error'
      };
    },

    showNotification: (state, action) => {
      state.notification = {
        isOpen: true,
        message: action.payload.message,
        type: action.payload.type
      };
    },

    closeNotification: (state) => {
      state.notification = initialState.notification;
    }
  }
});

export const {
  userRequested,
  userReceived,
  userRequestFailed,
  userAdded,
  userUpdated,
  userDeleted,
  closeNotification,
  showNotification
} = userSlice.actions;

export default userSlice.reducer;

export const selectUsers = (state) => state.users.list;
export const selectDataStatus = (state) => state.users.loading;
export const selectRefreshStatus = (state) => state.users.refresh;
export const selectNotification = (state) => state.users.notification;
export const selectTotalElements = (state) => state.users.totalElements;

export const loadUsers =
  (page, limit, search = '') =>
  (dispatch, getState) => {
    const { lastFetch } = getState().users;
    const diffInSeconds = moment().diff(moment(lastFetch), 'seconds');
    if (diffInSeconds < 1) return; // move values to config file

    return dispatch(
      apiCallBegan({
        url: page >= 0 ? `${url}?_page=${page}&_limit=${limit}` : url,
        onStart: userRequested.type,
        onSuccess: userReceived.type,
        onError: userRequestFailed.type
      })
    );
  };

export const addUser = (user) =>
  apiCallBegan({
    url,
    method: 'post',
    data: user,
    onSuccess: userAdded.type
  });

export const updateUser = (user) =>
  apiCallBegan({
    url: `${url}/${user.id}`,
    method: 'put',
    data: user,
    onSuccess: userUpdated.type
  });

export const deleteUser = (id) =>
  apiCallBegan({
    url: `${url}/${id}`,
    method: 'delete',
    onSuccess: userDeleted.type
  });
