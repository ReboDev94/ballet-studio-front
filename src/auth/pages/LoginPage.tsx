import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { Button, Card, Form, Input, Divider } from '@/common/components';
import { ILoginRequest } from '@/auth/interfaces';
import { SchemaValidationLogin } from '@/auth/validations';
import { useAppDispatch } from '@/store/hooks';
import { IconEyeOpen, IconEyeClose } from '@/common/assets/svg';
import { loginThunk } from '@/store/modules/auth/thunks';
import { SING_IN_LOADING } from '@/auth/constants';

const optToast = { id: 'login' };

const LoginPage = () => {
  const dispatch = useAppDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<ILoginRequest>({
    mode: 'onSubmit',
    defaultValues: {
      email: 'rrrrebolledohdz@gmail.com',
      password: 'KuroTaroYare123#',
    },
    resolver: yupResolver(SchemaValidationLogin),
  });

  const onSubmit: SubmitHandler<ILoginRequest> = async data => {
    toast.loading(SING_IN_LOADING, optToast);
    await dispatch(loginThunk(data))
      .unwrap()
      .then(success => toast.success(success, optToast))
      .catch(error => toast.error(error, optToast));
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
              to="/auth/reset/password"
              className="text-xs hover:underline hover:cursor-pointer font-medium"
            >
              ¿Tienes problemas para iniciar sesión?
            </Link>

            <Button block disabled={isSubmitting} type="submit">
              Iniciar
            </Button>

            <div className="flex justify-center text-xs">
              ¿Aun no tienes una cuenta?&nbsp;
              <Link
                to="/auth/register"
                className=" hover:underline hover:cursor-pointer font-medium"
              >
                Registrate
              </Link>
            </div>

            <Divider />
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default LoginPage;
