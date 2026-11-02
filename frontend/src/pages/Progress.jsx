
import { useEffect, useState } from "react";
import API from "../api/axios";

const Progress = () => {
  const [user, setUser] = useState(null);
  const [targetWeight, setTargetWeight] = useState(
    () => localStorage.getItem("fitgenie_target_weight") || ""
  );
  const [weightInput, setWeightInput] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await API.get("/auth/profile");
        const profile = response.data?.user;

        setUser(profile || null);

        if (profile?.weight != null) {
          setWeightInput(String(profile.weight));
        }
      } catch (err) {
        console.error("Progress profile error:", err);
        setError("Unable to load your profile. Please log in again if needed.");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const currentWeight = Number(user?.weight);
  const goalWeight = Number(targetWeight);

  const hasCurrentWeight =
    user?.weight !== undefined &&
    user?.weight !== null &&
    Number.isFinite(currentWeight) &&
    currentWeight > 0;

  const hasTargetWeight =
    targetWeight !== "" &&
    Number.isFinite(goalWeight) &&
    goalWeight > 0;

  const weightProgress =
    hasCurrentWeight && hasTargetWeight && currentWeight !== goalWeight
      ? Math.max(
          0,
          Math.min(
            100,
            (Math.abs(Number(user?.startingWeight ?? currentWeight) - currentWeight) /
              Math.abs(Number(user?.startingWeight ?? currentWeight) - goalWeight)) *
              100
          )
        )
      : hasCurrentWeight && hasTargetWeight && currentWeight === goalWeight
        ? 100
        : 0;

  const saveTargetWeight = () => {
    const value = Number(weightInput);

    if (!Number.isFinite(value) || value < 20 || value > 400) {
      setError("Please enter a valid target weight between 20 and 400 kg.");
      return;
    }

    localStorage.setItem("fitgenie_target_weight", String(value));
    setTargetWeight(String(value));
    setError("");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 text-white p-6">
        <p className="text-center">Loading your progress...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">
      <h1 className="text-3xl font-bold text-center mb-8">
        📊 Your Progress
      </h1>

      <div className="max-w-3xl mx-auto space-y-6">
        {error && (
          <p className="rounded-lg bg-red-900/40 p-3 text-red-200">
            {error}
          </p>
        )}

        {/* Weight Tracking */}
        <div className="bg-slate-800 p-5 rounded-2xl shadow-lg">
          <h2 className="text-xl font-semibold">⚖️ Weight Tracking</h2>

          <p className="mt-2 text-gray-300">
            Current:{" "}
            <b>{hasCurrentWeight ? `${currentWeight} kg` : "Not set in profile"}</b>
          </p>

          <p className="mt-1 text-gray-300">
            Target: <b>{hasTargetWeight ? `${goalWeight} kg` : "Not set"}</b>
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mt-4">
            <input
              type="number"
              min="20"
              max="400"
              step="0.1"
              value={weightInput}
              onChange={(e) => setWeightInput(e.target.value)}
              placeholder="Target weight in kg"
              className="w-full sm:flex-1 rounded-lg bg-slate-900 border border-slate-600 p-3 text-white outline-none focus:border-cyan-400"
            />

            <button
              type="button"
              onClick={saveTargetWeight}
              className="rounded-lg bg-emerald-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-emerald-400"
            >
              Save Target
            </button>
          </div>

          <div className="w-full bg-slate-700 h-3 rounded-full mt-4 overflow-hidden">
            <div
              className="bg-gradient-to-r from-green-400 to-cyan-400 h-3 rounded-full transition-all duration-500"
              style={{ width: `${weightProgress}%` }}
            />
          </div>

          <p className="mt-2 text-sm text-gray-300">
            {hasCurrentWeight && hasTargetWeight
              ? currentWeight === goalWeight
                ? "Target weight reached!"
                : `Current weight: ${currentWeight} kg · Target: ${goalWeight} kg`
              : "Set your target weight to start tracking."}
          </p>
        </div>

        {/* Workout Completion */}
        <div className="bg-slate-800 p-5 rounded-2xl shadow-lg">
          <h2 className="text-xl font-semibold">🏋️ Workout Completion</h2>
          <p className="mt-2 text-gray-300">
            Workout statistics will appear here once workout completion
            tracking is connected.
          </p>
          <div className="w-full bg-slate-700 h-3 rounded-full mt-4" />
        </div>

        {/* Daily Streak */}
        <div className="bg-slate-800 p-5 rounded-2xl shadow-lg">
          <h2 className="text-xl font-semibold">🔥 Daily Streak</h2>
          <p className="mt-2 text-gray-300">
            Your streak will be calculated from saved workout activity.
          </p>
        </div>

        {/* Goal Progress */}
        <div className="bg-slate-800 p-5 rounded-2xl shadow-lg">
          <h2 className="text-xl font-semibold">🎯 Fitness Goal</h2>
          <p className="mt-2 text-gray-300">
            Your goal: <b>{user?.goal || "Not set in profile"}</b>
          </p>
          <p className="mt-2 text-gray-300">
            Goal completion will be calculated from your saved progress data.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Progress;






// import {React} from "react";
// import { useState } from "react";

// const Progress = () => {
//   return (
//     <div className="min-h-screen bg-slate-950 text-white p-6">
//       <h1 className="text-3xl font-bold text-center mb-8">
//         📊 Your Progress
//       </h1>

//       <div className="max-w-3xl mx-auto space-y-6">

//         {/* Weight Tracking */}
//         <div className="bg-slate-800 p-5 rounded-2xl shadow-lg">
//           <h2 className="text-xl font-semibold">⚖️ Weight Tracking</h2>
//           <p className="mt-2 text-gray-300">Current: <b>72 kg</b></p>
//           <p className="text-gray-300">Goal: <b>65 kg</b></p>

//           <div className="w-full bg-slate-700 h-3 rounded-full mt-4">
//             <div className="bg-gradient-to-r from-green-400 to-cyan-400 h-3 rounded-full w-[60%]"></div>
//           </div>
//         </div>

//         {/* Workout Progress */}
//         <div className="bg-slate-800 p-5 rounded-2xl shadow-lg">
//           <h2 className="text-xl font-semibold">🏋️ Workout Completion</h2>
//           <p className="mt-2 text-gray-300">Weekly Progress</p>

//           <div className="w-full bg-slate-700 h-3 rounded-full mt-4">
//             <div className="bg-gradient-to-r from-purple-400 to-pink-400 h-3 rounded-full w-[80%]"></div>
//           </div>
//         </div>

//         {/* Daily Streak */}
//         <div className="bg-slate-800 p-5 rounded-2xl shadow-lg">
//           <h2 className="text-xl font-semibold">🔥 Daily Streak</h2>
//           <p className="mt-2 text-gray-300">5 Days in a row</p>

//           <div className="flex gap-2 mt-3 text-2xl">
//             <span>🔥</span>
//             <span>🔥</span>
//             <span>🔥</span>
//             <span>🔥</span>
//             <span>🔥</span>
//           </div>
//         </div>

//         {/* Goal Progress */}
//         <div className="bg-slate-800 p-5 rounded-2xl shadow-lg">
//           <h2 className="text-xl font-semibold">🎯 Goal Completion</h2>

//           <div className="w-full bg-slate-700 h-3 rounded-full mt-4">
//             <div className="bg-gradient-to-r from-yellow-400 to-orange-400 h-3 rounded-full w-[45%]"></div>
//           </div>

//           <p className="mt-2 text-gray-300">45% completed</p>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Progress;