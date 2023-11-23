import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import {
  Avatar,
  Button,
  Card,
  Checkbox,
  Divider,
  Dropdown,
  Input,
  Pagination,
  Radio,
  Table,
} from '@/common/components';
import {
  IconArrow,
  IconFilter,
  IconSearch,
  IconTeam,
  IconUser,
} from '@/common/assets/svg';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch } from '@/store/hooks';
import { getGroupThunk } from '@/store/modules/group/thunks';
import {
  IGetGroupStudentsRequest,
  IGroupStudent,
  OnlyGroup,
} from '@/ballet/interfaces';
import { IMeta, ISort } from '@/common/interfaces';
import { getAllStudentByGroupThunk } from '@/store/modules/groupStudents/thunks';
import { DEFAULT_META_RESPONSE, typeSort } from '@/common/constants';
import { formatDate } from '@/common/utils';

const optToast = { id: 'group-students' };

const DATA_GROUP: OnlyGroup = {
  id: -1,
  name: '',
  slug: '',
  teacher: {
    id: -1,
    name: '',
  },
};
const GroupStudents = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [page, setPage] = useState(1);
  const [
    {
      data: students,
      meta: { pageCount },
    },
    setStudents,
  ] = useState<{
    data: IGroupStudent[];
    meta: IMeta;
  }>({ data: [], meta: DEFAULT_META_RESPONSE });

  const [
    { name: nameStudentFilter, sort: sortStudentFilter },
    setFiltersStudents,
  ] = useState<{
    name: string;
    sort: ISort;
  }>({
    name: '',
    sort: 'ASC',
  });

  const [
    {
      id,
      name,
      teacher: { name: nameTeacher },
    },
    setGroup,
  ] = useState<OnlyGroup>(DATA_GROUP);
  const { slug } = useParams();

  const getStudents = async (
    data: IGetGroupStudentsRequest = {
      page: 1,
      take: 15,
      order: sortStudentFilter,
      name: nameStudentFilter,
      groupId: id,
    },
  ) => {
    const { students, meta } = await dispatch(
      getAllStudentByGroupThunk(data),
    ).unwrap();
    setStudents({ data: students, meta });
    setPage(meta.page);
  };

  const getGroup = async () => {
    await dispatch(getGroupThunk(slug || '_x'))
      .unwrap()
      .then(group => {
        setGroup(group);
        getStudents({ groupId: group.id });
      })
      .catch(err => {
        toast.error(err, optToast);
        navigate('/group');
      });
  };

  useEffect(() => {
    if (id !== -1) getStudents();
  }, [sortStudentFilter]);

  useEffect(() => {
    const debouceId = setTimeout(() => {
      if (id !== -1) getStudents();
    }, 1000);
    return () => {
      clearTimeout(debouceId);
    };
  }, [nameStudentFilter]);

  useEffect(() => {
    getGroup();
  }, []);

  return (
    <Card>
      <Card.Body>
        <div className="flex items-start justify-between">
          <Button
            onClick={() => navigate('/group')}
            size="xs"
            variant="outline-base"
          >
            <div className="flex items-center justify-center gap-1">
              <IconArrow className="w-4 h-4 fill-base-600" />
              Atras
            </div>
          </Button>
          <div>
            <h3 className="text-2xl text-primary-800 font-semibold">{name}</h3>
            <p className="text-xs text-base-500">{nameTeacher}</p>
          </div>
        </div>
        <Divider />
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-2xl text-base-500 font-semibold">Estudiantes</h3>
          <Button type="button" className="flex items-center gap-2" size="sm">
            <IconTeam className="w-4 h-4" />
            Agregar
          </Button>
        </div>
        <div className="my-4 flex flex-col md:flex-row md:items-center md:justify-end  gap-2">
          <div className="w-full lg:w-72 relative flex">
            <div className="grid place-content-center p-2 bg-base-50 rounded-l-lg border border-r-0">
              <IconSearch className="h-4 w-4 fill-base-600" />
            </div>
            <Input
              value={nameStudentFilter}
              onChange={({ target: { value } }) =>
                setFiltersStudents(prev => ({ ...prev, name: value }))
              }
              className="rounded-l-none"
              placeholder="Nombre del estudiante"
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
                            checked={sortStudentFilter === value}
                            onChange={({ target: { value: valueSort } }) => {
                              const sort = valueSort as ISort;
                              setFiltersStudents(prev => ({ ...prev, sort }));
                            }}
                            name="sort"
                          />
                          {label}
                        </label>
                      </Dropdown.Item>
                    ))}
                  </ul>
                </li>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <div className="my-4">
          <Table>
            <Table.Head>
              <Table.Row>
                <Table.Th>
                  <Checkbox variant="base" />
                </Table.Th>
                <Table.Th>Nombre</Table.Th>
                <Table.Th>Asistencias</Table.Th>
                <Table.Th>Fecha alta</Table.Th>
              </Table.Row>
            </Table.Head>
            <Table.Body>
              {students.length > 0 &&
                students.map(student => (
                  <Table.Row key={student.id}>
                    <Table.Td className="w-10">
                      <Checkbox
                        id={`student-${student.id}`}
                        value={student.id}
                        name="students"
                        variant="base"
                      />
                    </Table.Td>
                    <Table.Td>
                      <div className="flex gap-4">
                        <Avatar size="xs" src={student.avatar}>
                          <IconUser className="fill-white h-5 w-5" />
                        </Avatar>
                        <div className="flex flex-col gap-1">
                          <p className="font-medium">{student.name}</p>
                          <p className="text-xs">{student.tutor.celPhone}</p>
                        </div>
                      </div>
                    </Table.Td>
                    <Table.Td className="text-red-950">
                      1 / 20 - HACE FALTA ATTR
                    </Table.Td>
                    <Table.Td>
                      {formatDate(student.createdAtStudent, 'DD/MM/YYYY')}
                    </Table.Td>
                  </Table.Row>
                ))}
            </Table.Body>
            <Table.Footer>
              <Table.Row>
                <Table.Td colSpan={4} className="py-5">
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
        </div>
      </Card.Body>
    </Card>
  );
};

export default GroupStudents;
