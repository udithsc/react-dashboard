import { useErrorToast } from '../../hooks/useToast';

const toast = (store) => (next) => (action) => {
  const showToast = useErrorToast();

  if (action.type === 'api/callFailed') showToast(action.payload);
  else return next(action);
};

export default toast;
