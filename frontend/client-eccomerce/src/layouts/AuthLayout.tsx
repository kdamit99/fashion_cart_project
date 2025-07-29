import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="flex h-screen p-10 w-[80%] mx-auto">
      {/* Left Image Section */}
      <div className="hidden md:flex md:w-1/2 items-center justify-center bg-teal-100 rounded-4xl p-2">
        <img
          src="/auth-banner.jpg"
          alt="Auth Visual"
          className="max-w-full h-auto object-cover bg-teal-50 h-full w-full rounded-3xl"
        />
      </div>

      {/* Right Form Section */}
      <div className="flex flex-col justify-center w-full md:w-1/2 px-6 py-10 bg-white">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
