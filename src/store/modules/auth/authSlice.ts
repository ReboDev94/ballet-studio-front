import { createSlice } from '@reduxjs/toolkit';
import reducers from './reducers';
import initialState from './initialState';

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers,
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
