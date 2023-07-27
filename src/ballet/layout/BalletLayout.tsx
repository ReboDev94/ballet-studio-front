import { FC, SVGProps } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '@/common/components';

import { ReactComponent as ArrowDownIcon } from '@/common/components/assets/svg/icon-arrow-down.svg';
import { ReactComponent as DashBoardTmp } from '@/common/components/assets/svg/icon-dashboard-tmp.svg';

import { v4 as uuidv4 } from 'uuid';

interface Items {
  title: string;
  icon?: FC<SVGProps<SVGSVGElement>>;
}

const items: Items[] = [
  {
    title: 'Dashboard',
    icon: DashBoardTmp,
  },
  {
    title: 'Transactions',
  },
  {
    title: 'Card Center',
  },
  {
    title: 'Contacts',
    icon: DashBoardTmp,
  },
  {
    title: 'E-Wallet center',
  },
  {
    title: 'Reports',
  },
];

const BalletLayout = () => {
  return (
    <div className="h-screen">
      <Sidebar width={280}>
        <Sidebar.Header>
          <img
            src="/logos/ballet-studio-logo.svg"
            className="h-14"
            alt="logo"
          />
        </Sidebar.Header>
        <Sidebar.Content>
          <Sidebar.Category title="Menu" />
        </Sidebar.Content>

        {/* <div className="flex-1 py-4">
          <div id="menu-1-section">
            <h5 className="text-base-500 font-light ml-4">Menu</h5>
            <ul className="my-2 space-y-2">
              {items.map(({ title, icon: Icon }) => (
                <li key={uuidv4()}>
                  <div className="group cursor-pointer rounded-md py-3 px-4 flex text-base-400  hover:font-semibold hover:text-primary-800 hover:bg-primary-50">
                    <div className="w-6 my-auto">
                      {Icon && (
                        <Icon className="w-6 fill-base-400 group-hover:fill-primary-800" />
                      )}
                    </div>
                    <span className="px-4 my-auto flex-1 line-clamp-1">
                      {title}
                    </span>
                    <ArrowDownIcon className="w-5 fill-base-400 group-hover:fill-primary-800" />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div> */}

        <Sidebar.Footer>
          <span className="text-sm font-semibold">@Rebodev</span>
        </Sidebar.Footer>
      </Sidebar>
      {/* BalletLayout
      <Outlet /> */}
    </div>
  );
};

export default BalletLayout;
