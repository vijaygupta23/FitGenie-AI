import {
  FaDumbbell,
  FaRunning,
  FaBolt,
  FaHeartbeat,
  FaUserTie,
  FaClipboardList,
  FaUsers,
  FaStar,
} from "react-icons/fa";

const programs = [
  {
    image: "/programs/Muscle.png",
    icon: <FaDumbbell />,
    title: "Muscle Gain",
    desc: "Build strength and muscle mass",
    color: "bg-green-500",
  },
  {
    image: "/programs/Weight.png",
    icon: <FaRunning />,
    title: "Weight Loss",
    desc: "Burn fat and lose weight effectively",
    color: "bg-pink-500",
  },
  {
    image: "/programs/Strenght.png",
    icon: <FaBolt />,
    title: "Strength",
    desc: "Increase strength and performance",
    color: "bg-yellow-500",
  },
  {
    image: "/programs/General.png",
    icon: <FaHeartbeat />,
    title: "General Fitness",
    desc: "Stay fit and maintain a healthy lifestyle",
    color: "bg-blue-500",
  },
];

const stats = [
  {
    icon: <FaUserTie />,
    value: "50+",
    label: "Expert Trainers",
  },
  {
    icon: <FaClipboardList />,
    value: "100+",
    label: "Workout Plans",
  },
  {
    icon: <FaUsers />,
    value: "20K+",
    label: "Active Users",
  },
  {
    icon: <FaStar className="text-yellow-400" />,
    value: "4.9",
    label: "App Rating",
  },
];

const Programs = () => {
  return (
    <section id="programs">
      <section className="max-w-7xl mx-auto px-8 py-24">
        {/* Heading */}

        <p className="text-center uppercase tracking-[4px] text-gray-500 text-sm">
          Programs For Every Goal
        </p>

        <h2 className="text-center text-4xl lg:text-5xl font-bold mt-3">
          Choose Your Fitness Path
        </h2>

        {/* Program Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {programs.map((program, index) => (
            <div
              key={index}
              className="
              bg-[#08111F]
              border
              border-white/10
              rounded-3xl
              overflow-hidden
              cursor-pointer
              transition-all
              duration-300
              hover:-translate-y-2
              hover:border-[#00E5A8]/40
            "
            >
              {/* Image */}

              <div className="h-48 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="
                  w-full
                  h-full
                  
                  object-center
                  object-cover
                  transition
                  duration-500
                  hover:scale-110
                "
                />
              </div>

              {/* Content */}

              <div className="p-5">
                <div className="flex items-center gap-3">
                  <div
                    className={`
                    w-10 h-10 rounded-full
                    flex items-center justify-center
                    text-white
                    ${program.color}
                  `}
                  >
                    {program.icon}
                  </div>

                  <h3 className="font-semibold text-lg">{program.title}</h3>
                </div>

                <p className="text-gray-400 mt-4 leading-7">{program.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}

        <div
          className="
          mt-12
          grid
          md:grid-cols-2
          lg:grid-cols-4
          bg-[#08111F]
          border
          border-white/10
          rounded-3xl
          overflow-hidden
        "
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="
              flex
              items-center
              gap-4
              p-8
              border-white/10
              lg:border-r
              last:border-r-0
            "
            >
              <div className="text-3xl text-white">{stat.icon}</div>

              <div>
                <h3 className="text-3xl font-bold">{stat.value}</h3>

                <p className="text-gray-400">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Programs;
