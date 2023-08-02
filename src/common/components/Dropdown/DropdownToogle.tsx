import React from 'react';
import { twMerge } from 'tailwind-merge';
import { DEFAULT_DROPDOWN_TOOGLE_CLASSES } from './styles';
import { IDropdownToogle } from './interfaces';
import Button from '../Button';

const DropdownToogle: React.FC<IDropdownToogle> = ({
  children,
  button = true,
  buttonProps,
}) => {
  return (
    <label tabIndex={0} className={twMerge(DEFAULT_DROPDOWN_TOOGLE_CLASSES)}>
      {button ? <Button {...buttonProps}>{children}</Button> : children}
    </label>
  );
};

export default DropdownToogle;
