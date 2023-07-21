import { Link } from 'react-router-dom';
import { Button, Card, CardBody, InputLabel, Input } from '@/common/components';

const ResetPasswordPage = () => {
  return (
    <Card className="shadow-none bg-transparent">
      <CardBody>
        <div className="space-y-4">
          <h1 className="text-center font-bold text-3xl tracking-wide">
            Restablecer contraseña
          </h1>
          <p className="text-center text-sm font-light">
            Ingresa tu correo electrónico para restablecer tu contraseña
          </p>

          <InputLabel textLT="Correo electrónico:">
            <Input
              type="email"
              placeholder="admin@admin.com"
              variant="primary"
            />
          </InputLabel>

          <Button block>Enviar correo electrónico</Button>

          <div className="border-b border-gray-400 border-opacity-50"></div>

          <p className="text-xs text-center font-medium hover:underline hover:cursor-pointer">
            <Link to="/auth/login">Iniciar sesión</Link>
          </p>
        </div>
      </CardBody>
    </Card>
  );
};

export default ResetPasswordPage;
