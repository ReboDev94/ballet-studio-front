import { useState } from 'react';
import { ButtonAd, CardAd, FormInputAd, InputAd } from '@/common/components';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const [first, setfirst] = useState('');

  return (
    <div className="flex flex-col">
      <CardAd
        className="w-full"
        cardBody={
          <div className="space-y-4">
            <h1 className="text-center font-bold text-3xl tracking-wide">
              Iniciar sesión
            </h1>
            <p className="text-center text-sm font-light">
              Ingresa tu usuario y contraseña para iniciar sesión
            </p>

            <FormInputAd textLT="Usuario:">
              <InputAd
                type="text"
                value={first}
                onChange={e => setfirst(e.target.value)}
                placeholder="Ingrese su usuario"
                variant="primary"
              />
            </FormInputAd>

            <FormInputAd textLT="Contraseña:">
              <InputAd
                type="password"
                value={first}
                onChange={e => setfirst(e.target.value)}
                placeholder="Contraseña"
                variant="primary"
              />
            </FormInputAd>

            <p className="text-xs hover:underline hover:cursor-pointer font-medium">
              ¿Tienes problemas para iniciar sesión?
            </p>
            <ButtonAd block>Iniciar</ButtonAd>

            <div className="border-b border-gray-400 border-opacity-50"></div>

            <p
              className="text-xs text-center"
              onClick={() => navigate('/auth/register')}
            >
              ¿ No tienes una cuenta ? &nbsp;
              <span className="font-medium hover:underline hover:cursor-pointer">
                Contactame
              </span>
            </p>
          </div>
        }
      />
      <span className="text-xs text-center font-light mt-5">
        Derechos reservados @ReboDev 2023 | Aviso de privacidad
      </span>
    </div>
  );
};

export default LoginPage;
