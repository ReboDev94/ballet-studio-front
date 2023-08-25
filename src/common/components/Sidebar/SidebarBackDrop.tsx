import React from 'react';
import { twMerge } from 'tailwind-merge';
import { IBackDrop } from './interfaces';
import { BACKDROP_CLASSES } from './styles';

const SidebarBackDrop: React.FC<IBackDrop> = ({ className, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={twMerge(BACKDROP_CLASSES, className)}
    ></div>
  );
};

export default SidebarBackDrop;
