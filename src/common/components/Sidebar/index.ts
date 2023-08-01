import SidebarComponent from './Sidebar';
import Header from './SidebarHeader';
import Content from './SidebarContent';
import Category from './SidebarCategory';
import { ISidebar, IContent, ICategory, IHeader } from './interfaces';

const Sidebar = Object.assign(SidebarComponent, {
  Header,
  Content,
  Category,
  Footer: Header,
});

export type SidebarProps = ISidebar;
export type SidebarContentProps = IContent;
export type SidebarCategoryProps = ICategory;
export type SidebarHeaderProps = IHeader;
export default Sidebar;
