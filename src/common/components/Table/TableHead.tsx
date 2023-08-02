import React from 'react';
import { ITableHead } from './interfaces';
import { twMerge } from 'tailwind-merge';
import { DEFAULT_HEAD_TABLE_CLASSES, DEFAULT_HEAD_TH_CLASSES } from './styles';

const TableHead = React.forwardRef<HTMLTableSectionElement, ITableHead>(
  ({ children, className, ...props }, ref) => {
    return (
      <thead
        ref={ref}
        className={twMerge(DEFAULT_HEAD_TABLE_CLASSES, className)}
        {...props}
      >
        <tr>
          {Array.isArray(children) ? (
            children.map((child, i) => (
              <th key={i} scope="rol" className={DEFAULT_HEAD_TH_CLASSES}>
                {child}
              </th>
            ))
          ) : (
            <th scope="rol" className={DEFAULT_HEAD_TH_CLASSES}>
              {children}
            </th>
          )}
        </tr>
      </thead>
    );
  },
);

TableHead.displayName = 'Thead';

export default TableHead;
