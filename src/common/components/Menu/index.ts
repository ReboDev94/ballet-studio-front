import MenuComponent from './Menu';
import ItemSidebar from './ItemSidebar';
import CollapseSidebar from './CollapseSidebar';
import { IMenu, IItemSidebar, ICollapseSidebar } from './interfaces';

const Menu = Object.assign(MenuComponent, {
  ItemSidebar,
  CollapseSidebar,
});

export default Menu;
export type { IMenu, IItemSidebar, ICollapseSidebar };
