import axios from 'axios';
import * as actions from '../api';
import { loggedOut } from '../auth';

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
        baseURL: 'https://jsonplaceholder.typicode.com/',
        url,
        method,
        data
      });

      // General
      dispatch(actions.apiCallSuccess(response.data));

      // Specific
      if (onSuccess) dispatch({ type: onSuccess, payload: response.data, data });
    } catch (error) {
      const errorMessage = error.response ? error.response.data?.msg : error.message;

      // General
      dispatch(actions.apiCallFailed(errorMessage));

      // Specific
      if (onError)
        dispatch({
          type: onError,
          payload: errorMessage
        });

      if (error.response && error.response.status === 403) dispatch({ type: loggedOut.type });
    }
  };

export default api;
