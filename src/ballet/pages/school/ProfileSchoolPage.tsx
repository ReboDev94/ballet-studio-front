import { useState } from 'react';
import {
  Avatar,
  Card,
  Input,
  Textarea,
  Button,
  ListGroup,
  Divider,
} from '@/common/components';
import { IconCloseCircle, IconSchool } from '@/common/assets/svg';

const ProfileSchoolPage = () => {
  const [certifications, setCertitications] = useState([
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
    <Card>
      <Card.Body>
        <h3 className="text-xl text-base-500 font-semibold">Perfil escuela</h3>
        <Divider />
        <div className="flex items-center gap-4">
          <Avatar size="lg" src="https://i.pravatar.cc">
            <IconSchool className="fill-white h-14 w-14" />
          </Avatar>
          <div className="flex flex-col gap-1">
            <h2 className="text-3xl text-primary-800 font-semibold">
              Ballet Studio
            </h2>
            <span className="font-semibold text-lg">Dalia Nava</span>
            <span className="text-xs">Av Gobernadores #24</span>
          </div>
        </div>
        <Divider />
        <div className="grid grid-cols-12">
          <div className="col-span-4 pr-2">
            <h5 className="font-semibold">Nombre de la institución</h5>
            <span className="text-xs text-base-500">
              Escribe el nombre de la institución
            </span>
          </div>
          <div className="col-start-5 col-end-10 my-auto">
            <Input type="text" placeholder="Ballet Studio" />
          </div>
        </div>
        <Divider />
        <div className="grid grid-cols-12">
          <div className="col-span-4 pr-2">
            <h5 className="font-semibold">Nombre del (a) director (a)</h5>
            <span className="text-xs text-base-500">
              Escribe el nombre del (a) director (a) de la institución
            </span>
          </div>
          <div className="col-start-5 col-end-10 my-auto">
            <Input type="text" placeholder="Dalia Nava" />
          </div>
        </div>
        <Divider />
        <div className="grid grid-cols-12">
          <div className="col-span-4 pr-2">
            <h5 className="font-semibold">Logo (opcional):</h5>
            <span className="text-xs text-base-500">
              Selecciona la imagen para el logo de la institución
            </span>
          </div>
          <div className="col-start-5 col-end-10 my-auto">
            <Input type="file" />
          </div>
        </div>
        <Divider />
        <div className="grid grid-cols-12">
          <div className="col-span-4 pr-2">
            <h5 className="font-semibold">Descripción (opcional):</h5>
            <span className="text-xs text-base-500">
              Escribe una reseña o comentario sobre la institución
            </span>
          </div>
          <div className="col-start-5 col-end-10 my-auto">
            <Textarea
              placeholder="Descripción"
              rows={3}
              className="resize-none"
            />
          </div>
        </div>
        <Divider />
        <div className="grid grid-cols-12">
          <div className="col-span-4 pr-2">
            <h5 className="font-semibold">Teléfono (opcional):</h5>
            <span className="text-xs text-base-500">
              Escribe el número de teléfono de la institución
            </span>
          </div>
          <div className="col-start-5 col-end-10 my-auto">
            <Input type="text" placeholder="000-000-00-00" />
          </div>
        </div>
        <Divider />
        <div className="grid grid-cols-12">
          <div className="col-span-4 pr-2">
            <h5 className="font-semibold">Dirección (opcional):</h5>
            <span className="text-xs text-base-500">
              Escribe la dirección la institución
            </span>
          </div>
          <div className="col-start-5 col-end-10 my-auto">
            <Textarea
              placeholder="Dirección"
              rows={2}
              className="resize-none"
            />
          </div>
        </div>
        <Divider />
        <div className="grid grid-cols-12">
          <div className="col-span-4 pr-2">
            <h5 className="font-semibold">Certificaciones (opcional):</h5>
            <span className="text-xs text-base-500">
              Escribe las certificaciones que tiene la institución
            </span>
          </div>
          <div className="col-start-5 col-end-10 my-auto">
            <Input type="text" placeholder="certificación" className="mb-4" />

            <ListGroup>
              {certifications.map(({ uid, title }) => (
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
        <Divider />
        <div className="flex gap-2 justify-end">
          <Button variant="outline-primary">Cancelar</Button>
          <Button variant="primary">Guardar</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProfileSchoolPage;
