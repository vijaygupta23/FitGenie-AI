// import { Dumbbell } from "react-icons/fa";
import { FaDumbbell } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-10 py-6">
      <div className="flex items-center gap-2">
        <FaDumbbell className="text-[#00e5a8] text-2xl" />
        <h1 className="text-xl font-bold">FitGenie AI</h1>
      </div>
      <ul className="hidden md:flex gap-8 text-gray-300">
        <li>Home</li>

        <li>
          <a href="#features" className="hover:text-[#00E5A8] transition">
            Features
          </a>
        </li>
        <li>
          <a href="#programs  " className="hover:text-[#00E5A8] transition">
            Programs
          </a>
        </li>
        <li>
          <a href="#pricing" className="hover:text-[#00E5A8] transition">
            Pricing
          </a>
        </li>
        <li>
          <Link
  to="/about"
  className="hover:text-[#00E5A8] transition"
>
  About
</Link>
          
          </li>
      </ul>
      <ul className="hidden md:flex gap-8 text-gray-300">
        <Link to="/login">
          <button className="border border-gray-200 px-5 py-2 rounded-xl hover:border-[#00E5A8] transition cursor-pointer transition-all duration-300  hover:scale-105">
            Login
          </button>
        </Link>
        <Link to="./register">
          <button className="bg-[#00E5A8] text-black px-5 py-2 rounded-xl font-semibold cursor-pointer  transition-all  duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,229,168,0.5)] hover:bg-[#00f0b0] active:scale-95">
            Get Started
          </button>
        </Link>
      </ul>

      {/* <Link to="/register">
  <button>Get Started Free</button>
</Link>
       */}
    </nav>
  );
};

export default Navbar;

//       <button className="bg-[#00E5A8] text-black px-5 py-2 rounded-xl font-semibold">
//         Get Started
//       </button>
//     </nav>
//   );
// };

// export default Navbar;

// const Navbar = () => {
//   return (
//     <nav className="flex items-center justify-between px-10 py-6">
//       <div className="flex items-center gap-3">
//         <FaDumbbell className="text-[#00E5A8] text-2xl" />
//         <h1 className="text-xl font-bold">
//           FitGenie AI
//         </h1>
//       </div>

//       <ul className="hidden md:flex gap-8 text-gray-300">
//         <li>Features</li>
//         <li>Programs</li>
//         <li>Pricing</li>
//         <li>About</li>
//       </ul>

//       <button className="bg-[#00E5A8] text-black px-5 py-2 rounded-xl font-semibold">
//         Get Started
//       </button>
//     </nav>
//   );
// };

// export default Navbar;
