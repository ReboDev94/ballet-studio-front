import { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { BalletRoutes } from '@/ballet/routes';
import { AuthRoutes } from '@/auth/routes';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { getTokenStorage } from '@/common/utils';
import { getUserThunk } from '@/store/modules/auth/thunks';
import { LoadingPage } from '@/common/pages';
import { Toaster } from 'react-hot-toast';
import { DEFAULT_TOAST_OPTIONS } from '@/common/constants';

const AppRouter = () => {
  const dispatch = useAppDispatch();
  const { isAuthenticated } = useAppSelector(state => state.auth);
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
    <>
      <Routes>
        {isAuthenticated ? (
          <Route path="/*" element={<BalletRoutes />}></Route>
        ) : (
          <Route path="auth/*" element={<AuthRoutes />}></Route>
        )}
        <Route path="/*" element={<Navigate to="/auth/login" />}></Route>
      </Routes>
      <Toaster {...DEFAULT_TOAST_OPTIONS} />
    </>
  );
};

export default AppRouter;
