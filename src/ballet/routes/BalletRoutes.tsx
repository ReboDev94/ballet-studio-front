import { Navigate, Route, Routes } from 'react-router-dom';
import {
  DashboardPage,
  ProfileSchoolPage,
  ProfilePage,
  NewUserPage,
  ViewUsersPage,
  ViewGroupsPage,
  NewGroupPage,
} from '../pages';
import BalletLayout from '../layout/BalletLayout';

const BalletRoutes = () => {
  return (
    <Routes>
      <Route path="/*" element={<Navigate to={'/dashboard'} />}></Route>
      <Route element={<BalletLayout />}>
        <Route path="/dashboard" element={<DashboardPage />}></Route>
        <Route path="/profile" element={<ProfilePage />}></Route>
        <Route path="/profile/school" element={<ProfileSchoolPage />}></Route>

        {/* Users */}
        <Route path="/users" element={<ViewUsersPage />}></Route>
        <Route path="/users/new" element={<NewUserPage />}></Route>

        {/* group */}

        <Route path="/groups" element={<ViewGroupsPage />}></Route>
        <Route path="/groups/new" element={<NewGroupPage />}></Route>
      </Route>
    </Routes>
  );
};

export default BalletRoutes;
