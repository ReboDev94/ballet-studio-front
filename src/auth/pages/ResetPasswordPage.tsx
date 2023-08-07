import { Link } from 'react-router-dom';
import { Button, Card, Input, Form } from '@/common/components';

const ResetPasswordPage = () => {
  return (
    <Card className="shadow-none bg-transparent">
      <Card.Body>
        <Form className="space-y-4">
          <h1 className="text-center font-bold text-3xl tracking-wide">
            Restablecer contraseña
          </h1>
          <p className="text-center text-sm font-light">
            Ingresa tu correo electrónico para restablecer tu contraseña
          </p>

          <Form.Label title="Correo electrónico:">
            <Input
              type="email"
              placeholder="admin@admin.com"
              variant="primary"
            />
          </Form.Label>

          <Button block>Enviar correo electrónico</Button>

          <div className="border-b border-base-100"></div>

          <p className="text-xs text-center font-medium hover:underline hover:cursor-pointer">
            <Link to="/auth/login">Iniciar sesión</Link>
          </p>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default ResetPasswordPage;
