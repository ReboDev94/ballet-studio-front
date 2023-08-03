import {
  Avatar,
  Card,
  Input,
  Textarea,
  Tag,
  Button,
} from '@/common/components';
import { useState } from 'react';

const ProfileSchoolPage = () => {
  const [tags, setTags] = useState<string[]>([]);

  return (
    <div className="">
      <Card className="">
        <Card.Body>
          <h3 className="text-xl text-base-500 font-semibold">
            Perfil escuela
          </h3>
          <div className="border-b border-base-100 my-5" />
          <div className="flex items-center gap-4">
            <Avatar size="lg" src="https://i.pravatar.cc" />
            <div className="flex flex-col gap-1">
              <h2 className="text-3xl text-primary-800 font-semibold">
                Ballet Studio
              </h2>
              <span className="font-semibold text-lg">Dalia Nava</span>
              <span className="text-xs">Av Gobernadores #24</span>
            </div>
          </div>

          <div className="border-b border-base-100 my-5" />
          <div className="grid grid-cols-12">
            <div className="col-span-4">
              <h5 className="font-semibold">Nombre de la institución</h5>
              <span className="text-xs text-base-500">
                Escribe el nombre de la institución
              </span>
            </div>
            <div className="col-start-5 col-end-10 my-auto">
              <Input type="text" placeholder="Ballet Studio" />
            </div>
          </div>
          <div className="border-b border-base-100 my-5" />
          <div className="grid grid-cols-12">
            <div className="col-span-4">
              <h5 className="font-semibold">Logo</h5>
              <span className="text-xs text-base-500">
                Selecciona la imagen para el logo de la institución
              </span>
            </div>
            <div className="col-start-5 col-end-10 my-auto">
              <Input type="file" />
            </div>
          </div>

          <div className="border-b border-base-100 my-5" />
          <div className="grid grid-cols-12">
            <div className="col-span-4">
              <h5 className="font-semibold">Nombre del (a) director (a)</h5>
              <span className="text-xs text-base-500">
                Escribe el nombre del (a) director (a) de la institución
              </span>
            </div>
            <div className="col-start-5 col-end-10 my-auto">
              <Input type="text" placeholder="Dalia Nava" />
            </div>
          </div>
          <div className="border-b border-base-100 my-5" />
          <div className="grid grid-cols-12">
            <div className="col-span-4">
              <h5 className="font-semibold">Descripción</h5>
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
          <div className="border-b border-base-100 my-5" />
          <div className="grid grid-cols-12">
            <div className="col-span-4">
              <h5 className="font-semibold">Teléfono</h5>
              <span className="text-xs text-base-500">
                Escribe el número de teléfono de la institución
              </span>
            </div>
            <div className="col-start-5 col-end-10 my-auto">
              <Input type="text" placeholder="000-000-00-00" />
            </div>
          </div>
          <div className="border-b border-base-100 my-5" />
          <div className="grid grid-cols-12">
            <div className="col-span-4">
              <h5 className="font-semibold">Dirección</h5>
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
          <div className="border-b border-base-100 my-5" />
          <div className="grid grid-cols-12">
            <div className="col-span-4">
              <h5 className="font-semibold">Certificaciones</h5>
              <span className="text-xs text-base-500">
                Escribe las certificaciones que tiene la institución
              </span>
            </div>
            <div className="col-start-5 col-end-10 my-auto">
              <Tag
                value={tags}
                onChange={(tags, newTag) => {
                  setTags(prev => [...prev, newTag]);
                }}
                onRemoved={tag => {
                  setTags(tags.filter(item => item !== tag));
                }}
                placeholder="Certificaciones"
                variantTag="primary"
              />
            </div>
          </div>
          <div className="border-b border-base-100 my-5" />
          <div className="flex gap-2 justify-end">
            <Button variant="outline-primary">Cancelar</Button>
            <Button variant="primary">Guardar</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProfileSchoolPage;
