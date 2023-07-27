import SidebarComponent from './Sidebar';
import Header from './Header';
import Content from './Content';
import Category from './Category';
import { ISidebar } from './interfaces';

const Sidebar = Object.assign(SidebarComponent, {
  Header,
  Content,
  Category,
  Footer: Header,
});

export type SidebarProps = ISidebar;
export default Sidebar;
