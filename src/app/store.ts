import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import userReducer from '../features/user/userSlice';
import toast from './middleware/toast';
import api from './middleware/api';

const store = configureStore({
  reducer: {
    cake: authReducer,
    user: userReducer
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), toast, api]
});

export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
