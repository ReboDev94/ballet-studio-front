import TableComponent from './Table';
import TableBody from './TableBody';
import TableHead from './TableHead';
import TableRow from './TableRow';
import { ITable, ITableBody, ITableHead, ITableRow } from './interfaces';

const Table = Object.assign(TableComponent, {
  Head: TableHead,
  Body: TableBody,
  Row: TableRow,
});

export type TableRowProps = ITableRow;
export type TableBodyProps = ITableBody;
export type TableProps = ITable;
export type TableHeadProps = ITableHead;
export default Table;
