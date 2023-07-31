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
      <main className="ml-[280px] px-6 py-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl text-base-800 font-semibold">
            Bienvenido, Rafael De Jesus
          </h1>
          <div className="flex gap-2">
            <Avatar size="sm" shape="circle" className='cursor-pointer' src="https://i.pravatar.cc" />
          </div>
        </div>
        <Outlet />
      </main>
    </div>
  );
};

export default BalletLayout;
