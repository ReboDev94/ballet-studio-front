import { useEffect } from 'react';
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
} from '@/common/assets/svg';
import { useAppSelector } from '@/store/hooks';
import { getRoles } from '@/auth/utils';

const BalletLayout = () => {
  const {
    user: { name, roles, photo },
    school: { name: schoolName, logo },
  } = useAppSelector(state => state.auth);

  useEffect(() => {
    const link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
    if (link && logo) link.href = logo;
    document.title = schoolName;
  }, []);

  return (
    <div className="h-screen w-full">
      <Sidebar width={280} className="">
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

      <main className="ml-[280px] px-6 py-8">
        <nav className="flex justify-between items-center mt-2 mb-4">
          <h2 className="text-3xl text-base-600 font-semibold">{schoolName}</h2>

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
              <Dropdown.Menu position="bottom" className="w-[11rem]">
                <Dropdown.Item className="text-center px-1 py-2 font-semibold">
                  {name}
                </Dropdown.Item>
                <Dropdown.Divider />
                <Link to="/profile">
                  <Dropdown.Item>Mi Perfil</Dropdown.Item>
                </Link>
                <Dropdown.Item>
                  <Button block>Cerrar sesión</Button>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <div className="flex flex-col justify-center">
              <h5 className="font-semibold text-base-600">{name}</h5>
              <span className="text-xs">{getRoles(roles, true)}</span>
            </div>
          </div>
        </nav>

        <section className="py-2">
          <Outlet />
        </section>
        {/* <Table>
          <Table.Head>
            <>Nombre</>
            <>Email</>
            <>Telefono</>
            <>Activo</>
            <>Roles</>
          </Table.Head>
          <Table.Body divide>
            {users.map(({ name, email, phone, active, roles }) => (
              <Table.Row hover key={uuidv4()}>
                <>{name}</>
                <>{email}</>
                <>{phone}</>
                <>{active ? 'Active' : 'Inactive'}</>
                <>{JSON.stringify(roles)}</>
              </Table.Row>
            ))}
          </Table.Body>
        </Table> */}
      </main>
    </div>
  );
};

export default BalletLayout;
