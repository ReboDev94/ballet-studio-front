/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useEffect, useState } from 'react';
import {
  Avatar,
  Button,
  Checkbox,
  ErrorInput,
  Form,
  Input,
  Pagination,
  Table,
} from '@/common/components';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  AddStudentsFromGroupForm,
  IDataStudentsAreNotGroup,
  IGetGroupStudentsRequest,
} from '@/ballet/interfaces';
import { SchemaAddStudentsFromGroup } from '@/ballet/validations/SchemaAddStudentsFromGroup';
import { DEFAULT_META_RESPONSE } from '@/common/constants';
import { useAppDispatch } from '@/store/hooks';
import {
  addStudentsForGroupThunk,
  getAllStudentsAreNotGroupThunk,
} from '@/store/modules/groupStudents/thunks';
import { IconSearch, IconUser } from '@/common/assets/svg';
import toast from 'react-hot-toast';
import { LOADING_ADD_STUDENTS_FOR_GROUP } from '@/ballet/constants';

const optToast = { id: 'add-students' };
interface AddStudentsProps {
  groupId: number;
  onSuccess?: () => void;
  onCancel?: () => void;
}
const AddStudents: React.FC<AddStudentsProps> = ({
  groupId,
  onSuccess = () => {},
  onCancel = () => {},
}) => {
  const dispatch = useAppDispatch();
  const [page, setPage] = useState(1);
  const [nameStudent, setNameStudent] = useState('');
  const [initiaLoad, setInitiaLoad] = useState(true);

  const [
    {
      data: students,
      meta: { pageCount },
    },
    setStudents,
  ] = useState<IDataStudentsAreNotGroup>({
    data: [],
    meta: DEFAULT_META_RESPONSE,
  });
  const {
    register,
    handleSubmit,
    setValue,
    formState: { isSubmitting, errors },
  } = useForm<AddStudentsFromGroupForm>({
    mode: 'onSubmit',
    defaultValues: {
      students: [],
    },
    resolver: yupResolver(SchemaAddStudentsFromGroup),
  });

  const getStudents = async (
    data: IGetGroupStudentsRequest = {
      name: nameStudent,
      page,
      groupId,
      take: 15,
    },
  ) => {
    const { meta, students } = await dispatch(
      getAllStudentsAreNotGroupThunk(data),
    ).unwrap();
    setStudents({ data: students, meta });
    setPage(meta.page);
  };

  const onSubmit: SubmitHandler<AddStudentsFromGroupForm> = async data => {
    toast.loading(LOADING_ADD_STUDENTS_FOR_GROUP, optToast);
    await dispatch(addStudentsForGroupThunk(data))
      .unwrap()
      .then(success => {
        onSuccess();
        toast.success(success, optToast);
      })
      .catch(err => toast.error(err, optToast));
  };

  useEffect(() => {
    const debounce = setTimeout(() => {
      if (!initiaLoad) getStudents();
    }, 500);

    if (initiaLoad) {
      getStudents();
      setInitiaLoad(false);
    }
    return () => {
      clearTimeout(debounce);
    };
  }, [page, nameStudent]);

  useEffect(() => {
    setValue('groupId', groupId);
  }, []);

  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-2 flex flex-col gap-1">
          <p className="text-base-500 text-sm">
            Seleccione a los estudiantes que desea agregar al grupo
          </p>
          <ErrorInput message={errors.students?.message} />
        </div>

        <div className="w-full flex justify-end my-4">
          <div className="w-full lg:w-72 relative flex">
            <div className="grid place-content-center p-2 bg-base-50 rounded-l-lg border border-r-0">
              <IconSearch className="h-4 w-4 fill-base-600" />
            </div>
            <Input
              value={nameStudent}
              name="teacher"
              onChange={({ target: { value } }) => setNameStudent(value)}
              className="rounded-l-none"
              placeholder="Nombre del estudiante"
              sizeType="xs"
            />
          </div>
        </div>
        <Table>
          <Table.Head>
            <Table.Row>
              <Table.Th>Selector</Table.Th>
              <Table.Th>Nombre</Table.Th>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            {students.length > 0 &&
              students.map(st => (
                <Table.Row key={st.id}>
                  <Table.Td className="w-10">
                    <div className="flex items-center justify-center">
                      <Checkbox
                        {...register('students')}
                        id={`student-${st.id}`}
                        value={st.id}
                        name="students"
                        variant="base"
                      />
                    </div>
                  </Table.Td>
                  <Table.Td>
                    <div className="flex gap-4">
                      <Avatar size="xs" src={st.avatar}>
                        <IconUser className="fill-white h-5 w-5" />
                      </Avatar>
                      <div className="flex flex-col gap-1">
                        <label
                          className="font-medium"
                          htmlFor={`student-${st.id}`}
                        >
                          {st.name}
                        </label>
                        <p className="text-xs">{st.tutor.celPhone}</p>
                      </div>
                    </div>
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

        <div className="flex gap-2 justify-end mt-4">
          <Button
            disabled={isSubmitting}
            type="button"
            size="xs"
            variant="outline-primary"
            onClick={() => onCancel()}
          >
            Cancelar
          </Button>
          <Button
            disabled={isSubmitting}
            type="submit"
            size="xs"
            variant="primary"
          >
            Guardar
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AddStudents;
