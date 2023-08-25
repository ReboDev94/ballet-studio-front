import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Toaster, toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Card, Form, Input, Divider } from '@/common/components';
import { ILoginRequest } from '@/auth/interfaces';
import { SchemaValidationLogin } from '@/auth/validations';
import { useAppDispatch } from '@/store/hooks';
import { IconEyeOpen, IconEyeClose } from '@/common/assets/svg';
import { loginThunk } from '@/store/modules/auth/thunks';
import { DEFAULT_TOAST_OPTIONS } from '@/common/constants';
import {
  INCORRECT_CREDENTIALS,
  SING_IN_LOADING,
  SING_IN_SUCCESS,
} from '@/auth/constants';

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const { register, handleSubmit } = useForm<ILoginRequest>({
    mode: 'onSubmit',
    defaultValues: {
      email: 'admin1@gmail.com',
      password: 'HolaMundo1234#',
    },
    resolver: yupResolver(SchemaValidationLogin),
  });

  const onSubmit: SubmitHandler<ILoginRequest> = data => {
    const promise = dispatch(loginThunk(data)).unwrap();
    toast.promise(
      promise,
      {
        loading: SING_IN_LOADING,
        success: SING_IN_SUCCESS,
        error: INCORRECT_CREDENTIALS,
      },
      { id: 'login' },
    );
  };

  return (
    <>
      <Card className="shadow-none bg-transparent">
        <Card.Body>
          <Form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <h1 className="text-center font-bold text-3xl tracking-wide">
              Iniciar sesión
            </h1>
            <p className="text-center text-sm font-light">
              Ingresa tu correo electrónico y contraseña para iniciar sesión
            </p>

            <Form.Label title="Correo electrónico:">
              <Input
                {...register('email')}
                id="email"
                type="email"
                placeholder="admin@admin.com"
                variant="primary"
              />
            </Form.Label>

            <Form.Label title="Contraseña:">
              <div className="relative">
                <Input
                  {...register('password')}
                  type={showPassword ? 'text' : 'password'}
                  placeholder="123456789"
                  variant="primary"
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
            </Form.Label>

            <Link
              to="/auth/reset-password"
              className="text-xs hover:underline hover:cursor-pointer font-medium"
            >
              ¿Tienes problemas para iniciar sesión?
            </Link>

            <Button block type="submit">
              Iniciar
            </Button>

            <Divider />

            <p
              className="text-xs text-center"
              onClick={() => navigate('/auth/register')}
            >
              ¿ No tienes una cuenta ? &nbsp;
              <span className="font-medium hover:underline hover:cursor-pointer">
                Registrate
              </span>
            </p>
          </Form>
        </Card.Body>
      </Card>
      <Toaster {...DEFAULT_TOAST_OPTIONS} />
    </>
  );
};

export default LoginPage;
