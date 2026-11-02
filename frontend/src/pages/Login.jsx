// import { Link } from "react-router-dom";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../api/axios";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("LOGIN DATA:", formData);

    try {
      setLoading(true);

      const response = await API.post("/auth/login", formData);

      console.log("LOGIN SUCCESS:", response.data);

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      // localStorage.setItem("token", response.data.token);

      alert("Login Successful");

      navigate("/dashboard");
    } catch (error) {
      console.log("LOGIN ERROR:", error);
      console.log("RESPONSE:", error.response?.data);
      console.log("STATUS:", error.response?.status);

      alert(error.response?.data?.message || error.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen bg-[#0B0F19] flex items-center justify-center px-6  overflow-hidden">
      <div className="w-full max-w-4xl py-1 min-h-[85vh] bg-[#111827] rounded-3xl overflow-hidden border border-white/10 shadow-2xl grid lg:grid-cols-2">
        {/* LEFT SIDE IMAGE */}

        <div className="hidden lg:flex items-end justify-center bg-gradient-to-br from-[#00E5A8]/20 to-[#0B0F19] relative overflow-hidden">
          {/* Glow Effect */}
          <div className="absolute w-[400px] h-[400px] bg-[#00E5A8]/10 rounded-full blur-3xl"></div>

          <img
            src="/auth/Login.png"
            alt="Fitness"
            className="
              relative
              z-10
              w-full
              max-w-xl
              object-contain
              object-bottom
              translate-y-8
            "
          />
        </div>

        {/* RIGHT SIDE FORM */}

        <div className="flex flex-col justify-center px-8 md:px-12">
          <h1 className="text-4xl font-bold text-white">Welcome Back 👋</h1>

          <p className="text-gray-400 mt-3">
            Sign in to continue your fitness journey.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            {/* Email */}

            <div>
              <label className="text-sm text-gray-300">Email</label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
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
                  text-white
                  focus:border-[#00E5A8]
                  transition
                "
              />
            </div>

            {/* Password */}

            <div>
              <label className="text-sm text-gray-300">Password</label>

              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter password"
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
                  text-white
                  focus:border-[#00E5A8]
                  transition
                "
              />
            </div>

            {/* Forgot Password */}

            <div className="flex justify-end">
              <button
                type="button"
                className="text-sm text-[#00E5A8] hover:underline"
              >
                Forgot Password?
              </button>
            </div>

            {/* Login Button */}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#00E5A8] hover:bg-[#00d49a] text-black font-semibold py-3 rounded-xl transition duration-300"
            >
              {loading ? "Logging in..." : "Login"}
            </button>

            {/* <button 
            
              className="
                w-full
                bg-[#00E5A8]
                hover:bg-[#00d49a]
                text-black
                font-semibold
                py-3
                rounded-xl
                transition
                duration-300
              "
            >
              Login
            </button> */}
          </form>

          {/* Divider */}

          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-white/10"></div>

            <span className="text-gray-500 text-sm">OR</span>

            <div className="flex-1 h-px bg-white/10"></div>
          </div>

          {/* Google Login */}

          <button
            className="
              w-full
              border
              border-white/10
              py-3
              rounded-xl
              text-white
              hover:border-[#00E5A8]
              transition
            "
          >
            Continue with Google
          </button>

          {/* Signup */}

          <p className="mt-6 text-center text-gray-400">
            Don't have an account?
            <Link to="/register" className="text-[#00E5A8] ml-2 font-medium">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

// import { Link } from "react-router-dom";

// const Login = () => {
//   return (
//     <div className="min-h-screen bg-[#0B0F19] flex items-center justify-center px-6">

//       <div className="w-full max-w-6xl bg-[#111827] rounded-3xl overflow-hidden border border-white/10 shadow-2xl grid lg:grid-cols-2">

//         {/* Left Side */}

//         <div className="hidden lg:flex items-center justify-center bg-gradient-to-br from-[#00E5A8]/20 to-[#0B0F19] p-10">

//           <img
//             src="/auth/Login.png"
//             alt="Fitness"
//             className="w-full max-w-md object-contain"
//           />

//         </div>

//         {/* Right Side */}

//         <div className="p-8 md:p-12 flex flex-col justify-center">

//           <h1 className="text-4xl font-bold">
//             Welcome Back 👋
//           </h1>

//           <p className="text-gray-400 mt-3">
//             Sign in to continue your fitness journey.
//           </p>

//           <form className="mt-8 space-y-5">

//             <div>
//               <label className="text-sm text-gray-300">
//                 Email
//               </label>

//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="
//                   w-full
//                   mt-2
//                   px-4
//                   py-3
//                   rounded-xl
//                   bg-[#0B0F19]
//                   border
//                   border-white/10
//                   outline-none
//                   focus:border-[#00E5A8]
//                 "
//               />
//             </div>

//             <div>
//               <label className="text-sm text-gray-300">
//                 Password
//               </label>

//               <input
//                 type="password"
//                 placeholder="Enter password"
//                 className="
//                   w-full
//                   mt-2
//                   px-4
//                   py-3
//                   rounded-xl
//                   bg-[#0B0F19]
//                   border
//                   border-white/10
//                   outline-none
//                   focus:border-[#00E5A8]
//                 "
//               />
//             </div>

//             <button
//               className="
//                 w-full
//                 bg-[#00E5A8]
//                 text-black
//                 font-semibold
//                 py-3
//                 rounded-xl
//                 hover:scale-[1.02]
//                 transition
//               "
//             >
//               Login
//             </button>

//           </form>

//           <div className="mt-6 text-center text-gray-400">

//             Don't have an account?

//             <Link
//               to="/register"
//               className="text-[#00E5A8] ml-2"
//             >
//               Sign Up
//             </Link>

//           </div>

//         </div>

//       </div>

//     </div>
//   );
// };

// export default Login;
