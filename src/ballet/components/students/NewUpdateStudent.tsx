/* eslint-disable @typescript-eslint/no-empty-function */
import React, { ChangeEvent, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import toast from 'react-hot-toast';
import {
  Avatar,
  Button,
  Card,
  Form,
  Input,
  Textarea,
  ListGroup,
  Divider,
  ErrorInput,
} from '@/common/components';
import { IconUser, IconCloseCircle, IconAdd } from '@/common/assets/svg';
import { SchemaNewOrUpdateStudent } from '@/ballet/validations';
import { IFormNewUpdateStudent, IFormStudentType } from '@/ballet/interfaces';
import { IMAGE_TYPE_SUPPORT, VALIDATION_REQUIRED } from '@/common/constants';
import { getCustomErrors, isOlder } from '@/common/utils';
import { useAppDispatch } from '@/store/hooks';
import { createStudentThunk } from '@/store/modules/student/thunks';
import { LOADING_CREATE_STUDENT } from '@/ballet/constants';
import { Errors } from '@/common/interfaces';

const optToast = { id: 'create-student' };

interface NewUpdateStudentProps {
  onSuccess?: () => void;
  onCancel?: () => void;
}
const NewUpdateStudent: React.FC<NewUpdateStudentProps> = ({
  onCancel = () => {},
  onSuccess = () => {},
}) => {
  const dispatch = useAppDispatch();
  const {
    register,
    control,
    handleSubmit,
    watch,
    setError,
    setValue,
    trigger,
    formState: { errors, isSubmitting },
  } = useForm<IFormNewUpdateStudent>({
    mode: 'onSubmit',
    defaultValues: {
      tutorPhone: '',
      tutorEmail: '',
      dieseses: [],
      file: null,
    },
    resolver: yupResolver(SchemaNewOrUpdateStudent),
  });

  const [dateOfBirth] = watch(['dateOfBirth']);

  const { fields, append, remove } = useFieldArray({
    name: 'dieseses',
    control,
  });

  const {
    register: registerDieseses,
    handleSubmit: handleSubmitDieseses,
    setError: setErrorDieseses,
    setValue: setValueDieseses,
    formState: { errors: errorsDieseses },
  } = useForm<{ value: string }>({
    mode: 'onSubmit',
    defaultValues: {
      value: '',
    },
  });

  const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setValue('file', e.target.files[0]);
    } else {
      setValue('file', null);
    }
    trigger('file');
  };

  const isOlderAux = useCallback(() => {
    return isOlder(dateOfBirth);
  }, [dateOfBirth]);

  const onSubmitDiseses: SubmitHandler<{ value: string }> = data => {
    const validate = data.value.trim().length === 0;
    if (validate) {
      setErrorDieseses('value', {
        type: 'custom',
        message: VALIDATION_REQUIRED,
      });
      return;
    }
    append({ id: uuidv4(), title: data.value });
    setValueDieseses('value', '');
  };

  const onSubmit: SubmitHandler<IFormNewUpdateStudent> = async data => {
    toast.loading(LOADING_CREATE_STUDENT, optToast);
    await dispatch(createStudentThunk(data))
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
            setError(property as IFormStudentType, error, config);
          });
        typeof errors === 'string' && toast.error(errors, optToast);
      });
  };

  return (
    <>
      <Card>
        <Card.Body className="px-2 py-0">
          <Form onSubmit={handleSubmit(onSubmit)}>
            <h3 className="text-lg text-primary-800 font-semibold">
              Datos personales
            </h3>
            <div className="w-full my-5">
              <Avatar size="lg" src={undefined}>
                <IconUser className="fill-white h-14 w-14" />
              </Avatar>
            </div>
            <Divider />
            <div className="grid grid-cols-12">
              <div className="col-span-12 mb-2 md:col-span-4 md:mb-0 md:pr-2">
                <h5 className="font-semibold">Nombre:</h5>
                <span className="text-xs text-base-500">
                  Escribe el nombre del estudiante
                </span>
              </div>
              <div className="col-span-12 md:col-start-5 md:col-end-10 my-auto">
                <Input
                  {...register('name')}
                  type="text"
                  placeholder="Yaretzin Araujo Delgado"
                  errorState={!!errors.name}
                />
                <ErrorInput message={errors.name?.message} />
              </div>
            </div>

            <Divider />
            <div className="grid grid-cols-12">
              <div className="col-span-12 mb-2 md:col-span-4 md:mb-0 md:pr-2">
                <h5 className="font-semibold">Fecha de nacimiento:</h5>
                <span className="text-xs text-base-500">
                  Escribe la fecha de nacimiento del estudiantes
                </span>
              </div>
              <div className="col-span-12 md:col-start-5 md:col-end-10 my-auto">
                <Input
                  {...register('dateOfBirth')}
                  type="date"
                  errorState={!!errors.dateOfBirth}
                />
                <ErrorInput message={errors.dateOfBirth?.message} />
              </div>
            </div>
            <Divider />
            <div className="grid grid-cols-12">
              <div className="col-span-12 mb-2 md:col-span-4 md:mb-0 md:pr-2">
                <h5 className="font-semibold">Dirección</h5>
                <span className="text-xs text-base-500">
                  Escribe el nombre de tu calle, no.exterior, no.interior,
                  colonia, codigo postal y alguna referencia.
                </span>
              </div>
              <div className="col-span-12 md:col-start-5 md:col-end-10 my-auto">
                <Textarea
                  {...register('address')}
                  placeholder="Dirección"
                  rows={3}
                  className="resize-none"
                  errorState={!!errors.address}
                />
                <ErrorInput message={errors.address?.message} />
              </div>
            </div>
            <Divider />
            <div className="grid grid-cols-12">
              <div className="col-span-12 mb-2 md:col-span-4 md:mb-0 md:pr-2">
                <h5 className="font-semibold">Fotografía (opcional):</h5>
                <span className="text-xs text-base-500">
                  Selecciona una fotografía para identitifcar al estudiante
                </span>
              </div>
              <div className="col-span-12 md:col-start-5 md:col-end-10 my-auto">
                <Input
                  type="file"
                  accept={IMAGE_TYPE_SUPPORT.join(', ')}
                  onChange={handleFile}
                />
                <ErrorInput message={errors.file?.message} />
              </div>
            </div>
            <Divider />
            <div className="grid grid-cols-12">
              <div className="col-span-12 mb-2 md:col-span-4 md:mb-0 md:pr-2">
                <h5 className="font-semibold">Enfermedades (opcional):</h5>
                <span className="text-xs text-base-500">
                  Describa enfermedades cronicas, operaciones u otro
                  padecimiento.
                </span>
              </div>
              <div className="col-span-12 md:col-start-5 md:col-end-10 my-auto">
                <div className="mb-4">
                  <div className="flex gap-2">
                    <Input
                      {...registerDieseses('value')}
                      type="text"
                      placeholder="Fractura"
                      errorState={!!errorsDieseses.value}
                    />
                    <Button
                      type="button"
                      variant="outline-primary"
                      className="px-2"
                      onClick={handleSubmitDieseses(onSubmitDiseses)}
                    >
                      <IconAdd className="h-5 fill-primary-800" />
                    </Button>
                  </div>
                  <ErrorInput message={errorsDieseses.value?.message} />
                </div>

                {fields.length > 0 && (
                  <ListGroup>
                    {fields.map(({ id, title }, i) => (
                      <ListGroup.Item key={id} variant="primary">
                        <div className="w-full h-full flex items-center justify-between">
                          <span className="flex-1 line-clamp-1">{title}</span>
                          <button type="button" onClick={() => remove(i)}>
                            <IconCloseCircle className="fill-primary-800 h-6 w-6" />
                          </button>
                        </div>
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                )}
                <ErrorInput message={errors.dieseses?.message} />
              </div>
            </div>

            {!isOlderAux() && (
              <>
                <Divider />
                <h3 className="text-lg text-primary-800 font-semibold mb-5 ">
                  Datos del tutor
                </h3>
                <div className="grid grid-cols-12">
                  <div className="col-span-12 mb-2 md:col-span-4 md:mb-0 md:pr-2">
                    <h5 className="font-semibold">Nombre:</h5>
                    <span className="text-xs text-base-500">
                      Escribe el nombre del tutor
                    </span>
                  </div>
                  <div className="col-span-12 md:col-start-5 md:col-end-10 my-auto">
                    <Input
                      {...register('tutorName')}
                      type="text"
                      placeholder="Yaretzin Araujo Delgado"
                      errorState={!!errors.tutorName}
                    />
                    <ErrorInput message={errors.tutorName?.message} />
                  </div>
                </div>
              </>
            )}

            <Divider />
            <div className="grid grid-cols-12">
              <div className="col-span-12 mb-2 md:col-span-4 md:mb-0 md:pr-2">
                <h5 className="font-semibold">Teléfono celular</h5>
                <span className="text-xs text-base-500">
                  {isOlderAux()
                    ? 'Escribe tu número de teléfono celular'
                    : 'Escribe el número de teléfono celular del tutor'}
                </span>
              </div>
              <div className="col-span-12 md:col-start-5 md:col-end-10 my-auto">
                <Input
                  {...register('tutorCelPhone')}
                  type="text"
                  placeholder="000-000-00-00"
                  errorState={!!errors.tutorCelPhone}
                />
                <ErrorInput message={errors.tutorCelPhone?.message} />
              </div>
            </div>

            <Divider />
            <div className="grid grid-cols-12">
              <div className="col-span-12 mb-2 md:col-span-4 md:mb-0 md:pr-2">
                <h5 className="font-semibold">
                  Correo electrónico (opcional):
                </h5>
                <span className="text-xs text-base-500">
                  {isOlderAux()
                    ? 'Escribe tu correo electrónico'
                    : 'Escribe el correo electrónico del tutor'}
                </span>
              </div>
              <div className="col-span-12 md:col-start-5 md:col-end-10 my-auto">
                <Input
                  {...register('tutorEmail')}
                  type="email"
                  placeholder="example@gmail.com"
                  errorState={!!errors.tutorEmail}
                />
                <ErrorInput message={errors.tutorEmail?.message} />
              </div>
            </div>
            <Divider />
            <div className="grid grid-cols-12">
              <div className="col-span-12 mb-2 md:col-span-4 md:mb-0 md:pr-2">
                <h5 className="font-semibold">Teléfono fijo (opcional):</h5>
                <span className="text-xs text-base-500">
                  {isOlderAux()
                    ? 'Escribe tu número de teléfono fijo'
                    : 'Escribe el número de teléfono del tutor'}
                </span>
              </div>
              <div className="col-span-12 md:col-start-5 md:col-end-10 my-auto">
                <Input
                  {...register('tutorPhone')}
                  type="text"
                  placeholder="000-000-00-00"
                  errorState={!!errors.tutorPhone}
                />
                <ErrorInput message={errors.tutorPhone?.message} />
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
    </>
  );
};

export default NewUpdateStudent;
