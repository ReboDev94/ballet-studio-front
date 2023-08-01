import SidebarComponent from './Sidebar';
import Header from './SidebarHeader';
import Content from './SidebarContent';
import Category from './SidebarCategory';
import { ISidebar } from './interfaces';

const Sidebar = Object.assign(SidebarComponent, {
  Header,
  Content,
  Category,
  Footer: Header,
});

export type SidebarProps = ISidebar;
export default Sidebar;
