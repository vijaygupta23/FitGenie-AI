import { useState } from "react";

const Settings = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [notifications, setNotifications] = useState(true);
  const [goal, setGoal] = useState("fat-loss");

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">
      {/* Header */}
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">⚙️ Settings</h1>
        <p className="text-gray-400 mb-6">
          Manage your fitness preferences & account
        </p>

        {/* Profile Section */}
        <div className="bg-slate-800 p-5 rounded-2xl mb-6 flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-cyan-500 flex items-center justify-center text-xl font-bold">
            V
          </div>
          <div>
            <h2 className="text-lg font-semibold">Vijay</h2>
            <p className="text-gray-400 text-sm">Free Plan User</p>
          </div>
        </div>

        {/* Fitness Goal */}
        <div className="bg-slate-800 p-5 rounded-2xl mb-4">
          <h2 className="text-lg font-semibold mb-3">🎯 Fitness Goal</h2>

          <select
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            className="w-full p-2 rounded-lg bg-slate-700 outline-none"
          >
            <option value="fat-loss">Fat Loss</option>
            <option value="muscle-gain">Muscle Gain</option>
            <option value="maintenance">Maintenance</option>
          </select>
        </div>

        {/* Toggles */}
        <div className="bg-slate-800 p-5 rounded-2xl space-y-4">
          {/* Dark Mode */}
          <div className="flex items-center justify-between">
            <span>🌙 Dark Mode</span>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`w-12 h-6 flex items-center rounded-full p-1 transition ${
                darkMode ? "bg-cyan-500" : "bg-gray-600"
              }`}
            >
              <div
                className={`w-4 h-4 bg-white rounded-full transform transition ${
                  darkMode ? "translate-x-6" : ""
                }`}
              />
            </button>
          </div>

          {/* Notifications */}
          <div className="flex items-center justify-between">
            <span>🔔 Notifications</span>
            <button
              onClick={() => setNotifications(!notifications)}
              className={`w-12 h-6 flex items-center rounded-full p-1 transition ${
                notifications ? "bg-green-500" : "bg-gray-600"
              }`}
            >
              <div
                className={`w-4 h-4 bg-white rounded-full transform transition ${
                  notifications ? "translate-x-6" : ""
                }`}
              />
            </button>
          </div>
        </div>

        {/* Danger Zone */}
        <div className="bg-slate-800 p-5 rounded-2xl mt-6 border border-red-500">
          <h2 className="text-lg font-semibold text-red-400">⚠️ Danger Zone</h2>

          <button className="mt-3 bg-red-500 px-4 py-2 rounded-lg hover:scale-105 transition">
            Reset All Data
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
