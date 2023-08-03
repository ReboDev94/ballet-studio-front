import { Card, Avatar, Input, Button } from '@/common/components';

const ProfilePage = () => {
  return (
    <Card>
      <Card.Body>
        <h3 className="text-xl text-base-500 font-semibold">Perfil</h3>
        <div className="border-b border-base-100 my-5" />
        <div className="flex items-center gap-4">
          <Avatar size="lg" title="RJ" border />
          <div className="flex flex-col gap-1">
            <h2 className="text-3xl text-primary-800 font-semibold">
              Rafael De Jesus Rebolledo Hernandez
            </h2>
            <span className="text-xs">
              Administrador, Maestro(a), Recepcionista
            </span>
          </div>
        </div>
        <div className="border-b border-base-100 my-5" />
        <div className="grid grid-cols-12">
          <div className="col-span-4">
            <h5 className="font-semibold">Nombre</h5>
            <span className="text-xs text-base-500">
              Escribe tu nombre completo
            </span>
          </div>
          <div className="col-start-5 col-end-10 my-auto">
            <Input type="text" placeholder="Yaretzin Araujo Delgado" />
          </div>
        </div>
        <div className="border-b border-base-100 my-5" />
        <div className="grid grid-cols-12">
          <div className="col-span-4">
            <h5 className="font-semibold">Correo electrónico</h5>
            <span className="text-xs text-base-500">
              Escribe tu correo electrónico
            </span>
          </div>
          <div className="col-start-5 col-end-10 my-auto">
            <Input type="email" placeholder="example@balletstudio.com" />
          </div>
        </div>
        <div className="border-b border-base-100 my-5" />
        <div className="grid grid-cols-12">
          <div className="col-span-4">
            <h5 className="font-semibold">Teléfono</h5>
            <span className="text-xs text-base-500">
              Escribe tu número de teléfono
            </span>
          </div>
          <div className="col-start-5 col-end-10 my-auto">
            <Input type="text" placeholder="000-000-00-00" />
          </div>
        </div>
        <div className="border-b border-base-100 my-5" />
        <div className="flex gap-2 justify-end">
          <Button variant="outline-primary">Cancelar</Button>
          <Button variant="primary">Guardar</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProfilePage;
