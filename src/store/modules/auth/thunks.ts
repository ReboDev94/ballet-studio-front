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

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (dataLogin: ILoginRequest, { rejectWithValue, dispatch }) => {
    try {
      const {
        data: { token, user },
      } = await loginService(dataLogin);
      setTokenStorage(token);
      addHeadersAuth();
      dispatch(setDataLoginAction({ user }));
      return user;
    } catch (error) {
      return rejectWithValue('Credenciales incorrectas');
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
      dispatch(setDataLoginAction({ user }));
      return user;
    } catch (error) {
      removeTokenStorage();
      removeHeadersAuth();
      return rejectWithValue('unauthorized');
    }
  },
);
