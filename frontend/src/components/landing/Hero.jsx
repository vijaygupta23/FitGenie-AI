import { motion } from "framer-motion";
import { FaDumbbell } from "react-icons/fa";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section className="min-h-screen max-w-[1400px] mx-auto px-12 flex items-center justify-between overflow-hidden">
      {/* LEFT SIDE */}
      <div className="max-w-xl z-20">
        <div className="inline-flex items-center px-4 py-2 rounded-full border border-[#00E5A8]/30 bg-[#00E5A8]/10 mb-6">
          <span className="text-[#00E5A8] text-sm font-medium">
            AI Powered Fitness
          </span>
        </div>

        <h1 className="text-5xl lg:text-7xl font-bold leading-[1.05]">
          Your AI Fitness
          <br />
          <span className="text-[#00E5A8]">Companion</span>
        </h1>

        <p className="mt-6 text-gray-400 text-lg leading-8 max-w-lg">
          Personalized workout plans, AI diet suggestions and real-time fitness
          coaching.
        </p>

        <div className="flex gap-4 mt-8">
          {/* <button className="bg-[#00E5A8] text-black px-8 py-4 rounded-xl font-semibold hover:bg-[#00d094] transition">
            Get Started
          </button> */}
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

        <div className="flex items-center gap-4 mt-12">
          {/* <div className="flex -space-x-3">
            <div className="w-12 h-12 rounded-full bg-gray-500 border-2 border-[#030712]" />
            <div className="w-12 h-12 rounded-full bg-gray-600 border-2 border-[#030712]" />
            <div className="w-12 h-12 rounded-full bg-gray-700 border-2 border-[#030712]" />
            <div className="w-12 h-12 rounded-full bg-gray-800 border-2 border-[#030712]" />
          </div> */}

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
          w-[700px]
          h-[650px]
        "
      >
        {/* Glow */}
        <div
          className="
          absolute
          w-[520px]
          h-[520px]
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
          w-[420px]
          h-[420px]
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
            left-1/3
            -translate-x-1/2
            h-[620px]
            max-w-none
            object-contain
            z-10
          "
        />

        {/* Workout Card */}

        <div
          className="
    absolute
    top-16
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
    w-[250px]
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

        {/* <div 
        
          className="
            absolute
            top-16
            right-0
            bg-[#111827]/90
            backdrop-blur-lg
            border
            border-gray-700
            rounded-2xl
            p-5
            w-[230px]
            z-20
          "
        >
           <FaDumbbell className="text-[#ffffff] shadow-gray text-2xl" />
          <h3 className="font-semibold text-lg">
            AI Workout Plan
          </h3>

          <p className="text-gray-400 mt-2">
            Customized for you
          </p>
        </div> */}

        {/* Diet Card */}

        <div
          className="
    absolute
    top-56
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
    w-[240px]
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

        {/* <div
          className="
            absolute
            top-56
            right-8
            bg-[#111827]/90
            backdrop-blur-lg
            border
            border-gray-700
            rounded-2xl
            p-5
            w-[230px]
            z-20
          "
        >
            <div className="w-10 h-10 rounded-full overflow-hidden">
    <img
      src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=100&q=80"
      alt="Healthy Food"
      className="w-full h-full object-cover"
    />
  </div>

        <div>
          <h3 className="font-semibold text-lg">
            AI Diet Plan
          </h3>

          <p className="text-gray-400 mt-2">
            Personalized diet suggestions
          </p>
          </div>
        </div> */}

        {/* Calorie Card */}

        <div
          className="
    absolute
    bottom-25
    right-1
    bg-[#0B1325]/80
    backdrop-blur-xl
    border
    border-white/10
    rounded-3xl
    px-6
    py-5
    w-[260px]
    h-[140px]
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

        {/* <div
          className="
            absolute
            bottom-20
            right-12
            bg-[#111827]/90
            backdrop-blur-lg
            border
            border-gray-700
            rounded-2xl
            p-5
            w-[260px]
            z-20
          "
        >
          <p className="text-gray-400">
            Calorie Burn
          </p>

          <h2 className="text-5xl font-bold mt-2">
            450
          </h2>

          <p className="text-gray-400 mt-1">
            kcal today
          </p>

          <div className="mt-5 flex items-end gap-2 h-12">

            <div className="w-2 h-4 bg-purple-500 rounded-full"></div>
            <div className="w-2 h-6 bg-purple-500 rounded-full"></div>
            <div className="w-2 h-8 bg-purple-500 rounded-full"></div>
            <div className="w-2 h-5 bg-purple-500 rounded-full"></div>
            <div className="w-2 h-10 bg-purple-500 rounded-full"></div>

          </div>
        </div> */}
      </motion.div>
    </section>
  );
};

export default Hero;
