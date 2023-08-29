import { createSlice } from '@reduxjs/toolkit';
import reducers from './reducers';
import initialState from './initialState';

export const schoolSlice = createSlice({
  name: 'school',
  initialState,
  reducers,
});

export const schoolActions = schoolSlice.actions;
export default schoolSlice.reducer;
