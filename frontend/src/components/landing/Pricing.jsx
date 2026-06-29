const Pricing = () => {
  return (
    <section id="pricing" className="py-20 px-6 bg-[#050B18] text-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">Choose Your Plan</h2>

          <p className="text-gray-400 mt-4 text-lg">
            Flexible pricing for every fitness journey.
          </p>
        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* FREE */}

          <div
            className="
        bg-[#0B1220]
border border-white/10
rounded-2xl
p-6
max-w-[340px]
w-full
mx-auto
        hover:border-[#00E5A8]
        hover:-translate-y-2
        transition-all
        duration-300
      "
          >
            <h3 className="text-xl font-bold">Free</h3>

            <h1 className="text-4xl font-bold mt-5">₹0</h1>

            <p className="text-gray-400 mt-2">Forever Free</p>

            <ul className="space-y-3 mt-6 text-sm text-gray-300">
              <li>✅ Basic Workout Plans</li>

              <li>✅ Basic Diet Plans</li>

              <li>✅ Workout Calendar</li>

              <li>✅ Progress Tracking</li>

              <li>❌ AI Coach</li>
            </ul>

            <button
              className="
         mt-7
w-full
py-2.5
rounded-xl
          bg-white/10
          hover:bg-white/20
          transition
          cursor-pointer
        "
            >
              Start Free
            </button>
          </div>

          {/* PRO */}

          <div
            className="
        relative
        bg-[#0B1220]
        border-2
        border-[#00E5A8]
        rounded-3xl
        p-8
        scale-105
        shadow-[0_0_30px_rgba(0,229,168,0.25)]
      "
          >
            <span
              className="
          absolute
          top-5
          right-5
          bg-[#00E5A8]
          text-black
          px-4
          py-1
          rounded-full
          text-sm
          font-bold
        "
            >
              MOST POPULAR
            </span>

            <h3 className="text-2xl font-bold">Pro</h3>

            <h1 className="text-5xl font-bold mt-5">₹299</h1>

            <p className="text-gray-400 mt-2">Per Month</p>

            <ul className="space-y-4 mt-8 text-gray-300">
              <li>✅ Unlimited AI Workouts</li>

              <li>✅ Unlimited Diet Plans</li>

              <li>✅ AI Coach</li>

              <li>✅ PDF Export</li>

              <li>✅ Progress Analytics</li>

              <li>✅ Priority Support</li>
            </ul>

            <button
              className="
         mt-7
w-full
py-2.5
          rounded-xl
          bg-[#00E5A8]
          text-black
          font-semibold
          hover:scale-105
          hover:shadow-[0_0_20px_rgba(0,229,168,0.5)]
          transition-all
          duration-300
          cursor-pointer
        "
            >
              Choose Pro
            </button>
          </div>

          {/* PREMIUM */}

          <div
            className="
        bg-[#0B1220]
        border
        border-white/10
        rounded-3xl
        p-8
        hover:border-[#00E5A8]
        hover:-translate-y-2
        transition-all
        duration-300
      "
          >
            <h3 className="text-2xl font-bold">Premium</h3>

            <h1 className="text-5xl font-bold mt-5">₹599</h1>

            <p className="text-gray-400 mt-2">Per Month</p>

            <ul className="space-y-4 mt-8 text-gray-300">
              <li>✅ Everything in Pro</li>

              <li>✅ Personal AI Coach</li>

              <li>✅ Weekly Reports</li>

              <li>✅ Smart Meal Suggestions</li>

              <li>✅ Early Access Features</li>

              <li>✅ Premium Support</li>
            </ul>

            <button
              className="
          mt-7
w-full
py-2.5
rounded-xl
          bg-white/10
          hover:bg-white/20
          transition
          cursor-pointer
        "
            >
              Go Premium
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
