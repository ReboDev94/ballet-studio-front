import React from 'react';
import { twMerge } from 'tailwind-merge';
import { DEFAULT_DROPDOWN_LI_CLASSES } from './styles';
import { IDropdownItem } from './interfaces';

const DropdownItem: React.FC<IDropdownItem> = ({ children, className }) => {
  return (
    <li
      role="menuitem"
      className={twMerge(DEFAULT_DROPDOWN_LI_CLASSES, className)}
    >
      {children}
    </li>
  );
};

export default DropdownItem;
