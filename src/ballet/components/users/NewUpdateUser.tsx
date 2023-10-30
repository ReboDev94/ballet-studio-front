/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import toast from 'react-hot-toast';
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
import {
  LOADING_CREATE_USER,
  LOADING_UPDATE_USER,
  ROLES_LABEL,
  TypeRoles,
  getAllRolesSelectable,
  typeEnumRoles,
} from '@/auth/constants';
import { useAppDispatch } from '@/store/hooks';
import { updateOrcreateUserThunk } from '@/store/modules/auth/thunks';
import { Errors } from '@/common/interfaces';
import { getCustomErrors } from '@/common/utils';
import { IUserAll } from '@/auth/interfaces';

const optToast = { id: 'create-user' };

const DEFAULT_USER = {
  id: undefined,
  name: '',
  email: '',
  phone: '',
  roles: [],
};
interface INewUpdateUser {
  user?: IUserAll;
  onSuccess?: () => void;
  onClose?: () => void;
}

const NewUpdateUser: React.FC<INewUpdateUser> = ({
  user = DEFAULT_USER,
  onSuccess = () => {},
  onClose = () => {},
}) => {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<INewOrUpdateUser>({
    mode: 'onSubmit',
    defaultValues: {
      id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      roles: user.roles.map(({ slug }) => TypeRoles[slug as typeEnumRoles]),
    },
    resolver: yupResolver(SchemaNewOrUpdateUser),
  });

  const onSubmit: SubmitHandler<INewOrUpdateUser> = async data => {
    const { id } = data;
    toast.loading(id ? LOADING_UPDATE_USER : LOADING_CREATE_USER, optToast);
    await dispatch(updateOrcreateUserThunk(data))
      .unwrap()
      .then(success => {
        onSuccess();
        onClose();
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
                  {getAllRolesSelectable().map(({ id, type }) => (
                    <li key={id}>
                      <label
                        htmlFor={id}
                        className="flex gap-2 items-center select-none cursor-pointer text-xs"
                      >
                        <Checkbox {...register('roles')} id={id} value={type} />
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
