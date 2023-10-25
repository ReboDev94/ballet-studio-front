import { IconUser } from '@/common/assets/svg';
import {
  Card,
  Avatar,
  Input,
  Button,
  Divider,
  ErrorInput,
} from '@/common/components';
import toast from 'react-hot-toast';
import { IMAGE_TYPE_SUPPORT } from '@/common/constants';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { ChangeEvent } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { SchemaUpdateUser } from '@/ballet/validations';
import { useNavigate } from 'react-router-dom';
import { IUserForm, UserTypes } from '@/auth/interfaces';
import { updateProfileThunk } from '@/store/modules/auth/thunks';
import { getCustomErrors } from '@/common/utils';
import {
  ERROR_SAVE_UPDATE_PROFILE,
  LOADING_UPDATE_PROFILE,
  SAVE_UPDATE_PROFILE,
} from '@/auth/constants';
import { useRoles } from '@/auth/hooks';
import { Errors } from '@/common/interfaces';
const optToast = { id: 'update-user' };
const ProfilePage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { allRoles } = useRoles();

  const {
    user: { email, name, phone, photo },
  } = useAppSelector(state => state.auth);

  const userForm = useForm<IUserForm>({
    mode: 'onSubmit',
    defaultValues: {
      name,
      phone,
      email,
      file: null,
    },
    resolver: yupResolver(SchemaUpdateUser),
  });

  const {
    register,
    watch,
    setValue,
    trigger,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = userForm;

  const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setValue('file', e.target.files[0]);
    } else {
      setValue('file', null);
    }
    trigger('file');
  };

  const submit: SubmitHandler<IUserForm> = async data => {
    toast.loading(LOADING_UPDATE_PROFILE, optToast);
    await dispatch(updateProfileThunk(data))
      .unwrap()
      .then(() => toast.success(SAVE_UPDATE_PROFILE, optToast))
      .catch((errors: Errors[] | string) => {
        Array.isArray(errors) &&
          errors.map(({ property, message }) => {
            const { error, config } = getCustomErrors(message);
            setError(property as UserTypes, error, config);
          });
        const message =
          typeof errors === 'string' ? errors : ERROR_SAVE_UPDATE_PROFILE;
        toast.error(message, optToast);
      });
  };

  return (
    <Card>
      <Card.Body>
        <h3 className="text-xl text-base-500 font-semibold">Perfil</h3>
        <Divider />
        <div className="flex items-center gap-4">
          <Avatar size="lg" src={photo}>
            <IconUser className="fill-white h-14 w-14" />
          </Avatar>
          <div className="flex flex-col gap-1">
            <h2 className="text-3xl text-primary-800 font-semibold">
              {watch('name')}
            </h2>
            <span className="text-xs">{allRoles}</span>
          </div>
        </div>
        <Divider />
        <div className="grid grid-cols-12">
          <div className="col-span-4 pr-2">
            <h5 className="font-semibold">Nombre</h5>
            <span className="text-xs text-base-500">
              Escribe tu nombre completo
            </span>
          </div>
          <div className="col-start-5 col-end-10 my-auto">
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
          <div className="col-span-4 pr-2">
            <h5 className="font-semibold">Correo electrónico</h5>
            <span className="text-xs text-base-500">
              Escribe tu correo electrónico
            </span>
          </div>
          <div className="col-start-5 col-end-10 my-auto">
            <Input
              {...register('email')}
              type="email"
              placeholder="example@balletstudio.com"
              errorState={!!errors.email}
            />
            <ErrorInput message={errors.email?.message} />
          </div>
        </div>
        <Divider />
        <div className="grid grid-cols-12">
          <div className="col-span-4 pr-2">
            <h5 className="font-semibold">Teléfono (opcional)</h5>
            <span className="text-xs text-base-500">
              Escribe tu número de teléfono
            </span>
          </div>
          <div className="col-start-5 col-end-10 my-auto">
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

        <div className="grid grid-cols-12">
          <div className="col-span-12 mb-2 md:col-span-4 md:mb-0 md:pr-2">
            <h5 className="font-semibold">Foto (opcional):</h5>
            <span className="text-xs text-base-500">
              Selecciona una imagen para tu foto de perfil
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
        <div className="flex gap-2 justify-end">
          <Button
            type="button"
            variant="outline-primary"
            disabled={isSubmitting}
            onClick={() => navigate('/dashboard')}
          >
            Cancelar
          </Button>
          <Button
            variant="primary"
            type="submit"
            disabled={isSubmitting}
            onClick={handleSubmit(submit)}
          >
            Guardar
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProfilePage;
