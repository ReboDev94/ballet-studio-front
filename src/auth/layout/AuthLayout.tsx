import { Outlet } from 'react-router-dom';
import { ButtonAd } from '../../common/components';
import { BailarinaImage, BailarinaImage2 } from '../../common/assets/images';

const AuthLayout = () => {
  return (
    <div className="h-screen flex flex-col">
      <nav className="px-6 py-4">
        <div className=" flex flex-wrap items-center justify-end mx-auto">
          <div className="flex gap-4">
            <button className="text-sm font-medium hover:underline">Registrate</button>
            <ButtonAd onClick={() => {}}>Solicita una demo</ButtonAd>
          </div>
        </div>
      </nav>
      <div className="flex-1 grid place-content-center">
        <div className="flex-1 grid grid-cols-3">
          <div className="flex justify-start">
            <BailarinaImage width="220" />
          </div>
          <div className="grid place-content-center">
            <Outlet />
          </div>
          <div className="flex justify-end">
            <BailarinaImage2 width="250" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
