/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { SchemaNewOrUpdateUser } from '@/ballet/validations';
import {
  Button,
  Card,
  Form,
  Input,
  Divider,
  Checkbox,
  ErrorInput,
} from '@/common/components';
import { INewOrUpdateUser, INewOrUpdateUserTypes } from '@/ballet/interfaces';
import { LOADING_CREATE_USER, ROLES_LABEL } from '@/auth/constants';
import { useUtilsRoles } from '@/ballet/hooks';
import toast from 'react-hot-toast';
import { useAppDispatch } from '@/store/hooks';
import { createUserThunk } from '@/store/modules/auth/thunks';
import { Errors } from '@/common/interfaces';
import { getCustomErrors } from '@/common/utils';

const optToast = { id: 'create-user' };
interface INewUpdateUser {
  onSuccess?: () => void;
  onClose?: () => void;
}

const NewUpdateUser: React.FC<INewUpdateUser> = ({
  onSuccess = () => {},
  onClose = () => {},
}) => {
  const dispatch = useAppDispatch();
  const { rolesFilter, rolesTypeSelected, checkedRolesFilter } =
    useUtilsRoles();

  const {
    register,
    handleSubmit,
    setValue,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<INewOrUpdateUser>({
    mode: 'onSubmit',
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      roles: [],
    },
    resolver: yupResolver(SchemaNewOrUpdateUser),
  });

  useEffect(() => {
    setValue('roles', rolesTypeSelected);
  }, [rolesTypeSelected]);

  const onSubmit: SubmitHandler<INewOrUpdateUser> = async data => {
    toast.loading(LOADING_CREATE_USER, optToast);
    await dispatch(createUserThunk(data))
      .unwrap()
      .then(success => {
        onSuccess();
        toast.success(success, optToast);
      })
      .catch((errors: Errors[] | string) => {
        Array.isArray(errors) &&
          errors.map(({ property, message }) => {
            const { error, config } = getCustomErrors(message);
            setError(property as INewOrUpdateUserTypes, error, config);
          });
        typeof errors === 'string' && toast.error(errors, optToast);
      });
    console.log(data);
  };

  return (
    <>
      <Card>
        <Card.Body className="px-2 py-0">
          <Form onSubmit={handleSubmit(onSubmit)}>
            <h3 className="text-lg text-primary-800 font-semibold">
              Datos personales
            </h3>
            <Divider />
            <div className="grid grid-cols-12">
              <div className="col-span-12 mb-2 md:col-span-4 md:mb-0 md:pr-2">
                <h5 className="font-semibold">Nombre:</h5>
                <span className="text-xs text-base-500">
                  Escribe el nombre del usuario
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
                <h5 className="font-semibold">Correo electrónico:</h5>
                <span className="text-xs text-base-500">
                  Escribe el correo electrónico
                </span>
              </div>
              <div className="col-span-12 md:col-start-5 md:col-end-10 my-auto">
                <Input
                  {...register('email')}
                  type="email"
                  placeholder="example@gmail.com"
                  errorState={!!errors.email}
                />
                <ErrorInput message={errors.email?.message} />
              </div>
            </div>

            <Divider />
            <div className="grid grid-cols-12">
              <div className="col-span-12 mb-2 md:col-span-4 md:mb-0 md:pr-2">
                <h5 className="font-semibold">Roles:</h5>
                <span className="text-xs text-base-500">
                  Seleccione los roles del usuario
                </span>
              </div>
              <div className="col-span-12 md:col-start-5 md:col-end-10 my-auto">
                <ul className="flex gap-4 max-md:flex-col">
                  {rolesFilter.map(({ id, type, value }) => (
                    <li key={id}>
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
                    </li>
                  ))}
                </ul>
                <ErrorInput message={errors.roles?.message} />
              </div>
            </div>
            <Divider />
            <div className="grid grid-cols-12">
              <div className="col-span-12 mb-2 md:col-span-4 md:mb-0 md:pr-2">
                <h5 className="font-semibold">Teléfono (opcional)</h5>
                <span className="text-xs text-base-500">
                  Escribe el número de teléfono
                </span>
              </div>
              <div className="col-span-12 md:col-start-5 md:col-end-10 my-auto">
                <Input
                  {...register('phone')}
                  type="text"
                  placeholder="000-000-00-00"
                  errorState={!!errors.phone}
                />
                <ErrorInput message={errors.phone?.message} />
              </div>
            </div>
            <Divider />
            <div className="flex gap-2 justify-end">
              <Button
                type="button"
                onClick={onClose}
                variant="outline-primary"
                size="xs"
                disabled={isSubmitting}
              >
                Cancelar
              </Button>
              <Button
                type="submit"
                variant="primary"
                size="xs"
                disabled={isSubmitting}
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

export default NewUpdateUser;
