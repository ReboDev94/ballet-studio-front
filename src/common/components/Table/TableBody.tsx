import React from 'react';
import { ITableBody } from './interfaces';
import { twMerge } from 'tailwind-merge';
import { DIVIDER_BODY_CLASSES } from './styles';

const TableBody = React.forwardRef<HTMLTableSectionElement, ITableBody>(
  ({ divide = false, children, className, ...props }, ref) => {
    return (
      <tbody
        ref={ref}
        className={twMerge(divide && DIVIDER_BODY_CLASSES, className)}
        {...props}
      >
        {children}
      </tbody>
    );
  },
);

TableBody.displayName = 'Thead';
export default TableBody;
