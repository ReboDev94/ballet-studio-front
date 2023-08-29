import { configureStore } from '@reduxjs/toolkit';
import authSlice from './modules/auth/authSlice';
import schoolSlice from './modules/school/authSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    school: schoolSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
