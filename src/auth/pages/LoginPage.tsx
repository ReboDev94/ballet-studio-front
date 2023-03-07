const LoginPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <button
        className="
            py-2.5
            px-5
            inline-block
            text-sm
            text-center
          text-secondary-900
            cursor-pointer
            rounded-md
          bg-primary-800
          hover:bg-primary-700
            font-medium
            outline-none
            focus:ring-4
          focus:ring-secondary-900
            transform
            active:scale-95
            transition-transform
            "
      >
        login
      </button>
    </div>
  );
};

export default LoginPage;
