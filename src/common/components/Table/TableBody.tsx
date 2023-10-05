import React from 'react';
import { ITableBody } from './interfaces';
import { twMerge } from 'tailwind-merge';
import { DIVIDER_BODY_CLASSES } from './styles';

const TableBody = React.forwardRef<HTMLTableSectionElement, ITableBody>(
  ({ divide = false, children, className, ...props }, ref) => {
    console.log(children);

    return (
      <tbody
        ref={ref}
        className={twMerge(divide && DIVIDER_BODY_CLASSES, className)}
        {...props}
      >
        {!children && (
          <tr>
            <td colSpan={1000} className="h-20 text-center font-semibold">
              No hay información
            </td>
          </tr>
        )}
        {children}
      </tbody>
    );
  },
);

TableBody.displayName = 'Thead';
export default TableBody;
