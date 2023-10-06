import React from 'react';
import { twMerge } from 'tailwind-merge';
import { ITableRow } from './interfaces';
import { HOVER_HEAD_TR_CLASSES } from './styles';

const TableRow = React.forwardRef<HTMLTableRowElement, ITableRow>(
  ({ children, className, hover = false, ...props }, ref) => {
    return (
      <tr
        ref={ref}
        className={twMerge(hover && HOVER_HEAD_TR_CLASSES, className)}
        {...props}
      >
        {children}
      </tr>
    );
  },
);

TableRow.displayName = 'Tr';

export default TableRow;
