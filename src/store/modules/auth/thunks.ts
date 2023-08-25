import { getSchoolService, getUserService, loginService } from '@/auth/api';
import { ILoginRequest } from '@/auth/interfaces';
import {
  addHeadersAuth,
  removeHeadersAuth,
  setTokenStorage,
  removeTokenStorage,
} from '@/common/utils';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { resetStoreAuthAction, setDataLoginAction } from './actions';
import { schoolInitialData } from './initialState';
import { INCORRECT_CREDENTIALS, UNAUTHORIZED } from '@/auth/constants';

const getSchool = async (hasSchool = false) => {
  if (hasSchool) {
    const {
      data: { school },
    } = await getSchoolService();
    return school;
  }
  return schoolInitialData;
};

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (dataLogin: ILoginRequest, { rejectWithValue, dispatch }) => {
    try {
      const {
        data: { token, user },
      } = await loginService(dataLogin);
      const { hasSchool } = user;
      setTokenStorage(token);
      addHeadersAuth();
      /* obtener la escuela -solo si tiene */
      const school = await getSchool(hasSchool);
      dispatch(setDataLoginAction({ isAuthenticated: true, user, school }));
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
      /* obtener la escuela -solo si tiene */
      const { hasSchool } = user;
      const school = await getSchool(hasSchool);
      dispatch(setDataLoginAction({ isAuthenticated: true, user, school }));
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
    dispatch(resetStoreAuthAction());
    removeTokenStorage();
    removeHeadersAuth();
  },
);
