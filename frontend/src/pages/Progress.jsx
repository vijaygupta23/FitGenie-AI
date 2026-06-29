// import {React} from "react";
// import { useState } from "react";

const Progress = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">
      <h1 className="text-3xl font-bold text-center mb-8">
        📊 Your Progress
      </h1>

      <div className="max-w-3xl mx-auto space-y-6">

        {/* Weight Tracking */}
        <div className="bg-slate-800 p-5 rounded-2xl shadow-lg">
          <h2 className="text-xl font-semibold">⚖️ Weight Tracking</h2>
          <p className="mt-2 text-gray-300">Current: <b>72 kg</b></p>
          <p className="text-gray-300">Goal: <b>65 kg</b></p>

          <div className="w-full bg-slate-700 h-3 rounded-full mt-4">
            <div className="bg-gradient-to-r from-green-400 to-cyan-400 h-3 rounded-full w-[60%]"></div>
          </div>
        </div>

        {/* Workout Progress */}
        <div className="bg-slate-800 p-5 rounded-2xl shadow-lg">
          <h2 className="text-xl font-semibold">🏋️ Workout Completion</h2>
          <p className="mt-2 text-gray-300">Weekly Progress</p>

          <div className="w-full bg-slate-700 h-3 rounded-full mt-4">
            <div className="bg-gradient-to-r from-purple-400 to-pink-400 h-3 rounded-full w-[80%]"></div>
          </div>
        </div>

        {/* Daily Streak */}
        <div className="bg-slate-800 p-5 rounded-2xl shadow-lg">
          <h2 className="text-xl font-semibold">🔥 Daily Streak</h2>
          <p className="mt-2 text-gray-300">5 Days in a row</p>

          <div className="flex gap-2 mt-3 text-2xl">
            <span>🔥</span>
            <span>🔥</span>
            <span>🔥</span>
            <span>🔥</span>
            <span>🔥</span>
          </div>
        </div>

        {/* Goal Progress */}
        <div className="bg-slate-800 p-5 rounded-2xl shadow-lg">
          <h2 className="text-xl font-semibold">🎯 Goal Completion</h2>

          <div className="w-full bg-slate-700 h-3 rounded-full mt-4">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-400 h-3 rounded-full w-[45%]"></div>
          </div>

          <p className="mt-2 text-gray-300">45% completed</p>
        </div>

      </div>
    </div>
  );
};

export default Progress;