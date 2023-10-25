import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Button,
  Card,
  Input,
  Form,
  Divider,
  ErrorInput,
} from '@/common/components';
import { SchemaValidationSendEmail } from '../validations';
import { ISendEmailResetPassword } from '../interfaces';
import { useAppDispatch } from '@/store/hooks';
import { sendEmailResetPasswordThunk } from '@/store/modules/auth/thunks';
import { LOADING_SEND_EMAIL } from '../constants';

const optToast = { id: 'reset-password' };

const ResetPasswordPage = () => {
  const dispatch = useAppDispatch();
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ISendEmailResetPassword>({
    mode: 'onSubmit',
    defaultValues: {
      email: '',
    },
    resolver: yupResolver(SchemaValidationSendEmail),
  });

  const onSubmit: SubmitHandler<ISendEmailResetPassword> = async data => {
    toast.loading(LOADING_SEND_EMAIL, optToast);
    await dispatch(sendEmailResetPasswordThunk(data.email))
      .unwrap()
      .then(success => {
        reset();
        toast.success(success, optToast);
      })
      .catch(error => toast.error(error, optToast));
  };
  return (
    <Card className="shadow-none bg-transparent">
      <Card.Body>
        <Form
          className="space-y-4"
          onSubmit={handleSubmit(onSubmit)}
          autoComplete="new-password"
        >
          <h1 className="text-center font-bold text-3xl tracking-wide">
            Restablecer contraseña
          </h1>
          <p className="text-center text-sm font-light">
            Ingresa tu correo electrónico para restablecer tu contraseña
          </p>

          <Form.Label title="Correo electrónico:">
            <Input
              {...register('email')}
              autoComplete="new-password"
              type="email"
              placeholder="admin@admin.com"
              variant="primary"
              errorState={!!errors.email}
            />
            <ErrorInput message={errors.email?.message} />
          </Form.Label>

          <Button type="submit" disabled={isSubmitting} block>
            Enviar correo electrónico
          </Button>

          <Divider />

          <p className="text-xs text-center font-medium hover:underline hover:cursor-pointer">
            <Link to="/auth/login">Iniciar sesión</Link>
          </p>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default ResetPasswordPage;
