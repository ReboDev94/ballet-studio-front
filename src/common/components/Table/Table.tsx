import React from 'react';
import { ITable } from './interfaces';
import { twMerge } from 'tailwind-merge';
import { DEFAULT_TABLE_CLASSES, DEFAULT_WRAPPER_TABLE_CLASSES } from './styles';

const Table = React.forwardRef<HTMLTableElement, ITable>(
  ({ className, wrapperClassName, wrapperStyle, children, ...props }, ref) => {
    return (
      <div
        style={wrapperStyle}
        className={twMerge(DEFAULT_WRAPPER_TABLE_CLASSES, wrapperClassName)}
      >
        <table
          ref={ref}
          {...props}
          className={twMerge(DEFAULT_TABLE_CLASSES, className)}
        >
          {children}
        </table>
      </div>
    );
  },
);

Table.displayName = 'Table';

export default Table;
