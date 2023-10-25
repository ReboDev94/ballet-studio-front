import { PayloadAction } from '@reduxjs/toolkit';
import { UserUpdate } from '@/auth/interfaces';
import { AuthState } from './initialState';

const reducers = {
  setDataLogin: (state: AuthState, { payload }: PayloadAction<AuthState>) => {
    state.user = payload.user;
    state.isAuthenticated = payload.isAuthenticated;
  },
  setHasSchool: (state: AuthState, { payload }: PayloadAction<boolean>) => {
    state.user.hasSchool = payload;
  },
  updateProfileUser: (
    state: AuthState,
    { payload }: PayloadAction<UserUpdate>,
  ) => {
    state.user = { ...state.user, ...payload };
  },
};

export default reducers;
