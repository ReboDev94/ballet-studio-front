import React from 'react';
import { twMerge } from 'tailwind-merge';
import { IDropdownDivider } from './interfaces';
import { DIVIDER_CLASSES, DIVIDER_WRAPPER } from './styles';

const DropdownDivider: React.FC<IDropdownDivider> = ({ className }) => {
  return (
    <div className={twMerge(DIVIDER_WRAPPER, className)}>
      <hr className={twMerge(DIVIDER_CLASSES)} />
    </div>
  );
};

export default DropdownDivider;
