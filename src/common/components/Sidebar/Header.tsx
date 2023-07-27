import React from 'react';
import { IHeader } from './interfaces';
import { twMerge } from 'tailwind-merge';
import { HEADER_FOOTER_CLASSES } from './styles';

const Header: React.FC<IHeader> = ({ children, className }) => {
  return (
    <div className={twMerge(HEADER_FOOTER_CLASSES, className)}>{children}</div>
  );
};

export default Header;
