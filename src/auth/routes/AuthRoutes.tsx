import { Routes, Route, Navigate } from 'react-router-dom';
import {
  ResetPasswordPage,
  LoginPage,
  ConfirmPasswordPage,
  RegisterPage,
} from '../pages';
import AuthLayout from '../layout/AuthLayout';

const AuthRoutes = () => {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/*" element={<Navigate to="/auth/login" />}></Route>
        <Route path="login" element={<LoginPage />}></Route>
        <Route path="reset-password" element={<ResetPasswordPage />}></Route>
        <Route
          path="confirm-password"
          element={<ConfirmPasswordPage />}
        ></Route>
        <Route path="register" element={<RegisterPage />}></Route>
      </Route>
    </Routes>
  );
};

export default AuthRoutes;
