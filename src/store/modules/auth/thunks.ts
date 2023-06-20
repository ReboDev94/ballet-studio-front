import { loginService } from '@/auth/api/auth.service';
import { ILoginRequest } from '@/auth/interfaces';
import { addHeadersAuth, setTokenStorage } from '@/common/utils';
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

// export const validateSessionThunk = createAsyncThunk(
//   'auth/validateSession',
//   async ({}, { rejectWithValue, dispatch }) => {
//     try {
//       const {
//         data: { token, user },
//       } = await loginService(dataLogin);

//       // setTokenStorage(token);
//       // addHeadersAuth();
//       // dispatch(setDataLoginAction({ user }));
//       return user;
//     } catch (error) {
//       return rejectWithValue('unAuthorized');
//     }
//   },
// );
