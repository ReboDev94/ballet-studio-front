import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Input, Form } from '@/common/components';
import { IconEyeOpen, IconEyeClose } from '@/common/assets/svg';


const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <Card className="shadow-none bg-transparent">
      <Card.Body>
        <Form className="space-y-4">
          <h1 className="text-center font-bold text-3xl tracking-wide">
            Registrate
          </h1>
          <p className="text-center text-sm font-light">
            Ingresa tus datos para registrarte
          </p>
          <Form.Label title="Correo electrónico:">
            <Input
              type="email"
              placeholder="admin@admin.com"
              variant="primary"
            />
          </Form.Label>

          <Form.Label title="Contraseña:">
            <div className="relative">
              <Input
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

          <Form.Label title="Confirmar contraseña:">
            <div className="relative">
              <Input
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="123456789"
                variant="primary"
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
          </Form.Label>

          <Button block>Registrarse</Button>

          <div className="border-b border-gray-400 border-opacity-50"></div>

          <p className="text-xs text-center">
            ¿Ya tienes una cuenta?&nbsp;
            <Link
              className="hover:underline hover:cursor-pointer font-medium"
              to="/auth/login"
            >
              Inicia sesión
            </Link>
          </p>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default RegisterPage;
