import SidebarComponent from './Sidebar';
import Header from './SidebarHeader';
import Content from './SidebarContent';
import Category from './SidebarCategory';
import BackDrop from './SidebarBackDrop';
import {
  ISidebar,
  IContent,
  ICategory,
  IHeader,
  IBackDrop,
} from './interfaces';

const Sidebar = Object.assign(SidebarComponent, {
  Header,
  Content,
  Category,
  Footer: Header,
  BackDrop: BackDrop,
});

export default Sidebar;
export type { ISidebar, IContent, ICategory, IHeader, IBackDrop };
