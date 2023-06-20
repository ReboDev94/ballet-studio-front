import { Link } from 'react-router-dom';
import { ButtonAd, CardAd, FormInputAd, InputAd } from '@/common/components';

const ResetPasswordPage = () => {
  return (
    <CardAd
      className="w-full"
      cardBody={
        <div className="space-y-4">
          <h1 className="text-center font-bold text-3xl tracking-wide">
            Restablecer contraseña
          </h1>
          <p className="text-center text-sm font-light">
            Ingresa tu correo electrónico para restablecer tu contraseña
          </p>

          <FormInputAd textLT="Correo electrónico:">
            <InputAd
              type="email"
              placeholder="admin@admin.com"
              variant="primary"
            />
          </FormInputAd>

          <ButtonAd block>Enviar correo electrónico</ButtonAd>

          <div className="border-b border-gray-400 border-opacity-50"></div>

          <p className="text-xs text-center font-medium hover:underline hover:cursor-pointer">
            <Link to="/auth/login">Iniciar sesión</Link>
          </p>
        </div>
      }
    />
  );
};

export default ResetPasswordPage;
