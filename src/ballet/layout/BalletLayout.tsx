import { Sidebar, Menu } from '@/common/components';
import { ReactComponent as DashBoardTmp } from '@/common/components/assets/svg/icon-dashboard-tmp.svg';
import { Outlet } from 'react-router-dom';
import { Avatar } from '@/common/components';

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
            <Menu.ItemSidebar title="Dashboard" icon={DashBoardTmp} />
            <Menu.ItemSidebar title="Transactions" icon={DashBoardTmp} />
            <Menu.ItemSidebar title="Card Center" icon={DashBoardTmp} />
            <Menu.ItemSidebar title="Contacts" icon={DashBoardTmp} />
            <Menu.CollapseSidebar title="Item Collapse" icon={DashBoardTmp}>
              <Menu>
                <Menu.ItemSidebar title="Dashboard" icon={DashBoardTmp} />
                <Menu.ItemSidebar title="Transactions" icon={DashBoardTmp} />
                <Menu.ItemSidebar title="Card Center" icon={DashBoardTmp} />
                <Menu.ItemSidebar title="Contacts" icon={DashBoardTmp} />
              </Menu>
            </Menu.CollapseSidebar>
          </Menu>
        </Sidebar.Content>

        <Sidebar.Footer>
          <span className="text-sm font-semibold">@Rebodev</span>
        </Sidebar.Footer>
      </Sidebar>
      <main className="px-6 py-8 ml-[280px]">
        <div className="border flex justify-between">
          <h1 className="text-2xl text-base-800 font-semibold border">
            Bienvenido, Rafael De Jesus
          </h1>
          <div className="flex gap-2">
            <Avatar shape="squared" title='RJ'/>
            <Avatar size="sm" shape="squared" src="https://i.pravatar.cc" />
            <Avatar size="md" border src="https://i.pravatar.cc" />
            <Avatar
              size="lg"
              border
              bgVariant="primary"
              src="https://i.pravatar.cc"
            />
          </div>
        </div>
        <Outlet />
      </main>
    </div>
  );
};

export default BalletLayout;
