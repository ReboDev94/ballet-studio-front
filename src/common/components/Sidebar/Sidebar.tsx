import React from 'react';
import { ISidebar } from './interfaces';
import { twMerge } from 'tailwind-merge';

const Sidebar: React.FC<ISidebar> = ({
  width = 300,
  minWidth = 300,
  right = false,
}) => {
  return (
    <aside
      className={twMerge(
        'fixed inset-y-0 z-40 border',
        right && 'right-0',
      )}
      aria-label="Sidebar"
      style={{
        width,
        minWidth,
      }}
    >
      <h1>hola mundo</h1>
    </aside>
  );
};

export default Sidebar;
