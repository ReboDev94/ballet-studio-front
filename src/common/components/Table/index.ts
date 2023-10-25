import TableComponent from './Table';
import TableBody from './TableBody';
import TableFooter from './TableFooter';
import TableHead from './TableHead';
import TableRow from './TableRow';
import TableCol from './TableCol';
import { ITable, ITableBody, ITableHead, ITableRow } from './interfaces';

const Table = Object.assign(TableComponent, {
  Head: TableHead,
  Body: TableBody,
  Row: TableRow,
  Td: TableCol,
  Footer: TableFooter,
});

export type TableRowProps = ITableRow;
export type TableBodyProps = ITableBody;
export type TableProps = ITable;
export type TableHeadProps = ITableHead;
export default Table;
