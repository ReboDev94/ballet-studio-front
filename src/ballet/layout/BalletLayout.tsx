import { Sidebar, Menu, Avatar, Dropdown, Button } from '@/common/components';
import { ReactComponent as DashBoardTmp } from '@/common/components/assets/svg/icon-dashboard-tmp.svg';
import { ReactComponent as IconPersonAdd } from '@/common/assets/svg/icon-person-add.svg';
import { ReactComponent as IconSchool } from '@/common/assets/svg/icon-school.svg';
import { ReactComponent as IconStudents } from '@/common/assets/svg/icon-students.svg';
import { ReactComponent as IconGroup } from '@/common/assets/svg/icon-group.svg';
import { ReactComponent as IconTeam } from '@/common/assets/svg/icon-team.svg';
import { ReactComponent as IconArchive } from '@/common/assets/svg/icon-archive.svg';
import { ReactComponent as IconCheck } from '@/common/assets/svg/icon-check.svg';

import { Outlet } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const users = [
  {
    name: 'Raye',
    email: 'rduiguid0@ow.ly',
    phone: '785-902-4184',
    active: true,
    roles: [{ id: 2, slug: 'teacher', name: 'Profesor' }],
  },
  {
    name: 'Mirelle',
    email: 'mhackforth1@sina.com.cn',
    phone: '300-892-0254',
    active: false,
    roles: [{ id: 2, slug: 'teacher', name: 'Profesor' }],
  },
  {
    name: 'Rubi',
    email: 'rgarci2@smh.com.au',
    phone: '158-645-8654',
    active: true,
    roles: [{ id: 2, slug: 'teacher', name: 'Profesor' }],
  },
  {
    name: 'Maure',
    email: 'mguard3@artisteer.com',
    phone: '635-368-1969',
    active: true,
    roles: [{ id: 2, slug: 'teacher', name: 'Profesor' }],
  },
  {
    name: 'Suzann',
    email: 'swillmot4@hud.gov',
    phone: '443-401-6025',
    active: false,
    roles: [{ id: 2, slug: 'teacher', name: 'Profesor' }],
  },
  {
    name: 'Nikoletta',
    email: 'ncapener5@alexa.com',
    phone: '475-288-1863',
    active: false,
    roles: [{ id: 2, slug: 'teacher', name: 'Profesor' }],
  },
  {
    name: 'Rhodia',
    email: 'rostridge6@ihg.com',
    phone: '743-455-8012',
    active: true,
    roles: [{ id: 2, slug: 'teacher', name: 'Profesor' }],
  },
  {
    name: 'Eada',
    email: 'eoverel7@google.it',
    phone: '200-798-2586',
    active: false,
    roles: [{ id: 2, slug: 'teacher', name: 'Profesor' }],
  },
  {
    name: 'Jobey',
    email: 'jfisbey8@forbes.com',
    phone: '268-565-1785',
    active: false,
    roles: [{ id: 2, slug: 'teacher', name: 'Profesor' }],
  },
  {
    name: 'Daryl',
    email: 'dibell9@is.gd',
    phone: '291-449-8222',
    active: true,
    roles: [{ id: 2, slug: 'teacher', name: 'Profesor' }],
  },
];

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
            <Menu.ItemSidebar title="Escuela" icon={IconSchool} />
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
        <div className="flex justify-between items-center mt-2 mb-4">
          <h1 className="text-2xl text-base-800 font-semibold">
            Bienvenido, Rafael De Jesus
          </h1>

          <Dropdown>
            <Dropdown.Toogle button={false}>
              <Avatar
                size="sm"
                shape="circle"
                className="cursor-pointer"
                src="https://i.pravatar.cc"
              />
            </Dropdown.Toogle>
            <Dropdown.Menu position="bottom" align="end" className="w-[11rem]">
              <Dropdown.Item className="text-center px-1 py-2 font-semibold">
                Rafael De Jesus Rebolledo Hernandez
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>Mi Perfil</Dropdown.Item>
              {/* <Dropdown.Divider /> */}
              <Dropdown.Item>
                <Button block>Cerrar sesión</Button>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        {/*
        hover items
        divider items

         */}
        <div className="relative overflow-x-auto border border-base-100 bg-white rounded-xl shadow-sm">
          <table className="w-full text-sm text-left text-base-400">
            <thead className="text-xs uppercase border-b">
              <tr>
                <th scope="rol" className="px-6 py-5">
                  Nombre
                </th>
                <th scope="rol" className="px-6 py-5">
                  Email
                </th>
                <th scope="rol" className="px-6 py-5">
                  Telefono
                </th>
                <th scope="rol" className="px-6 py-5">
                  Activo
                </th>
                <th scope="rol" className="px-6 py-5">
                  Roles
                </th>
              </tr>
            </thead>
            {/* className="divide-y divide-base-100" */}
            <tbody>
              {users.map(({ name, email, phone, active, roles }) => (
                <tr className="hover:bg-base-50" key={uuidv4()}>
                  <td className="px-6 py-4">{name}</td>
                  <td className="px-6 py-4">{email}</td>
                  <td className="px-6 py-4">{phone}</td>
                  <td className="px-6 py-4">
                    {active ? 'Activo' : 'Inactivo'}
                  </td>
                  <td className="px-6 py-4">{JSON.stringify(roles)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* <Outlet /> */}
      </main>
    </div>
  );
};

export default BalletLayout;
