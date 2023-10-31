import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import {
  IconMore,
  IconPersonAdd,
  IconSearch,
  IconSort,
  IconUser,
} from '@/common/assets/svg';
import {
  Avatar,
  Button,
  Card,
  Dropdown,
  Input,
  Modal,
  Pagination,
  Radio,
  Table,
} from '@/common/components';
import { DEFAULT_META_RESPONSE, typeSort } from '@/common/constants';
import { ISort } from '@/common/interfaces';
import {
  IDataStudents,
  IGetStudentsRequest,
  IStudent,
} from '@/ballet/interfaces';
import { useAppDispatch } from '@/store/hooks';
import {
  deleteStudentThunk,
  getAllStudentThunk,
} from '@/store/modules/student/thunks';
import { formatDate } from '@/common/utils';
import { ModalConfirm, NewUpdateStudent } from '@/ballet/components';
import { LOADING_DELETE_STUDENT } from '@/ballet/constants';

const optToast = { id: 'delete-student' };
const ViewStudentsPage = () => {
  const dispatch = useAppDispatch();
  const [page, setPage] = useState(1);
  const [{ sort: sortFilter, name: nameFilter }, setFilters] = useState<{
    sort: ISort;
    name: string;
  }>({
    sort: 'ASC',
    name: '',
  });

  const [
    { modal: modalDeleteStudent, studentId: idDeleteStudent },
    setModalDeleteStudent,
  ] = useState<{
    modal: boolean;
    studentId: number;
  }>({ modal: false, studentId: -1 });

  const [
    { modal: modalEditStudent, student: studentEditOrUpdate },
    setModalEditStudent,
  ] = useState<{
    modal: boolean;
    student: IStudent | undefined;
  }>({
    modal: false,
    student: undefined,
  });

  const [
    {
      data,
      meta: { pageCount },
    },
    setStudents,
  ] = useState<IDataStudents>({
    data: [],
    meta: DEFAULT_META_RESPONSE,
  });

  const checkedSortFilter = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    const sort = value as ISort;
    setFilters(prev => ({ ...prev, sort }));
  };

  const getAll = async (
    params: IGetStudentsRequest = {
      name: nameFilter,
      page: 1,
      take: 15,
      order: sortFilter,
    },
  ) => {
    const { students, meta } = await dispatch(
      getAllStudentThunk(params),
    ).unwrap();
    setStudents({ data: students, meta });
    setPage(meta.page);
  };

  const deleteStudent = async () => {
    toast.loading(LOADING_DELETE_STUDENT, optToast);
    await dispatch(deleteStudentThunk(idDeleteStudent))
      .unwrap()
      .then(success => {
        getAll();
        toast.success(success, optToast);
      })
      .catch(error => toast.error(error, optToast));
  };

  useEffect(() => {
    getAll();
  }, [sortFilter, nameFilter]);

  useEffect(() => {
    getAll();
  }, []);

  return (
    <>
      <Card>
        <Card.Body>
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-2xl text-base-500 font-semibold">
              Estudiantes
            </h3>
            <Button
              onClick={() =>
                setModalEditStudent({ modal: true, student: undefined })
              }
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
                <Dropdown.Menu className="w-44" position="bottom" align="end">
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
            </div>
          </div>

          <Table>
            <Table.Head>
              <>Foto</>
              <>Nombre</>
              <>Dirección</>
              <>Teléfono</>
              <>Correo electrónico</>
              <>Fecha de nacimiento</>
              <>Fecha de registro</>
              <>Opciones</>
            </Table.Head>
            <Table.Body divide>
              {data.length > 0 &&
                data.map(student => (
                  <Table.Row hover key={student.id}>
                    <Table.Td>
                      <Avatar size="xs" src={student.avatar}>
                        <IconUser className="fill-white h-5 w-5" />
                      </Avatar>
                    </Table.Td>
                    <Table.Td>{student.name}</Table.Td>
                    <Table.Td>{student.address}</Table.Td>
                    <Table.Td>{student.tutor.celPhone}</Table.Td>
                    <Table.Td>{student.tutor.email}</Table.Td>
                    <Table.Td>
                      {formatDate(student.dateOfBirth, 'DD/MM/YYYY')}
                    </Table.Td>
                    <Table.Td>
                      {formatDate(student.createdAt, 'DD/MM/YYYY')}
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
                        <Dropdown.Menu
                          className="w-44"
                          position="left"
                          align="center"
                        >
                          <Dropdown.Item
                            onClick={() =>
                              setModalEditStudent({ modal: true, student })
                            }
                          >
                            Editar
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={() =>
                              setModalDeleteStudent({
                                modal: true,
                                studentId: student.id,
                              })
                            }
                          >
                            Eliminar
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
                      currentPage={page}
                      pageCount={pageCount}
                      onChange={page => setPage(page)}
                    />
                  </div>
                </Table.Td>
              </Table.Row>
            </Table.Footer>
          </Table>
        </Card.Body>
      </Card>

      <ModalConfirm
        open={modalDeleteStudent}
        title="Eliminar estudiante"
        description="¿Estas seguro de eliminar al estudiante?"
        acceptLabelButton="Eliminar"
        onCancel={() => setModalDeleteStudent({ modal: false, studentId: -1 })}
        onAccept={() => deleteStudent()}
      />

      <Modal value={modalEditStudent} size="md">
        <Modal.Header
          onClose={() =>
            setModalEditStudent({ modal: false, student: undefined })
          }
        >
          <h3 className="text-base-600 font-semibold">
            {studentEditOrUpdate ? 'Editar' : 'Nuevo'} Estudiante
          </h3>
        </Modal.Header>
        <Modal.Body>
          <NewUpdateStudent
            onCancel={() =>
              setModalEditStudent({ modal: false, student: undefined })
            }
            onSuccess={() => getAll()}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ViewStudentsPage;
