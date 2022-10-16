import { toast } from 'react-toastify';

const error = (store: any) => (next: any) => (action: any) => {
  if (action.type === 'api/callFailed') toast.error(action.payload);
  else return next(action);
};

export default error;
