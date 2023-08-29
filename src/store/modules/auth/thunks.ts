import { getUserService, loginService } from '@/auth/api';
import { ILoginRequest } from '@/auth/interfaces';
import {
  addHeadersAuth,
  removeHeadersAuth,
  setTokenStorage,
  removeTokenStorage,
} from '@/common/utils';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setDataLoginAction } from './actions';
import { INCORRECT_CREDENTIALS, UNAUTHORIZED } from '@/auth/constants';
import { userInitialData } from './initialState';
import { getSchoolThunk } from '../school/thunks';

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (dataLogin: ILoginRequest, { rejectWithValue, dispatch }) => {
    try {
      const {
        data: { token, user },
      } = await loginService(dataLogin);
      setTokenStorage(token);
      addHeadersAuth();
      dispatch(setDataLoginAction({ isAuthenticated: true, user }));
      await dispatch(getSchoolThunk()).unwrap();
      return user;
    } catch (error) {
      return rejectWithValue(INCORRECT_CREDENTIALS);
    }
  },
);

export const getUserThunk = createAsyncThunk(
  'auth/getUser',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const {
        data: { user },
      } = await getUserService();
      dispatch(setDataLoginAction({ isAuthenticated: true, user }));
      await dispatch(getSchoolThunk()).unwrap();
      return user;
    } catch (error) {
      removeTokenStorage();
      removeHeadersAuth();
      return rejectWithValue(UNAUTHORIZED);
    }
  },
);

export const logoutThunk = createAsyncThunk(
  'auth/logout',
  (_, { dispatch }) => {
    dispatch(
      setDataLoginAction({ isAuthenticated: false, user: userInitialData }),
    );
    removeTokenStorage();
    removeHeadersAuth();
  },
);
