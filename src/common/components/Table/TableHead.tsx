import React from 'react';
import { ITableHead } from './interfaces';
import { twMerge } from 'tailwind-merge';
import { DEFAULT_HEAD_TABLE_CLASSES } from './styles';

const TableHead = React.forwardRef<HTMLTableSectionElement, ITableHead>(
  ({ children, className, ...props }, ref) => {
    return (
      <thead
        ref={ref}
        className={twMerge(DEFAULT_HEAD_TABLE_CLASSES, className)}
        {...props}
      >
        {children}
      </thead>
    );
  },
);

TableHead.displayName = 'Thead';

export default TableHead;
