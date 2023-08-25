import React from 'react';
import { ISidebar } from './interfaces';
import { twMerge } from 'tailwind-merge';
import { SIDEBAR_CLASSES } from './styles';

const Sidebar: React.FC<ISidebar> = ({
  width = 300,
  right = false,
  children,
  className,
}) => {
  return (
    <>
      <aside
        className={twMerge(SIDEBAR_CLASSES, right && 'right-0', className)}
        aria-label="Sidebar"
        style={{
          width,
        }}
      >
        {children}
      </aside>
    </>
  );
};

export default Sidebar;
