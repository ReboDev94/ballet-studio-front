import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import {
  ResetPasswordPage,
  LoginPage,
  ConfirmPasswordPage,
  RegisterPage,
} from '@/auth/pages';
import { AuthLayout } from '@/auth/layout';
import { TITLE_IS_NOT_AUTHENTICATES } from '@/auth/constants';

const AuthRoutes = () => {
  useEffect(() => {
    document.title = TITLE_IS_NOT_AUTHENTICATES;
  }, []);

  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/*" element={<Navigate to="/auth/login" />}></Route>
        <Route path="login" element={<LoginPage />}></Route>
        <Route path="register" element={<RegisterPage />}></Route>
        <Route path="reset-password" element={<ResetPasswordPage />}></Route>
        <Route
          path="confirm-password"
          element={<ConfirmPasswordPage />}
        ></Route>
      </Route>
    </Routes>
  );
};

export default AuthRoutes;
