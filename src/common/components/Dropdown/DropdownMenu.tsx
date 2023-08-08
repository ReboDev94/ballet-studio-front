import React from 'react';
import { twMerge } from 'tailwind-merge';
import { IDropdownMenu } from './interfaces';
import {
  ALIGN_LATERAL_TYPE,
  ALIGN_VERTICAL_TYPE,
  DEFAULT_DROPDOWN_LIST_CLASSES,
  POSITION_TYPE,
} from './styles';
import { ALING_START, POSITION_BOTTOM, POSITION_TOP } from '../constants';

const DropdownMenu: React.FC<IDropdownMenu> = ({
  position = POSITION_BOTTOM,
  align = ALING_START,
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
        [POSITION_TOP, POSITION_BOTTOM].includes(position)
          ? ALIGN_VERTICAL_TYPE[align]
          : ALIGN_LATERAL_TYPE[align],
        className,
      )}
    />
  );
};

export default DropdownMenu;
