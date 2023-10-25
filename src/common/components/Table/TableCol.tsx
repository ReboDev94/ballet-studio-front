import { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';
import { DEFAULT_HEAD_TD_CLASSES } from './styles';

const TableCol = <PROPS extends HTMLAttributes<HTMLTableCellElement>>({
  children,
  className,
  ...props
}: PROPS) => (
  <td className={twMerge(DEFAULT_HEAD_TD_CLASSES, className)} {...props}>
    {children}
  </td>
);

export default TableCol;
