import { Avatar, Card, Input } from '@/common/components';

const ProfileSchoolPage = () => {
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
              <h5 className="font-semibold">Nombre de la escuela</h5>
              <span className="text-xs text-base-500">
                Edita el nombre de tu escuela
              </span>
            </div>
            <div className="col-start-5 col-end-10 my-auto">
              <Input type="text" placeholder="Ballet Studio" />
            </div>
          </div>
          <div className="border-b border-base-100 my-5" />
          <div className="grid grid-cols-12">
            <div className="col-span-4">
              <h5 className="font-semibold">Descripción</h5>
              <span className="text-xs text-base-500">
                Escribe una reseña o comentario sobre tu escuela
              </span>
            </div>
            <div className="col-start-5 col-end-10 my-auto">
                {/* TODO:create TextAreaComponent */}
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProfileSchoolPage;
