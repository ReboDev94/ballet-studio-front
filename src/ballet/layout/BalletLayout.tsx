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

        {/* <div className="flex gap-2">
          <Button variant="primary">Hola mundo</Button>
          <Button variant="outline-primary">Hola mundo</Button>
          <Button variant="base">Hola mundo</Button>
          <Button variant="outline-base">Hola mundo</Button>
        </div> */}
        <Outlet />
      </main>
    </div>
  );
};

export default BalletLayout;
