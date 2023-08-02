import React from 'react';
import { twMerge } from 'tailwind-merge';
import { ITableRow } from './interfaces';
import { DEFAULT_HEAD_TD_CLASSES, HOVER_HEAD_TR_CLASSES } from './styles';

const TableRow = React.forwardRef<HTMLTableRowElement, ITableRow>(
  ({ children, className, hover = false, ...props }, ref) => {
    return (
      <tr
        ref={ref}
        className={twMerge(hover && HOVER_HEAD_TR_CLASSES, className)}
        {...props}
      >
        {Array.isArray(children) ? (
          children?.map((child, i) => (
            <td key={i} className={DEFAULT_HEAD_TD_CLASSES}>
              {child}
            </td>
          ))
        ) : (
          <td className={DEFAULT_HEAD_TD_CLASSES}>{children}</td>
        )}
      </tr>
    );
  },
);

TableRow.displayName = 'Tr';

export default TableRow;
