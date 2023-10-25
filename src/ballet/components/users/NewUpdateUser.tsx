import {
  Avatar,
  Button,
  Card,
  Form,
  Input,
  Textarea,
  ListGroup,
  Divider,
} from '@/common/components';
import { IconUser, IconCloseCircle } from '@/common/assets/svg';
import { useState } from 'react';

const NewUpdateUser = () => {
  const [isOlder] = useState(false);

  const [addresses] = useState([
    {
      uid: 'bddd3e80-1cf6-4a27-9889-2eccd9aae068',
      title: 'Hola mundo',
    },
    {
      uid: '2673a4a7-a56e-4105-a7e6-80cde774ea66',
      title: 'Hola mundo',
    },
    {
      uid: 'a631dbdf-0c4d-4a59-990e-683923b98d83',
      title: 'Hola mundo',
    },
  ]);

  return (
    <>
      <Card>
        <Card.Body className="px-2 py-0">
          <Form>
            <h3 className="text-lg text-primary-800 font-semibold">
              Datos personales
            </h3>
            <div className="w-full my-5">
              <Avatar size="lg" src="https://i.pravatar.cc">
                <IconUser className="fill-white h-14 w-14" />
              </Avatar>
            </div>
            <Divider />
            <div className="grid grid-cols-12">
              <div className="col-span-4 pr-2">
                <h5 className="font-semibold">Nombre:</h5>
                <span className="text-xs text-base-500">
                  Escribe el nombre del estudiante
                </span>
              </div>
              <div className="col-start-5 col-end-10 my-auto">
                <Input type="text" placeholder="Yaretzin Araujo Delgado" />
              </div>
            </div>
            <Divider />
            <div className="grid grid-cols-12">
              <div className="col-span-4 pr-2">
                <h5 className="font-semibold">Fotografía (opcional):</h5>
                <span className="text-xs text-base-500">
                  Selecciona una fotografía para identitifcar al estudiante
                </span>
              </div>
              <div className="col-start-5 col-end-10 my-auto">
                <Input type="file" />
              </div>
            </div>
            <Divider />
            <div className="grid grid-cols-12">
              <div className="col-span-4 pr-2">
                <h5 className="font-semibold">Fecha de nacimiento:</h5>
                <span className="text-xs text-base-500">
                  Escribe la fecha de nacimiento del estudiantes
                </span>
              </div>
              <div className="col-start-5 col-end-10 my-auto">
                <Input type="date" />
              </div>
            </div>
            <Divider />
            <div className="grid grid-cols-12">
              <div className="col-span-4 pr-2">
                <h5 className="font-semibold">Dirección</h5>
                <span className="text-xs text-base-500">
                  Escribe el nombre de tu calle, no.exterior, no.interior,
                  colonia, codigo postal y alguna referencia.
                </span>
              </div>
              <div className="col-start-5 col-end-10 my-auto">
                <Textarea
                  placeholder="Dirección"
                  rows={3}
                  className="resize-none"
                />
              </div>
            </div>
            <Divider />
            <div className="grid grid-cols-12">
              <div className="col-span-4 pr-2">
                <h5 className="font-semibold">Enfermedades (opcional):</h5>
                <span className="text-xs text-base-500">
                  Describa enfermedades cronicas, operaciones u otro
                  padecimiento.
                </span>
              </div>
              <div className="col-start-5 col-end-10 my-auto">
                <Input type="text" placeholder="Obesidad" className="mb-4" />

                <ListGroup>
                  {addresses.map(({ uid, title }) => (
                    <ListGroup.Item key={uid} variant="primary">
                      <div className="w-full h-full flex items-center justify-between">
                        <span className="flex-1 line-clamp-1">{title}</span>
                        <button type="button">
                          <IconCloseCircle className="fill-primary-800 h-6 w-6" />
                        </button>
                      </div>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </div>
            </div>
            {!isOlder && (
              <>
                <Divider />
                <h3 className="text-lg text-primary-800 font-semibold mb-5 ">
                  Datos del tutor
                </h3>
                <div className="grid grid-cols-12">
                  <div className="col-span-4 pr-2">
                    <h5 className="font-semibold">Nombre:</h5>
                    <span className="text-xs text-base-500">
                      Escribe el nombre del tutor
                    </span>
                  </div>
                  <div className="col-start-5 col-end-10 my-auto">
                    <Input type="text" placeholder="Yaretzin Araujo Delgado" />
                  </div>
                </div>
                <Divider />
                <div className="grid grid-cols-12">
                  <div className="col-span-4 pr-2">
                    <h5 className="font-semibold">
                      Correo electrónico (opcional):
                    </h5>
                    <span className="text-xs text-base-500">
                      Escribe el correo electrónico del tutor
                    </span>
                  </div>
                  <div className="col-start-5 col-end-10 my-auto">
                    <Input type="email" placeholder="example@gmail.com" />
                  </div>
                </div>
                <Divider />
                <div className="grid grid-cols-12">
                  <div className="col-span-4 pr-2">
                    <h5 className="font-semibold">Teléfono fijo (opcional):</h5>
                    <span className="text-xs text-base-500">
                      Escribe el número de teléfono del tutor
                    </span>
                  </div>
                  <div className="col-start-5 col-end-10 my-auto">
                    <Input type="text" placeholder="000-000-00-00" />
                  </div>
                </div>
              </>
            )}
            <Divider />
            <div className="grid grid-cols-12">
              <div className="col-span-4 pr-2">
                <h5 className="font-semibold">Teléfono celular</h5>
                <span className="text-xs text-base-500">
                  Escribe el número de teléfono celular del tutor
                </span>
              </div>
              <div className="col-start-5 col-end-10 my-auto">
                <Input type="text" placeholder="000-000-00-00" />
              </div>
            </div>
            <Divider />
            <div className="flex gap-2 justify-end">
              <Button variant="outline-primary">Cancelar</Button>
              <Button variant="primary">Guardar</Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default NewUpdateUser;
