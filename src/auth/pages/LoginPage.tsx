
const LoginPage = () => {
  return (
    <div className="h-screen flex flex-col">
      <nav className="px-6 py-4">
        <div className=" flex flex-wrap items-center justify-end mx-auto">
          <div className="flex gap-4">
            <button className="text-sm font-medium">Registrate</button>
            <button className="btn btn-primary">Registrate</button>
            {/* <ButtonAd>Solicita una demo</ButtonAd> */}
          </div>
        </div>
      </nav>
      <div className="flex-1 grid grid-cols-3">
        <div>Este es el primer div</div>
        <div className="grid place-content-center">
          {/* <CardAd>
            <h1 className="text-center font-bold text-xl mb-3">Iniciar sesión</h1>
            <p className="text-center text-sm font-light mb-3">
              Ingresa tu usuario y contraseña para iniciar sesión
            </p>

            <InputAd />
            <ButtonAd block >Iniciar</ButtonAd>
          </CardAd> */}
          <span className="text-xs text-center font-light mt-5">
            Derechos reservados @ReboDev 2023 | Aviso de privacidad
          </span>
        </div>
        <div>Este es el segundo div que ocupa todo el alto</div>
      </div>
    </div>
  );
};

export default LoginPage;
