import { useAppSelector } from '@/store/hooks';
import { Navigate, Outlet } from 'react-router-dom';

export const GuardHasSchool = () => {
  const {
    user: { hasSchool },
  } = useAppSelector(state => state.auth);

  if (!hasSchool) return <Navigate to="/profile/school" />;
  return <Outlet />;
};
