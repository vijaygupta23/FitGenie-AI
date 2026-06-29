import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen bg-[#0B0F19] flex items-center justify-center px-6">

      <div className="w-full max-w-6xl bg-[#111827] rounded-3xl overflow-hidden border border-white/10 shadow-2xl grid lg:grid-cols-2">

        {/* Left Side */}

        <div className="hidden lg:flex items-center justify-center bg-gradient-to-br from-[#00E5A8]/20 to-[#0B0F19] p-10">

          <img
            src="/auth/login.png"
            alt="Fitness"
            className="w-full max-w-md object-contain"
          />

        </div>

        {/* Right Side */}

        <div className="p-8 md:p-12 flex flex-col justify-center">

          <h1 className="text-4xl font-bold">
            Welcome Back 👋
          </h1>

          <p className="text-gray-400 mt-3">
            Sign in to continue your fitness journey.
          </p>

          <form className="mt-8 space-y-5">

            <div>
              <label className="text-sm text-gray-300">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="
                  w-full
                  mt-2
                  px-4
                  py-3
                  rounded-xl
                  bg-[#0B0F19]
                  border
                  border-white/10
                  outline-none
                  focus:border-[#00E5A8]
                "
              />
            </div>

            <div>
              <label className="text-sm text-gray-300">
                Password
              </label>

              <input
                type="password"
                placeholder="Enter password"
                className="
                  w-full
                  mt-2
                  px-4
                  py-3
                  rounded-xl
                  bg-[#0B0F19]
                  border
                  border-white/10
                  outline-none
                  focus:border-[#00E5A8]
                "
              />
            </div>

            <button
              className="
                w-full
                bg-[#00E5A8]
                text-black
                font-semibold
                py-3
                rounded-xl
                hover:scale-[1.02]
                transition
              "
            >
              Login
            </button>

          </form>

          <div className="mt-6 text-center text-gray-400">

            Don't have an account?

            <Link
              to="/register"
              className="text-[#00E5A8] ml-2"
            >
              Sign Up
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Login;