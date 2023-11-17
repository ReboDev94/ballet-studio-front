import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { IGroupAtt } from '@/ballet/interfaces';
import { IconEyeOpen, IconMore } from '@/common/assets/svg';
import { Button, Dropdown, Table } from '@/common/components';
import { formatDate, getHour } from '@/common/utils';
import { Days, typeEnumDays } from '@/ballet/constants';

interface GroupTableProps {
  group: IGroupAtt;
  onDelete: (id: number) => void;
  onEdit: (group: IGroupAtt) => void;
}
const GroupTable: React.FC<GroupTableProps> = ({ group, onDelete, onEdit }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <Table.Row className="bg-primary-50">
        <Table.Td>{group.description}</Table.Td>
        <Table.Td>{group.degree}</Table.Td>
        <Table.Td>{group.schoolCycle}</Table.Td>
        <Table.Td>{group.teacher.name}</Table.Td>
        <Table.Td>{formatDate(group.createdAt, 'DD/MM/YYYY')}</Table.Td>
        <Table.Td>
          <Button
            size="xs"
            variant="outline-base"
            className="px-2"
            onClick={() => setExpanded(!expanded)}
          >
            <IconEyeOpen className="h-4 fill-base-600" />
          </Button>
        </Table.Td>
        <Table.Td>
          <Dropdown>
            <Dropdown.Toogle
              buttonProps={{
                variant: 'outline-base',
                size: 'xs',
                className: 'px-2',
              }}
            >
              <IconMore className="h-4 fill-base-600" />
            </Dropdown.Toogle>
            <Dropdown.Menu className="w-44" position="left" align="center">
              <Dropdown.Item onClick={() => onEdit(group)}>
                Editar
              </Dropdown.Item>
              <Dropdown.Item onClick={() => onDelete(group.id)}>
                Eliminar
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Table.Td>
      </Table.Row>
      <Table.Row className={twMerge(!expanded && 'hidden')}>
        <Table.Td colSpan={8}>
          <div>
            <Table wrapperClassName="border-none shadow-none">
              <Table.Head>
                {Object.keys(Days).map(k => (
                  <React.Fragment key={k}>
                    {Days[k as typeEnumDays]}
                  </React.Fragment>
                ))}
              </Table.Head>
              <Table.Body divide>
                <Table.Row hover>
                  {Object.keys(Days).map(k => (
                    <Table.Td key={k}>
                      <div>
                        {getHour(
                          group.schedules.find(({ day }) => day === k)?.hour,
                        )}
                      </div>
                    </Table.Td>
                  ))}
                </Table.Row>
              </Table.Body>
            </Table>
          </div>
        </Table.Td>
      </Table.Row>
    </>
  );
};

export default GroupTable;
