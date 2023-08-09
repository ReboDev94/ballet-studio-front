import { useState } from 'react';
import { Button, Card, Divider, Form, Input } from '@/common/components';
import { IconEyeOpen, IconEyeClose } from '@/common/assets/svg';

const ConfirmPasswordPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <Card className="shadow-none bg-transparent">
      <Card.Body>
        <Form className="space-y-4">
          <h1 className="text-center font-bold text-3xl tracking-wide">
            Confirmar contraseña
          </h1>
          <p className="text-center text-sm font-light">
            Ingresa tu nueva contraseña
          </p>
          <Form.Label title="Correo electrónico:">
            <Input
              type="email"
              placeholder="admin@admin.com"
              variant="primary"
              disabled
            />
          </Form.Label>
          <Form.Label title="Nueva contraseña:">
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
          <Button block>Confirmar contraseña</Button>
          <Divider />
        </Form>
      </Card.Body>
    </Card>
  );
};

export default ConfirmPasswordPage;
