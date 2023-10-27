import { useState } from 'react';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { Sidebar, Menu, Avatar, Dropdown, Button } from '@/common/components';
import {
  IconDashboard,
  IconGroup,
  IconSchool,
  IconStudents,
  IconTeam,
  IconUser,
  IconMenu,
} from '@/common/assets/svg';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { logoutThunk } from '@/store/modules/auth/thunks';
import { twMerge } from 'tailwind-merge';
import { useRoles } from '@/auth/hooks';

const MENU_DATA = [
  {
    title: 'Dashboard',
    url: '/dashboard',
    icon: IconDashboard,
    active: false,
  },
  {
    title: 'Escuela',
    url: '/profile/school',
    icon: IconSchool,
    active: false,
  },
  {
    title: 'Usuarios',
    url: '/user',
    icon: IconTeam,
    active: false,
  },
  {
    title: 'Estudiantes',
    url: '/student',
    icon: IconStudents,
    active: false,
  },
  {
    title: 'Grupos',
    url: '/group',
    icon: IconGroup,
    active: false,
  },
];

const BalletLayout = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();

  const { mainRole } = useRoles();
  const {
    user: { name, photo },
  } = useAppSelector(state => state.auth);

  const {
    school: { name: schoolName, logo },
  } = useAppSelector(state => state.school);

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const clickItem = (url: string) => {
    if (url !== pathname) setSidebarOpen(false);
    navigate(url);
  };

  const logout = () => {
    dispatch(logoutThunk());
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="flex h-full">
        <Sidebar
          width={280}
          className={twMerge(
            'md:translate-x-0 md:relative',
            !sidebarOpen ? '-translate-x-full' : 'translate-x-0',
          )}
        >
          <Sidebar.Header>
            <img src={logo ? logo : '/logo.png'} className="h-20" alt="logo" />
          </Sidebar.Header>
          <Sidebar.Content>
            <Sidebar.Category title="Menu" />
            <Menu>
              {MENU_DATA.map(({ title, icon, url }) => (
                <Menu.ItemSidebar
                  key={uuidv4()}
                  active={pathname === url}
                  onClick={() => clickItem(url)}
                  title={title}
                  icon={icon}
                />
              ))}
            </Menu>
          </Sidebar.Content>
          <Sidebar.Footer>
            <span className="text-sm font-semibold">
              @Turink {new Date().getFullYear()}
            </span>
          </Sidebar.Footer>
        </Sidebar>
        <Sidebar.BackDrop
          onClick={() => setSidebarOpen(false)}
          className={twMerge('md:hidden', !sidebarOpen && 'hidden')}
        />
      </div>

      <main className="flex-1 w-full px-6 py-8 overflow-x-hidden overflow-y-auto">
        <div className="mx-auto max-w-screen-2xl">
          <nav className="flex justify-between items-center mt-2 mb-4">
            <div className="flex gap-4">
              <button
                className="md:hidden block"
                onClick={() => setSidebarOpen(true)}
              >
                <IconMenu className="fill-black h-7 w-7" />
              </button>
              <h2 className="text-3xl text-base-600 font-semibold line-clamp-1">
                {schoolName}
              </h2>
            </div>
            <div className="flex gap-2">
              <Dropdown>
                <Dropdown.Toogle button={false}>
                  <Avatar
                    size="sm"
                    shape="circle"
                    className="cursor-pointer"
                    src={photo}
                  >
                    <IconUser className="fill-white h-8 w-8" />
                  </Avatar>
                </Dropdown.Toogle>
                <Dropdown.Menu
                  position="bottom"
                  className="w-[11rem] right-0 left-auto md:left-0 md:right-auto"
                >
                  <Dropdown.Item className="text-start px-1 py-2 font-semibold">
                    {name}
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Link to="/profile">
                    <Dropdown.Item>Mi Perfil</Dropdown.Item>
                  </Link>
                  <Dropdown.Item>
                    <Button onClick={logout} block>
                      Cerrar sesión
                    </Button>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <div className="hidden flex-col justify-center md:flex">
                <h5 className="font-semibold text-base-600">{name}</h5>
                <span className="text-xs">{mainRole}</span>
              </div>
            </div>
          </nav>
          <section className="py-2">
            <Outlet />
          </section>
        </div>
      </main>
    </div>
  );
};

export default BalletLayout;
