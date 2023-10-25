import React from 'react';
import { ITableBody } from './interfaces';
import { twMerge } from 'tailwind-merge';
import { DIVIDER_BODY_CLASSES } from './styles';

const TableFooter = React.forwardRef<HTMLTableSectionElement, ITableBody>(
  ({ divide = false, children, className, ...props }, ref) => {
    return (
      <tfoot
        ref={ref}
        className={twMerge(divide && DIVIDER_BODY_CLASSES, className)}
        {...props}
      >
        {children}
      </tfoot>
    );
  },
);

TableFooter.displayName = 'Tfoot';
export default TableFooter;
