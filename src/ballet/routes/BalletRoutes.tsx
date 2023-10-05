import { Navigate, Route, Routes } from 'react-router-dom';
import {
  DashboardPage,
  ProfileSchoolPage,
  ProfilePage,
  NewUserPage,
  ViewUsersPage,
  ViewGroupsPage,
  NewGroupPage,
  NewStudentPage,
  ViewStudentsPage,
} from '@/ballet/pages';
import { BalletLayout } from '@/ballet/layout';
import { GuardHasSchool } from '@/ballet/guards';
import { useEffect } from 'react';
import { useAppSelector } from '@/store/hooks';
import { TITLE_DEFAULT } from '@/common/constants';
import { useRoles } from '@/auth/hooks';

const BalletRoutes = () => {
  const { isAdmin } = useRoles();
  const {
    school: { name: schoolName, logo },
  } = useAppSelector(state => state.school);

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
          {isAdmin && (
            <>
              <Route path="/user" element={<ViewUsersPage />}></Route>
              <Route path="/user/new" element={<NewUserPage />}></Route>
            </>
          )}

          {/* students */}
          <Route path="/student" element={<ViewStudentsPage />}></Route>
          <Route path="/student/new" element={<NewStudentPage />}></Route>

          {/* group */}
          <Route path="/group" element={<ViewGroupsPage />}></Route>
          <Route path="/group/new" element={<NewGroupPage />}></Route>
        </Route>
      </Route>
    </Routes>
  );
};

export default BalletRoutes;
