import { Link, Outlet, useNavigate } from 'react-router-dom';
import { ButtonAd } from '@/common/components';
import { BailarinaImage, BailarinaImage2 } from '@/common/assets/images';

const AuthLayout = () => {
  const navigate = useNavigate();
  const wl =
    import.meta.env.VITE_WHATSAPP_LINK +
    encodeURIComponent(import.meta.env.VITE_WHATSAPP_MESSAGE);

  return (
    <div className="h-screen flex flex-col">
      <nav className="px-6 py-4">
        <div className=" flex flex-wrap items-center justify-end mx-auto">
          <div className="flex gap-4">
            <button
              onClick={() => navigate('/auth/register')}
              className="text-sm font-medium hover:underline"
            >
              Registrate
            </button>
            <Link to={wl}>
              <ButtonAd>Solicita una demo</ButtonAd>
            </Link>
          </div>
        </div>
      </nav>
      <div className="flex-1 grid place-content-center py-5">
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="hidden md:flex justify-start">
            <BailarinaImage width="220" />
          </div>
          <div className="grid place-content-center px-2 md:px-0">
            <Outlet />
          </div>
          <div className="hidden lg:flex justify-end">
            <BailarinaImage2 width="250" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
