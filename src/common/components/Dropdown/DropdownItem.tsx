import React from 'react';
import { twMerge } from 'tailwind-merge';
import {
  DEFAULT_DROPDOWN_LI_CLASSES,
  DISABLED_DROPDOWN_LI_CLASSES,
} from './styles';
import { IDropdownItem } from './interfaces';

const DropdownItem: React.FC<IDropdownItem> = ({
  children,
  className,
  onClick,
  disabled = false,
}) => {
  return (
    <li
      role="menuitem"
      tabIndex={0}
      onClick={() => !disabled && onClick && onClick()}
      className={twMerge(
        DEFAULT_DROPDOWN_LI_CLASSES,
        disabled && DISABLED_DROPDOWN_LI_CLASSES,
        className,
      )}
    >
      {children}
    </li>
  );
};

export default DropdownItem;
