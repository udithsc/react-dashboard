import { createAction } from '@reduxjs/toolkit';

type ApiState = {
  url: string;
  method?: string;
  data?: any;
  onStart?: string;
  onSuccess?: string;
  onError?: string;
};

export const apiCallBegan = createAction<ApiState>('api/callBegan');
export const apiCallSuccess = createAction<{}>('api/callSuccess');
export const apiCallFailed = createAction<string>('api/callFailed');
