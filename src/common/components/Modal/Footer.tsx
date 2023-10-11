import React from 'react';
import { IModalFooter } from './interfaces';
import { twMerge } from 'tailwind-merge';
import { MODAL_FOOTER_CLASSES } from './styles';

const Footer: React.FC<IModalFooter> = ({ children, className }) => {
  return (
    <div className={twMerge(MODAL_FOOTER_CLASSES, className)}>{children}</div>
  );
};

export default Footer;
