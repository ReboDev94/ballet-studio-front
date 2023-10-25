import { Link, Outlet } from 'react-router-dom';

const now = new Date();

const AuthLayout = () => {
  return (
    <div className="max-h-screen h-screen mx-auto overflow-hidden">
      <div className="grid grid-cols-12 h-full ">
        <div className="col-span-12 md:col-span-6 xl:col-span-4 h-screen overflow-y-auto">
          <div className="min-h-screen flex items-center justify-center">
            <div className="py-5 md:mx-5 lg:mx-20 xl:mx-10">
              <img src="/logo.png" className="h-24 block mx-auto" alt="logo" />
              <Outlet />
              <p className="text-xs font-light text-center">
                Derechos reservados
                <Link
                  to="https://github.com/ReboDev94"
                  className="font-semibold"
                >
                  &nbsp;@Turink&nbsp;
                </Link>
                {now.getFullYear()}
              </p>
            </div>
          </div>
        </div>
        <div
          className={`relative
          col-span-12
          md:col-span-6
          xl:col-span-8
          max-md:hidden
          max-h-screen
          bg-[url('/assets/home.webp')]
          lg:bg-[url('/assets/home-lg.webp')]
          xl:bg-[url('/assets/home-xl.webp')]
          bg-cover
          bg-center
          bg-no-repeat`}
        />
      </div>
    </div>
  );
};

export default AuthLayout;
