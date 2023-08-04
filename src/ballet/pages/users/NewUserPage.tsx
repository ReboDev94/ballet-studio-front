import { Avatar, Card, Form, Input, Textarea } from '@/common/components';
import { IconUser } from '@/common/assets/svg';

const NewUserPage = () => {
  return (
    <>
      <Card>
        <Card.Body>
          <h3 className="text-xl text-base-500 font-semibold">
            Nuevo estudiante
          </h3>
          <div className="border-b border-base-100 my-5" />
          <h3 className="text-lg text-base-500 font-semibold">
            Datos personales
          </h3>
          <Form>
            <div className="flex flex-wrap -mx-2 my-5">
              <div className="w-full px-2 py-3">
                <Avatar size="lg" src="https://i.pravatar.cc">
                  <IconUser className="fill-white h-14 w-14" />
                </Avatar>
              </div>
              <div className="w-1/2 px-2 py-3">
                <Form.Label title="Nombre completo:">
                  <Input type="text" placeholder="Yaretzin Araujo Delgado" />
                </Form.Label>
              </div>
              <div className="w-1/2 px-2 py-3">
                <Form.Label title="Fecha de nacimiento:">
                  <Input type="date" />
                </Form.Label>
              </div>

              <div className="w-1/2 px-2 py-3">
                <Form.Label title="Dirección:">
                  <Textarea
                    rows={2}
                    placeholder="Av.Gobernadores"
                    className="resize-none"
                  />
                </Form.Label>
              </div>
              <div className="w-1/2 px-2 py-3">
                <Form.Label title="Enfermedades:">
                  <Textarea rows={2} placeholder="Av.Gobernadores" />
                </Form.Label>
              </div>
            </div>

            <h3 className="text-lg text-base-500 font-semibold">
              Datos del tutor
            </h3>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default NewUserPage;
