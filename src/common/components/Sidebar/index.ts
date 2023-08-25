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

export type SidebarProps = ISidebar;
export type SidebarContentProps = IContent;
export type SidebarCategoryProps = ICategory;
export type SidebarHeaderProps = IHeader;
export type SidebarBackDrop = IBackDrop;
export default Sidebar;
