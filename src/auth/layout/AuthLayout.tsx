import { Link, Outlet } from 'react-router-dom';

const now = new Date();

const AuthLayout = () => {
  return (
    <div className="h-screen">
      <div className="grid grid-cols-12 h-full">
        <div className="col-span-12 lg:col-span-4 py-10 lg:mx-10 order-2 lg:order-none">
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
        <div className="col-span-12 relative lg:p-2 lg:col-span-8 order-1 lg:order-none">
          <img
            src="/assets/home-mobile.webp"
            className="w-full object-cover object-bottom h-28 rounded-bl-[4rem] lg:hidden"
            alt="Home-Ballet"
          />
          <img
            src="/assets/home.webp"
            className="rounded-tl-[4rem] rounded-br-[4rem] h-full w-full hidden lg:block"
            alt="Home-Ballet"
          />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
