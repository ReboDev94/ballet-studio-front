import React from 'react';
import { ISidebar } from './interfaces';
import { twMerge } from 'tailwind-merge';

const Sidebar: React.FC<ISidebar> = ({
  width = 300,
  minWidth = 300,
  height = '100vh',
  right = false,
}) => {
  // fixed top-0 left-0
  return (
    <aside
      className={twMerge('z-40 border border-red-900', right && 'right-0')}
      aria-label="Sidebar"
      style={{
        width: width,
        minWidth,
        height,
      }}
    >
      <h1>hola mundo</h1>
    </aside>
  );
};

export default Sidebar;
