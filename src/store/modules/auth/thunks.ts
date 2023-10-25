/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  getAllUsersService,
  getUserService,
  loginService,
  sendEmailResetPasswordService,
  updatePasswordService,
  updateProfileService,
} from '@/auth/api';
import {
  IGetAllUsersRequest,
  ILoginRequest,
  IResetPassword,
  IUserForm,
} from '@/auth/interfaces';
import {
  addHeadersAuth,
  removeHeadersAuth,
  setTokenStorage,
  removeTokenStorage,
} from '@/common/utils';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setDataLoginAction, updateProfileUserAction } from './actions';
import {
  ERROR_GET_ALL_USERS,
  FAILED_RESET_PASSWORD,
  FAILED_SEND_EMAIL,
  INCORRECT_CREDENTIALS,
  SUCCESS_RESET_PASSWORD,
  SUCCESS_SEND_EMAIL,
  UNAUTHORIZED,
} from '@/auth/constants';
import { userInitialData } from './initialState';
import { getSchoolThunk } from '../school/thunks';
import { AxiosError } from 'axios';
import { ICommonError } from '@/common/interfaces';

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

export const updateProfileThunk = createAsyncThunk(
  'auth/updateProfile',
  async (data: IUserForm, { rejectWithValue, dispatch }) => {
    try {
      const {
        data: {
          user: { name, photo, email, phone },
        },
      } = await updateProfileService(data);

      dispatch(updateProfileUserAction({ name, photo, email, phone }));

      return { name, photo, email, phone };
    } catch (err: any) {
      const error: AxiosError<ICommonError> = err;
      const errors =
        error.response?.data.errors || error.response?.data.message;
      return rejectWithValue(errors);
    }
  },
);

export const getAllUsersThunk = createAsyncThunk(
  'auth/getAllUsers',
  async (data: IGetAllUsersRequest, { rejectWithValue }) => {
    try {
      const {
        data: {
          users: { data: users, meta },
        },
      } = await getAllUsersService(data);

      return { users, meta };
    } catch (err: any) {
      const error: AxiosError<ICommonError> = err;
      return rejectWithValue(
        error.response?.data.message || ERROR_GET_ALL_USERS,
      );
    }
  },
);

export const sendEmailResetPasswordThunk = createAsyncThunk(
  'auth/sendEmailResetPassword',
  async (email: string, { rejectWithValue }) => {
    try {
      await sendEmailResetPasswordService(email);
      return SUCCESS_SEND_EMAIL;
    } catch (err: any) {
      const error: AxiosError<ICommonError> = err;
      return rejectWithValue(error.response?.data.message || FAILED_SEND_EMAIL);
    }
  },
);

export const updatePasswordThunk = createAsyncThunk(
  'auth/updatePassword',
  async (data: IResetPassword, { rejectWithValue }) => {
    try {
      await updatePasswordService(data);
      return SUCCESS_RESET_PASSWORD;
    } catch (err: any) {
      const error: AxiosError<ICommonError> = err;
      return rejectWithValue(
        error.response?.data.message || FAILED_RESET_PASSWORD,
      );
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
