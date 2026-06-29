import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaSearch,
  FaArrowRight,
  FaFire,
  FaDumbbell,
  FaAppleAlt,
  FaRobot,
} from "react-icons/fa";

const blogData = [
  {
    id: 1,
    title: "10 AI Workout Tips to Build Muscle Faster",
    category: "Workout",
    image: "/Blog1.png",
    date: "June 28, 2026",
    author: "FitGenie AI",
  },
  {
    id: 2,
    title: "Best High Protein Diet for Muscle Gain",
    category: "Diet",
    image: "/Blog2.png",
    date: "June 25, 2026",
    author: "FitGenie AI",
  },
  {
    id: 3,
    title: "How AI is Changing the Fitness Industry",
    category: "AI",
    image: "/Blog3.png",
    date: "June 20, 2026",
    author: "FitGenie AI",
  },
  {
    id: 4,
    title: "Healthy Habits That Will Change Your Life",
    category: "AI",
    image: "/Blog4.png",
    date: "May 20, 2026",
    author: "FitGenie AI",
  },
  {
    id: 5,
    title: "Small Habits Big Changes Better You",
    category: "AI",
    image: "/Blog5.png",
    date: "May 25, 2026",
    author: "FitGenie AI",
  },
  {
    id: 6,
    title: "Morning Routine for Better Health",
    category: "AI",
    image: "/Blog6.png",
    date: "May 10, 2026",
    author: "FitGenie AI",
  },
];

const Blog = () => {
  const [search, setSearch] = useState("");

  const filteredBlogs = blogData.filter((blog) =>
    blog.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-[#050B18] text-white overflow-x-hidden">
      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden">
        {/* Glow Effects */}

        <div className="absolute -top-40 -left-40 w-[420px] h-[420px] rounded-full bg-[#00E5A8]/10 blur-[140px]" />

        <div className="absolute bottom-0 right-0 w-[380px] h-[380px] rounded-full bg-cyan-500/10 blur-[140px]" />

        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}

            <div>
              <span className="inline-flex items-center gap-2 bg-[#00E5A8]/10 border border-[#00E5A8]/20 text-[#00E5A8] px-5 py-2 rounded-full">
                <FaFire />
                Latest Fitness Articles
              </span>

              <h1 className="text-5xl lg:text-7xl font-black mt-8 leading-tight">
                Learn.
                <br />
                Improve.
                <br />
                <span className="text-[#00E5A8]">Stay Healthy.</span>
              </h1>

              <p className="text-gray-400 text-lg leading-9 mt-8 max-w-xl">
                Discover expert fitness advice, AI workout tips, nutrition
                guides and healthy lifestyle articles written to help you reach
                your goals.
              </p>

              <div className="flex flex-wrap gap-5 mt-10">
                <Link
                  to="/register"
                  className="bg-[#00E5A8] text-black px-8 py-4 rounded-xl font-semibold flex items-center gap-3 hover:scale-105 transition-all"
                >
                  Get Started
                  <FaArrowRight />
                </Link>

                <Link
                  to="/demo"
                  className="border border-white/10 px-8 py-4 rounded-xl hover:border-[#00E5A8] hover:text-[#00E5A8] transition-all"
                >
                  Watch Demo
                </Link>
              </div>
            </div>

            {/* Right */}

            <div className="relative flex justify-center">
              <div className="absolute w-[430px] h-[430px] bg-[#00E5A8]/10 rounded-full blur-[120px]" />

              <img
                src="/BlogHero.png"
                alt="Blog Hero"
                className="relative z-10 w-full max-w-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= SEARCH ================= */}

      <section className="px-6">
        <div className="max-w-5xl mx-auto">
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
              placeholder="Search fitness articles..."
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
                transition-all
              "
            />
          </div>
        </div>
      </section>

      {/* ================= CATEGORIES ================= */}

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-5">
            <button className="bg-[#00E5A8] text-black px-7 py-3 rounded-full font-semibold">
              All
            </button>

            <button className="bg-[#0B1220] border border-white/10 px-7 py-3 rounded-full hover:border-[#00E5A8] transition">
              <FaDumbbell className="inline mr-2" />
              Workout
            </button>

            <button className="bg-[#0B1220] border border-white/10 px-7 py-3 rounded-full hover:border-[#00E5A8] transition">
              <FaAppleAlt className="inline mr-2" />
              Diet
            </button>

            <button className="bg-[#0B1220] border border-white/10 px-7 py-3 rounded-full hover:border-[#00E5A8] transition">
              <FaRobot className="inline mr-2" />
              AI Fitness
            </button>
          </div>
        </div>
      </section>

      {/* ===== Continue in Part 2 ===== */}

      {/* ================= FEATURED BLOG ================= */}

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <span className="text-[#00E5A8] uppercase tracking-[4px] text-sm">
                FEATURED ARTICLE
              </span>

              <h2 className="text-4xl font-bold mt-4">Editor's Pick</h2>
            </div>
          </div>

          <div
            className="
            grid
            lg:grid-cols-2
            gap-12
            items-center
            bg-[#0B1220]
            border
            border-white/10
            rounded-[35px]
            overflow-hidden
            hover:border-[#00E5A8]
            transition-all
          "
          >
            {/* IMAGE */}

            <div>
              <img
                src="/Featured.png"
                alt="Featured Blog"
                className="px-4 rounded-[20px] w-full h-full object-cover"
              />
            </div>

            {/* CONTENT */}

            <div className="p-10">
              <span className="bg-[#00E5A8]/10 text-[#00E5A8] px-4 py-2 rounded-full text-sm">
                Workout
              </span>

              <h2 className="text-4xl font-bold mt-8 leading-tight">
                The Ultimate Beginner's Guide To AI Powered Fitness Training
              </h2>

              <p className="text-gray-400 leading-8 mt-8">
                Learn how Artificial Intelligence is transforming the fitness
                industry by generating personalized workout routines, nutrition
                plans and real-time coaching based on your goals.
              </p>

              <div className="flex items-center gap-8 mt-10">
                <div>
                  <p className="font-semibold">FitGenie AI</p>

                  <span className="text-gray-500 text-sm">June 28, 2026</span>
                </div>
              </div>

              <button
                className="
                mt-10
                bg-[#00E5A8]
                text-black
                px-8
                py-4
                rounded-xl
                font-semibold
                flex
                items-center
                gap-3
                hover:scale-105
                transition-all
              "
              >
                Read Article
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= LATEST BLOGS ================= */}

      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-16">
            <div>
              <span className="text-[#00E5A8] uppercase tracking-[4px] text-sm">
                LATEST ARTICLES
              </span>

              <h2 className="text-4xl font-bold mt-4">Recent Blog Posts</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog) => (
              <div
                key={blog.id}
                className="
                bg-[#0B1220]
                border
                border-white/10
                rounded-3xl
                overflow-hidden
                hover:border-[#00E5A8]
                hover:-translate-y-3
                transition-all
                duration-300
              "
              >
                {/* IMAGE */}

                <img
                  src={blog.image}
                  alt={blog.title}
                  className="
                  w-full
                  h-60
                  object-cover
                "
                />

                {/* CONTENT */}

                <div className="p-7">
                  <span className="bg-[#00E5A8]/10 text-[#00E5A8] px-3 py-1 rounded-full text-xs">
                    {blog.category}
                  </span>

                  <h3 className="text-2xl font-semibold mt-6 leading-8">
                    {blog.title}
                  </h3>

                  <div className="flex justify-between items-center mt-8 text-gray-400 text-sm">
                    <span>{blog.author}</span>

                    <span>{blog.date}</span>
                  </div>

                  <button
                    className="
                    mt-8
                    flex
                    items-center
                    gap-3
                    text-[#00E5A8]
                    font-semibold
                    hover:gap-5
                    transition-all
                  "
                  >
                    Read More
                    <FaArrowRight />
                  </button>
                </div>
              </div>
            ))}

            {/* Extra Cards */}

            {[].map((id) => (
              <div
                key={id}
                className="
                bg-[#0B1220]
                border
                border-white/10
                rounded-3xl
                overflow-hidden
                hover:border-[#00E5A8]
                hover:-translate-y-3
                transition-all
              "
              >
                <img
                  src={`/Blog${id}.png`}
                  alt="Blog"
                  className="w-full h-60 object-cover"
                />

                <div className="p-7">
                  <span className="bg-[#00E5A8]/10 text-[#00E5A8] px-3 py-1 rounded-full text-xs">
                    Fitness
                  </span>

                  <h3 className="text-2xl font-semibold mt-6">
                    Healthy Habits That Will Change Your Life
                  </h3>

                  <div className="flex justify-between mt-8 text-gray-400 text-sm">
                    <span>FitGenie AI</span>

                    <span>June 2026</span>
                  </div>

                  <button
                    className="
                    mt-8
                    flex
                    items-center
                    gap-3
                    text-[#00E5A8]
                    font-semibold
                    hover:gap-5
                    transition-all
                  "
                  >
                    Read More
                    <FaArrowRight />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Continue in Part 3 ===== */}

      {/* ================= NEWSLETTER ================= */}

      <section className="px-6 py-24">
        <div
          className="
          max-w-7xl
          mx-auto
          rounded-[40px]
          bg-gradient-to-r
          from-[#00E5A8]
          via-[#00d49a]
          to-[#00b894]
          p-14
          text-black
        "
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* LEFT */}

            <div>
              <span className="uppercase tracking-[4px] text-sm font-semibold">
                NEWSLETTER
              </span>

              <h2 className="text-5xl font-black mt-6 leading-tight">
                Never Miss
                <br />A Fitness Update
              </h2>

              <p className="mt-6 text-lg leading-8">
                Subscribe to receive the latest workout tips, AI fitness guides,
                nutrition advice and exclusive FitGenie updates directly in your
                inbox.
              </p>
            </div>

            {/* RIGHT */}

            <div>
              <div className="bg-black/10 backdrop-blur-xl rounded-3xl p-8">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="
                  w-full
                  px-6
                  py-5
                  rounded-xl
                  bg-white
                  text-black
                  outline-none
                "
                />

                <button
                  className="
                  mt-6
                  w-full
                  bg-black
                  text-white
                  py-5
                  rounded-xl
                  font-semibold
                  hover:scale-[1.02]
                  transition-all
                "
                >
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}

      <section className="px-6 pb-24">
        <div
          className="
          max-w-7xl
          mx-auto
          bg-[#0B1220]
          border
          border-white/10
          rounded-[35px]
          p-16
          text-center
        "
        >
          <h2 className="text-5xl font-black">
            Ready To Transform
            <span className="text-[#00E5A8]"> Your Fitness?</span>
          </h2>

          <p className="text-gray-400 text-lg leading-8 mt-8 max-w-3xl mx-auto">
            Join thousands of fitness enthusiasts using AI-powered workouts,
            smart nutrition planning, and personalized coaching with FitGenie
            AI.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mt-12">
            <Link
              to="/register"
              className="
              bg-[#00E5A8]
              text-black
              px-10
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
              border
              border-white/20
              px-10
              py-4
              rounded-xl
              hover:border-[#00E5A8]
              hover:text-[#00E5A8]
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
              <h2 className="text-3xl font-black">
                FitGenie
                <span className="text-[#00E5A8]">AI</span>
              </h2>

              <p className="text-gray-400 leading-8 mt-6">
                AI-powered fitness platform designed to help everyone achieve
                their health goals faster.
              </p>
            </div>

            {/* Quick Links */}

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
                  <Link to="/#pricing">Pricing</Link>
                </li>

                <li>
                  <Link to="/faq">FAQ</Link>
                </li>
              </ul>
            </div>

            {/* Resources */}

            <div>
              <h3 className="text-xl font-semibold mb-6">Resources</h3>

              <ul className="space-y-4 text-gray-400">
                <li>Workout Guides</li>

                <li>Nutrition Tips</li>

                <li>Fitness Blog</li>

                <li>AI Coach</li>
              </ul>
            </div>

            {/* Contact */}

            <div>
              <h3 className="text-xl font-semibold mb-6">Contact</h3>

              <p className="text-gray-400">support@fitgenie.ai</p>

              <p className="text-gray-400 mt-3">+91 98765 43210</p>
            </div>
          </div>

          <div className="border-t border-white/10 mt-14 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500">
              © 2026 FitGenie AI. All Rights Reserved.
            </p>

            <div className="flex gap-8 mt-6 md:mt-0 text-gray-400">
              <Link to="/privacy">Privacy Policy</Link>

              <Link to="/terms">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Blog;
