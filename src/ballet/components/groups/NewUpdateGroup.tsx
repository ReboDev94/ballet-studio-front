/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useEffect } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import toast from 'react-hot-toast';
import {
  Button,
  Card,
  Divider,
  ErrorInput,
  Form,
  Input,
  Select,
  InputSearch,
  Table,
} from '@/common/components';
import {
  LOADING_CREATE_GROUP,
  LOADING_UPDATE_GROUP,
  TypeDegree,
} from '@/ballet/constants';
import { SchemaNewOrUpdateGroup } from '@/ballet/validations';
import {
  IFormGroup,
  IFormGroupTypes,
  IGroupAtt,
  valuesScheduleEnum,
} from '@/ballet/interfaces';
import { SORT_ASC } from '@/common/constants';
import { useSearch } from '@/common/hooks';
import { IGetTeacherRequest, IUserAll } from '@/auth/interfaces';
import { GET_ALL_USERS } from '@/auth/api';
import { TypeRoles } from '@/auth/constants';
import { createOrUpdateGroupThunk } from '@/store/modules/group/thunks';
import { useAppDispatch } from '@/store/hooks';
import { Errors } from '@/common/interfaces';
import { getCustomErrors } from '@/common/utils';
import { CURRENT_ANIO, getSchedulesByDay } from '@/ballet/utils';
import ScheduleSelector from './ScheduleSelector';

const optToast = { id: 'group-toast' };
const OPT_ANIOS = [CURRENT_ANIO, CURRENT_ANIO + 1];

interface NewUpdateGroupProps {
  group?: IGroupAtt;
  onSuccess?: () => void;
  onCancel?: () => void;
}

const NewUpdateGroup: React.FC<NewUpdateGroupProps> = ({
  group = undefined,
  onSuccess = () => {},
  onCancel = () => {},
}) => {
  const dispatch = useAppDispatch();

  const {
    searchValue,
    setSearchValue,
    selected,
    setSelected,
    options,
    loading,
  } = useSearch<Partial<IUserAll>, Omit<IGetTeacherRequest, 'name'>>(
    GET_ALL_USERS,
    'name',
    {
      roles: TypeRoles.teacher,
      order: SORT_ASC,
      page: 1,
      take: 15,
      photos: false,
    },
    ['users', 'data'],
  );

  const {
    register,
    setValue,
    setError,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<IFormGroup>({
    mode: 'onSubmit',
    defaultValues: {
      id: group?.id,
      name: group?.name || '',
      degree: TypeDegree[group?.degree || '1A'],
      scheduleL: getSchedulesByDay(group?.schedules || [], 'L'),
      scheduleM: getSchedulesByDay(group?.schedules || [], 'M'),
      scheduleMI: getSchedulesByDay(group?.schedules || [], 'MI'),
      scheduleJ: getSchedulesByDay(group?.schedules || [], 'J'),
      scheduleV: getSchedulesByDay(group?.schedules || [], 'V'),
      scheduleS: getSchedulesByDay(group?.schedules || [], 'S'),
      scheduleD: getSchedulesByDay(group?.schedules || [], 'D'),
      schoolCycle: group?.schoolCycle || CURRENT_ANIO,
    },
    resolver: yupResolver(SchemaNewOrUpdateGroup),
  });

  const onSubmit: SubmitHandler<IFormGroup> = async data => {
    toast.loading(
      data.id ? LOADING_UPDATE_GROUP : LOADING_CREATE_GROUP,
      optToast,
    );
    await dispatch(createOrUpdateGroupThunk(data))
      .unwrap()
      .then(success => {
        onSuccess();
        onCancel();
        toast.success(success, optToast);
      })
      .catch((errors: Errors[] | string) => {
        Array.isArray(errors) &&
          errors.map(({ property, message }) => {
            const { error, config } = getCustomErrors(message);
            setError(property as IFormGroupTypes, error, config);
          });
        typeof errors === 'string' && toast.error(errors, optToast);
      });
  };

  useEffect(() => {
    const VTeacherId = selected ? selected.value.id || -1 : -1;
    setValue('teacherId', VTeacherId);
  }, [selected]);

  useEffect(() => {
    if (group) {
      const { id, name } = group.teacher;
      setSelected({ label: name, value: { id, name } });
    }
  }, []);

  return (
    <Card>
      <Card.Body className="px-2 py-0">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <h3 className="text-lg text-primary-800 font-semibold">
            Datos del grupo
          </h3>
          <Divider />
          <div className="grid grid-cols-12">
            <div className="col-span-12 mb-2 md:col-span-4 md:mb-0 md:pr-2">
              <h5 className="font-semibold">Nombre:</h5>
              <span className="text-xs text-base-500">
                Escribe un nombre para el grupo
              </span>
            </div>
            <div className="col-span-12 md:col-start-5 md:col-end-10 my-auto">
              <Input
                {...register('name')}
                type="text"
                placeholder="Grupo baby ballet 1A"
                errorState={!!errors.name}
              />
              <ErrorInput message={errors.name?.message} />
            </div>
          </div>
          <Divider />
          <div className="grid grid-cols-12">
            <div className="col-span-12 mb-2 md:col-span-4 md:mb-0 md:pr-2">
              <h5 className="font-semibold">Grado:</h5>
              <span className="text-xs text-base-500">
                Seleccione el grado del grupo
              </span>
            </div>
            <div className="col-span-12 md:col-start-5 md:col-end-10 my-auto">
              <Select {...register('degree')} errorState={!!errors.degree}>
                {Object.keys(TypeDegree).map(k => (
                  <Select.Option key={k} value={k}>
                    {k}
                  </Select.Option>
                ))}
              </Select>
              <ErrorInput message={errors.degree?.message} />
            </div>
          </div>
          <Divider />
          <div className="grid grid-cols-12">
            <div className="col-span-12 mb-2 md:col-span-4 md:mb-0 md:pr-2">
              <h5 className="font-semibold">Ciclo escolar:</h5>
              <span className="text-xs text-base-500">
                Seleccione el año del ciclo escolar
              </span>
            </div>
            <div className="col-span-12 md:col-start-5 md:col-end-10 my-auto">
              {!!group && (
                <Input
                  {...register('schoolCycle')}
                  errorState={!!errors.schoolCycle}
                  disabled={!!group}
                />
              )}
              {!group && (
                <Select
                  {...register('schoolCycle')}
                  errorState={!!errors.schoolCycle}
                >
                  {OPT_ANIOS.map(anio => (
                    <Select.Option key={anio} value={anio}>
                      {anio}
                    </Select.Option>
                  ))}
                </Select>
              )}
              <ErrorInput message={errors.schoolCycle?.message} />
            </div>
          </div>
          <Divider />
          <div className="grid grid-cols-12">
            <div className="col-span-12 mb-2 md:col-span-4 md:mb-0 md:pr-2">
              <h5 className="font-semibold">Maestro:</h5>
              <span className="text-xs text-base-500">
                Seleccione al maestro del grupo
              </span>
            </div>
            <div className="col-span-12 md:col-start-5 md:col-end-10 my-auto">
              <InputSearch
                value={selected}
                onChange={val => setSelected(val)}
                options={options}
                loading={loading}
                buttonClearProps={{
                  variant: 'outline-primary',
                }}
                searchValue={searchValue}
                onSearchValue={val => setSearchValue(val)}
              />
              <ErrorInput message={errors.teacherId?.message} />
            </div>
          </div>
          <Divider />
          <div className="grid grid-cols-12">
            <div className="col-span-12 mb-2">
              <h5 className="font-semibold">Horario:</h5>
              <span className="text-xs text-base-500">
                Seleccione el horario del grupo
              </span>
            </div>
            <div className="col-span-12 my-auto">
              <Table>
                <Table.Head>
                  <Table.Row>
                    <Table.Th>Semana</Table.Th>
                    <Table.Th>Lunes</Table.Th>
                    <Table.Th>Martes</Table.Th>
                    <Table.Th>Miercoles</Table.Th>
                    <Table.Th>Jueves</Table.Th>
                    <Table.Th>Viernes</Table.Th>
                    <Table.Th>Sabado</Table.Th>
                    <Table.Th>Domingo</Table.Th>
                  </Table.Row>
                </Table.Head>
                <Table.Body>
                  {valuesScheduleEnum.map(schedule => (
                    <Table.Row key={schedule}>
                      <Table.Td className="py-2">
                        <div className="w-24">{schedule}</div>
                      </Table.Td>
                      <Table.Td className="py-2 min-w-[110px]">
                        <Controller
                          control={control}
                          name="scheduleL"
                          render={({ field: { onChange, value } }) => (
                            <ScheduleSelector
                              value={value}
                              onChange={v => onChange(v)}
                              schedule={schedule}
                              day="L"
                            />
                          )}
                        />
                      </Table.Td>
                      <Table.Td className="py-2 min-w-[110px]">
                        <Controller
                          control={control}
                          name="scheduleM"
                          render={({ field: { onChange, value } }) => (
                            <ScheduleSelector
                              value={value}
                              onChange={v => onChange(v)}
                              schedule={schedule}
                              day="M"
                            />
                          )}
                        />
                      </Table.Td>
                      <Table.Td className="py-2 min-w-[110px]">
                        <Controller
                          control={control}
                          name="scheduleMI"
                          render={({ field: { onChange, value } }) => (
                            <ScheduleSelector
                              value={value}
                              onChange={v => onChange(v)}
                              schedule={schedule}
                              day="MI"
                            />
                          )}
                        />
                      </Table.Td>
                      <Table.Td className="py-2 min-w-[110px]">
                        <Controller
                          control={control}
                          name="scheduleJ"
                          render={({ field: { onChange, value } }) => (
                            <ScheduleSelector
                              value={value}
                              onChange={v => onChange(v)}
                              schedule={schedule}
                              day="J"
                            />
                          )}
                        />
                      </Table.Td>
                      <Table.Td className="py-2 min-w-[110px]">
                        <Controller
                          control={control}
                          name="scheduleV"
                          render={({ field: { onChange, value } }) => (
                            <ScheduleSelector
                              value={value}
                              onChange={v => onChange(v)}
                              schedule={schedule}
                              day="V"
                            />
                          )}
                        />
                      </Table.Td>
                      <Table.Td className="py-2 min-w-[110px]">
                        <Controller
                          control={control}
                          name="scheduleS"
                          render={({ field: { onChange, value } }) => (
                            <ScheduleSelector
                              value={value}
                              onChange={v => onChange(v)}
                              schedule={schedule}
                              day="S"
                            />
                          )}
                        />
                      </Table.Td>
                      <Table.Td className="py-2 min-w-[110px]">
                        <Controller
                          control={control}
                          name="scheduleD"
                          render={({ field: { onChange, value } }) => (
                            <ScheduleSelector
                              value={value}
                              onChange={v => onChange(v)}
                              schedule={schedule}
                              day="D"
                            />
                          )}
                        />
                      </Table.Td>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table>
            </div>
          </div>

          <Divider />
          <div className="flex gap-2 justify-end">
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
      </Card.Body>
    </Card>
  );
};

export default NewUpdateGroup;
