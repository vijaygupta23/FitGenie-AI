import { Link } from "react-router-dom";

import {
  FaArrowRight,
  FaDumbbell,
  FaRobot,
  FaAppleAlt,
  FaHeartbeat,
  FaBullseye,
  FaEye,
} from "react-icons/fa";

const About = () => {
  return (
    <div className="min-h-screen bg-[#050B18] text-white overflow-x-hidden">
      {/* ================= HERO SECTION ================= */}

      <section className="relative overflow-hidden">
        {/* Background Glow */}

        <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#00E5A8]/10 rounded-full blur-[120px]" />

        <div className="absolute top-60 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[150px]" />

        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* ================= LEFT ================= */}

            <div>
              <span
                className="
                inline-flex
                items-center
                gap-2
                bg-[#00E5A8]/10
                border
                border-[#00E5A8]/30
                text-[#00E5A8]
                px-5
                py-2
                rounded-full
                text-sm
                font-medium
              "
              >
                🚀 AI Powered Fitness Platform
              </span>

              <h1
                className="
                text-3xl
                md:text-4xl
                xl:text-5xl
                font-black
                leading-tight
                mt-8
              "
              >
                Transform Your
                <br />
                <span className="text-[#00E5A8]">Fitness Journey</span>
                <br />
                With AI
              </h1>

              <p
                className="
                text-gray-400
                text-lg
                leading-9
                mt-8
                max-w-xl
              "
              >
                FitGenie AI combines Artificial Intelligence with modern fitness
                science to create personalized workout plans, smart diet
                recommendations, AI coaching and complete progress tracking -
                all in one place.
              </p>

              <div className="flex flex-wrap gap-5 mt-10">
                <Link
                  to="/register"
                  className="
                  bg-[#00E5A8]
                  text-black
                  font-semibold
                  px-8
                  py-4
                  rounded-xl
                  flex
                  items-center
                  gap-3
                  hover:scale-105
                  hover:shadow-[0_0_30px_rgba(0,229,168,.45)]
                  transition-all
                  duration-300
                "
                >
                  Get Started
                  <FaArrowRight />
                </Link>

                <Link
                  to="/pricing"
                  className="
                  border
                  border-white/10
                  px-8
                  py-4
                  rounded-xl
                  hover:border-[#00E5A8]
                  hover:text-[#00E5A8]
                  transition-all
                  duration-300
                "
                >
                  View Pricing
                </Link>
              </div>

              {/* Features */}

              <div className="grid grid-cols-2 gap-5 mt-14">
                <div className="flex items-center gap-4">
                  <div
                    className="
                    w-14
                    h-14
                    rounded-2xl
                    bg-[#00E5A8]/10
                    flex
                    items-center
                    justify-center
                  "
                  >
                    <FaRobot className="text-[#00E5A8] text-2xl" />
                  </div>

                  <div>
                    <h3 className="font-semibold">AI Coach</h3>

                    <p className="text-gray-500 text-sm">24/7 Smart Guidance</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div
                    className="
                    w-14
                    h-14
                    rounded-2xl
                    bg-[#00E5A8]/10
                    flex
                    items-center
                    justify-center
                  "
                  >
                    <FaAppleAlt className="text-[#00E5A8] text-2xl" />
                  </div>

                  <div>
                    <h3 className="font-semibold">Smart Diet</h3>

                    <p className="text-gray-500 text-sm">Personalized Meals</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ================= RIGHT ================= */}

            <div className="relative flex justify-center">
              <div
                className="
                absolute
                w-[420px]
                h-[420px]
                rounded-full
                bg-[#00E5A8]/10
                blur-[100px]
              "
              />

              <img
                src="/about.png"
                alt="About FitGenie AI"
                className="
                relative
                z-10
                w-full
                max-w-xl
                animate-float
              "
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== Continue in Part 2 ===== */}

      {/* ================= OUR STORY ================= */}

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-[#00E5A8] uppercase tracking-[4px] text-sm font-semibold">
              OUR STORY
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-5">
              Building The Future Of
              <span className="text-[#00E5A8]"> AI Fitness</span>
            </h2>

            <p className="text-gray-400 mt-6 max-w-3xl mx-auto leading-8">
              At FitGenie AI, we believe fitness should be personal, intelligent
              and accessible to everyone. Traditional fitness apps provide the
              same plans for everyone, but every body is different. That's why
              we built an AI platform capable of understanding your goals,
              experience and lifestyle.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* LEFT IMAGE */}

            <div className="relative">
              <div className="absolute inset-0 bg-[#00E5A8]/10 blur-[80px] rounded-full" />

              <img
                src="/story.png"
                alt="Story"
                className="
                relative
                rounded-3xl
                border
                border-white/10
                shadow-2xl
              "
              />
            </div>

            {/* RIGHT CONTENT */}

            <div>
              <h3 className="text-3xl font-bold">
                Our Journey Started With One Question
              </h3>

              <p className="text-gray-400 mt-6 leading-8">
                Why should people spend hours searching for workouts, diet plans
                and fitness advice when Artificial Intelligence can do it
                instantly?
              </p>

              <p className="text-gray-400 mt-6 leading-8">
                FitGenie AI analyzes your goals, fitness level and preferences
                to create personalized recommendations that evolve as you
                progress.
              </p>

              <div className="grid grid-cols-2 gap-6 mt-10">
                <div
                  className="
                  bg-[#0B1220]
                  border
                  border-white/10
                  rounded-2xl
                  p-6
                  hover:border-[#00E5A8]
                  transition-all
                "
                >
                  <FaRobot
                    className="
                    text-[#00E5A8]
                    text-4xl
                    mb-4
                  "
                  />

                  <h4 className="font-semibold text-lg">AI Powered</h4>

                  <p className="text-gray-400 mt-3 text-sm">
                    Smart recommendations generated in seconds.
                  </p>
                </div>

                <div
                  className="
                  bg-[#0B1220]
                  border
                  border-white/10
                  rounded-2xl
                  p-6
                  hover:border-[#00E5A8]
                  transition-all
                "
                >
                  <FaHeartbeat
                    className="
                    text-[#00E5A8]
                    text-4xl
                    mb-4
                  "
                  />

                  <h4 className="font-semibold text-lg">Healthy Lifestyle</h4>

                  <p className="text-gray-400 mt-3 text-sm">
                    Helping users stay healthy every day.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MISSION & VISION ================= */}

      <section className="py-24 px-6 bg-[#08101D]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#00E5A8] uppercase tracking-[4px]">
              Mission & Vision
            </span>

            <h2 className="text-4xl font-bold mt-5">What Drives Us</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Mission */}

            <div
              className="
              bg-[#0B1220]
              rounded-3xl
              border
              border-white/10
              p-10
              hover:border-[#00E5A8]
              hover:-translate-y-2
              transition-all
              duration-300
            "
            >
              <div
                className="
                w-20
                h-20
                rounded-3xl
                bg-[#00E5A8]/10
                flex
                items-center
                justify-center
                mb-8
              "
              >
                <FaBullseye
                  className="
                  text-[#00E5A8]
                  text-4xl
                "
                />
              </div>

              <h3 className="text-3xl font-bold">Our Mission</h3>

              <p className="text-gray-400 mt-6 leading-8">
                To make personalized fitness available for everyone using
                Artificial Intelligence. We want users to receive workouts,
                nutrition guidance and AI coaching without hiring expensive
                trainers.
              </p>
            </div>

            {/* Vision */}

            <div
              className="
              bg-[#0B1220]
              rounded-3xl
              border
              border-white/10
              p-10
              hover:border-[#00E5A8]
              hover:-translate-y-2
              transition-all
              duration-300
            "
            >
              <div
                className="
                w-20
                h-20
                rounded-3xl
                bg-[#00E5A8]/10
                flex
                items-center
                justify-center
                mb-8
              "
              >
                <FaEye
                  className="
                  text-[#00E5A8]
                  text-4xl
                "
                />
              </div>

              <h3 className="text-3xl font-bold">Our Vision</h3>

              <p className="text-gray-400 mt-6 leading-8">
                To become the world's most trusted AI-powered fitness platform
                by combining technology, health science and personalized
                coaching into one powerful ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Continue in Part 3 ===== */}

      {/* ================= WHY CHOOSE FITGENIE AI ================= */}

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-[#00E5A8] uppercase tracking-[4px] text-sm font-semibold">
              WHY CHOOSE US
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-5">
              Everything You Need
              <span className="text-[#00E5A8]"> In One Platform</span>
            </h2>

            <p className="text-gray-400 mt-6 max-w-3xl mx-auto leading-8">
              FitGenie AI combines Artificial Intelligence with fitness science
              to provide the smartest fitness experience for everyone.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}

            <div className="group bg-[#0B1220] border border-white/10 rounded-3xl p-8 hover:border-[#00E5A8] transition-all duration-300 hover:-translate-y-3">
              <div className="w-16 h-16 rounded-2xl bg-[#00E5A8]/10 flex items-center justify-center group-hover:bg-[#00E5A8] transition">
                <FaRobot className="text-[#00E5A8] text-3xl group-hover:text-black transition" />
              </div>

              <h3 className="text-2xl font-semibold mt-8">
                AI Workout Planner
              </h3>

              <p className="text-gray-400 mt-5 leading-7">
                Generate personalized workout plans according to your fitness
                goals, experience and available time.
              </p>
            </div>

            {/* Card 2 */}

            <div className="group bg-[#0B1220] border border-white/10 rounded-3xl p-8 hover:border-[#00E5A8] transition-all duration-300 hover:-translate-y-3">
              <div className="w-16 h-16 rounded-2xl bg-[#00E5A8]/10 flex items-center justify-center group-hover:bg-[#00E5A8] transition">
                <FaAppleAlt className="text-[#00E5A8] text-3xl group-hover:text-black transition" />
              </div>

              <h3 className="text-2xl font-semibold mt-8">Smart Diet Plans</h3>

              <p className="text-gray-400 mt-5 leading-7">
                AI recommends healthy meals based on your calories, fitness goal
                and dietary preference.
              </p>
            </div>

            {/* Card 3 */}

            <div className="group bg-[#0B1220] border border-white/10 rounded-3xl p-8 hover:border-[#00E5A8] transition-all duration-300 hover:-translate-y-3">
              <div className="w-16 h-16 rounded-2xl bg-[#00E5A8]/10 flex items-center justify-center group-hover:bg-[#00E5A8] transition">
                <FaHeartbeat className="text-[#00E5A8] text-3xl group-hover:text-black transition" />
              </div>

              <h3 className="text-2xl font-semibold mt-8">Health Tracking</h3>

              <p className="text-gray-400 mt-5 leading-7">
                Monitor weight, calories, BMI, hydration and overall health
                progress.
              </p>
            </div>

            {/* Card 4 */}

            <div className="group bg-[#0B1220] border border-white/10 rounded-3xl p-8 hover:border-[#00E5A8] transition-all duration-300 hover:-translate-y-3">
              <div className="w-16 h-16 rounded-2xl bg-[#00E5A8]/10 flex items-center justify-center group-hover:bg-[#00E5A8] transition">
                <FaDumbbell className="text-[#00E5A8] text-3xl group-hover:text-black transition" />
              </div>

              <h3 className="text-2xl font-semibold mt-8">Exercise Library</h3>

              <p className="text-gray-400 mt-5 leading-7">
                Hundreds of exercises with detailed instructions and proper form
                guidance.
              </p>
            </div>

            {/* Card 5 */}

            <div className="group bg-[#0B1220] border border-white/10 rounded-3xl p-8 hover:border-[#00E5A8] transition-all duration-300 hover:-translate-y-3">
              <div className="w-16 h-16 rounded-2xl bg-[#00E5A8]/10 flex items-center justify-center group-hover:bg-[#00E5A8] transition">
                <FaRobot className="text-[#00E5A8] text-3xl group-hover:text-black transition" />
              </div>

              <h3 className="text-2xl font-semibold mt-8">AI Coach</h3>

              <p className="text-gray-400 mt-5 leading-7">
                Chat anytime with your intelligent fitness assistant and get
                instant answers.
              </p>
            </div>

            {/* Card 6 */}

            <div className="group bg-[#0B1220] border border-white/10 rounded-3xl p-8 hover:border-[#00E5A8] transition-all duration-300 hover:-translate-y-3">
              <div className="w-16 h-16 rounded-2xl bg-[#00E5A8]/10 flex items-center justify-center group-hover:bg-[#00E5A8] transition">
                <FaHeartbeat className="text-[#00E5A8] text-3xl group-hover:text-black transition" />
              </div>

              <h3 className="text-2xl font-semibold mt-8">
                Progress Analytics
              </h3>

              <p className="text-gray-400 mt-5 leading-7">
                Beautiful charts and insights help you stay motivated throughout
                your journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ACHIEVEMENTS ================= */}

      <section className="py-24 px-6 bg-[#08101D]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-[#0B1220] rounded-3xl border border-white/10 p-10">
              <h2 className="text-5xl font-bold text-[#00E5A8]">50K+</h2>

              <p className="text-gray-400 mt-4">Active Users</p>
            </div>

            <div className="text-center bg-[#0B1220] rounded-3xl border border-white/10 p-10">
              <h2 className="text-5xl font-bold text-[#00E5A8]">100K+</h2>

              <p className="text-gray-400 mt-4">AI Workouts</p>
            </div>

            <div className="text-center bg-[#0B1220] rounded-3xl border border-white/10 p-10">
              <h2 className="text-5xl font-bold text-[#00E5A8]">98%</h2>

              <p className="text-gray-400 mt-4">Success Rate</p>
            </div>

            <div className="text-center bg-[#0B1220] rounded-3xl border border-white/10 p-10">
              <h2 className="text-5xl font-bold text-[#00E5A8]">24/7</h2>

              <p className="text-gray-400 mt-4">AI Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Continue in Part 4 ===== */}

      {/* ================= TECHNOLOGY STACK ================= */}

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-[#00E5A8] uppercase tracking-[4px] text-sm font-semibold">
              OUR TECHNOLOGY
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-5">
              Built Using
              <span className="text-[#00E5A8]"> Modern Technologies</span>
            </h2>

            <p className="text-gray-400 mt-6 max-w-3xl mx-auto leading-8">
              We use the latest technologies to deliver a fast, secure and
              intelligent fitness experience.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              "React",
              "Tailwind CSS",
              "Node.js",
              "Express.js",
              "MongoDB",
              "Gemini AI",
            ].map((item, index) => (
              <div
                key={index}
                className="
                bg-[#0B1220]
                border
                border-white/10
                rounded-3xl
                py-10
                text-center
                hover:border-[#00E5A8]
                hover:-translate-y-2
                transition-all
                duration-300
              "
              >
                <h3 className="font-semibold text-lg">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}

      <section className="px-6 pb-24">
        <div
          className="
          max-w-7xl
          mx-auto
          rounded-[40px]
          bg-gradient-to-r
          from-[#00E5A8]
          via-[#00c98d]
          to-[#00b894]
          p-14
          text-center
          text-black
        "
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Ready To Start Your Fitness Journey?
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg leading-8">
            Join thousands of users transforming their lives with personalized
            workouts, AI coaching and smart nutrition guidance.
          </p>

          <div className="flex justify-center gap-6 mt-10 flex-wrap">
            <Link
              to="/register"
              className="
              bg-black
              text-white
              px-8
              py-4
              rounded-xl
              font-semibold
              hover:scale-105
              transition-all
            "
            >
              Get Started
            </Link>

            <Link
              to="/pricing"
              className="
              border-2
              border-black
              px-8
              py-4
              rounded-xl
              font-semibold
              hover:bg-black
              hover:text-white
              transition-all
            "
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}

      <footer className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Logo */}

            <div>
              <h2 className="text-3xl font-bold">
                FitGenie
                <span className="text-[#00E5A8]">AI</span>
              </h2>

              <p className="text-gray-400 mt-5 leading-8">
                AI-powered fitness platform helping users achieve healthier
                lifestyles with smart workouts and nutrition.
              </p>
            </div>

            {/* Links */}

            <div>
              <h3 className="text-xl font-semibold mb-6">Quick Links</h3>

              <ul className="space-y-4 text-gray-400">
                <li>
                  <Link to="/">Home</Link>
                </li>

                <li>
                  <Link to="/about">About</Link>
                </li>

                <li>
                  <Link to="/pricing">Pricing</Link>
                </li>

                <li>
                  <Link to="/login">Login</Link>
                </li>
              </ul>
            </div>

            {/* Features */}

            <div>
              <h3 className="text-xl font-semibold mb-6">Features</h3>

              <ul className="space-y-4 text-gray-400">
                <li>AI Workout Planner</li>

                <li>Diet Planner</li>

                <li>Progress Tracker</li>

                <li>AI Coach</li>
              </ul>
            </div>

            {/* Contact */}

            <div>
              <h3 className="text-xl font-semibold mb-6">Contact</h3>

              <p className="text-gray-400">support@fitgenieai.com</p>

              <p className="text-gray-400 mt-3">+91 XXXXX XXXXX</p>
            </div>
          </div>

          <div className="border-t border-white/10 mt-14 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500">
              © 2026 FitGenie AI. All Rights Reserved.
            </p>

            <div className="flex gap-6 mt-5 md:mt-0 text-gray-400">
              <Link to="/privacy">Privacy</Link>

              <Link to="/terms">Terms</Link>

              <Link to="/contact">Support</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;

// import {
//   FaDumbbell,
//   FaAppleAlt,
//   FaRobot,
//   FaHeartbeat,
//   FaArrowRight,
// } from "react-icons/fa";

// // import aboutImg from "/about.png";

// const About = () => {
//   return (
//     <div className="bg-[#050B18] text-white overflow-hidden">
//       {/* ================= HERO SECTION ================= */}

//       <section className="relative py-24 px-6">
//         <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
//           {/* Left */}

//           <div>
//             <span
//               className="
//               inline-block
//               px-5
//               py-2
//               rounded-full
//               bg-[#00E5A8]/20
//               text-[#00E5A8]
//               font-medium
//               mb-6
//             "
//             >
//               🚀 About FitGenie AI
//             </span>

//             <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
//               Smarter Fitness
//               <br />
//               Powered by
//               <span className="text-[#00E5A8]"> Artificial Intelligence</span>
//             </h1>

//             <p className="text-gray-400 text-lg mt-8 leading-8">
//               FitGenie AI is your intelligent fitness companion built to
//               transform the way you train, eat and stay healthy. We combine
//               Artificial Intelligence with modern fitness science to generate
//               personalized workouts, smart diet plans, AI coaching and progress
//               tracking.
//             </p>

//             <div className="flex flex-wrap gap-5 mt-10">
//               <button
//                 className="
//                 bg-[#00E5A8]
//                 text-black
//                 px-7
//                 py-4
//                 rounded-xl
//                 font-semibold
//                 flex
//                 items-center
//                 gap-3
//                 hover:scale-105
//                 hover:shadow-[0_0_25px_rgba(0,229,168,0.5)]
//                 transition-all
//                 duration-300
//                 cursor-pointer
//               "
//               >
//                 Get Started
//                 <FaArrowRight />
//               </button>

//               <button
//                 className="
//                 border
//                 border-white/10
//                 px-7
//                 py-4
//                 rounded-xl
//                 hover:border-[#00E5A8]
//                 hover:text-[#00E5A8]
//                 transition
//                 cursor-pointer
//               "
//               >
//                 Learn More
//               </button>
//             </div>
//           </div>

//           {/* Right */}

//           <div className="flex justify-center">
//             <img
//   src="/about.png"
//   alt="About FitGenie"
//   className="
//     w-full
//     max-w-lg
//     drop-shadow-[0_0_40px_rgba(0,229,168,0.25)]
//   "
// />
//           </div>
//         </div>
//       </section>

//       {/* ================= OUR STORY ================= */}

//       <section className="py-24 px-6">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center">
//             <span className="text-[#00E5A8] uppercase tracking-[3px]">
//               Our Story
//             </span>

//             <h2 className="text-4xl font-bold mt-4">
//               Why We Created FitGenie AI
//             </h2>

//             <p className="text-gray-400 mt-6 max-w-3xl mx-auto leading-8">
//               Most fitness apps only provide generic workout routines and diet
//               charts that rarely match individual needs. We wanted to create a
//               platform that understands every person's unique fitness journey
//               and delivers personalized recommendations using Artificial
//               Intelligence.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-8 mt-20">
//             {/* Card 1 */}

//             <div
//               className="
//               bg-[#0B1220]
//               border
//               border-white/10
//               rounded-3xl
//               p-8
//               hover:border-[#00E5A8]
//               transition-all
//               duration-300
//             "
//             >
//               <FaRobot
//                 className="
//                 text-[#00E5A8]
//                 text-5xl
//                 mb-6
//               "
//               />

//               <h3 className="text-2xl font-semibold">AI Driven Platform</h3>

//               <p className="text-gray-400 mt-5 leading-8">
//                 Our intelligent recommendation engine creates personalized
//                 workout routines, nutrition plans and daily guidance according
//                 to your goals, experience level and progress.
//               </p>
//             </div>

//             {/* Card 2 */}

//             <div
//               className="
//               bg-[#0B1220]
//               border
//               border-white/10
//               rounded-3xl
//               p-8
//               hover:border-[#00E5A8]
//               transition-all
//               duration-300
//             "
//             >
//               <FaHeartbeat
//                 className="
//                 text-[#00E5A8]
//                 text-5xl
//                 mb-6
//               "
//               />

//               <h3 className="text-2xl font-semibold">Health First</h3>

//               <p className="text-gray-400 mt-5 leading-8">
//                 We believe fitness is not just about building muscles. It is
//                 about creating healthy habits, improving mental wellness and
//                 living a better lifestyle every single day.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ================= MISSION & VISION ================= */}

//       <section className="py-24 px-6 bg-[#08101D]">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid lg:grid-cols-2 gap-10">
//             {/* Mission */}

//             <div
//               className="
//               bg-[#0B1220]
//               border
//               border-white/10
//               rounded-3xl
//               p-10
//               hover:border-[#00E5A8]
//               transition-all
//               duration-300
//             "
//             >
//               <div
//                 className="
//                 w-16
//                 h-16
//                 rounded-2xl
//                 bg-[#00E5A8]/20
//                 flex
//                 items-center
//                 justify-center
//                 mb-6
//               "
//               >
//                 <FaDumbbell className="text-[#00E5A8] text-3xl" />
//               </div>

//               <h2 className="text-3xl font-bold">Our Mission</h2>

//               <p className="text-gray-400 leading-8 mt-6">
//                 Our mission is to make personalized fitness accessible to
//                 everyone through Artificial Intelligence. We want every
//                 individual to receive customized workouts, healthy meal plans
//                 and expert guidance regardless of their experience level.
//               </p>
//             </div>

//             {/* Vision */}

//             <div
//               className="
//               bg-[#0B1220]
//               border
//               border-white/10
//               rounded-3xl
//               p-10
//               hover:border-[#00E5A8]
//               transition-all
//               duration-300
//             "
//             >
//               <div
//                 className="
//                 w-16
//                 h-16
//                 rounded-2xl
//                 bg-[#00E5A8]/20
//                 flex
//                 items-center
//                 justify-center
//                 mb-6
//               "
//               >
//                 <FaAppleAlt className="text-[#00E5A8] text-3xl" />
//               </div>

//               <h2 className="text-3xl font-bold">Our Vision</h2>

//               <p className="text-gray-400 leading-8 mt-6">
//                 We envision a future where Artificial Intelligence helps
//                 millions of people achieve healthier lifestyles through
//                 intelligent coaching, nutrition guidance and continuous progress
//                 monitoring.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ================= WHY CHOOSE US ================= */}

//       <section className="py-24 px-6">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <span className="text-[#00E5A8] uppercase tracking-[4px]">
//               Why Choose Us
//             </span>

//             <h2 className="text-4xl font-bold mt-4">
//               Everything You Need In One Platform
//             </h2>

//             <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
//               FitGenie AI combines modern technology with professional fitness
//               guidance to deliver a smarter experience.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {/* Card */}

//             <div className="bg-[#0B1220] border border-white/10 rounded-3xl p-8 hover:border-[#00E5A8] hover:-translate-y-2 transition-all duration-300">
//               <FaRobot className="text-5xl text-[#00E5A8] mb-5" />

//               <h3 className="text-xl font-semibold">AI Workout Planner</h3>

//               <p className="text-gray-400 mt-4">
//                 Personalized workout plans generated according to your goals.
//               </p>
//             </div>

//             <div className="bg-[#0B1220] border border-white/10 rounded-3xl p-8 hover:border-[#00E5A8] hover:-translate-y-2 transition-all duration-300">
//               <FaAppleAlt className="text-5xl text-[#00E5A8] mb-5" />

//               <h3 className="text-xl font-semibold">Smart Diet Plans</h3>

//               <p className="text-gray-400 mt-4">
//                 Healthy meal recommendations with calorie tracking.
//               </p>
//             </div>

//             <div className="bg-[#0B1220] border border-white/10 rounded-3xl p-8 hover:border-[#00E5A8] hover:-translate-y-2 transition-all duration-300">
//               <FaHeartbeat className="text-5xl text-[#00E5A8] mb-5" />

//               <h3 className="text-xl font-semibold">Health Monitoring</h3>

//               <p className="text-gray-400 mt-4">
//                 Monitor body weight, BMI, water intake and daily activity.
//               </p>
//             </div>

//             <div className="bg-[#0B1220] border border-white/10 rounded-3xl p-8 hover:border-[#00E5A8] hover:-translate-y-2 transition-all duration-300">
//               <FaDumbbell className="text-5xl text-[#00E5A8] mb-5" />

//               <h3 className="text-xl font-semibold">Exercise Library</h3>

//               <p className="text-gray-400 mt-4">
//                 Hundreds of guided exercises with proper techniques.
//               </p>
//             </div>

//             <div className="bg-[#0B1220] border border-white/10 rounded-3xl p-8 hover:border-[#00E5A8] hover:-translate-y-2 transition-all duration-300">
//               <FaRobot className="text-5xl text-[#00E5A8] mb-5" />

//               <h3 className="text-xl font-semibold">AI Coach</h3>

//               <p className="text-gray-400 mt-4">
//                 Ask questions anytime and receive instant AI assistance.
//               </p>
//             </div>

//             <div className="bg-[#0B1220] border border-white/10 rounded-3xl p-8 hover:border-[#00E5A8] hover:-translate-y-2 transition-all duration-300">
//               <FaHeartbeat className="text-5xl text-[#00E5A8] mb-5" />

//               <h3 className="text-xl font-semibold">Progress Tracking</h3>

//               <p className="text-gray-400 mt-4">
//                 Track your fitness journey with detailed analytics.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ================= TECHNOLOGY STACK ================= */}

//       <section className="py-24 px-6 bg-[#08101D]">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <span className="text-[#00E5A8] uppercase tracking-[4px]">
//               Technology
//             </span>

//             <h2 className="text-4xl font-bold mt-4">
//               Built With Modern Technologies
//             </h2>

//             <p className="text-gray-400 mt-5 max-w-3xl mx-auto">
//               FitGenie AI is powered by modern web technologies to deliver fast
//               performance, security and an intelligent user experience.
//             </p>
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
//             {[
//               "React",
//               "Tailwind CSS",
//               "Node.js",
//               "Express",
//               "MongoDB",
//               "Gemini AI",
//             ].map((tech, index) => (
//               <div
//                 key={index}
//                 className="
//                 bg-[#0B1220]
//                 border
//                 border-white/10
//                 rounded-2xl
//                 py-8
//                 text-center
//                 hover:border-[#00E5A8]
//                 hover:scale-105
//                 transition-all
//                 duration-300
//               "
//               >
//                 <h3 className="font-semibold text-lg">{tech}</h3>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ================= STATS ================= */}

//       <section className="py-24 px-6">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
//             <div className="bg-[#0B1220] border border-white/10 rounded-3xl p-8 text-center">
//               <h2 className="text-5xl font-bold text-[#00E5A8]">50K+</h2>

//               <p className="text-gray-400 mt-3">Active Users</p>
//             </div>

//             <div className="bg-[#0B1220] border border-white/10 rounded-3xl p-8 text-center">
//               <h2 className="text-5xl font-bold text-[#00E5A8]">100K+</h2>

//               <p className="text-gray-400 mt-3">Workouts Generated</p>
//             </div>

//             <div className="bg-[#0B1220] border border-white/10 rounded-3xl p-8 text-center">
//               <h2 className="text-5xl font-bold text-[#00E5A8]">98%</h2>

//               <p className="text-gray-400 mt-3">Success Rate</p>
//             </div>

//             <div className="bg-[#0B1220] border border-white/10 rounded-3xl p-8 text-center">
//               <h2 className="text-5xl font-bold text-[#00E5A8]">24/7</h2>

//               <p className="text-gray-400 mt-3">AI Support</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ================= CTA ================= */}

//       <section className="px-6 pb-24">
//         <div
//           className="
//           max-w-7xl
//           mx-auto
//           rounded-[40px]
//           bg-gradient-to-r
//           from-[#00E5A8]
//           to-[#00b894]
//           p-12
//           text-center
//           text-black
//         "
//         >
//           <h2 className="text-4xl font-bold">
//             Ready To Transform Your Fitness?
//           </h2>

//           <p className="mt-6 text-lg max-w-3xl mx-auto">
//             Join thousands of fitness enthusiasts who are already using FitGenie
//             AI to achieve their health and fitness goals faster.
//           </p>

//           <button
//             className="
//             mt-10
//             bg-black
//             text-white
//             px-8
//             py-4
//             rounded-xl
//             font-semibold
//             hover:scale-105
//             transition-all
//             duration-300
//             cursor-pointer
//           "
//           >
//             Start Your Journey
//           </button>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default About;
