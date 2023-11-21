import TableComponent from './Table';
import TableBody from './TableBody';
import TableFooter from './TableFooter';
import TableHead from './TableHead';
import TableRow from './TableRow';
import TableTd from './TableTd';
import TableTh from './TableTh';
import { ITable, ITableBody, ITableHead, ITableRow } from './interfaces';

const Table = Object.assign(TableComponent, {
  Head: TableHead,
  Body: TableBody,
  Row: TableRow,
  Td: TableTd,
  Th: TableTh,
  Footer: TableFooter,
});

export default Table;
export type { ITable, ITableHead, ITableRow, ITableBody };
