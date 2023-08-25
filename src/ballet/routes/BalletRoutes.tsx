import { Navigate, Route, Routes } from 'react-router-dom';
import {
  DashboardPage,
  ProfileSchoolPage,
  ProfilePage,
  NewUserPage,
  ViewUsersPage,
  ViewGroupsPage,
  NewGroupPage,
} from '@/ballet/pages';
import { BalletLayout } from '@/ballet/layout';
import { GuardHasSchool } from '@/ballet/guards';
import { useEffect } from 'react';
import { useAppSelector } from '@/store/hooks';
import { TITLE_DEFAULT } from '@/auth/constants';

const BalletRoutes = () => {
  const {
    school: { name: schoolName, logo },
  } = useAppSelector(state => state.auth);

  useEffect(() => {
    const link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
    if (link && logo) link.href = logo;
    document.title = schoolName ? schoolName : TITLE_DEFAULT;
  }, []);

  return (
    <Routes>
      <Route path="/*" element={<Navigate to={'/dashboard'} />}></Route>
      <Route element={<BalletLayout />}>
        {/* see without school */}
        <Route path="/profile" element={<ProfilePage />}></Route>
        <Route path="/profile/school" element={<ProfileSchoolPage />}></Route>

        <Route element={<GuardHasSchool />}>
          <Route path="/dashboard" element={<DashboardPage />}></Route>
          {/* Users */}
          <Route path="/users" element={<ViewUsersPage />}></Route>
          <Route path="/users/new" element={<NewUserPage />}></Route>

          {/* group */}
          <Route path="/groups" element={<ViewGroupsPage />}></Route>
          <Route path="/groups/new" element={<NewGroupPage />}></Route>
        </Route>
      </Route>
    </Routes>
  );
};

export default BalletRoutes;
