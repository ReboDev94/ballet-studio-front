import MenuComponent from './Menu';
import ItemSidebar from './ItemSidebar';
import CollapseSidebar from './CollapseSidebar';
import { IMenu, IItemSidebar, ICollapseSidebar } from './interfaces';

const Menu = Object.assign(MenuComponent, {
  ItemSidebar,
  CollapseSidebar,
});

export type CollapseProps = ICollapseSidebar;
export type ItemProps = IItemSidebar;
export type MenuProps = IMenu;
export default Menu;
