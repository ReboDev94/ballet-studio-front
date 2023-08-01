import DropdownComponente from './Dropdown';
import DropdownItem from './DropdownItem';
import DropdownToogle from './DropdownToogle';
import DropdownMenu from './DropdownMenu';
import DropdownDivider from './DropdownDivider';

import {
  IDropdown,
  IDropdownDivider,
  IDropdownItem,
  IDropdownMenu,
  IDropdownToogle,
} from './interfaces';

const Dropdown = Object.assign(DropdownComponente, {
  Toogle: DropdownToogle,
  Menu: DropdownMenu,
  Item: DropdownItem,
  Divider: DropdownDivider,
});

export type DropdownProps = IDropdown;
export type DropdownToogleProps = IDropdownToogle;
export type DropdownMenuProps = IDropdownMenu;
export type DropdownItemProps = IDropdownItem;
export type DropdownDividerProps = IDropdownDivider;
export default Dropdown;
