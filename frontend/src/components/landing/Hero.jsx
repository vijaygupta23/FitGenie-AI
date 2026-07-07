// import { motion } from "framer-motion";
// import { FaDumbbell } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const Hero = () => {
//   return (
//     <section
//       className="
//       relative
//       overflow-hidden
//       min-h-screen
//       bg-[#030712]
//       pt-24
//       pb-16
//     "
//     >
//       <div
//         className="
//         max-w-[1400px]
//         mx-auto
//         px-6
//         lg:px-12

//         grid
//         lg:grid-cols-2
//         gap-16
//         items-center
//       "
//       >
//         {/* ================= LEFT CONTENT ================= */}

//         <motion.div
//           initial={{ opacity: 0, x: -60 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           className="
//           text-center
//           lg:text-left
//           order-2
//           lg:order-1
//           z-20
//         "
//         >
//           {/* Badge */}

//           <div
//             className="
//             inline-flex
//             items-center
//             px-5
//             py-2
//             rounded-full
//             border
//             border-[#00E5A8]/30
//             bg-[#00E5A8]/10
//             mb-7
//           "
//           >
//             <span className="text-[#00E5A8] text-sm font-semibold">
//               AI Powered Fitness
//             </span>
//           </div>

//           {/* Heading */}

//           <h1
//             className="
//             text-[42px]
//             sm:text-[55px]
//             lg:text-[78px]
//             font-extrabold
//             leading-[1.05]
//           "
//           >
//             Your AI Fitness
//             <br />
//             <span className="text-[#00E5A8]">Companion</span>
//           </h1>

//           {/* Description */}

//           <p
//             className="
//             mt-7
//             text-gray-400
//             text-lg
//             leading-8
//             max-w-xl
//             mx-auto
//             lg:mx-0
//           "
//           >
//             Personalized workout plans, AI diet suggestions, real-time progress
//             tracking and smart coaching powered by Artificial Intelligence.
//           </p>

//           {/* Buttons */}

//           <div
//             className="
//             flex
//             flex-col
//             sm:flex-row
//             gap-5
//             mt-10
//             justify-center
//             lg:justify-start
//           "
//           >
//             <Link to="/register">
//               <button
//                 className="
//                 w-full
//                 sm:w-auto
//                 px-10
//                 py-4
//                 rounded-xl
//                 bg-[#00E5A8]
//                 text-black
//                 font-bold
//                 transition
//                 hover:scale-105
//                 hover:shadow-[0_0_30px_rgba(0,229,168,.5)]
//               "
//               >
//                 Get Started
//               </button>
//             </Link>

//             <Link to="/demo">
//               <button
//                 className="
//                 w-full
//                 sm:w-auto
//                 px-10
//                 py-4
//                 rounded-xl
//                 border
//                 border-white/20
//                 hover:border-[#00E5A8]
//                 transition
//               "
//               >
//                 Watch Demo
//               </button>
//             </Link>
//           </div>

//           {/* Users */}

//           <div
//             className="
//             flex
//             justify-center
//             lg:justify-start
//             items-center
//             gap-5
//             mt-12
//           "
//           >
//             <div className="flex -space-x-3">
//               <img
//                 src="https://randomuser.me/api/portraits/men/32.jpg"
//                 className="w-14 h-14 rounded-full border-2 border-[#030712]"
//               />

//               <img
//                 src="https://randomuser.me/api/portraits/women/44.jpg"
//                 className="w-14 h-14 rounded-full border-2 border-[#030712]"
//               />

//               <img
//                 src="https://randomuser.me/api/portraits/men/65.jpg"
//                 className="w-14 h-14 rounded-full border-2 border-[#030712]"
//               />

//               <img
//                 src="https://randomuser.me/api/portraits/women/68.jpg"
//                 className="w-14 h-14 rounded-full border-2 border-[#030712]"
//               />
//             </div>

//             <div>
//               <h2 className="text-3xl font-bold">10K+</h2>

//               <p className="text-gray-400">Happy Users</p>
//             </div>
//           </div>
//         </motion.div>

//         {/* ================= MOBILE HERO ================= */}

//         <div
//           className="
//           relative
//           flex
//           justify-center
//           lg:hidden
//           order-1
//         "
//         >
//           {/* Glow */}

//           <div
//             className="
//             absolute
//             w-[260px]
//             h-[260px]
//             rounded-full
//             bg-[#00E5A8]/20
//             blur-3xl
//             top-16
//           "
//           />

//           {/* Ring */}

//           <div
//             className="
//             absolute
//             w-[250px]
//             h-[250px]
//             rounded-full
//             border
//             border-[#00E5A8]/20
//             top-20
//           "
//           />

//           {/* Hero Image */}

//           <motion.img
//             animate={{ y: [0, -10, 0] }}
//             transition={{
//               repeat: Infinity,
//               duration: 4,
//             }}
//             src="/hero-model.png"
//             className="
//             relative
//             w-[310px]
//             z-10
//             object-contain
//           "
//           />
//         </div>

//         {/* ================= DESKTOP HERO ================= */}

//         <motion.div
//           animate={{ y: [0, -12, 0] }}
//           transition={{
//             repeat: Infinity,
//             duration: 4,
//           }}
//           className="
//           hidden
//           lg:flex
//           relative
//           items-center
//           justify-center
//           h-[700px]
//           w-full
//           order-2
//         "
//         >
//           {/* Glow */}

//           <div
//             className="
//             absolute
//             w-[560px]
//             h-[560px]
//             rounded-full
//             bg-[#00E5A8]/20
//             blur-[120px]
//             left-1/2
//             top-20
//             -translate-x-1/2
//           "
//           />

//           {/* Ring */}

//           <div
//             className="
//             absolute
//             w-[440px]
//             h-[440px]
//             rounded-full
//             border
//             border-[#00E5A8]/20
//             left-1/2
//             top-28
//             -translate-x-1/2
//           "
//           />

//           {/* Hero Image */}

//           <img
//             src="/hero-model.png"
//             alt="Hero"
//             className="
//             absolute
//             bottom-0
//             left-1/2
//             -translate-x-1/2
//             h-[640px]
//             object-contain
//             z-10
//           "
//           />

//           {/* ================= Workout Card ================= */}

//           <motion.div
//             initial={{ opacity: 0, x: 80 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.5 }}
//             className="
//             absolute
//             top-16
//             right-0

//             bg-[#111827]/80
//             backdrop-blur-xl

//             border
//             border-white/10

//             rounded-3xl

//             p-5

//             w-[260px]

//             z-20

//             shadow-2xl
//           "
//           >
//             <div className="flex gap-4 items-center">
//               <div
//                 className="
//                 w-14
//                 h-14
//                 rounded-2xl
//                 bg-[#00E5A8]/20
//                 flex
//                 justify-center
//                 items-center
//               "
//               >
//                 <FaDumbbell
//                   className="
//                   text-[#00E5A8]
//                   text-2xl
//                 "
//                 />
//               </div>

//               <div>
//                 <h3 className="font-bold text-lg">AI Workout</h3>

//                 <p className="text-gray-400 text-sm">Personalized Plan</p>
//               </div>
//             </div>
//           </motion.div>

//           {/* ================= Diet Card ================= */}

//           <motion.div
//             initial={{ opacity: 0, x: 80 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.8 }}
//             className="
//             absolute
//             top-[250px]
//             right-5

//             bg-[#111827]/80
//             backdrop-blur-xl

//             border
//             border-white/10

//             rounded-3xl

//             p-5

//             w-[260px]

//             z-20
//           "
//           >
//             <div className="flex gap-4">
//               <div
//                 className="
//                 w-14
//                 h-14

//                 rounded-2xl

//                 flex
//                 items-center
//                 justify-center

//                 text-4xl

//                 bg-white/5
//               "
//               >
//                 🥗
//               </div>

//               <div>
//                 <h3 className="font-bold text-lg">AI Diet</h3>

//                 <p className="text-gray-400 text-sm">Smart Nutrition</p>
//               </div>
//             </div>
//           </motion.div>

//           {/* ================= Calorie Card ================= */}

//           <motion.div
//             initial={{ opacity: 0, y: 80 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 1 }}
//             className="
//             absolute
//             bottom-10
//             right-2

//             bg-[#111827]/90

//             backdrop-blur-xl

//             border
//             border-white/10

//             rounded-3xl

//             p-6

//             w-[280px]

//             z-20
//           "
//           >
//             <p className="text-gray-400">Calories Burned</p>

//             <div className="flex items-end gap-2 mt-3">
//               <h2 className="text-5xl font-bold">450</h2>

//               <span className="text-gray-400 mb-2">kcal</span>
//             </div>

//             <div className="mt-5">
//               <svg width="100%" height="70" viewBox="0 0 220 70" fill="none">
//                 <path
//                   d="M0 55 C30 35 60 20 90 40 C120 60 150 20 180 30 C195 35 205 20 220 10"
//                   stroke="#A855F7"
//                   strokeWidth="4"
//                   strokeLinecap="round"
//                   fill="none"
//                 />

//                 <circle cx="220" cy="10" r="5" fill="#A855F7" />
//               </svg>
//             </div>
//           </motion.div>
//         </motion.div>

//         {/* ================= MOBILE INFO CARDS ================= */}

//         <div className="lg:hidden mt-10 space-y-5">
//           {/* Workout */}

//           <div
//             className="
//             bg-[#111827]/80
//             backdrop-blur-xl
//             border
//             border-white/10
//             rounded-3xl
//             p-5
//             flex
//             items-center
//             gap-4
//           "
//           >
//             <div
//               className="
//               w-14
//               h-14
//               rounded-2xl
//               bg-[#00E5A8]/20
//               flex
//               items-center
//               justify-center
//             "
//             >
//               <FaDumbbell className="text-[#00E5A8] text-2xl" />
//             </div>

//             <div>
//               <h3 className="font-bold text-lg">AI Workout Plan</h3>

//               <p className="text-gray-400 text-sm">
//                 Personalized workout designed for your goals.
//               </p>
//             </div>
//           </div>

//           {/* Diet */}

//           <div
//             className="
//             bg-[#111827]/80
//             backdrop-blur-xl
//             border
//             border-white/10
//             rounded-3xl
//             p-5
//             flex
//             items-center
//             gap-4
//           "
//           >
//             <div
//               className="
//               w-14
//               h-14
//               rounded-2xl
//               bg-white/5
//               flex
//               items-center
//               justify-center
//               text-3xl
//             "
//             >
//               🥗
//             </div>

//             <div>
//               <h3 className="font-bold text-lg">AI Diet Plan</h3>

//               <p className="text-gray-400 text-sm">
//                 Daily nutrition recommendations powered by AI.
//               </p>
//             </div>
//           </div>

//           {/* Calories */}

//           <div
//             className="
//             bg-[#111827]/80
//             backdrop-blur-xl
//             border
//             border-white/10
//             rounded-3xl
//             p-5
//           "
//           >
//             <p className="text-gray-400 text-sm">Calories Burned Today</p>

//             <div className="flex items-end gap-2 mt-2">
//               <h2 className="text-4xl font-bold">450</h2>

//               <span className="text-gray-400 mb-1">kcal</span>
//             </div>

//             <div className="mt-4">
//               <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
//                 <div className="w-[72%] h-full rounded-full bg-[#00E5A8]" />
//               </div>

//               <p className="text-xs text-gray-500 mt-2">
//                 72% of today's goal completed
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import { motion } from "framer-motion";
import { FaDumbbell } from "react-icons/fa";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    // <section className="min-h-screen max-w-[1400px] mx-auto px-12 flex items-center justify-between overflow-hidden">
    // <section
    //       className="
    //   min-h-screen
    //   max-w-[1400px]
    //   mx-auto
    //   px-5
    //   sm:px-8
    //   lg:px-12
    //   flex
    //   flex-col-reverse
    //   lg:flex-row
    //   items-center
    //   justify-between
    //   overflow-hidden
    //   gap-10
    //   pt-24
    //   lg:pt-0
    // "
    //     >

    <section
      className="
  min-h-screen
  max-w-[1400px]
  mx-auto
  px-5
  sm:px-8
  lg:px-12
  flex
  flex-col-reverse
  lg:flex-row
  items-center
  justify-between
  overflow-hidden
  gap-10
  pt22
  lg:pt-0
"
    >
      {/* LEFT SIDE */}
      <div className="max-w-xl z-20 text-center lg:text-left">
        <div className="inline-flex items-center px-4 py-2 rounded-full border border-[#00E5A8]/30 bg-[#00E5A8]/10 mb-6">
          <span className="text-[#00E5A8] text-sm font-medium">
            AI Powered Fitness
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05]">
          Your AI Fitness
          <br />
          <span className="text-[#00E5A8]">Companion</span>
        </h1>

        <p className="mt-6 text-gray-400 text-lg leading-8 max-w-lg">
          Personalized workout plans, AI diet suggestions and real-time fitness
          coaching.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Link to="./register">
            <button className="bg-[#00E5A8] text-black px-8 py-4 rounded-xl font-semibold cursor-pointer  transition-all  duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,229,168,0.5)] hover:bg-[#00f0b0] active:scale-95">
              Get Started
            </button>
          </Link>
          <Link to="./demo">
            <button className="border border-gray-700 px-8 py-4 rounded-xl cursor-pointer hover:border-[#00E5A8] transition">
              Watch Demo
            </button>
          </Link>
        </div>

        <div className="flex justify-center lg:justify-start items-center gap-4 mt-12">
          <div className="flex -space-x-3">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="User"
              className="w-14 h-14 rounded-full bg-gray-800 border-2 border-[#030712]"
            />

            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="User"
              className="w-14 h-14 rounded-full border-2 border-[#030712] object-cover"
            />

            <img
              src="https://randomuser.me/api/portraits/men/65.jpg"
              alt="User"
              className="w-14 h-14 rounded-full border-2 border-[#030712] object-cover"
            />

            <img
              src="https://randomuser.me/api/portraits/women/68.jpg"
              alt="User"
              className="w-14 h-14 rounded-full border-2 border-[#030712] object-cover"
            />
          </div>

          <div>
            <h3 className="font-bold text-2xl">10K+</h3>
            <p className="text-gray-400 text-sm">Happy Users</p>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}

      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{
          repeat: Infinity,
          duration: 4,
        }}
        className="
          relative

          lg:flex
          items-center
          justify-center
         w-full
max-w-[700px]
h-[420px]
sm:h-[520px]
lg:h-[650px]
        "
      >
        {/* Glow */}
        <div
          className="
          absolute
          w-[280px]
h-[280px]
sm:w-[420px]
sm:h-[420px]
lg:w-[520px]
lg:h-[520px]
          rounded-full
          bg-[#00E5A8]/20
          blur-3xl
          left-1/2
          top-[70px]
          -translate-x-1/2
          z-0
        "
        />

        {/* Ring */}
        <div
          className="
          absolute
          w-[220px]
h-[220px]
sm:w-[320px]
sm:h-[320px]
lg:w-[420px]
lg:h-[420px]
          rounded-full
          border
          border-[#00E5A8]/10
          left-1/3
          top-[120px]
          -translate-x-1/2
          z-0
        "
        />

        {/* MODEL IMAGE */}
        <img
          src="/hero-model.png"
          alt="Fitness Model"
          className="
            absolute
            bottom-0
            left-7/25
            -translate-x-1/2
            h-[330px]
sm:h-[450px]
lg:h-[620px]
            max-w-none
            object-contain
            z-10
          "
        />

        {/* Workout Card */}

        <div
          className="
    absolute
    top-2
sm:top-10
lg:top-16
    right-0
    left-1/2
    flex
    items-center
    gap-4
    bg-[#111827]/80
    backdrop-blur-xl
    border
    border-white/10
    rounded-2xl
    px-5
    py-4
    w-[170px]
sm:w-[220px]
lg:w-[250px]
    z-20
  "
        >
          {/* Icon */}
          <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/5">
            <FaDumbbell className="text-white w-7 h-7 text-lg" />
          </div>

          {/* Text */}
          <div>
            <h3 className="font-semibold text-lg leading-none">
              AI Workout Plan
            </h3>

            <p className="text-gray-400 text-sm mt-2">Customized for you</p>
          </div>
        </div>

        {/* Diet Card */}

        <div
          className="
    absolute
    top-32
sm:top-44
lg:top-56
    right-2
    flex
    items-center
    gap-4
    bg-[#111827]/80
    backdrop-blur-xl
    border
    border-white/10
    rounded-2xl
    px-5
    py-4
    w-[170px]
sm:w-[210px]
lg:w-[240px]
    z-20
  "
        >
          {/* Food Image */}
          <div className="flex items-center justify-center w-25 h-16 rounded-xl bg-white/2 text-5xl">
            🥗
          </div>

          <div>
            <h3 className="font-semibold text-lg leading-none">AI Diet Plan</h3>

            <p className="text-gray-400 text-sm mt-2">
              Personalized diet suggestions
            </p>
          </div>
        </div>

        {/* Calorie Card */}

        <div
          className="
    absolute
    bottom-4
sm:bottom-12
lg:bottom-25
    right-1
    bg-[#0B1325]/80
    backdrop-blur-xl
    border
    border-white/10
    rounded-3xl
    px-6
    py-5
    w-[180px]
h-[110px]
sm:w-[230px]
sm:h-[130px]
lg:w-[260px]
lg:h-[140px]
    z-20
  "
        >
          {/* Purple Dot */}
          <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-purple-600 flex items-center justify-center text-[10px]">
            •
          </div>

          <div className="flex justify-between items-end h-full">
            {/* Left Content */}
            <div>
              <p className="text-gray-400 text-sm">Calorie Burn</p>

              <div className="mt-3 flex items-end gap-1">
                <h2 className="text-5xl font-bold">450</h2>

                <span className="text-gray-400 mb-2">kcal</span>
              </div>

              <p className="text-gray-500 mt-2">Today</p>
            </div>

            {/* Right Graph */}
            <div className="mb-2">
              <svg width="90" height="70" viewBox="0 0 90 70" fill="none">
                <path
                  d="M5 60 C20 45, 20 45, 35 25 C45 10, 55 10, 65 30 C75 50, 80 30, 85 15"
                  stroke="#A855F7"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                />

                <circle cx="85" cy="15" r="4" fill="#A855F7" />
              </svg>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;


















// import { motion } from "framer-motion";
// import { FaDumbbell } from "react-icons/fa";
// import { Link } from "react-router-dom";
// const Hero = () => {
//   return (
//     <section className="min-h-screen max-w-[1400px] mx-auto px-12 flex items-center justify-between overflow-hidden">
//       {/* LEFT SIDE */}
//       <div className="max-w-xl z-20">
//         <div className="inline-flex items-center px-4 py-2 rounded-full border border-[#00E5A8]/30 bg-[#00E5A8]/10 mb-6">
//           <span className="text-[#00E5A8] text-sm font-medium">
//             AI Powered Fitness
//           </span>
//         </div>

//         <h1 className="text-5xl lg:text-7xl font-bold leading-[1.05]">
//           Your AI Fitness
//           <br />
//           <span className="text-[#00E5A8]">Companion</span>
//         </h1>

//         <p className="mt-6 text-gray-400 text-lg leading-8 max-w-lg">
//           Personalized workout plans, AI diet suggestions and real-time fitness
//           coaching.
//         </p>

//         <div className="flex gap-4 mt-8">
//           {/* <button className="bg-[#00E5A8] text-black px-8 py-4 rounded-xl font-semibold hover:bg-[#00d094] transition">
//             Get Started
//           </button> */}
//           <Link to="./register">
//             <button className="bg-[#00E5A8] text-black px-8 py-4 rounded-xl font-semibold cursor-pointer  transition-all  duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,229,168,0.5)] hover:bg-[#00f0b0] active:scale-95">
//               Get Started
//             </button>
//           </Link>
//           <Link to="./demo">
//             <button className="border border-gray-700 px-8 py-4 rounded-xl cursor-pointer hover:border-[#00E5A8] transition">
//               Watch Demo
//             </button>
//           </Link>
//         </div>

//         <div className="flex items-center gap-4 mt-12">
//           {/* <div className="flex -space-x-3">
//             <div className="w-12 h-12 rounded-full bg-gray-500 border-2 border-[#030712]" />
//             <div className="w-12 h-12 rounded-full bg-gray-600 border-2 border-[#030712]" />
//             <div className="w-12 h-12 rounded-full bg-gray-700 border-2 border-[#030712]" />
//             <div className="w-12 h-12 rounded-full bg-gray-800 border-2 border-[#030712]" />
//           </div> */}

//           <div className="flex -space-x-3">
//             <img
//               src="https://randomuser.me/api/portraits/men/32.jpg"
//               alt="User"
//               className="w-14 h-14 rounded-full bg-gray-800 border-2 border-[#030712]"
//             />

//             <img
//               src="https://randomuser.me/api/portraits/women/44.jpg"
//               alt="User"
//               className="w-14 h-14 rounded-full border-2 border-[#030712] object-cover"
//             />

//             <img
//               src="https://randomuser.me/api/portraits/men/65.jpg"
//               alt="User"
//               className="w-14 h-14 rounded-full border-2 border-[#030712] object-cover"
//             />

//             <img
//               src="https://randomuser.me/api/portraits/women/68.jpg"
//               alt="User"
//               className="w-14 h-14 rounded-full border-2 border-[#030712] object-cover"
//             />
//           </div>

//           <div>
//             <h3 className="font-bold text-2xl">10K+</h3>
//             <p className="text-gray-400 text-sm">Happy Users</p>
//           </div>
//         </div>
//       </div>

//       {/* RIGHT SIDE */}

//       <motion.div
//         animate={{ y: [0, -12, 0] }}
//         transition={{
//           repeat: Infinity,
//           duration: 4,
//         }}
//         className="
//           relative
          
//           lg:flex
//           items-center
//           justify-center
//           w-[700px]
//           h-[650px]
//         "
//       >
//         {/* Glow */}
//         <div
//           className="
//           absolute
//           w-[520px]
//           h-[520px]
//           rounded-full
//           bg-[#00E5A8]/20
//           blur-3xl
//           left-1/2
//           top-[70px]
//           -translate-x-1/2
//           z-0
//         "
//         />

//         {/* Ring */}
//         <div
//           className="
//           absolute
//           w-[420px]
//           h-[420px]
//           rounded-full
//           border
//           border-[#00E5A8]/10
//           left-1/3
//           top-[120px]
//           -translate-x-1/2
//           z-0
//         "
//         />

//         {/* MODEL IMAGE */}
//         <img
//           src="/hero-model.png"
//           alt="Fitness Model"
//           className="
//             absolute
//             bottom-0
//             left-1/3
//             -translate-x-1/2
//             h-[620px]
//             max-w-none
//             object-contain
//             z-10
//           "
//         />

//         {/* Workout Card */}

//         <div
//           className="
//     absolute
//     top-16
//     right-0
//     left-1/2
//     flex
//     items-center
//     gap-4
//     bg-[#111827]/80
//     backdrop-blur-xl
//     border
//     border-white/10
//     rounded-2xl
//     px-5
//     py-4
//     w-[250px]
//     z-20
//   "
//         >
//           {/* Icon */}
//           <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/5">
//             <FaDumbbell className="text-white w-7 h-7 text-lg" />
//           </div>

//           {/* Text */}
//           <div>
//             <h3 className="font-semibold text-lg leading-none">
//               AI Workout Plan
//             </h3>

//             <p className="text-gray-400 text-sm mt-2">Customized for you</p>
//           </div>
//         </div>

//         {/* <div 
        
//           className="
//             absolute
//             top-16
//             right-0
//             bg-[#111827]/90
//             backdrop-blur-lg
//             border
//             border-gray-700
//             rounded-2xl
//             p-5
//             w-[230px]
//             z-20
//           "
//         >
//            <FaDumbbell className="text-[#ffffff] shadow-gray text-2xl" />
//           <h3 className="font-semibold text-lg">
//             AI Workout Plan
//           </h3>

//           <p className="text-gray-400 mt-2">
//             Customized for you
//           </p>
//         </div> */}

//         {/* Diet Card */}

//         <div
//           className="
//     absolute
//     top-56
//     right-2
//     flex
//     items-center
//     gap-4
//     bg-[#111827]/80
//     backdrop-blur-xl
//     border
//     border-white/10
//     rounded-2xl
//     px-5
//     py-4
//     w-[240px]
//     z-20
//   "
//         >
//           {/* Food Image */}
//           <div className="flex items-center justify-center w-25 h-16 rounded-xl bg-white/2 text-5xl">
//             🥗
//           </div>

//           <div>
//             <h3 className="font-semibold text-lg leading-none">AI Diet Plan</h3>

//             <p className="text-gray-400 text-sm mt-2">
//               Personalized diet suggestions
//             </p>
//           </div>
//         </div>

//         {/* <div
//           className="
//             absolute
//             top-56
//             right-8
//             bg-[#111827]/90
//             backdrop-blur-lg
//             border
//             border-gray-700
//             rounded-2xl
//             p-5
//             w-[230px]
//             z-20
//           "
//         >
//             <div className="w-10 h-10 rounded-full overflow-hidden">
//     <img
//       src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=100&q=80"
//       alt="Healthy Food"
//       className="w-full h-full object-cover"
//     />
//   </div>

//         <div>
//           <h3 className="font-semibold text-lg">
//             AI Diet Plan
//           </h3>

//           <p className="text-gray-400 mt-2">
//             Personalized diet suggestions
//           </p>
//           </div>
//         </div> */}

//         {/* Calorie Card */}

//         <div
//           className="
//     absolute
//     bottom-25
//     right-1
//     bg-[#0B1325]/80
//     backdrop-blur-xl
//     border
//     border-white/10
//     rounded-3xl
//     px-6
//     py-5
//     w-[260px]
//     h-[140px]
//     z-20
//   "
//         >
//           {/* Purple Dot */}
//           <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-purple-600 flex items-center justify-center text-[10px]">
//             •
//           </div>

//           <div className="flex justify-between items-end h-full">
//             {/* Left Content */}
//             <div>
//               <p className="text-gray-400 text-sm">Calorie Burn</p>

//               <div className="mt-3 flex items-end gap-1">
//                 <h2 className="text-5xl font-bold">450</h2>

//                 <span className="text-gray-400 mb-2">kcal</span>
//               </div>

//               <p className="text-gray-500 mt-2">Today</p>
//             </div>

//             {/* Right Graph */}
//             <div className="mb-2">
//               <svg width="90" height="70" viewBox="0 0 90 70" fill="none">
//                 <path
//                   d="M5 60 C20 45, 20 45, 35 25 C45 10, 55 10, 65 30 C75 50, 80 30, 85 15"
//                   stroke="#A855F7"
//                   strokeWidth="3"
//                   strokeLinecap="round"
//                   fill="none"
//                 />

//                 <circle cx="85" cy="15" r="4" fill="#A855F7" />
//               </svg>
//             </div>
//           </div>
//         </div>

//         {/* <div
//           className="
//             absolute
//             bottom-20
//             right-12
//             bg-[#111827]/90
//             backdrop-blur-lg
//             border
//             border-gray-700
//             rounded-2xl
//             p-5
//             w-[260px]
//             z-20
//           "
//         >
//           <p className="text-gray-400">
//             Calorie Burn
//           </p>

//           <h2 className="text-5xl font-bold mt-2">
//             450
//           </h2>

//           <p className="text-gray-400 mt-1">
//             kcal today
//           </p>

//           <div className="mt-5 flex items-end gap-2 h-12">

//             <div className="w-2 h-4 bg-purple-500 rounded-full"></div>
//             <div className="w-2 h-6 bg-purple-500 rounded-full"></div>
//             <div className="w-2 h-8 bg-purple-500 rounded-full"></div>
//             <div className="w-2 h-5 bg-purple-500 rounded-full"></div>
//             <div className="w-2 h-10 bg-purple-500 rounded-full"></div>

//           </div>
//         </div> */}
//       </motion.div>
//     </section>
//   );
// };

// export default Hero;
