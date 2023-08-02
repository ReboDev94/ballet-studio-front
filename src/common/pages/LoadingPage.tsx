
export const LoadingPage = () => {
  return (
    <div className="h-screen w-full grid place-content-center bg-primary-50">
      <div className="flex flex-col items-center gap-20">
        <img
          src="/logos/"
          className="w-10 animate-ping"
          alt="loading logo"
        />
        <h4 className="text-lg font-semibold">Cargando....</h4>
      </div>
    </div>
  );
};
