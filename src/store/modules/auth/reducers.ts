import { PayloadAction } from '@reduxjs/toolkit';
import { AuthState } from './initialState';

const reducers = {
  setUser: (state: AuthState, payload: PayloadAction<AuthState['user']>) => {},
};

export default reducers;
