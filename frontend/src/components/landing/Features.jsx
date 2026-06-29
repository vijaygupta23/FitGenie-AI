import { FaDumbbell, FaRobot, FaChartLine } from "react-icons/fa";

// import { GiMeal } from "react-icons/gi";

const features = [
  {
    icon: <FaDumbbell />,
    title: "AI Workout Generator",
    desc: "Get personalized workout plans based on your goals, equipment & level.",
  },
  {
    icon: "🥗",
    title: "AI Diet Planner",
    desc: "Customized meal plans based on your preference, calorie & fitness goals.",
  },
  {
    icon: <FaRobot />,
    title: "AI Fitness Coach",
    desc: "24/7 AI coach to answer your questions and keep you motivated.",
  },
  {
    icon: <FaChartLine />,
    title: "Progress Tracking",
    desc: "Track your progress with advanced analytics and smart insights.",
  },
];

// </section>;

const Features = () => {
  return (
    <section id="features">
      <section className="py-28 max-w-7xl mx-auto px-8">
        {/* Top Text */}
        <p className="text-center text-sm uppercase tracking-[4px] text-gray-500">
          Powered by AI. Built for Results.
        </p>

        <h2 className="text-center text-4xl lg:text-5xl font-bold mt-4">
          Smart Features for{" "}
          <span className="text-[#00E5A8]">Your Fitness Journey</span>
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="
              bg-[#08111F]
              border
              border-white/10
              rounded-3xl
              p-6
              cursor-pointer
              transition-all
              duration-300
              hover:-translate-y-2
              hover:border-[#00E5A8]/40
              hover:shadow-[0_0_25px_rgba(0,229,168,0.15)]
            "
            >
              {/* Icon */}
              <div
                className="
                w-15
                h-15
                rounded-2xl
                bg-[#00E5A8]/10
                flex
                items-center
                justify-center
                text-[#00E5A8]
                text-2xl
                mb-6
              "
              >
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>

              {/* Description */}
              <p className="text-gray-400 leading-7">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Features;
