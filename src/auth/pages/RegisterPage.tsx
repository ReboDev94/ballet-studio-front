import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import toast from 'react-hot-toast';
import {
  Button,
  Card,
  Input,
  Form,
  Divider,
  ErrorInput,
} from '@/common/components';
import { IconEyeOpen, IconEyeClose } from '@/common/assets/svg';
import { SchemaValidationRegister } from '../validations';
import { PasswordValidations } from '../components';
import { IRegisterRequest, RegisterTypes } from '../interfaces';
import { LOADING_REGISTER_USER } from '../constants';
import { useAppDispatch } from '@/store/hooks';
import { registerThunk } from '@/store/modules/auth/thunks';
import { Errors } from '@/common/interfaces';
import { getCustomErrors } from '@/common/utils';

const optToast = { id: 'register' };
const RegisterPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<IRegisterRequest>({
    mode: 'onSubmit',
    resolver: yupResolver(SchemaValidationRegister),
  });

  const password = watch('password');

  const onSubmit: SubmitHandler<IRegisterRequest> = async data => {
    toast.loading(LOADING_REGISTER_USER, optToast);
    await dispatch(registerThunk(data))
      .unwrap()
      .then(success => {
        navigate('/auth/login');
        toast.success(success, optToast);
      })
      .catch((errors: Errors[] | string) => {
        Array.isArray(errors) &&
          errors.map(({ property, message }) => {
            const { error, config } = getCustomErrors(message);
            setError(property as RegisterTypes, error, config);
          });
        typeof errors === 'string' && toast.error(errors, optToast);
      });
  };
  return (
    <Card className="shadow-none bg-transparent">
      <Card.Body>
        <Form
          className="space-y-4"
          autoComplete="off"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className="text-center font-bold text-3xl tracking-wide">
            Registrate
          </h1>
          <p className="text-center text-sm font-light">
            Ingresa tus datos para registrarte
          </p>
          <Form.Label title="Correo electrónico:">
            <Input
              {...register('email')}
              type="email"
              placeholder="admin@admin.com"
              variant="primary"
              autoComplete="new-username"
              errorState={!!errors.email}
            />
            <ErrorInput message={errors.email?.message} />
          </Form.Label>

          <Form.Label title="Contraseña:">
            <div className="relative">
              <Input
                {...register('password')}
                type={showPassword ? 'text' : 'password'}
                variant="primary"
                autoComplete="new-password"
                errorState={!!errors.password}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center cursor-pointe px-2"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <IconEyeOpen className="h-6 w-6 fill-base-600" />
                ) : (
                  <IconEyeClose className="h-6 w-6 fill-base-600" />
                )}
              </button>
            </div>
            <ErrorInput message={errors.password?.message} />
          </Form.Label>

          <Form.Label title="Confirmar contraseña:">
            <div className="relative">
              <Input
                {...register('confirmPassword')}
                type={showConfirmPassword ? 'text' : 'password'}
                variant="primary"
                autoComplete="new-password"
                errorState={!!errors.confirmPassword}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center cursor-pointe px-2"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
                  <IconEyeOpen className="h-6 w-6 fill-base-600" />
                ) : (
                  <IconEyeClose className="h-6 w-6 fill-base-600" />
                )}
              </button>
            </div>
            <ErrorInput message={errors.confirmPassword?.message} />
          </Form.Label>

          <PasswordValidations password={password} />

          <Button type="submit" block disabled={isSubmitting}>
            Registrarse
          </Button>

          <Divider />
          <p className="text-xs text-center">
            ¿Ya tienes una cuenta?&nbsp;
            <Link
              className="hover:underline hover:cursor-pointer font-medium"
              to="/auth/login"
            >
              Inicia sesión
            </Link>
          </p>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default RegisterPage;
