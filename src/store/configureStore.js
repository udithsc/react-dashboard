import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer';
import toast from './middleware/toast';
import api from './middleware/api';

export default () =>
  configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), toast, api]
  });
