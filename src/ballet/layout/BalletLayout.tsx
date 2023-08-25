import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Sidebar, Menu, Avatar, Dropdown, Button } from '@/common/components';
import {
  IconDashboard,
  IconGroup,
  IconPersonAdd,
  IconSchool,
  IconStudents,
  IconTeam,
  IconUser,
  IconMenu,
} from '@/common/assets/svg';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { getRoles } from '@/auth/utils';
import { logoutThunk } from '@/store/modules/auth/thunks';
import { twMerge } from 'tailwind-merge';

const BalletLayout = () => {
  const dispatch = useAppDispatch();
  const {
    user: { name, roles, photo },
    school: { name: schoolName, logo },
  } = useAppSelector(state => state.auth);

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const logout = () => {
    dispatch(logoutThunk());
  };

  return (
    <div className="min-h-screen  flex flex-row">
      <Sidebar
        width={280}
        className={twMerge(
          'md:translate-x-0',
          !sidebarOpen ? '-translate-x-full' : 'translate-x-0',
        )}
      >
        <Sidebar.Header>
          <img src={logo ? logo : '/logo.png'} className="h-20" alt="logo" />
        </Sidebar.Header>
        <Sidebar.Content>
          <Sidebar.Category title="Menu" />
          <Menu>
            <Link to="/dashboard">
              <Menu.ItemSidebar title="Dashboard" icon={IconDashboard} />
            </Link>
            <Link to="/profile/school">
              <Menu.ItemSidebar title="Escuela" icon={IconSchool} />
            </Link>
            <Menu.CollapseSidebar title="Estudiantes" icon={IconStudents}>
              <Menu>
                <Link to="/users/new">
                  <Menu.ItemSidebar title="Nuevo" icon={IconPersonAdd} />
                </Link>
                <Link to="/users">
                  <Menu.ItemSidebar title="Visualizar" icon={IconTeam} />
                </Link>
              </Menu>
            </Menu.CollapseSidebar>

            <Menu.CollapseSidebar title="Grupos" icon={IconGroup}>
              <Menu>
                <Link to="/groups/new">
                  <Menu.ItemSidebar title="Nuevo" icon={IconPersonAdd} />
                </Link>
                <Link to="/groups">
                  <Menu.ItemSidebar title="Visualizar" icon={IconTeam} />
                </Link>
              </Menu>
            </Menu.CollapseSidebar>
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

      <main className="md:ml-[280px] w-full px-6 py-8">
        <div className="mx-auto max-w-screen-2xl">
          <nav className="flex justify-between items-center mt-2 mb-4">
            <div className="flex gap-4">
              <button
                className="md:hidden block"
                onClick={() => setSidebarOpen(true)}
              >
                <IconMenu className="fill-black h-7 w-7" />
              </button>
              <h2 className="text-3xl text-base-600 font-semibold">
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
                <span className="text-xs">{getRoles(roles, true)}</span>
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
