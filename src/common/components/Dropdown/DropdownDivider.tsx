import React from 'react';
import { twMerge } from 'tailwind-merge';
import { IDropdownDivider } from './interfaces';
import { DIVIDER_CLASSES } from './styles';

const DropdownDivider: React.FC<IDropdownDivider> = ({ className }) => {
  return <div className={twMerge(DIVIDER_CLASSES, className)}></div>;
};

export default DropdownDivider;
