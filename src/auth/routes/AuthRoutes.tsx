import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import {
  ResetPasswordPage,
  LoginPage,
  ConfirmPasswordPage,
  ConfirmAccount,
  RegisterPage,
} from '@/auth/pages';
import { AuthLayout } from '@/auth/layout';
import { TITLE_DEFAULT } from '@/common/constants';

const AuthRoutes = () => {
  useEffect(() => {
    document.title = TITLE_DEFAULT;
  }, []);

  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/*" element={<Navigate to="/auth/login" />}></Route>
        <Route path="login" element={<LoginPage />}></Route>
        <Route path="register" element={<RegisterPage />}></Route>
        <Route path="reset/password" element={<ResetPasswordPage />}></Route>
        <Route
          path="reset/password/:token"
          element={<ConfirmPasswordPage />}
        ></Route>
        <Route
          path="confirm/account/:token"
          element={<ConfirmAccount />}
        ></Route>
      </Route>
    </Routes>
  );
};

export default AuthRoutes;
