import { useState } from "react";

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  // sample workout schedule data
  const workoutData = {
    1: "Chest + Triceps",
    2: "Back + Biceps",
    3: "Leg Day",
    4: "Abs + Cardio",
    5: "Rest Day",
    6: "Full Body",
    7: "HIIT Workout",
  };

  const days = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">
      <h1 className="text-3xl font-bold text-center mb-8">
        📅 Workout Calendar
      </h1>

      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3">
        {days.map((day) => (
          <div
            key={day}
            onClick={() => setSelectedDate(day)}
            className={`p-3 rounded-xl text-center cursor-pointer transition hover:scale-105
              ${selectedDate === day ? "bg-cyan-500" : "bg-slate-800"}
            `}
          >
            <p className="font-bold">Day {day}</p>
            <p className="text-xs text-gray-300 mt-1">
              {workoutData[(day % 7) + 1]}
            </p>
          </div>
        ))}
      </div>

      {/* Selected Day Details */}
      {selectedDate && (
        <div className="max-w-2xl mx-auto mt-10 bg-slate-800 p-6 rounded-2xl text-center shadow-lg">
          <h2 className="text-xl font-bold">📌 Day {selectedDate} Plan</h2>

          <p className="mt-3 text-gray-300">
            {workoutData[(selectedDate % 7) + 1]}
          </p>

          <button className="mt-5 bg-gradient-to-r from-green-400 to-cyan-400 px-5 py-2 rounded-lg font-bold hover:scale-105 transition">
            Start Workout
          </button>
        </div>
      )}
    </div>
  );
};

export default Calendar;
