import { useEffect, useState } from 'react';
import { IDataGroup, IGetGroupAllRequest, IGroup } from '@/ballet/interfaces';
import { IconFilter, IconSearch, IconTeam } from '@/common/assets/svg';
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
} from '@/common/components';
import { ISort } from '@/common/interfaces';
import { useAppDispatch } from '@/store/hooks';
import { getAllGroupThunk } from '@/store/modules/group/thunks';
import { DEFAULT_META_RESPONSE, typeSort } from '@/common/constants';
import { useDegree } from '@/ballet/hooks';
import { GroupTable, NewUpdateGroup } from '@/ballet/components';

const ViewGroupsPage = () => {
  const dispatch = useAppDispatch();
  const [page, setPage] = useState(1);
  const { selectedDegrees, degreeFilter, checkedDegreeFilter } = useDegree();

  const [{ sort: sortFilter, teacher: teacherFilter }, setFilters] = useState<{
    sort: ISort;
    teacher: string;
  }>({
    sort: 'ASC',
    teacher: '',
  });

  const [
    { modal: modalEditGroup, group: groupEditOrUpdate },
    setModalEditGroup,
  ] = useState<{
    modal: boolean;
    group: IGroup | undefined;
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
      page: 1,
      take: 15,
    },
  ) => {
    const { groups, meta } = await dispatch(getAllGroupThunk(data)).unwrap();
    setGroups({ data: groups, meta });
    setPage(meta.page);
  };

  useEffect(() => {
    getAll();
  }, [sortFilter, teacherFilter, selectedDegrees]);

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
              <>Descripción</>
              <>Grado</>
              <>Año escolar</>
              <>Maestro</>
              <>Fecha de registro</>
              <>Horario</>
              <>Opciones</>
            </Table.Head>
            <Table.Body divide>
              {data.length > 0 &&
                data.map(group => <GroupTable key={group.id} group={group} />)}
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
      <Modal value={modalEditGroup} size="md">
        <Modal.Header
          onClose={() => setModalEditGroup({ modal: false, group: undefined })}
        >
          <h3 className="text-base-600 font-semibold">
            {groupEditOrUpdate ? 'Editar' : 'Nuevo'} grupo
          </h3>
        </Modal.Header>
        <Modal.Body>
          <NewUpdateGroup />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ViewGroupsPage;
