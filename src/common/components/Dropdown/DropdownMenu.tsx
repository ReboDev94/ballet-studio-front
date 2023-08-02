import React from 'react';
import { IDropdownMenu } from './interfaces';
import { twMerge } from 'tailwind-merge';
import {
  ALIGN_LATERAL_TYPE,
  ALIGN_VERTICAL_TYPE,
  DEFAULT_DROPDOWN_LIST_CLASSES,
  POSITION_TYPE,
} from './styles';

const DropdownMenu: React.FC<IDropdownMenu> = ({
  position = 'bottom',
  align = 'start',
  className,
  ...props
}) => {
  return (
    <ul
      {...props}
      role="menu"
      tabIndex={0}
      className={twMerge(
        DEFAULT_DROPDOWN_LIST_CLASSES,
        POSITION_TYPE[position],
        ['top', 'bottom'].includes(position)
          ? ALIGN_VERTICAL_TYPE[align]
          : ALIGN_LATERAL_TYPE[align],
        className,
      )}
    />
  );
};

export default DropdownMenu;
