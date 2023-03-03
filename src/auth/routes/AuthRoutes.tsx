import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />}></Route>
      <Route path="/*" element={<Navigate to="auth/login" />}></Route>
    </Routes>
  );
};

export default AuthRoutes;
