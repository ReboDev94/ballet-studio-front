import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import AuthLayout from '../layout/AuthLayout';

const AuthRoutes = () => {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="login" element={<LoginPage />}></Route>
        <Route path="/*" element={<Navigate to="auth/login" />}></Route>
      </Route>
    </Routes>
  );
};

export default AuthRoutes;
