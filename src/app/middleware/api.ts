import axios from 'axios';
import * as actions from '../apiActions';
import { loggedOut } from '../../features/auth/authSlice';

const api =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
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
    } catch (error) {
      dispatch(actions.apiCallFailed(error.message)); // General
      if (onError) dispatch({ type: onError, payload: error.message }); // Specific
      if (error.response && error.response.status === 403) dispatch({ type: loggedOut.type });
    }
  };

export default api;
