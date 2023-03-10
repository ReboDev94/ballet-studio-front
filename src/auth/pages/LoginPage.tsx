import { useState } from 'react';
import { ButtonAd, CardAd, FormInputAd, InputAd } from '../../common/components';

const LoginPage = () => {
  const [first, setfirst] = useState('');

  return (
    <>
      <CardAd
        className="w-96"
        cardBody={
          <div className="space-y-4">
            <h1 className="text-center font-bold text-xl tracking-wide">Iniciar sesión</h1>
            <p className="text-center text-sm font-light">
              Ingresa tu usuario y contraseña para iniciar sesión
            </p>

            <FormInputAd textLT="Usuario:">
              <InputAd
                type="text"
                value={first}
                onChange={(e) => setfirst(e.target.value)}
                placeholder="Ingrese su usuario"
                variant="secondary"
              />
            </FormInputAd>

            <FormInputAd textLT="Contraseña:">
              <InputAd
                type="password"
                value={first}
                onChange={(e) => setfirst(e.target.value)}
                placeholder="Contraseña"
                variant="secondary"
              />
            </FormInputAd>

            <p className="text-xs hover:underline hover:cursor-pointer">
              ¿Tienes problemas para iniciar sesión?
            </p>
            <ButtonAd block>Iniciar</ButtonAd>

            <div className="border-b border-gray-400 border-opacity-50"></div>

            <p className="text-xs text-center">
              ¿No tienes una cuenta?{' '}
              <span className="font-bold hover:underline hover:cursor-pointer">Registrate</span>
            </p>
          </div>
        }
      />
      <span className="text-xs text-center font-light mt-5">
        Derechos reservados @ReboDev 2023 | Aviso de privacidad
      </span>
    </>
  );
};

export default LoginPage;
