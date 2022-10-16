import axios from 'axios';
import * as actions from '../actions';
import { loggedOut } from '../../features/auth/authSlice';

const api =
  ({ dispatch }: any) =>
  (next: any) =>
  async (action: any) => {
    if (action.type !== actions.apiCallBegan.type) return next(action);
    const { url, method, data, onStart, onSuccess, onError } = action.payload;
    if (onStart) dispatch({ type: onStart });
    next(action);

    try {
      const response = await axios.request({
        baseURL: 'https://jsonplaceholder.typicode.com/', // Base URL
        url,
        method,
        data
      });

      dispatch(actions.apiCallSuccess(response.data)); // General
      if (onSuccess) dispatch({ type: onSuccess, payload: response.data, data }); // Specific
    } catch (e) {
      let error = '';
      if (typeof e === 'string') {
        error = e.toUpperCase(); // works, `e` narrowed to string
      } else if (e instanceof Error) {
        error = e.message; // works, `e` narrowed to Error
      }

      dispatch(actions.apiCallFailed(error)); // General
      if (onError) dispatch({ type: onError, payload: error }); // Specific
    }
  };

export default api;
