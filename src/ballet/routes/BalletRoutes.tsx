import { Navigate, Route, Routes } from 'react-router-dom';
import { DashboardPage, ProfileSchoolPage } from '../pages';
import BalletLayout from '../layout/BalletLayout';

const BalletRoutes = () => {
  return (
    <Routes>
      <Route path="/*" element={<Navigate to={'/dashboard'} />}></Route>
      <Route element={<BalletLayout />}>
        <Route path="/dashboard" element={<DashboardPage />}></Route>
        <Route path="/profile/school" element={<ProfileSchoolPage />}></Route>
      </Route>
    </Routes>
  );
};

export default BalletRoutes;
