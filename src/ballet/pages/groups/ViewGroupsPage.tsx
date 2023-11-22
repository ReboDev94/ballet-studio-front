import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import {
  IDataGroup,
  IGetGroupAllRequest,
  IGroupAtt,
} from '@/ballet/interfaces';
import {
  IconFilter,
  IconMore,
  IconSearch,
  IconTeam,
} from '@/common/assets/svg';
import {
  Button,
  Card,
  Checkbox,
  Dropdown,
  Input,
  Pagination,
  Radio,
  Table,
  Modal,
  Select,
} from '@/common/components';
import { ISort } from '@/common/interfaces';
import { useAppDispatch } from '@/store/hooks';
import {
  deleteGroupThunk,
  getAllGroupThunk,
} from '@/store/modules/group/thunks';
import { DEFAULT_META_RESPONSE, typeSort } from '@/common/constants';
import { useDegree } from '@/ballet/hooks';
import { ModalConfirm, NewUpdateGroup } from '@/ballet/components';
import { LOADING_DELETE_GROUP } from '@/ballet/constants';
import { formatDate } from '@/common/utils';
import {
  CURRENT_ANIO,
  getAniosFilter,
  getSchedulesByDay,
} from '@/ballet/utils';
import ScheduleTable from './ScheduleTable';

const optToast = { id: 'group-toast' };

const ViewGroupsPage = () => {
  const dispatch = useAppDispatch();
  const [page, setPage] = useState(1);
  const { selectedDegrees, degreeFilter, checkedDegreeFilter } = useDegree();

  const [
    { sort: sortFilter, teacher: teacherFilter, schoolCycle: anioFilter },
    setFilters,
  ] = useState<{
    sort: ISort;
    teacher: string;
    schoolCycle: number;
  }>({
    sort: 'ASC',
    teacher: '',
    schoolCycle: CURRENT_ANIO,
  });

  const [
    { modal: modalDeleteGroup, groupId: idDeleteGroup },
    setModalDeleteGroup,
  ] = useState<{
    modal: boolean;
    groupId: number;
  }>({ modal: false, groupId: -1 });

  const [
    { modal: modalEditGroup, group: groupEditOrUpdate },
    setModalEditGroup,
  ] = useState<{
    modal: boolean;
    group: IGroupAtt | undefined;
  }>({
    modal: false,
    group: undefined,
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
    setGroups,
  ] = useState<IDataGroup>({
    data: [],
    meta: DEFAULT_META_RESPONSE,
  });

  const getAll = async (
    data: IGetGroupAllRequest = {
      degree: selectedDegrees,
      teacher: teacherFilter,
      order: sortFilter,
      schoolCycle: anioFilter,
      page: 1,
      take: 15,
    },
  ) => {
    const { groups, meta } = await dispatch(getAllGroupThunk(data)).unwrap();
    setGroups({ data: groups, meta });
    setPage(meta.page);
  };

  const deleteGroup = async () => {
    toast.loading(LOADING_DELETE_GROUP, optToast);
    await dispatch(deleteGroupThunk(idDeleteGroup))
      .unwrap()
      .then(success => {
        getAll();
        toast.success(success, optToast);
      })
      .catch(err => toast.error(err, optToast));
  };

  useEffect(() => {
    getAll();
  }, [sortFilter, teacherFilter, selectedDegrees, anioFilter]);

  useEffect(() => {
    getAll();
  }, []);

  return (
    <>
      <Card>
        <Card.Body>
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-2xl text-base-500 font-semibold">Grupos</h3>
            <Button
              onClick={() =>
                setModalEditGroup({ modal: true, group: undefined })
              }
              type="button"
              className="flex items-center gap-2"
              size="sm"
            >
              <IconTeam className="fill-primary-50 w-4 h-4" />
              Agregar
            </Button>
          </div>

          <div className="my-4 flex flex-col md:flex-row md:items-center md:justify-end  gap-2">
            <div className="w-full lg:w-72 relative flex">
              <div className="grid place-content-center p-2 bg-base-50 rounded-l-lg border border-r-0">
                <IconSearch className="h-4 w-4 fill-base-600" />
              </div>
              <Input
                value={teacherFilter}
                onChange={({ target: { value } }) =>
                  setFilters(prev => ({ ...prev, teacher: value }))
                }
                className="rounded-l-none"
                placeholder="Nombre del maestro"
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

                <Dropdown.Menu
                  className="w-44 max-h-80 overflow-y-auto"
                  position="bottom"
                  align="end"
                >
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
                    <h5 className="text-base-500 text-xs select-none">
                      Ciclo escolar
                    </h5>
                    <div className="mt-2">
                      <Select
                        sizeType="xs"
                        value={anioFilter}
                        onChange={e =>
                          setFilters(prev => ({
                            ...prev,
                            schoolCycle: e.target.value as unknown as number,
                          }))
                        }
                      >
                        {getAniosFilter().map(anio => (
                          <Select.Option key={anio} value={anio}>
                            {anio}
                          </Select.Option>
                        ))}
                      </Select>
                    </div>

                    <Dropdown.Divider />
                    <h5 className="text-base-500 text-xs select-none">Grado</h5>
                    <ul className="space-y-1 mt-2">
                      {degreeFilter.map(({ id, type, value }) => (
                        <Dropdown.Item key={id}>
                          <label
                            htmlFor={id}
                            className="flex gap-2 items-center select-none cursor-pointer text-xs"
                          >
                            <Checkbox
                              id={id}
                              name={id}
                              checked={value}
                              onChange={checkedDegreeFilter}
                            />
                            {type}
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
              <Table.Row>
                <Table.Th className="py-3" rowSpan={2}>
                  Nombre
                </Table.Th>
                <Table.Th className="py-3" rowSpan={2}>
                  Grado
                </Table.Th>
                <Table.Th className="py-3" rowSpan={2}>
                  Año escolar
                </Table.Th>
                <Table.Th className="py-3" rowSpan={2}>
                  Maestro
                </Table.Th>
                <Table.Th className="py-3" rowSpan={2}>
                  No.Alumnos
                </Table.Th>
                <Table.Th className="py-3 text-center" colSpan={7} rowSpan={1}>
                  Horario
                </Table.Th>
                <Table.Th className="py-3" rowSpan={2}>
                  Fecha de registro
                </Table.Th>
                <Table.Th className="py-3" rowSpan={2}>
                  Opciones
                </Table.Th>
              </Table.Row>
              <Table.Row className="text-center">
                <Table.Th className="py-3" rowSpan={1}>
                  Lunes
                </Table.Th>
                <Table.Th className="py-3" rowSpan={1}>
                  Martes
                </Table.Th>
                <Table.Th className="py-3" rowSpan={1}>
                  Miercoles
                </Table.Th>
                <Table.Th className="py-3" rowSpan={1}>
                  Jueves
                </Table.Th>
                <Table.Th className="py-3" rowSpan={1}>
                  Viernes
                </Table.Th>
                <Table.Th className="py-3" rowSpan={1}>
                  Sabado
                </Table.Th>
                <Table.Th className="py-3" rowSpan={1}>
                  Domingo
                </Table.Th>
              </Table.Row>
            </Table.Head>
            <Table.Body divide>
              {data.length > 0 &&
                data.map(group => (
                  <Table.Row key={group.id}>
                    <Table.Td>{group.name}</Table.Td>
                    <Table.Td>{group.degree}</Table.Td>
                    <Table.Td>{group.schoolCycle}</Table.Td>
                    <Table.Td>{group.teacher.name}</Table.Td>
                    <Table.Td className="text-center text-red-900">
                      FALTA ATRIBURO
                    </Table.Td>
                    <Table.Td>
                      {getSchedulesByDay(group.schedules, 'L').map(v => (
                        <ScheduleTable key={v}>{v}</ScheduleTable>
                      ))}
                    </Table.Td>
                    <Table.Td>
                      {getSchedulesByDay(group.schedules, 'M').map(v => (
                        <ScheduleTable key={v}>{v}</ScheduleTable>
                      ))}
                    </Table.Td>
                    <Table.Td>
                      {getSchedulesByDay(group.schedules, 'MI').map(v => (
                        <ScheduleTable key={v}>{v}</ScheduleTable>
                      ))}
                    </Table.Td>
                    <Table.Td>
                      {getSchedulesByDay(group.schedules, 'J').map(v => (
                        <ScheduleTable key={v}>{v}</ScheduleTable>
                      ))}
                    </Table.Td>
                    <Table.Td>
                      {getSchedulesByDay(group.schedules, 'V').map(v => (
                        <ScheduleTable key={v}>{v}</ScheduleTable>
                      ))}
                    </Table.Td>
                    <Table.Td>
                      {getSchedulesByDay(group.schedules, 'S').map(v => (
                        <ScheduleTable key={v}>{v}</ScheduleTable>
                      ))}
                    </Table.Td>
                    <Table.Td>
                      {getSchedulesByDay(group.schedules, 'D').map(v => (
                        <ScheduleTable key={v}>{v}</ScheduleTable>
                      ))}
                    </Table.Td>
                    <Table.Td>
                      {formatDate(group.createdAt, 'DD/MM/YYYY')}
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
                              setModalEditGroup({ modal: true, group })
                            }
                          >
                            Editar
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={() =>
                              setModalDeleteGroup({
                                modal: true,
                                groupId: group.id,
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
                <Table.Td colSpan={14} className="py-5">
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
        open={modalDeleteGroup}
        title="Eliminar grupo"
        description="¿Estas seguro de eliminar el grupo?"
        acceptLabelButton="Eliminar"
        onCancel={() => setModalDeleteGroup({ modal: false, groupId: -1 })}
        onAccept={() => deleteGroup()}
      />
      <Modal value={modalEditGroup} size="md">
        <Modal.Header
          onClose={() => setModalEditGroup({ modal: false, group: undefined })}
        >
          <h3 className="text-base-600 font-semibold">
            {groupEditOrUpdate ? 'Editar' : 'Nuevo'} grupo
          </h3>
        </Modal.Header>
        <Modal.Body>
          <NewUpdateGroup
            group={groupEditOrUpdate}
            onSuccess={() => getAll()}
            onCancel={() =>
              setModalEditGroup({ modal: false, group: undefined })
            }
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ViewGroupsPage;
