import { useEffect, useState } from 'react';
import { IDataUsers, IGetAllUsersRequest } from '@/auth/interfaces';
import { Avatar, Card, Pagination, Table } from '@/common/components';
import { useAppDispatch } from '@/store/hooks';
import { getAllUsersThunk } from '@/store/modules/auth/thunks';
import { DEFAULT_META_RESPONSE } from '@/common/constants';
import { IconUser } from '@/common/assets/svg';
import { getRoles } from '@/auth/utils';
import { formatDate } from '@/common/utils';

const ViewUsersPage = () => {
  const dispatch = useAppDispatch();
  const [pagination, setpagination] = useState(1);

  const [
    {
      data,
      meta: { pageCount },
    },
    setUsers,
  ] = useState<IDataUsers>({
    data: [],
    meta: DEFAULT_META_RESPONSE,
  });

  const getAll = async ({
    name = '',
    role = null,
    photos = true,
    page = 1,
    take = 15,
    order = 'ASC',
  }: IGetAllUsersRequest) => {
    const { users, meta } = await dispatch(
      getAllUsersThunk({ name, role, photos, page, take, order }),
    ).unwrap();
    setUsers({ data: users, meta });
    setpagination(meta.page);
  };

  useEffect(() => {
    getAll({});
  }, []);

  return (
    <>
      <h3 className="text-2xl text-base-500 font-semibold mb-2">Usuarios</h3>
      <Card>
        <Card.Body>
          <Table>
            <Table.Head>
              <>Foto</>
              <>Nombre</>
              <>Email</>
              <>Telefono</>
              <>Activo</>
              <>Fecha de registro</>
              <>Roles</>
            </Table.Head>
            <Table.Body divide>
              {data.length > 0 &&
                data.map(
                  ({
                    id,
                    photo,
                    name,
                    email,
                    phone,
                    isActive,
                    createdAt,
                    roles,
                  }) => (
                    <Table.Row hover key={id}>
                      <Table.Td>
                        <Avatar size="xs" src={photo}>
                          <IconUser className="fill-white h-6 w-6" />
                        </Avatar>
                      </Table.Td>
                      <Table.Td>{name}</Table.Td>
                      <Table.Td>{email}</Table.Td>
                      <Table.Td>{phone}</Table.Td>
                      <Table.Td>{isActive ? 'Activo' : 'Inactivo'}</Table.Td>
                      <Table.Td>{formatDate(createdAt, 'DD/MM/YYYY')}</Table.Td>
                      <Table.Td>{getRoles(roles)}</Table.Td>
                    </Table.Row>
                  ),
                )}
            </Table.Body>
            <Table.Footer>
              <Table.Row>
                <Table.Td colSpan={7} className="py-5">
                  <div className="flex justify-end">
                    <Pagination
                      currentPage={pagination}
                      pageCount={pageCount}
                      onChange={page => setpagination(page)}
                    />
                  </div>
                </Table.Td>
              </Table.Row>
            </Table.Footer>
          </Table>
        </Card.Body>
      </Card>
    </>
  );
};

export default ViewUsersPage;
