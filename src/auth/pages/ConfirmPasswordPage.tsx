import { useEffect, useMemo, useState } from 'react';
import toast from 'react-hot-toast';
import {
  Button,
  Card,
  Divider,
  Form,
  Input,
  Radio,
  ErrorInput,
} from '@/common/components';
import { IconEyeOpen, IconEyeClose } from '@/common/assets/svg';
import { useParams, useSearchParams } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { SchemaValidationResetPassword } from '../validations';
import { IResetPassword } from '../interfaces';
import { useAppDispatch } from '@/store/hooks';
import { loginThunk, updatePasswordThunk } from '@/store/modules/auth/thunks';
import { LOADING_RESET_PASSWORD } from '../constants';

const optToast = { id: 'confirm-password' };

const ConfirmPasswordPage = () => {
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const params = useParams();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<IResetPassword>({
    mode: 'onSubmit',
    resolver: yupResolver(SchemaValidationResetPassword),
  });

  const onSubmit: SubmitHandler<IResetPassword> = async data => {
    const { email, password } = data;
    toast.loading(LOADING_RESET_PASSWORD, optToast);
    await dispatch(updatePasswordThunk(data))
      .unwrap()
      .then(async success => {
        await dispatch(loginThunk({ email, password }));
        toast.success(success, optToast);
      })
      .catch(error => toast.error(error, optToast));
  };

  const password = watch('password');
  const { lower, upper, digit, character } = useMemo(() => {
    return {
      lower: /[a-z]/.test(password),
      upper: /[A-Z]/.test(password),
      digit: /\d/.test(password),
      character: /[#$@!%&*?]/.test(password),
    };
  }, [password]);

  useEffect(() => {
    setValue('email', searchParams.get('email') as string);
    setValue('token', params['token'] as string);
  }, []);

  return (
    <Card className="shadow-none bg-transparent">
      <Card.Body>
        <Form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-center font-bold text-3xl tracking-wide">
            Confirmar contraseña
          </h1>
          <p className="text-center text-sm font-light">
            Ingresa tu nueva contraseña
          </p>
          <Form.Label title="Correo electrónico:">
            <Input
              {...register('email')}
              type="email"
              placeholder="admin@admin.com"
              variant="primary"
              disabled
              readOnly
              errorState={!!errors.email}
            />
            <ErrorInput message={errors.email?.message} />
          </Form.Label>
          <Form.Label title="Nueva contraseña:">
            <div className="relative">
              <Input
                {...register('password')}
                type={showPassword ? 'text' : 'password'}
                variant="primary"
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

          <ul className="space-y-2 text-xs">
            <li>
              <label htmlFor="lower" className="flex gap-2 items-start">
                <Radio id="lower" disabled checked={lower} />
                Debe contener al menos una letra minúscula.
              </label>
            </li>
            <li>
              <label htmlFor="upper" className="flex gap-2 items-start">
                <Radio id="upper" disabled checked={upper} />
                Debe contener al menos una letra mayúscula
              </label>
            </li>
            <li>
              <label htmlFor="digit" className="flex gap-2 items-start">
                <Radio id="digit" disabled checked={digit} />
                Debe contener al menos un dígito
              </label>
            </li>
            <li>
              <label htmlFor="character" className="flex gap-2 items-start">
                <Radio id="character" disabled checked={character} />
                Debe contener al menos un carácter especial entre #, $, @, !, %,
                &, *, o ?
              </label>
            </li>
          </ul>

          <Button type="submit" disabled={isSubmitting} block>
            Confirmar contraseña
          </Button>
          <Divider />
        </Form>
      </Card.Body>
    </Card>
  );
};

export default ConfirmPasswordPage;
