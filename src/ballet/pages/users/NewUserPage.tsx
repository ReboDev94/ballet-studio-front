import {
  Avatar,
  Button,
  Card,
  Form,
  Input,
  Textarea,
} from '@/common/components';
import { IconUser } from '@/common/assets/svg';
import { useState } from 'react';

const NewUserPage = () => {
  const [tags, setTags] = useState<string[]>([]);
  const [isOlder, setisOlder] = useState(false);

  return (
    <>
      <Card>
        <Card.Body>
          <h3 className="text-xl text-base-500 font-semibold">
            Nuevo estudiante
          </h3>
          <div className="border-b border-base-100 my-5" />
          <Form>
            <h3 className="text-lg text-primary-800 font-semibold">
              Datos personales
            </h3>
            <div className="w-full my-5">
              <Avatar size="lg" src="https://i.pravatar.cc">
                <IconUser className="fill-white h-14 w-14" />
              </Avatar>
            </div>
            <div className="border-b border-base-100 my-5" />
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
            <div className="border-b border-base-100 my-5" />
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
            <div className="border-b border-base-100 my-5" />
            <div className="grid grid-cols-12">
              <div className="col-span-4 pr-2">
                <h5 className="font-semibold">Fecha de nacimiento:</h5>
                <span className="text-xs text-base-500">
                  Escribe la fecha de nacimiento del estudiantes
                </span>
              </div>
              <div className="col-start-5 col-end-10 my-auto">
                <Input type="date" disabled/>
              </div>
            </div>
            <div className="border-b border-base-100 my-5" />
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
            <div className="border-b border-base-100 my-5" />
            <div className="grid grid-cols-12">
              <div className="col-span-4 pr-2">
                <h5 className="font-semibold">Enfermedades (opcional):</h5>
                <span className="text-xs text-base-500">
                  Describa enfermedades cronicas, operaciones u otro
                  padecimiento.
                </span>
              </div>
              <div className="col-start-5 col-end-10 my-auto">
                {/* <Input type="text" /> */}
                <ul className='text-sm rounded-md border border-base-600'>
                  <li>Operacion de en la </li>
                </ul>
              </div>
            </div>
            {!isOlder && (
              <>
                <div className="border-b border-base-100 my-5" />
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
                <div className="border-b border-base-100 my-5" />
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
                <div className="border-b border-base-100 my-5" />
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
            <div className="border-b border-base-100 my-5" />
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
            <div className="border-b border-base-100 my-5" />
            <div className="flex gap-2 justify-end">
              <Button variant="outline-primary">Cancelar</Button>
              <Button variant="primary" disabled>Guardar</Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default NewUserPage;
