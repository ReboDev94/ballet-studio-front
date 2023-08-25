import { PayloadAction } from '@reduxjs/toolkit';
import { AuthState, schoolInitialData, userInitialData } from './initialState';

const reducers = {
  setDataLogin: (state: AuthState, { payload }: PayloadAction<AuthState>) => {
    state.user = payload.user;
    state.school = payload.school;
    state.isAuthenticated = payload.isAuthenticated;
  },
  resetStoreAuth: (state: AuthState) => {
    state.isAuthenticated = false;
    state.user = userInitialData;
    state.school = schoolInitialData;
  },
};

export default reducers;
