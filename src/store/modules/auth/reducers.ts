import { PayloadAction } from '@reduxjs/toolkit';
import { AuthState } from './initialState';

const reducers = {
  setUser: (state: AuthState, payload: PayloadAction<AuthState['user']>) => {
    console.log({ state, payload });
  },
};

export default reducers;
