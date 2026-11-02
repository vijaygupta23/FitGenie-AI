import { useState } from "react";
import { FaAppleAlt } from "react-icons/fa";
// import {
//   FaAppleAlt,
//   FaCoffee,
//   FaHamburger,
//   FaUtensils,
//   FaIceCream,
// } from "react-icons/fa";

import API from "../api/axios";

const Diet = () => {
  const [goal, setGoal] = useState("Muscle Gain");
  const [weight, setWeight] = useState("72");
  const [height, setHeight] = useState("175");
  const [age, setAge] = useState("22");
  const [activity, setActivity] = useState("Moderate");

  const [diet, setDiet] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [nutrition, setNutrition] = useState(null);

  const generateDiet = async () => {
    try {
      setLoading(true);
      setError("");
      setDiet([]);
      setNutrition(null);

      const response = await API.post("/diet/generate", {
        goal,
        weight: Number(weight),
        height: Number(height),
        age: Number(age),
        activity,
      });

      setDiet(response.data.meals || []);
      setNutrition({
        dailyCalories: response.data.dailyCalories,
        dailyProtein: response.data.dailyProtein,
        note: response.data.note,
      });
    } catch (err) {
      console.error("DIET GENERATION ERROR:", err);
      setError(
        err.response?.data?.message ||
          "Diet generate nahi ho paayi. Backend aur API key check karo.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#050B18] text-white p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">AI Diet Planner 🍎</h1>
          <p className="text-gray-400 mt-2">
            Generate personalized meal plans with AI
          </p>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* LEFT */}

          <div className="xl:col-span-2 bg-[#0B1220] border border-white/10 rounded-3xl p-6">
            <h2 className="text-2xl font-semibold mb-6">Diet Preferences</h2>

            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="text-sm text-gray-400">Goal</label>
                <select
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  className="
                           w-full mt-2 bg-[#050B18] border border-white/10 
                           rounded-xl p-3 outline-none focus:border-[#00E5A8]
                           "
                >
                   <option>Muscle Gain</option>

                  <option>Weight Loss</option>

                  <option>Maintain Weight</option>
                </select>
              </div>

              <div>
                <label className="text-sm text-gray-400">Weight (kg)</label>

                <input
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="

w-full

mt-2

bg-[#050B18]

border

border-white/10

rounded-xl

p-3

outline-none

focus:border-[#00E5A8]

"
                />
              </div>

              <div>
                <label className="text-sm text-gray-400">Height (cm)</label>

                <input
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  className="

w-full

mt-2

bg-[#050B18]

border

border-white/10

rounded-xl

p-3

outline-none

focus:border-[#00E5A8]

"
                />
              </div>

              <div>
                <label className="text-sm text-gray-400">Age</label>

                <input
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="

w-full

mt-2

bg-[#050B18]

border

border-white/10

rounded-xl

p-3

outline-none

focus:border-[#00E5A8]

"
                />
              </div>

              <div className="md:col-span-2">
                <label className="text-sm text-gray-400">Activity Level</label>

                <select
                  value={activity}
                  onChange={(e) => setActivity(e.target.value)}
                  className="

w-full
mt-2

bg-[#050B18]

border

border-white/10

rounded-xl

p-3

outline-none

focus:border-[#00E5A8]

"
                >
                  <option>Low</option>

                  <option>Moderate</option>

                  <option>High</option>
                </select>
              </div>
            </div>

            <button
              onClick={generateDiet}
              disabled={loading}
              className="mt-8 w-full bg-[#00E5A8] text-black font-semibold py-3 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Generating AI Diet..." : "Generate Diet"}
            </button>
            {/* <button
onClick={generateDiet}

className="mt-8 w-full bg-[#00E5A8] text-black font-semibold py-3 rounded-xl hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(0,229,168,0.45)] transition-all duration-300"
>
Generate Diet
</button> */}
          </div>

          {/* RIGHT */}

          <div className="bg-[#0B1220] border border-white/10 rounded-3xl p-6">
            <h2 className="text-2xl font-semibold mb-6">Generated Diet</h2>

                  
                  {nutrition && (
  <div className="mb-5 rounded-xl border border-[#00E5A8]/20 bg-[#00E5A8]/5 p-4">
    <p>
      Daily Calories: ~{nutrition.dailyCalories} kcal
    </p>

    <p>
      Daily Protein: ~{nutrition.dailyProtein} g
    </p>

    {nutrition.note && (
      <p className="mt-2 text-sm text-gray-400">
        {nutrition.note}
      </p>
    )}
  </div>
)}


            <div className="space-y-4">

{diet.length === 0 ? (
  <div className="text-center py-16">
    <FaAppleAlt className="mx-auto text-5xl text-[#00E5A8] mb-4" />

    <p className="text-gray-400">
      {loading ? "AI is preparing your diet..." : "No diet generated yet"}
    </p>
  </div>
) : (
  diet.map((item, index) => (
    <div
      key={index}
      className="bg-white/5 border border-white/10 rounded-xl p-4 hover:border-[#00E5A8] transition"
    >
      <div className="flex items-center gap-3">
        <FaAppleAlt className="text-[#00E5A8] text-xl" />

        <h3 className="font-semibold">
          {item.meal}
        </h3>
      </div>

      <p className="text-gray-300 mt-3">
        {item.food}
      </p>

      <p className="text-sm text-gray-400 mt-2">
        Calories: ~{item.calories ?? "N/A"} kcal
      </p>

      <p className="text-sm text-gray-400">
        Protein: ~{item.protein ?? "N/A"} g
      </p>
    </div>
  ))
)}

              {/* {diet.length === 0 ? (
                <div className="text-center py-16">
                  <FaAppleAlt
                    className="
                    mx-auto
                    text-5xl
                    text-[#00E5A8]
                    mb-4
                  "
                  />
                  <p className="text-gray-400">No diet generated yet</p>
                </div>
              ) : (
                // diet.map((item, index) => (

           diet.map((item, index) => (
  <div
    key={index}
    className="bg-white/5 border border-white/10 rounded-xl p-4 hover:border-[#00E5A8] transition"
  >
    <div className="flex items-center gap-3">
      <FaAppleAlt className="text-[#00E5A8] text-xl" />

      <h3 className="font-semibold">
        {item.meal}
      </h3>
    </div>

    <p className="text-gray-300 mt-3">
      {item.food}
    </p>

    <p className="text-sm text-gray-400 mt-2">
      Calories: ~{item.calories} kcal
    </p>

    <p className="text-sm text-gray-400">
      Protein: ~{item.protein} g
    </p>
  </div>
            )) */}

                  {/* // <div
                  //   key={index}
                  //   className="bg-white/5 border border-white/10 rounded-xl
                  //   p-4 hover:border-[#00E5A8] transition"
                  //  >
                  //   <div className="flex items-center gap-3">
                  //     {item.icon}
                  //     <h3 className="font-semibold">{item.meal}</h3>
                  //   </div>

                  //   <p className="text-gray-300 mt-3">{item.food}</p>
                  // </div> */}
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Diet;
