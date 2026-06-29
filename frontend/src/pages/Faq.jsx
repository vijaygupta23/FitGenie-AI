import { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaQuestionCircle } from "react-icons/fa";

const Faq = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="min-h-screen bg-[#050B18] text-white overflow-x-hidden">
      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden">
        {/* Glow */}

        <div className="absolute -top-40 -left-40 w-[420px] h-[420px] bg-[#00E5A8]/10 rounded-full blur-[140px]" />

        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[120px]" />

        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 bg-[#00E5A8]/10 border border-[#00E5A8]/20 text-[#00E5A8] px-5 py-2 rounded-full">
              <FaQuestionCircle />
              Help Center
            </span>

            <h1 className="text-5xl lg:text-7xl font-black mt-8">
              Frequently Asked
              <span className="text-[#00E5A8]"> Questions</span>
            </h1>

            <p className="text-gray-400 max-w-3xl mx-auto leading-8 mt-8 text-lg">
              Find answers to the most common questions about FitGenie AI,
              workouts, nutrition, pricing and AI coaching.
            </p>
          </div>
        </div>
      </section>

      {/* ================= SEARCH ================= */}

      <section className="px-6">
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <FaSearch
              className="
              absolute
              left-5
              top-1/2
              -translate-y-1/2
              text-gray-500
            "
            />

            <input
              type="text"
              placeholder="Search your question..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="
              w-full
              bg-[#0B1220]
              border
              border-white/10
              rounded-2xl
              py-5
              pl-14
              pr-6
              outline-none
              focus:border-[#00E5A8]
              transition
            "
            />
          </div>
        </div>
      </section>

      {/* ================= CATEGORIES ================= */}

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#0B1220] border border-white/10 rounded-3xl p-8 hover:border-[#00E5A8] transition">
              <div className="text-5xl">💪</div>

              <h3 className="text-2xl font-semibold mt-6">Workouts</h3>

              <p className="text-gray-400 mt-4">Training plans & exercises</p>
            </div>

            <div className="bg-[#0B1220] border border-white/10 rounded-3xl p-8 hover:border-[#00E5A8] transition">
              <div className="text-5xl">🥗</div>

              <h3 className="text-2xl font-semibold mt-6">Diet</h3>

              <p className="text-gray-400 mt-4">Nutrition & meal planning</p>
            </div>

            <div className="bg-[#0B1220] border border-white/10 rounded-3xl p-8 hover:border-[#00E5A8] transition">
              <div className="text-5xl">🤖</div>

              <h3 className="text-2xl font-semibold mt-6">AI Coach</h3>

              <p className="text-gray-400 mt-4">AI assistance & coaching</p>
            </div>

            <div className="bg-[#0B1220] border border-white/10 rounded-3xl p-8 hover:border-[#00E5A8] transition">
              <div className="text-5xl">💳</div>

              <h3 className="text-2xl font-semibold mt-6">Billing</h3>

              <p className="text-gray-400 mt-4">Pricing & subscriptions</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Continue in Part 2 ===== */}

      {/* ================= FAQ ACCORDION ================= */}

      <section className="pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#00E5A8] uppercase tracking-[4px] text-sm">
              COMMON QUESTIONS
            </span>

            <h2 className="text-4xl font-bold mt-5">
              Everything You Need To Know
            </h2>
          </div>

          {[
            {
              question: "What is FitGenie AI?",
              answer:
                "FitGenie AI is an AI-powered fitness platform that helps users with personalized workout plans, diet recommendations, progress tracking and AI coaching.",
            },
            {
              question: "Is FitGenie AI free to use?",
              answer:
                "Yes. You can start with the free plan and upgrade to Premium anytime for advanced AI features.",
            },
            {
              question: "How does the AI Workout Planner work?",
              answer:
                "Simply enter your fitness goal, workout days, experience level and duration. AI generates a customized workout instantly.",
            },
            {
              question: "Can I get a personalized diet plan?",
              answer:
                "Yes. AI creates meal plans based on calories, dietary preferences, allergies and your fitness goal.",
            },
            {
              question: "Can I chat with the AI Coach?",
              answer:
                "Absolutely. The AI Coach answers your workout, nutrition and health-related questions 24/7.",
            },
            {
              question: "Does FitGenie AI track progress?",
              answer:
                "Yes. You can monitor weight, BMI, calories, workouts, water intake and overall fitness progress.",
            },
            {
              question: "Is my personal data secure?",
              answer:
                "Yes. We use secure authentication and protect your information with industry-standard security practices.",
            },
            {
              question: "Which devices are supported?",
              answer:
                "FitGenie AI works on desktop, tablet and mobile devices.",
            },
          ]
            .filter((faq) =>
              faq.question.toLowerCase().includes(search.toLowerCase()),
            )
            .map((faq, index) => (
              <details
                key={index}
                className="
                group
                mb-5
                bg-[#0B1220]
                border
                border-white/10
                rounded-2xl
                overflow-hidden
                hover:border-[#00E5A8]
                transition
              "
              >
                <summary
                  className="
                  cursor-pointer
                  list-none
                  px-8
                  py-6
                  flex
                  justify-between
                  items-center
                  text-lg
                  font-semibold
                "
                >
                  {faq.question}

                  <span className="text-[#00E5A8] text-2xl group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>

                <div
                  className="
                  px-8
                  pb-6
                  text-gray-400
                  leading-8
                "
                >
                  {faq.answer}
                </div>
              </details>
            ))}
        </div>
      </section>

      {/* ================= CONTACT SUPPORT ================= */}

      <section className="px-6 pb-24">
        <div
          className="
          max-w-6xl
          mx-auto
          rounded-[35px]
          bg-gradient-to-r
          from-[#00E5A8]
          via-[#00d49a]
          to-[#00b894]
          p-14
          text-center
          text-black
        "
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Still Have Questions?
          </h2>

          <p className="mt-6 text-lg max-w-3xl mx-auto leading-8">
            If you couldn't find the answer you're looking for, our support team
            is always ready to help you.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mt-10">
            <Link
              to="/contact"
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
              Contact Support
            </Link>

            <Link
              to="/register"
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
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}

      <footer className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-10 text-center">
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

export default Faq;
