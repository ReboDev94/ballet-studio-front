import DropdownComponente from './Dropdown';
import DropdownItem from './DropdownItem';
import DropdownToogle from './DropdownToogle';
import DropdownMenu from './DropdownMenu';
import DropdownDivider from './DropdownDivider';

import { IDropdown } from './interfaces';

const Dropdown = Object.assign(DropdownComponente, {
  Toogle: DropdownToogle,
  Menu: DropdownMenu,
  Item: DropdownItem,
  Divider:DropdownDivider
});

export type DropdownProps = IDropdown;
export default Dropdown;
