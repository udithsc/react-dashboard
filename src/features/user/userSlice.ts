import { createSlice } from '@reduxjs/toolkit';
import { apiCallBegan } from '../../app/actions';
import { RootState } from '../../app/store';

type User = {
  id: number;
  name: string;
};

type InitialState = {
  loading: boolean;
  users: User[];
  error: string;
};

const initialState: InitialState = {
  loading: false,
  users: [],
  error: ''
};

const url = '/users';

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    apiPending: (state) => {
      state.loading = true;
    },

    apiFailed: (state) => {
      state.loading = false;
    },

    userReceived: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    }
  }
});

export const { apiPending, userReceived, apiFailed } = userSlice.actions;
export default userSlice.reducer;

export const selectUsers = (state: RootState) => state.user.users;
export const selectDataStatus = (state: RootState) => state.user.loading;

export const loadUsers = (page?: number | null, limit?: number | null, search?: string | null) =>
  apiCallBegan({
    url: page ? `${url}?_page=${page}&_limit=${limit}` : url,
    onStart: apiPending.type,
    onSuccess: userReceived.type,
    onError: apiFailed.type
  });

export const addUser = (user: User) =>
  apiCallBegan({
    url,
    method: 'post',
    data: user
  });

export const updateUser = (user: User) =>
  apiCallBegan({
    url: `${url}/${user.id}`,
    method: 'put',
    data: user
  });

export const deleteUser = (id: number) =>
  apiCallBegan({
    url: `${url}/${id}`,
    method: 'delete'
  });
