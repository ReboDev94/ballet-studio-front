import { PayloadAction } from '@reduxjs/toolkit';
import { AuthState } from './initialState';

const reducers = {
  setDataLogin: (state: AuthState, { payload }: PayloadAction<AuthState>) => {
    state.user = payload.user;
    state.isAuthenticated = payload.isAuthenticated;
  },
  setHasSchool: (state: AuthState, { payload }: PayloadAction<boolean>) => {
    state.user.hasSchool = payload;
  },
};

export default reducers;
