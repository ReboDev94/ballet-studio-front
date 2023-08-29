import { Link, Outlet } from 'react-router-dom';

const now = new Date();

const AuthLayout = () => {
  return (
    <div className="h-screen mx-auto min-w- max-w-screen-2xl">
      <div className="grid grid-cols-12 h-full">
        <div className="col-span-12 lg:col-span-4 py-10 lg:mx-5 xl:mx-10 order-2 lg:order-none lg:flex lg:flex-col lg:justify-center">
          <img src="/logo.png" className="h-24 block mx-auto" alt="logo" />
          <Outlet />
          <p className="text-xs font-light text-center">
            Derechos reservados
            <Link to="https://github.com/ReboDev94" className="font-semibold">
              &nbsp;@Turink&nbsp;
            </Link>
            {now.getFullYear()}
          </p>
        </div>
        <div className="col-span-12 relative lg:col-span-8 order-1 lg:order-none">
          <img
            src="/assets/home.webp"
            className=" h-full w-full hidden lg:block"
            alt="Home-Ballet"
          />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
