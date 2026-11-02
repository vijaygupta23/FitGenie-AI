import { FaBell } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";
import {
  FaDumbbell,
  FaAppleAlt,
  FaRobot,
  FaChartLine,
  FaCalendarAlt,
  FaComments,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
// import { useState } from "react";

const data = [
  { day: "Mon", value: 40 },
  { day: "Tue", value: 55 },
  { day: "Wed", value: 75 },
  { day: "Thu", value: 50 },
  { day: "Fri", value: 58 },
  { day: "Sat", value: 68 },
  { day: "Sun", value: 85 },
];

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await API.get("/auth/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log("PROFILE:", response.data);

        setUser(response.data.user);
      } catch (error) {
        console.log("PROFILE ERROR:", error);

        if (error.response?.status === 401) {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          window.location.href = "/login";
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0B0F19] flex items-center justify-center">
        <p className="text-[#00E5A8] text-lg">Loading dashboard...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050B18] text-white flex">
      {/* SIDEBAR */}

      {/* <div className="w-[260px] bg-[#0B1220] border-r border-white/10 p-5 flex flex-col"> */}
      {/* <div
        className="
       hidden
       lg:flex
w-[260px]
bg-[#0B1220]
border-r
border-white/10
p-5
flex-col
"
      > */}

      <div
        className={`

fixed
top-0
left-0
h-screen
w-[260px]

bg-[#0B1220]

border-r
border-white/10

p-5

flex
flex-col

z-50

transform
transition-transform
duration-300

${open ? "translate-x-0" : "-translate-x-full"}

lg:translate-x-0
lg:static
lg:flex

`}
      >
        <button
          onClick={() => setOpen(false)}
          className="

lg:hidden

absolute

top-5

right-5

text-3xl

"
        >
          ✕
        </button>

        <h1 className="text-2xl font-bold text-[#00E5A8] mb-10">FitGenie AI</h1>

        <div className="space-y-2">
          <button className="w-full flex items-center gap-3 bg-[#00E5A8]/15 text-[#00E5A8] p-3 rounded-xl">
            <FaChartLine />
            Dashboard
          </button>

          <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-white/5">
            <Link
              to="/workout"
              className="flex items-left gap-3 px-3 py-3 rounded-xl hover:bg-[#00E5A8]/10 hover:text-[#00E5A8] transition"
            >
              <FaDumbbell />
              <span>AI Workout</span>
            </Link>
          </button>

          <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-white/5">
            <Link
              to="/diet"
              className="flex items-left gap-3 px-3 py-3 rounded-xl hover:bg-[#00E5A8]/10 hover:text-[#00E5A8] transition"
            >
              <FaAppleAlt />
              AI Diet Plan
            </Link>
          </button>

          <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-white/5">
            <Link
              to="/ai-coach"
              className="flex items-left gap-3 px-3 py-3 rounded-xl hover:bg-[#00E5A8]/10 hover:text-[#00E5A8] transition"
            >
              <FaRobot />
              AI Coach
            </Link>
          </button>

          <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-white/5">
            <Link
              to="/progress"
              className="flex items-left gap-3 px-3 py-3 rounded-xl hover:bg-[#00E5A8]/10 hover:text-[#00E5A8] transition"
            >
              <FaChartLine />
              Progress
            </Link>
          </button>

          <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-white/5">
            <Link
              to="/calendar"
              className="flex items-left gap-3 px-3 py-3 rounded-xl hover:bg-[#00E5A8]/10 hover:text-[#00E5A8] transition"
            >
              <FaCalendarAlt />
              Calendar
            </Link>
          </button>

          <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-white/5">
            <Link
              to="/messages"
              className="flex items-left gap-3 px-3 py-3 rounded-xl hover:bg-[#00E5A8]/10 hover:text-[#00E5A8] transition"
            >
              <FaComments />
              Messages
            </Link>
          </button>

          <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-white/5">
            <Link
              to="/settings"
              className="flex items-left gap-3 px-3 py-3 rounded-xl hover:bg-[#00E5A8]/10 hover:text-[#00E5A8] transition"
            >
              <FaCog />
              Settings
            </Link>
          </button>
        </div>

        <div className="mt-auto">
          <button className="w-full flex items-center gap-3 p-3 rounded-xl border border-white/10 hover:bg-white/5">
            <Link
              to="/logout"
              className="flex items-left gap-3 px-3 py-3 rounded-xl hover:bg-[#00E5A8]/10 hover:text-[#00E5A8] transition"
            >
              <FaSignOutAlt />
              Logout
            </Link>
          </button>
        </div>
      </div>

      {/* MAIN */}

      {/* <div className="flex-1 p-6">
       */}

      <div className="flex-1 p-4 md:p-6">
        <div className="lg:hidden flex justify-between items-center mb-6">
          <h1 className=" text-xl font-bold text-[#00E5A8]">FitGenie AI</h1>

          <button onClick={() => setOpen(true)} className="text-3xl">
            ☰
          </button>
        </div>

        {/* HEADER */}

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-5 mb-8">
          {/* Left */}

          <div>
            <h1 className="text-2xl md:text-3xl font-bold">
              Welcome Back, {user?.name || "User"} 👋
            </h1>

            <p className="text-gray-400 mt-2">
              Track your progress and achieve your goals.
            </p>
          </div>

          {/* Right */}

          <div className="flex items-center gap-4 w-full lg:w-auto">
            {/* Search */}

            <div className="relative flex-1 lg:w-[260px]">
              <IoSearch
                className="
        absolute
        left-4
        top-1/2
        -translate-y-1/2
        text-gray-400
        "
              />

              <input
                type="text"
                placeholder="Search..."
                className=" w-full bg-[#0B1220]

        border

        border-white/10

        rounded-xl

        py-3

        pl-11

        pr-4

        outline-none
        focus:border-[#00E5A8]

        "
              />
            </div>

            {/* Notification */}

            <button
              className="

      relative

      w-12

      h-12

      rounded-xl

      bg-[#0B1220]

      border

      border-white/10

      flex

      items-center

      justify-center

      hover:border-[#00E5A8]

      transition

      "
            >
              <FaBell size={18} />

              <span
                className="

        absolute

        top-2

        right-2

        h-2

        w-2

        rounded-full

        bg-red-500

        "
              />
            </button>

            {/* Avatar */}

            <img
              src="https://i.pravatar.cc/100"
              alt="avatar"
              onClick={() => navigate("/profile")}
              className="
    w-12
    h-12
    rounded-full
    object-cover
    border-2
    border-[#00E5A8]
    cursor-pointer
  "
            />

            {/* <img
              src="https://i.pravatar.cc/100"
              alt="avatar"
              className="

      w-12

      h-12

      rounded-full

      object-cover

      border-2

      border-[#00E5A8]

      "
            /> */}
          </div>
        </div>

        {/* STATS */}

        {/* <div className="grid grid-cols-4 gap-5 mb-6"> */}
        <div
          className="
grid
grid-cols-1
sm:grid-cols-2
xl:grid-cols-4
gap-5
mb-6
"
        >
          {[
            {
              title: "Calories Burned",
              value: "450",
              sub: "+12% from yesterday",
            },
            {
              title: "Workouts",
              value: "12",
              sub: "+2 from last week",
            },
            // {
            //   title: "Weight",
            //   value: "72.5",
            //   sub: "-1.5kg this month",
            // },
            {
              title: "Weight",
              value: user?.weight ? `${user.weight} kg` : "--",
              sub: "Current weight",
            },
            {
              title: "Streak",
              value: "7",
              sub: "Keep it up!",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-[#0B1220] border border-white/10 rounded-2xl p-5"
            >
              <p className="text-gray-400 text-sm">{item.title}</p>

              <h2 className="text-4xl font-bold mt-2">{item.value}</h2>

              <p className="text-[#00E5A8] text-sm mt-3">{item.sub}</p>
            </div>
          ))}
        </div>

        {/* CHART + PLAN */}

        {/* <div className="grid grid-cols-3 gap-6 mb-6"> */}

        <div
          className="
grid
grid-cols-1
xl:grid-cols-3
gap-6
mb-6
"
        >
          {/* CHART */}

          <div className="xl:col-span-2 bg-[#0B1220] border border-white/10 rounded-2xl p-5">
            <div className="flex justify-between mb-6">
              <h2 className="font-semibold text-lg">Progress Overview</h2>

              <button className="bg-white/5 px-3 py-1 rounded-lg">
                This Week
              </button>
            </div>
            {/* 
            <div className="h-[300px] flex items-center justify-center text-gray-500">
              Recharts LineChart Here
            </div> */}

            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <CartesianGrid stroke="#1f2937" strokeDasharray="3 3" />

                  <XAxis dataKey="day" stroke="#9ca3af" />

                  <YAxis stroke="#9ca3af" />

                  <Tooltip
                    contentStyle={{
                      background: "#0B1220",
                      border: "1px solid #1f2937",
                      borderRadius: "10px",
                    }}
                  />

                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#00E5A8"
                    strokeWidth={4}
                    dot={{
                      r: 5,
                      fill: "#00E5A8",
                    }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* PLAN */}

          <div className="bg-[#0B1220] border border-white/10 rounded-2xl p-5">
            <h2 className="font-semibold text-lg mb-5">Today's Plan</h2>

            <div className="space-y-4">
              <div className="bg-white/5 rounded-xl p-4">
                <h3>💪 Upper Body Workout</h3>
                <p className="text-gray-400 text-sm">45 min</p>

                <p className="text-[#00E5A8] text-sm mt-1">
                  Goal: {user?.goal || "Set your fitness goal"}
                </p>
                <p className="text-[#00E5A8] text-sm mt-2">
                  Activity Level: {user?.activityLevel || "--"}
                </p>
              </div>

              <div className="bg-white/5 rounded-xl p-4">
                <h3>🥗 High Protein Diet</h3>
                <p className="text-gray-400 text-sm">2100 kcal</p>
              </div>

              <div className="bg-white/5 rounded-xl p-4">
                <h3>👟 10,000 Steps</h3>
                <p className="text-gray-400 text-sm">7300 / 10000</p>
              </div>

              <button className="w-full bg-[#00E5A8] text-black py-3 rounded-xl font-semibold hover:scale-[1.02] transition">
                View Full Plan
              </button>
            </div>
          </div>
        </div>

        {/* BOTTOM */}

        {/* <div className="grid grid-cols-2 gap-6"> */}

        <div
          className="
grid
grid-cols-1
xl:grid-cols-2
gap-6
"
        >
          {/* AI CARD */}

          <div className="bg-[#0B1220] border border-white/10 rounded-2xl p-5">
            <h2 className="font-semibold text-lg mb-4">AI Recommendation</h2>

            {/* <div className="flex justify-between items-center"> */}

            <div
              className="
flex
flex-col
md:flex-row
items-center
justify-between
gap-6
"
            >
              <div>
                <p className="text-gray-400 max-w-sm">
                  You're doing great! Try increasing your protein intake by 10%
                  and focus on strength training 3x this week.
                </p>

                <button className="mt-5 bg-[#00E5A8] text-black px-5 py-2 rounded-xl font-semibold">
                  View Details
                </button>
              </div>

              {/* <div className="w-300 h-300 md:w-45 md:h-45 flex items-center justify-center overflow-hidden"> */}
              <div
                className="
w-40
h-40

md:w-56
md:h-56

flex
items-center
justify-center
overflow-hidden
"
              >
                <img
                  src="/Transform/AI Rec.png"
                  alt="AI Robot Icon"
                  className="w-full h-full object-contain filter drop-shadow-[0_0_10px_rgba(20,184,166,0.5)]"
                />
              </div>

              {/* <div className="text-7xl">
                🤖

              </div> */}
            </div>
          </div>

          {/* BODY STATS */}

          <div className="bg-[#0B1220] border border-white/10 rounded-2xl p-5">
            <h2 className="font-semibold text-lg mb-6">Body Stats</h2>

            {/* <div className="flex items-center justify-between"> */}

            <div
              className="
flex
flex-col
md:flex-row
items-center
justify-between
gap-6
"
            >
              <div className="w-40 h-40 rounded-full border-[10px] border-[#00E5A8] flex flex-col items-center justify-center">
                {/* <span className="text-4xl font-bold">72.5</span>

                <span className="text-gray-400">kg</span> */}
                <span className="text-4xl font-bold">
                  {user?.weight || "--"}
                </span>

                <span className="text-gray-400">kg</span>
              </div>

              <div className="space-y-4">
                <p>🟡 Body Fat 16%</p>

                <p>🟢 Muscle Mass 32kg</p>

                <p>🔵 Water 55%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
