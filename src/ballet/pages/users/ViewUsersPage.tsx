import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import {
  IDataUsers,
  IGetAllUsersRequest,
  IUpdateStatus,
  IUserAll,
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
import {
  deleteUserThunk,
  getAllUsersThunk,
  sendEmailResetPasswordThunk,
  updateStatusUserThunk,
} from '@/store/modules/auth/thunks';
import { DEFAULT_META_RESPONSE, typeSort } from '@/common/constants';
import {
  IconCircleCheckboxFill,
  IconCloseCircle,
  IconFilter,
  IconMore,
  IconPersonAdd,
  IconSearch,
  IconUser,
} from '@/common/assets/svg';
import { getRoles } from '@/auth/utils';
import { formatDate } from '@/common/utils';
import {
  LOADING_DELETE_USER,
  LOADING_SEND_EMAIL,
  LOADING_UPDATE_STATUS_USER,
  ROLES_LABEL,
  SUCCESS_SEND_EMAIL_BY_USER,
} from '@/auth/constants';
import { ISort } from '@/common/interfaces';
import { ModalConfirm, NewUpdateUser } from '@/ballet/components';
import { useUtilsRoles } from '@/ballet/hooks';

const optToastDelete = { id: 'delete-user' };
const optToastReesendEmail = { id: 'reesend-email' };
const optToastUpdateStatus = { id: 'update-status-user' };

const ViewUsersPage = () => {
  const dispatch = useAppDispatch();
  const [pagination, setpagination] = useState(1);

  const { rolesFilter, rolesTypeSelected, checkedRolesFilter } =
    useUtilsRoles();

  const [{ modal: modalEditUser, user: userEditOrNew }, setModalEditUser] =
    useState<{
      modal: boolean;
      user: IUserAll | undefined;
    }>({
      modal: false,
      user: undefined,
    });

  const [{ modal: modalDeleteUser, userId: idDeleteUser }, setmodalDeleteUser] =
    useState<{
      modal: boolean;
      userId: number;
    }>({ modal: false, userId: -1 });

  const [{ sort: sortFilter, name: nameFilter }, setFilters] = useState<{
    sort: ISort;
    name: string;
  }>({
    sort: 'ASC',
    name: '',
  });

  const checkedSortFilter = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    const sort = value as ISort;
    setFilters(prev => ({ ...prev, sort }));
  };

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
    name = nameFilter,
    roles = rolesTypeSelected,
    photos = true,
    page = 1,
    take = 15,
    order = sortFilter,
  }: IGetAllUsersRequest) => {
    const { data: users, meta } = await dispatch(
      getAllUsersThunk({ name, roles, photos, page, take, order }),
    ).unwrap();
    setUsers({ data: users, meta });
    setpagination(meta.page);
  };

  const changeStatusStateUsers = (dataP: IUpdateStatus) => {
    const { userId, status } = dataP;

    const newUsers = [...data].map(user => {
      if (user.id === userId) user.isActive = status;
      return user;
    });
    setUsers(prev => ({ ...prev, data: newUsers }));
  };

  const deleteUser = async () => {
    setmodalDeleteUser(prev => ({ ...prev, modal: false }));
    toast.loading(LOADING_DELETE_USER, optToastDelete);
    await dispatch(deleteUserThunk(idDeleteUser))
      .unwrap()
      .then(success => {
        getAll({});
        toast.success(success, optToastDelete);
      })
      .catch(error => toast.error(error, optToastDelete));
  };

  const reesendEmail = async (email: string) => {
    toast.loading(LOADING_SEND_EMAIL, optToastReesendEmail);
    await dispatch(sendEmailResetPasswordThunk(email))
      .unwrap()
      .then(() =>
        toast.success(SUCCESS_SEND_EMAIL_BY_USER, optToastReesendEmail),
      )
      .catch(error => toast.error(error, optToastReesendEmail));
  };

  const enabledOrDisabled = async (data: IUpdateStatus) => {
    toast.loading(LOADING_UPDATE_STATUS_USER, optToastUpdateStatus);
    await dispatch(updateStatusUserThunk(data))
      .unwrap()
      .then(success => {
        changeStatusStateUsers(data);
        toast.success(success, optToastUpdateStatus);
      })
      .catch(error => toast.error(error, optToastUpdateStatus));
  };

  useEffect(() => {
    getAll({});
  }, [sortFilter, rolesFilter]);

  useEffect(() => {
    const debouceId = setTimeout(() => {
      getAll({});
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
              onClick={() => setModalEditUser({ modal: true, user: undefined })}
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
                sizeType="xs"
              />
            </div>
            <div className="flex justify-end">
              <Dropdown>
                <Dropdown.Toogle
                  buttonProps={{
                    variant: 'outline-base',
                    size: 'sm',
                  }}
                >
                  <div className="flex items-center justify-center gap-2">
                    <IconFilter className="w-4 h-4 fill-base-600" />
                    Filtros
                  </div>
                </Dropdown.Toogle>
                <Dropdown.Menu className="w-44" position="bottom" align="end">
                  <li>
                    <h5 className="text-base-500 text-xs select-none">Orden</h5>
                    <ul className="space-y-1 mt-2">
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
                    </ul>
                    <Dropdown.Divider />
                    <h5 className="text-base-500 text-xs select-none">Roles</h5>
                    <ul className="space-y-1 mt-2">
                      {rolesFilter.map(({ id, type, value }) => (
                        <Dropdown.Item key={id}>
                          <label
                            htmlFor={id}
                            className="flex gap-2 items-center select-none cursor-pointer text-xs"
                          >
                            <Checkbox
                              id={id}
                              name={id}
                              checked={value}
                              onChange={checkedRolesFilter}
                            />
                            {ROLES_LABEL[type]}
                          </label>
                        </Dropdown.Item>
                      ))}
                    </ul>
                  </li>
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
              <>Estado</>
              <>Fecha de registro</>
              <>Roles</>
              <>Opciones</>
            </Table.Head>
            <Table.Body divide>
              {data.length > 0 &&
                data.map(user => (
                  <Table.Row hover key={user.id}>
                    <Table.Td>
                      <Avatar size="xs" src={user.photo}>
                        <IconUser className="fill-white h-5 w-5" />
                      </Avatar>
                    </Table.Td>
                    <Table.Td>{user.name}</Table.Td>
                    <Table.Td>{user.email}</Table.Td>
                    <Table.Td>{user.phone}</Table.Td>
                    <Table.Td>
                      {user.isActive ? (
                        <IconCircleCheckboxFill className="fill-success-700 h-6 w-6" />
                      ) : (
                        <IconCloseCircle className="fill-error-700 h-6 w-6" />
                      )}
                    </Table.Td>
                    <Table.Td>
                      {formatDate(user.createdAt, 'DD/MM/YYYY')}
                    </Table.Td>
                    <Table.Td>{getRoles(user.roles)}</Table.Td>
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
                        <Dropdown.Menu
                          className="w-44"
                          position="left"
                          align="center"
                        >
                          <Dropdown.Item
                            onClick={() =>
                              setModalEditUser({ modal: true, user })
                            }
                          >
                            Editar
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={() =>
                              setmodalDeleteUser({
                                modal: true,
                                userId: user.id,
                              })
                            }
                          >
                            Eliminar
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={() => reesendEmail(user.email)}
                          >
                            Reenviar email
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={() =>
                              enabledOrDisabled({
                                userId: user.id,
                                status: !user.isActive,
                              })
                            }
                          >
                            {user.isActive ? 'Desactivar' : 'Activar'}
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </Table.Td>
                  </Table.Row>
                ))}
            </Table.Body>
            <Table.Footer>
              <Table.Row>
                <Table.Td colSpan={8} className="py-5">
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

      <ModalConfirm
        open={modalDeleteUser}
        title="Eliminar usuario"
        description="¿Estas seguro de eliminar al usuario?"
        acceptLabelButton="Eliminar"
        onCancel={() => setmodalDeleteUser({ modal: false, userId: -1 })}
        onAccept={() => deleteUser()}
      />

      <Modal value={modalEditUser} center size="md">
        <Modal.Header
          onClose={() => setModalEditUser({ modal: false, user: undefined })}
        >
          <h3 className="text-base-600 font-semibold">
            {userEditOrNew ? 'Editar' : 'Nuevo'} usuario
          </h3>
        </Modal.Header>
        <Modal.Body>
          <NewUpdateUser
            user={userEditOrNew}
            onClose={() => setModalEditUser({ modal: false, user: undefined })}
            onSuccess={() => getAll({})}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ViewUsersPage;
