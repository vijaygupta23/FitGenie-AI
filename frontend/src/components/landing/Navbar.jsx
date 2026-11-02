import { useState } from "react";
import { FaBars, FaTimes, FaDumbbell } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="max-w-[1400px] mx-auto px-6 lg:px-10 py-6 flex items-center justify-between relative z-50">
      {/* Logo */}

      <Link to="/" className="flex items-center gap-2">
        <FaDumbbell className="text-[#00E5A8] text-2xl" />
        <h1 className="text-xl font-bold text-white">
          FitGenie AI
        </h1>
      </Link>

      {/* Desktop Menu */}

      <ul className="hidden md:flex items-center gap-8 text-gray-300">

        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <a href="#features" className="hover:text-[#00E5A8] transition">
            Features
          </a>
        </li>

        <li>
          <a href="#programs" className="hover:text-[#00E5A8] transition">
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

      {/* Desktop Buttons */}

      <div className="hidden md:flex items-center gap-4">

        <Link to="/login">
          <button
            className="
            border
            border-gray-500
            px-5
            py-2
            rounded-xl
            hover:border-[#00E5A8]
            transition
          "
          >
            Login
          </button>
        </Link>

        <Link to="/register">
          <button
            className="
            bg-[#00E5A8]
            text-black
            px-5
            py-2
            rounded-xl
            font-semibold
            hover:scale-105
            transition
          "
          >
            Get Started
          </button>
        </Link>

      </div>




      {/* Mobile Icon */}

      <button
        className="md:hidden text-2xl text-white"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu */}

      <div
        className={`
        fixed
        top-0
        right-0
        h-screen
        w-[280px]
        bg-[#0B1220]
        border-l
        border-white/10
        transition-all
        duration-300
        z-50
        ${menuOpen ? "translate-x-0" : "translate-x-full"}
      `}
      >
        <div className="flex justify-between items-center p-6 border-b border-white/10">

          <h2 className="text-xl font-bold text-white">
            Menu
          </h2>

          <FaTimes
            className="text-2xl cursor-pointer"
            onClick={() => setMenuOpen(false)}
          />

        </div>

        <div className="flex flex-col p-6 gap-6 text-lg">

          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>

          <a href="#features" onClick={() => setMenuOpen(false)}>
            Features
          </a>

          <a href="#programs" onClick={() => setMenuOpen(false)}>
            Programs
          </a>

          <a href="#pricing" onClick={() => setMenuOpen(false)}>
            Pricing
          </a>

          <Link to="/about" onClick={() => setMenuOpen(false)}>
            About
          </Link>

          <hr className="border-white/10" />

          <Link to="/login" onClick={() => setMenuOpen(false)}>
            <button className="w-full border border-gray-500 py-3 rounded-xl">
              Login
            </button>
          </Link>

          <Link to="/register" onClick={() => setMenuOpen(false)}>
            <button
              className="
              w-full
              bg-[#00E5A8]
              text-black
              py-3
              rounded-xl
              font-semibold
            "
            >
              Get Started
            </button>
          </Link>

        </div>
      </div>

      {/* Overlay */}

      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/60 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;





// // import { Dumbbell } from "react-icons/fa";
// import { FaDumbbell } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <nav className="flex items-center justify-between px-10 py-6">
//       <div className="flex items-center gap-2">
//         <FaDumbbell className="text-[#00e5a8] text-2xl" />
//         <h1 className="text-xl font-bold">FitGenie AI</h1>
//       </div>
//       <ul className=" md:flex gap-8 text-gray-300">
//         <li>Home</li>

//         <li>
//           <a href="#features" className="hover:text-[#00E5A8] transition">
//             Features
//           </a>
//         </li>
//         <li>
//           <a href="#programs  " className="hover:text-[#00E5A8] transition">
//             Programs
//           </a>
//         </li>
//         <li>
//           <a href="#pricing" className="hover:text-[#00E5A8] transition">
//             Pricing
//           </a>
//         </li>
//         <li>
//           <Link to="/about" className="hover:text-[#00E5A8] transition">
//             About
//           </Link>
//         </li>
//       </ul>
//       <ul className="hidden md:flex gap-8 text-gray-300">
//         <Link to="/login">
//           <button className="border border-gray-200 px-5 py-2 rounded-xl hover:border-[#00E5A8] transition cursor-pointer transition-all duration-300  hover:scale-105">
//             Login
//           </button>
//         </Link>
//         <Link to="./register">
//           <button className="bg-[#00E5A8] text-black px-5 py-2 rounded-xl font-semibold cursor-pointer  transition-all  duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,229,168,0.5)] hover:bg-[#00f0b0] active:scale-95">
//             Get Started
//           </button>
//         </Link>
//       </ul>

//       {/* <Link to="/register">
//   <button>Get Started Free</button>
// </Link>
//        */}
//     </nav>
//   );
// };

// export default Navbar;

// //       <button className="bg-[#00E5A8] text-black px-5 py-2 rounded-xl font-semibold">
// //         Get Started
// //       </button>
// //     </nav>
// //   );
// // };

// // export default Navbar;

// // const Navbar = () => {
// //   return (
// //     <nav className="flex items-center justify-between px-10 py-6">
// //       <div className="flex items-center gap-3">
// //         <FaDumbbell className="text-[#00E5A8] text-2xl" />
// //         <h1 className="text-xl font-bold">
// //           FitGenie AI
// //         </h1>
// //       </div>

// //       <ul className="hidden md:flex gap-8 text-gray-300">
// //         <li>Features</li>
// //         <li>Programs</li>
// //         <li>Pricing</li>
// //         <li>About</li>
// //       </ul>

// //       <button className="bg-[#00E5A8] text-black px-5 py-2 rounded-xl font-semibold">
// //         Get Started
// //       </button>
// //     </nav>
// //   );
// // };

// // export default Navbar;
