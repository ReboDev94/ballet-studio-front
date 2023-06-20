import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ButtonAd, CardAd, FormInputAd, InputAd } from '@/common/components';

const LoginPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <CardAd
      className="w-full"
      cardBody={
        <div className="space-y-4">
          <h1 className="text-center font-bold text-3xl tracking-wide">
            Iniciar sesión
          </h1>
          <p className="text-center text-sm font-light">
            Ingresa tu correo electrónico y contraseña para iniciar sesión
          </p>

          <FormInputAd textLT="Correo electrónico:">
            <InputAd
              type="email"
              placeholder="admin@admin.com"
              variant="primary"
            />
          </FormInputAd>

          <FormInputAd textLT="Contraseña:">
            <div className="relative">
              <InputAd
                type={showPassword ? 'text' : 'password'}
                placeholder="123456789"
                variant="primary"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center cursor-pointe px-2"
                onClick={() => setShowPassword(!showPassword)}
              >
                <img
                  src={
                    showPassword
                      ? '/assets/icons/eye.svg'
                      : '/assets/icons/eye-off.svg'
                  }
                  alt="eye"
                  className="h-6 w-6"
                />
              </button>
            </div>
          </FormInputAd>

          <Link
            to="/auth/reset-password"
            className="text-xs hover:underline hover:cursor-pointer font-medium"
          >
            ¿Tienes problemas para iniciar sesión?
          </Link>

          <ButtonAd block>Iniciar</ButtonAd>

          <div className="border-b border-gray-400 border-opacity-50"></div>

          <p
            className="text-xs text-center"
            onClick={() => navigate('/auth/register')}
          >
            ¿ No tienes una cuenta ? &nbsp;
            <span className="font-medium hover:underline hover:cursor-pointer">
              Registrate
            </span>
          </p>
        </div>
      }
    />
  );
};

export default LoginPage;
