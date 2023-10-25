import { useEffect, useMemo, useState } from 'react';
import {
  IDataUsers,
  IGetAllUsersRequest,
  IRolesFilter,
} from '@/auth/interfaces';
import {
  Avatar,
  Card,
  Checkbox,
  Dropdown,
  Pagination,
  Table,
  Radio,
  Input,
  Modal,
  Button,
} from '@/common/components';
import { useAppDispatch } from '@/store/hooks';
import { getAllUsersThunk } from '@/store/modules/auth/thunks';
import { DEFAULT_META_RESPONSE, typeSort } from '@/common/constants';
import {
  IconFilter,
  IconPersonAdd,
  IconSearch,
  IconSort,
  IconUser,
} from '@/common/assets/svg';
import { getRoles } from '@/auth/utils';
import { formatDate } from '@/common/utils';
import { ROLES_LABEL, TypeRoles } from '@/auth/constants';
import { ISort } from '@/common/interfaces';
import { NewUpdateUser } from '@/ballet/components';

const ViewUsersPage = () => {
  const dispatch = useAppDispatch();
  const [pagination, setpagination] = useState(1);
  const [modal, setModal] = useState(false);

  const [
    { roles: rolesFilter, sort: sortFilter, name: nameFilter },
    setFilters,
  ] = useState<{
    roles: IRolesFilter[];
    sort: ISort;
    name: string;
  }>({
    roles: [
      { type: TypeRoles.admin, value: false },
      { type: TypeRoles.teacher, value: false },
      { type: TypeRoles.receptionist, value: false },
    ],
    sort: 'ASC',
    name: '',
  });

  const checkedSortFilter = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    const sort = value as ISort;
    setFilters(prev => ({ ...prev, sort }));
  };

  const checkedRolesFilter = ({
    target: { checked, name },
  }: React.ChangeEvent<HTMLInputElement>) => {
    const newRoles = [...rolesFilter].map(rol => {
      if (rol.type === name) rol.value = checked;
      return rol;
    });
    setFilters(prev => ({ ...prev, roles: newRoles }));
  };

  const roles = useMemo(
    () => rolesFilter.filter(({ value }) => value).map(({ type }) => type),
    [rolesFilter],
  );

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
    roles = [],
    photos = true,
    page = 1,
    take = 15,
    order = 'ASC',
  }: IGetAllUsersRequest) => {
    const { users, meta } = await dispatch(
      getAllUsersThunk({ name, roles, photos, page, take, order }),
    ).unwrap();
    setUsers({ data: users, meta });
    setpagination(meta.page);
  };

  useEffect(() => {
    getAll({
      name: nameFilter,
      roles,
      order: sortFilter,
      page: 1,
    });
  }, [sortFilter, rolesFilter]);

  useEffect(() => {
    const debouceId = setTimeout(() => {
      getAll({
        name: nameFilter,
        roles,
        order: sortFilter,
        page: 1,
      });
    }, 1000);
    return () => {
      clearTimeout(debouceId);
    };
  }, [nameFilter]);

  useEffect(() => {
    getAll({});
  }, []);

  return (
    <>
      <Card>
        <Card.Body>
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-2xl text-base-500 font-semibold">Usuarios</h3>
            <Button
              onClick={() => setModal(true)}
              type="button"
              className="flex items-center gap-2"
              size="sm"
            >
              <IconPersonAdd className="fill-primary-50 w-4 h-4" />
              Agregar
            </Button>
          </div>
          <div className="my-4 flex flex-col md:flex-row md:items-center md:justify-end  gap-2">
            <div className="w-full h-9 lg:w-72 relative flex">
              <div className="grid place-content-center p-2 bg-base-50 rounded-l-lg border border-r-0">
                <IconSearch className="h-4 w-4 fill-base-600" />
              </div>
              <Input
                value={nameFilter}
                onChange={({ target: { value } }) =>
                  setFilters(prev => ({ ...prev, name: value }))
                }
                className="rounded-l-none"
                placeholder="Busqueda"
              />
            </div>
            <div className="flex justify-end">
              <Dropdown>
                <Dropdown.Toogle
                  buttonProps={{ variant: 'outline-base', size: 'sm' }}
                >
                  <div className="flex items-center justify-center gap-2">
                    <IconSort className="w-4 h-4 fill-base-600" />
                    Orden
                  </div>
                </Dropdown.Toogle>
                <Dropdown.Menu
                  className="w-[11rem]"
                  position="bottom"
                  align="end"
                >
                  {typeSort.map(({ label, value }) => (
                    <Dropdown.Item key={value}>
                      <label
                        htmlFor={value}
                        className="flex gap-2 items-center select-none cursor-pointer text-xs"
                      >
                        <Radio
                          id={value}
                          value={value}
                          checked={sortFilter === value}
                          onChange={checkedSortFilter}
                          name="sort"
                        />
                        {label}
                      </label>
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown>
                <Dropdown.Toogle
                  buttonProps={{ variant: 'outline-base', size: 'sm' }}
                >
                  <div className="flex items-center justify-center gap-2">
                    <IconFilter className="w-4 h-4 fill-base-600" />
                    Roles
                  </div>
                </Dropdown.Toogle>

                <Dropdown.Menu
                  className="w-[11rem]"
                  position="bottom"
                  align="end"
                >
                  {rolesFilter.map(({ type, value }) => (
                    <Dropdown.Item key={type}>
                      <label
                        htmlFor={type}
                        className="flex gap-2 items-center select-none cursor-pointer text-xs"
                      >
                        <Checkbox
                          id={type}
                          name={type}
                          checked={value}
                          onChange={checkedRolesFilter}
                        />
                        {ROLES_LABEL[type]}
                      </label>
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
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
                          <IconUser className="fill-white h-5 w-5" />
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

      <Modal value={modal} center size="md">
        <Modal.Header onClose={() => setModal(false)}>
          <h3 className="text-base-600 font-semibold">Nuevo usuario</h3>
        </Modal.Header>
        <Modal.Body>
          <NewUpdateUser />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ViewUsersPage;
