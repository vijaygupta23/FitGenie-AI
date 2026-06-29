import { Link } from "react-router-dom";
import { FaPlay, FaArrowRight, FaRobot, FaChartLine } from "react-icons/fa";

const Demo = () => {
  return (
    <div className="min-h-screen bg-[#050B18] text-white overflow-x-hidden">
      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden">
        {/* Background Glow */}

        <div className="absolute -top-40 -left-40 w-[420px] h-[420px] bg-[#00E5A8]/10 rounded-full blur-[140px]" />

        <div className="absolute bottom-0 right-0 w-[380px] h-[380px] bg-cyan-500/10 rounded-full blur-[140px]" />

        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT */}

            <div>
              <span className="inline-flex items-center gap-2 bg-[#00E5A8]/10 border border-[#00E5A8]/20 text-[#00E5A8] px-5 py-2 rounded-full text-sm font-medium">
                🎥 Live Product Demo
              </span>

              <h1 className="text-5xl lg:text-7xl font-black leading-tight mt-8">
                Watch
                <span className="text-[#00E5A8]"> FitGenie AI</span>
                <br />
                In Action
              </h1>

              <p className="text-gray-400 text-lg leading-9 mt-8 max-w-xl">
                Explore how FitGenie AI creates intelligent workouts,
                personalized diet plans, AI coaching and advanced progress
                tracking in just a few clicks.
              </p>

              <div className="flex flex-wrap gap-5 mt-10">
                <Link
                  to="/register"
                  className="bg-[#00E5A8] text-black px-8 py-4 rounded-xl font-semibold flex items-center gap-3 hover:scale-105 transition-all duration-300"
                >
                  Get Started
                  <FaArrowRight />
                </Link>

                <button className="border border-white/10 px-8 py-4 rounded-xl flex items-center gap-3 hover:border-[#00E5A8] hover:text-[#00E5A8] transition-all">
                  <FaPlay />
                  Play Demo
                </button>
              </div>

              {/* Stats */}

              <div className="grid grid-cols-3 gap-5 mt-14">
                <div>
                  <h2 className="text-3xl font-bold text-[#00E5A8]">50K+</h2>

                  <p className="text-gray-500 text-sm mt-2">Users</p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-[#00E5A8]">98%</h2>

                  <p className="text-gray-500 text-sm mt-2">Success</p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-[#00E5A8]">AI</h2>

                  <p className="text-gray-500 text-sm mt-2">Powered</p>
                </div>
              </div>
            </div>

            {/* RIGHT */}

            <div className="relative flex justify-center">
              {/* Glow */}

              <div className="absolute w-[420px] h-[420px] bg-[#00E5A8]/10 rounded-full blur-[120px]" />

              {/* Main Image */}

              <img
                src="/Dem.png"
                alt="Demo"
                className="relative z-10 w-full max-w-2xl rounded-3xl shadow-2xl border border-white/10"
              />

              {/* Floating Card */}

              <div className="absolute top-10 -left-6 bg-[#0B1220] border border-white/10 rounded-2xl p-5 shadow-xl">
                <div className="flex items-center gap-4">
                  <FaRobot className="text-[#00E5A8] text-2xl" />

                  <div>
                    <h4 className="font-semibold">AI Coach</h4>

                    <p className="text-gray-400 text-sm">Online 24/7</p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-10 -right-8 bg-[#0B1220] border border-white/10 rounded-2xl p-5 shadow-xl">
                <div className="flex items-center gap-4">
                  <FaChartLine className="text-[#00E5A8] text-2xl" />

                  <div>
                    <h4 className="font-semibold">Progress</h4>

                    <p className="text-gray-400 text-sm">+15% This Month</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Continue in Part 2 ===== */}

      {/* ================= VIDEO DEMO ================= */}

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#00E5A8] uppercase tracking-[4px] text-sm font-semibold">
              PRODUCT WALKTHROUGH
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-5">
              See How
              <span className="text-[#00E5A8]"> FitGenie AI Works</span>
            </h2>

            <p className="text-gray-400 mt-6 max-w-3xl mx-auto leading-8">
              Watch how our AI generates personalized workouts, diet plans and
              tracks your fitness journey in seconds.
            </p>
          </div>

          <div
            className="
            relative
            rounded-[35px]
            overflow-hidden
            border
            border-white/10
            shadow-2xl
          "
          >
            <img
              src="/video-preview.png"
              alt="Video Preview"
              className="w-full"
            />

            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <button
                className="
                w-24
                h-24
                rounded-full
                bg-[#00E5A8]
                text-black
                text-4xl
                flex
                items-center
                justify-center
                hover:scale-110
                transition-all
                duration-300
              "
              >
                <FaPlay />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= DASHBOARD PREVIEW ================= */}

      <section className="py-24 px-6 bg-[#08101D]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT */}

            <div>
              <span className="text-[#00E5A8] uppercase tracking-[4px] text-sm">
                DASHBOARD
              </span>

              <h2 className="text-4xl font-bold mt-5">Powerful Dashboard</h2>

              <p className="text-gray-400 leading-8 mt-6">
                Track calories, workouts, progress, body measurements and AI
                recommendations all from one beautiful dashboard.
              </p>

              <ul className="space-y-5 mt-10">
                <li className="flex gap-3">✅ AI Workout Suggestions</li>

                <li className="flex gap-3">✅ Daily Calories</li>

                <li className="flex gap-3">✅ Weight Tracking</li>

                <li className="flex gap-3">✅ Weekly Progress</li>

                <li className="flex gap-3">✅ Smart Insights</li>
              </ul>
            </div>

            {/* RIGHT */}

            <div>
              <img
                src="/dashboard-demo.png"
                alt="Dashboard"
                className="
                rounded-3xl
                border
                border-white/10
                shadow-xl
              "
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= WORKOUT ================= */}

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* IMAGE */}

            <div>
              <img
                src="/workout-demo.png"
                alt="Workout"
                className="
                rounded-3xl
                border
                border-white/10
              "
              />
            </div>

            {/* CONTENT */}

            <div>
              <span className="text-[#00E5A8] uppercase tracking-[4px] text-sm">
                AI WORKOUT
              </span>

              <h2 className="text-4xl font-bold mt-5">
                Personalized Workout Planner
              </h2>

              <p className="text-gray-400 leading-8 mt-6">
                Select your fitness goal, workout duration, experience level and
                focus area. AI instantly generates a customized workout plan.
              </p>

              <div className="grid grid-cols-2 gap-5 mt-10">
                <div className="bg-[#0B1220] rounded-2xl p-6 border border-white/10">
                  💪
                  <h3 className="font-semibold mt-4">Smart Exercises</h3>
                </div>

                <div className="bg-[#0B1220] rounded-2xl p-6 border border-white/10">
                  📅
                  <h3 className="font-semibold mt-4">Weekly Plans</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= DIET ================= */}

      <section className="py-24 px-6 bg-[#08101D]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#00E5A8] uppercase tracking-[4px] text-sm">
                AI DIET
              </span>

              <h2 className="text-4xl font-bold mt-5">
                Personalized Diet Planner
              </h2>

              <p className="text-gray-400 leading-8 mt-6">
                Get AI-generated meal plans based on calories, fitness goals,
                allergies and food preference.
              </p>

              <div className="flex gap-4 mt-10 flex-wrap">
                <span className="bg-[#00E5A8]/10 text-[#00E5A8] px-5 py-2 rounded-full">
                  Weight Loss
                </span>

                <span className="bg-[#00E5A8]/10 text-[#00E5A8] px-5 py-2 rounded-full">
                  Muscle Gain
                </span>

                <span className="bg-[#00E5A8]/10 text-[#00E5A8] px-5 py-2 rounded-full">
                  High Protein
                </span>
              </div>
            </div>

            <div>
              <img
                src="/diet-demo.png"
                alt="Diet"
                className="
                rounded-3xl
                border
                border-white/10
              "
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== Continue in Part 3 ===== */}

      {/* ================= AI COACH ================= */}

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT */}

            <div>
              <img
                src="/coach-demo.png"
                alt="AI Coach"
                className="
                rounded-3xl
                border
                border-white/10
                shadow-xl
              "
              />
            </div>

            {/* RIGHT */}

            <div>
              <span className="text-[#00E5A8] uppercase tracking-[4px] text-sm">
                AI FITNESS COACH
              </span>

              <h2 className="text-4xl font-bold mt-5">
                Your Personal AI Trainer
              </h2>

              <p className="text-gray-400 leading-8 mt-6">
                Ask fitness questions anytime. FitGenie AI provides instant
                answers about workouts, nutrition, recovery and healthy habits.
              </p>

              <div className="space-y-5 mt-10">
                <div className="bg-[#0B1220] border border-white/10 rounded-2xl p-5">
                  🤖 "Suggest a workout for chest."
                </div>

                <div className="bg-[#0B1220] border border-white/10 rounded-2xl p-5">
                  🥗 "Create a 2500 calorie diet."
                </div>

                <div className="bg-[#0B1220] border border-white/10 rounded-2xl p-5">
                  💪 "How can I gain muscle faster?"
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROGRESS ================= */}

      <section className="py-24 px-6 bg-[#08101D]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#00E5A8] uppercase tracking-[4px] text-sm">
                PROGRESS TRACKING
              </span>

              <h2 className="text-4xl font-bold mt-5">
                Monitor Every Achievement
              </h2>

              <p className="text-gray-400 leading-8 mt-6">
                Track workouts, calories, weight changes, body measurements and
                weekly fitness reports.
              </p>

              <ul className="space-y-4 mt-8">
                <li>📈 Interactive Charts</li>

                <li>⚡ Weekly Reports</li>

                <li>🏆 Goal Tracking</li>

                <li>🔥 Daily Streak</li>
              </ul>
            </div>

            <div>
              <img
                src="/progress-demo.png"
                alt="Progress"
                className="
                rounded-3xl
                border
                border-white/10
              "
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-[#00E5A8] uppercase tracking-[4px]">
              FEATURES
            </span>

            <h2 className="text-4xl font-bold mt-5">
              Why Users Love FitGenie AI
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "AI Workout Generator",
              "AI Diet Planner",
              "24/7 AI Coach",
              "Progress Analytics",
              "Exercise Library",
              "Goal Tracking",
            ].map((item, index) => (
              <div
                key={index}
                className="
                bg-[#0B1220]
                border
                border-white/10
                rounded-3xl
                p-8
                hover:border-[#00E5A8]
                hover:-translate-y-2
                transition-all
              "
              >
                <div className="w-16 h-16 rounded-2xl bg-[#00E5A8]/10 flex items-center justify-center text-3xl">
                  ⭐
                </div>

                <h3 className="text-xl font-semibold mt-8">{item}</h3>

                <p className="text-gray-400 mt-5 leading-7">
                  Powerful AI feature designed to improve your fitness
                  experience.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}

      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto rounded-[40px] bg-gradient-to-r from-[#00E5A8] via-[#00c98d] to-[#00b894] p-14 text-center text-black">
          <h2 className="text-5xl font-bold">
            Ready To Experience FitGenie AI?
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg leading-8">
            Join thousands of users achieving their fitness goals with
            AI-powered workouts and nutrition.
          </p>

          <Link
            to="/register"
            className="
            inline-block
            mt-10
            bg-black
            text-white
            px-10
            py-4
            rounded-xl
            font-semibold
            hover:scale-105
            transition-all
          "
          >
            Create Free Account
          </Link>
        </div>
      </section>

      {/* ================= FOOTER ================= */}

      <footer className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-12 text-center">
          <h2 className="text-3xl font-bold">
            FitGenie
            <span className="text-[#00E5A8]">AI</span>
          </h2>

          <p className="text-gray-500 mt-5">
            © 2026 FitGenie AI. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Demo;
