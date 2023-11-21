import { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';
import { DEFAULT_HEAD_TH_CLASSES } from './styles';

const TableTd = <PROPS extends HTMLAttributes<HTMLTableCellElement>>({
  children,
  className,
  ...props
}: PROPS) => (
  <th className={twMerge(DEFAULT_HEAD_TH_CLASSES, className)} {...props}>
    {children}
  </th>
);

export default TableTd;
