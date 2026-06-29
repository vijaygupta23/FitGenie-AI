import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="min-h-screen bg-[#0B0F19] flex items-center justify-center px-4 py-4">

      <div
        className="
          w-full
          max-w-5xl
          bg-[#111827]
          rounded-3xl
          overflow-hidden
          border
          border-white/10
          shadow-2xl
          grid
          lg:grid-cols-2
        "
      >

        {/* LEFT SIDE */}

        <div
          className="
            hidden
            lg:flex
            items-end
            justify-center
            relative
            overflow-hidden
            bg-gradient-to-br
            from-[#00E5A8]/20
            via-[#0B0F19]
            to-[#0B0F19]
          "
        >

          <div
            className="
              absolute
              w-[400px]
              h-[400px]
              bg-[#00E5A8]/10
              rounded-full
              blur-3xl
            "
          />

          <img
            src="/auth/register.png"
            alt="Register"
            className="
              relative
              z-10
              w-full
              max-w-sm
              object-contain
              object-bottom
            "
          />

        </div>

        {/* RIGHT SIDE */}

        <div
          className="
            flex
            flex-col
            justify-center
            px-6
            sm:px-8
            py-6
          "
        >

          <h1 className="text-2xl lg:text-3xl font-bold text-white">
            Create Account 🚀
          </h1>

          <p className="text-gray-400 mt-1 text-sm">
            Start your AI-powered fitness journey today.
          </p>

          <form className="mt-4 space-y-2.5">

            {/* Name */}

            <div>
              <label className="text-xs text-gray-300">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your full name"
                className="
                  w-full
                  mt-1
                  px-4
                  py-2
                  rounded-xl
                  bg-[#0B0F19]
                  border
                  border-white/10
                  text-white
                  outline-none
                  focus:border-[#00E5A8]
                "
              />
            </div>

            {/* Email */}

            <div>
              <label className="text-xs text-gray-300">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="
                  w-full
                  mt-1
                  px-4
                  py-2
                  rounded-xl
                  bg-[#0B0F19]
                  border
                  border-white/10
                  text-white
                  outline-none
                  focus:border-[#00E5A8]
                "
              />
            </div>

            {/* Password */}

            <div>
              <label className="text-xs text-gray-300">
                Password
              </label>

              <input
                type="password"
                placeholder="Create password"
                className="
                  w-full
                  mt-1
                  px-4
                  py-2
                  rounded-xl
                  bg-[#0B0F19]
                  border
                  border-white/10
                  text-white
                  outline-none
                  focus:border-[#00E5A8]
                "
              />
            </div>

            {/* Create Account */}

            <button
              type="submit"
              className="
                w-full
                bg-[#00E5A8]
                text-black
                font-bold
                py-2.5
                rounded-xl
                transition-all
                duration-300
                hover:scale-[1.02]
                hover:shadow-[0_0_20px_rgba(0,229,168,0.4)]
              "
            >
              Create Account
            </button>

          </form>

          {/* Divider */}

          <div className="flex items-center gap-3 my-3">

            <div className="flex-1 h-px bg-white/10"></div>

            <span className="text-gray-500 text-xs">
              OR
            </span>

            <div className="flex-1 h-px bg-white/10"></div>

          </div>

          {/* Google */}

          <button
            className="
              w-full
              border
              border-white/10
              py-2.5
              rounded-xl
              text-white
              transition
              hover:border-[#00E5A8]
              hover:bg-[#00E5A8]/5
            "
          >
            Continue with Google
          </button>

          {/* Login */}

          <p className="mt-3 text-center text-gray-400 text-sm">
            Already have an account?

            <Link
              to="/login"
              className="
                text-[#00E5A8]
                ml-2
                font-medium
                hover:underline
              "
            >
              Login
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
};

export default Register;