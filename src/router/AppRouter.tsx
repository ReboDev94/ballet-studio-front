import { Navigate, Route, Routes } from 'react-router-dom';
import BalletRoutes from '@/ballet/routes/BalletRoutes';
import AuthRoutes from '@/auth/routes/AuthRoutes';
import { useAppSelector } from '@/store/hooks';

export const AppRouter = () => {
  const { user } = useAppSelector(state => state.auth);

  return (
    <Routes>
      {user ? (
        <Route path="/*" element={<BalletRoutes />}></Route>
      ) : (
        <Route path="auth/*" element={<AuthRoutes />}></Route>
      )}
      <Route path="/*" element={<Navigate to="/auth/login" />}></Route>
    </Routes>
  );
};
