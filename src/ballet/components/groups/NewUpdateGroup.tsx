/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useEffect, useMemo, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import toast from 'react-hot-toast';
import {
  Button,
  Card,
  Checkbox,
  Divider,
  ErrorInput,
  Form,
  Input,
  Select,
  InputSearch,
} from '@/common/components';
import {
  LOADING_CREATE_GROUP,
  LOADING_UPDATE_GROUP,
  TypeDegree,
  typeEnumDays,
} from '@/ballet/constants';
import { SchemaNewOrUpdateGroup } from '@/ballet/validations';
import { IFormGroup, IFormGroupTypes, IGroupAtt } from '@/ballet/interfaces';
import { SORT_ASC, VALIDATION_REQUIRED } from '@/common/constants';
import { useSearch } from '@/common/hooks';
import { IGetTeacherRequest, IUserAll } from '@/auth/interfaces';
import { GET_ALL_USERS } from '@/auth/api';
import { TypeRoles } from '@/auth/constants';
import { createOrUpdateGroupThunk } from '@/store/modules/group/thunks';
import { useAppDispatch } from '@/store/hooks';
import { Errors } from '@/common/interfaces';
import { getCustomErrors } from '@/common/utils';

const optToast = { id: 'group-toast' };
const CURRENT_ANIO = new Date().getFullYear();
const OPT_ANIOS = [CURRENT_ANIO, CURRENT_ANIO + 1];
const SCHEDULE: IFormGroupTypes[] = [
  'scheduleL',
  'scheduleM',
  'scheduleMI',
  'scheduleJ',
  'scheduleV',
  'scheduleS',
  'scheduleD',
];

interface NewUpdateGroupProps {
  group?: IGroupAtt;
  onSuccess?: () => void;
  onCancel?: () => void;
}

const findSchedule = (schedules: Schedule[] = [], dayP: typeEnumDays) => {
  return schedules.find(({ day }) => day === dayP)?.hour || '';
};

const NewUpdateGroup: React.FC<NewUpdateGroupProps> = ({
  group = undefined,
  onSuccess = () => {},
  onCancel = () => {},
}) => {
  const dispatch = useAppDispatch();
  const [onlySchedule, setOnlySchedule] = useState(true);
  const [inputSchedule, setInputSchedule] = useState('');
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
    watch,
    setValue,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IFormGroup>({
    mode: 'onSubmit',
    defaultValues: {
      id: group?.id,
      name: group?.name || '',
      degree: TypeDegree[group?.degree || '1A'],
      scheduleL: findSchedule(group?.schedules, 'L'),
      scheduleM: findSchedule(group?.schedules, 'M'),
      scheduleMI: findSchedule(group?.schedules, 'MI'),
      scheduleJ: findSchedule(group?.schedules, 'J'),
      scheduleV: findSchedule(group?.schedules, 'V'),
      scheduleS: findSchedule(group?.schedules, 'S'),
      scheduleD: findSchedule(group?.schedules, 'D'),
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

  const validSchedule = watch([...SCHEDULE]);
  const validationOnlySchedule = useMemo(
    () => !!validSchedule.every(value => value),
    [...validSchedule],
  );

  const onChangeInputSchedule = (value: string) => {
    setInputSchedule(value);
    SCHEDULE.forEach(k => setValue(k, value));
  };

  useEffect(() => {
    const VTeacherId = selected ? selected.value.id || -1 : -1;
    setValue('teacherId', VTeacherId);
  }, [selected]);

  useEffect(() => {
    if (group) {
      const { id, name } = group.teacher;
      setSelected({ label: name, value: { id } });
      setOnlySchedule(false);
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
              <h5 className="font-semibold">Descripción (opcional):</h5>
              <span className="text-xs text-base-500">
                Escribe una descripción para el grupo
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
            <div className="col-span-12 mb-2 md:col-span-4 md:mb-0 md:pr-2">
              <h5 className="font-semibold">Horario:</h5>
              <span className="text-xs text-base-500">
                Quiere establecer un solo horario para toda la semana
              </span>
            </div>
            <div className="col-span-12 md:col-start-5 md:col-end-10 flex justify-end my-auto">
              <label
                htmlFor="allDays"
                className="flex gap-2 items-center justify-between select-none cursor-pointer text-xs"
              >
                <Checkbox
                  id="allDays"
                  checked={onlySchedule}
                  onChange={e => setOnlySchedule(e.target.checked)}
                />
              </label>
            </div>
          </div>
          <Divider />
          <div className="grid grid-cols-12">
            <div className="col-span-12 mb-2 md:col-span-4 md:mb-0 md:pr-2">
              <h5 className="font-semibold">Horario:</h5>
              <span className="text-xs text-base-500">
                Establezca los horarios de clases durante la semana
              </span>
            </div>
            <div className="col-span-12 md:col-start-5 md:col-end-10 my-auto">
              {onlySchedule && (
                <>
                  <Input
                    type="time"
                    value={inputSchedule}
                    onChange={e => onChangeInputSchedule(e.target.value)}
                    errorState={!validationOnlySchedule}
                  />
                  {!validationOnlySchedule && (
                    <ErrorInput message={VALIDATION_REQUIRED} />
                  )}
                </>
              )}
              {!onlySchedule && (
                <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-6">
                    <Form.Label title="Lunes:">
                      <Input
                        type="time"
                        {...register('scheduleL')}
                        errorState={!!errors.scheduleL}
                      />
                      <ErrorInput message={errors.scheduleL?.message} />
                    </Form.Label>
                  </div>
                  <div className="col-span-6">
                    <Form.Label title="Martes:">
                      <Input
                        type="time"
                        {...register('scheduleM')}
                        errorState={!!errors.scheduleM}
                      />
                      <ErrorInput message={errors.scheduleM?.message} />
                    </Form.Label>
                  </div>
                  <div className="col-span-6">
                    <Form.Label title="Miercoles:">
                      <Input
                        type="time"
                        {...register('scheduleMI')}
                        errorState={!!errors.scheduleMI}
                      />
                      <ErrorInput message={errors.scheduleMI?.message} />
                    </Form.Label>
                  </div>
                  <div className="col-span-6">
                    <Form.Label title="Jueves:">
                      <Input
                        type="time"
                        {...register('scheduleJ')}
                        errorState={!!errors.scheduleJ}
                      />
                      <ErrorInput message={errors.scheduleJ?.message} />
                    </Form.Label>
                  </div>
                  <div className="col-span-6">
                    <Form.Label title="Viernes:">
                      <Input
                        type="time"
                        {...register('scheduleV')}
                        errorState={!!errors.scheduleV}
                      />
                      <ErrorInput message={errors.scheduleV?.message} />
                    </Form.Label>
                  </div>
                  <div className="col-span-6">
                    <Form.Label title="Sabado:">
                      <Input
                        type="time"
                        {...register('scheduleS')}
                        errorState={!!errors.scheduleS}
                      />
                      <ErrorInput message={errors.scheduleS?.message} />
                    </Form.Label>
                  </div>
                  <div className="col-span-6">
                    <Form.Label title="Domingo:">
                      <Input
                        type="time"
                        {...register('scheduleD')}
                        errorState={!!errors.scheduleD}
                      />
                      <ErrorInput message={errors.scheduleD?.message} />
                    </Form.Label>
                  </div>
                </div>
              )}
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
