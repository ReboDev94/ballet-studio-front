import { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import BalletRoutes from '@/ballet/routes/BalletRoutes';
import AuthRoutes from '@/auth/routes/AuthRoutes';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { getTokenStorage } from '@/common/utils';
import { getUserThunk } from '@/store/modules/auth/thunks';
import { LoadingPage } from '@/common/pages/LoadingPage';

export const AppRouter = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector(state => state.auth);
  const [loadingPage, setloadingPage] = useState(true);

  useEffect(() => {
    const getSession = async () => {
      if (getTokenStorage()) {
        await dispatch(getUserThunk());
      }
      setloadingPage(false);
    };
    getSession();
  }, []);

  if (loadingPage) return <LoadingPage />;

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
