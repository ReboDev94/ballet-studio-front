import { Navigate, Route, Routes } from 'react-router-dom';
import { DashboardPage } from '../pages';
import BalletLayout from '../layout/BalletLayout';

const BalletRoutes = () => {
  return (
    <Routes>
      <Route path="/*" element={<Navigate to={'/dashboard'} />}></Route>
      <Route element={<BalletLayout />}>
        <Route path="/dashboard" element={<DashboardPage />}></Route>
      </Route>
    </Routes>
  );
};

export default BalletRoutes;
