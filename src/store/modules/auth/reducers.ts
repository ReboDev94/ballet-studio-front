import { PayloadAction } from '@reduxjs/toolkit';
import { AuthState } from './initialState';

const reducers = {
  setDataLogin: (state: AuthState, { payload }: PayloadAction<AuthState>) => {
    state.user = payload.user;
    state.school = payload.school;
    state.isAuthenticated = payload.isAuthenticated;
  },
};

export default reducers;
