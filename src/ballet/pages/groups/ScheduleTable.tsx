import React, { ReactNode } from 'react';

interface ScheduleTableProps {
  children: ReactNode;
}
const ScheduleTable: React.FC<ScheduleTableProps> = ({ children }) => {
  return <p className="w-28 my-2 text-center">{children}</p>;
};

export default ScheduleTable;
