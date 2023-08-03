import { Outlet, Link } from 'react-router-dom';
import { Sidebar, Menu, Avatar, Dropdown, Button } from '@/common/components';
import { ReactComponent as IconPersonAdd } from '@/common/assets/svg/icon-person-add.svg';
import { ReactComponent as IconDashboard } from '@/common/assets/svg/icon-dashboard.svg';
import { ReactComponent as IconSchool } from '@/common/assets/svg/icon-school.svg';
import { ReactComponent as IconStudents } from '@/common/assets/svg/icon-students.svg';
import { ReactComponent as IconGroup } from '@/common/assets/svg/icon-group.svg';
import { ReactComponent as IconTeam } from '@/common/assets/svg/icon-team.svg';
import { ReactComponent as IconArchive } from '@/common/assets/svg/icon-archive.svg';
import { ReactComponent as IconCheck } from '@/common/assets/svg/icon-check.svg';

const BalletLayout = () => {
  return (
    <div className="h-screen w-full">
      <Sidebar width={280} className="">
        <Sidebar.Header>
          <img
            src="/logos/ballet-studio-logo.svg"
            className="h-14"
            alt="logo"
          />
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
                <Menu.ItemSidebar title="Nuevo" icon={IconPersonAdd} />
                <Menu.ItemSidebar title="Visualizar" icon={IconTeam} />
              </Menu>
            </Menu.CollapseSidebar>

            <Menu.CollapseSidebar title="Grupos" icon={IconGroup}>
              <Menu>
                <Menu.ItemSidebar title="Nuevo" icon={IconPersonAdd} />
                <Menu.ItemSidebar title="Visualizar" icon={IconTeam} />
              </Menu>
            </Menu.CollapseSidebar>
            <Menu.ItemSidebar title="Pase de Lista" icon={IconCheck} />
            <Menu.ItemSidebar title="Inventario" icon={IconArchive} />
          </Menu>
        </Sidebar.Content>

        <Sidebar.Footer>
          <span className="text-sm font-semibold">
            @Rebodev {new Date().getFullYear()}
          </span>
        </Sidebar.Footer>
      </Sidebar>

      <main className="ml-[280px] px-6 py-8">
        <nav className="flex justify-between items-center mt-2 mb-4">
          <h2 className="text-3xl text-base-600 font-semibold">
            Ballet Studio
          </h2>

          <div className="flex gap-2">
            <Dropdown>
              <Dropdown.Toogle button={false}>
                <Avatar
                  size="sm"
                  shape="circle"
                  className="cursor-pointer"
                  src="https://i.pravatar.cc"
                />
              </Dropdown.Toogle>
              <Dropdown.Menu position="bottom" className="w-[11rem]">
                <Dropdown.Item className="text-center px-1 py-2 font-semibold">
                  Rafael De Jesus Rebolledo Hernandez
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
              <h5 className="font-semibold text-base-600">Rafael De Jesus</h5>
              <span className="text-xs">Administrador</span>
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
