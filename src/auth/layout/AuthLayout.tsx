import { Link, Outlet } from 'react-router-dom';

const now = new Date();

const AuthLayout = () => {
  return (
    <div className="h-screen">
      <div className="grid grid-cols-12 h-full">
        <div className="col-span-4 py-10 mx-10">
          <img
            src="/logos/ballet-studio-logo.svg"
            className="h-20 block mx-auto"
            alt="logo"
          />
          <Outlet />
          <p className="text-xs font-light text-center">
            Derechos reservados
            <Link to="https://github.com/ReboDev94" className="font-semibold">
              &nbsp;@ReboDev&nbsp;
            </Link>
            {now.getFullYear()}
          </p>
        </div>
        <div className="p-2 col-span-8 relative">
          <img
            src="/assets/home.webp"
            className="rounded-tl-[4rem] rounded-br-[4rem] h-full w-full"
            alt="Home-Ballet"
          />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
