import { Navigate, Route, Routes } from 'react-router-dom';
import BalletRoutes from '@/ballet/routes/BalletRoutes';
import AuthRoutes from '@/auth/routes/AuthRoutes';

export const AppRouter = () => {
  const auth = false;
  return (
    <Routes>
      {auth ? (
        <Route path="/*" element={<BalletRoutes />}></Route>
      ) : (
        <Route path="auth/*" element={<AuthRoutes />}></Route>
      )}
      <Route path="/*" element={<Navigate to="/auth/login" />}></Route>
    </Routes>
  );
};
