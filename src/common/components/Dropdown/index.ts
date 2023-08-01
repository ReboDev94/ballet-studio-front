import DropdownComponente from './Dropdown';
import DropdownItem from './DropdownItem';
import DropdownToogle from './DropdownToogle';
import DropdownMenu from './DropdownMenu';

import { IDropdown } from './interfaces';

const Dropdown = Object.assign(DropdownComponente, {
  Toogle: DropdownToogle,
  Menu: DropdownMenu,
  Item: DropdownItem,
});

export type DropdownProps = IDropdown;
export default Dropdown;
