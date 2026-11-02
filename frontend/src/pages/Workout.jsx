import { useState, useEffect } from "react";
import API from "../api/axios";
import { FaDumbbell } from "react-icons/fa";

const Workout = () => {
  const [goal, setGoal] = useState("Muscle Gain");
  const [level, setLevel] = useState("Beginner");
  const [days, setDays] = useState("4");
  const [duration, setDuration] = useState("60");
  const [focus, setFocus] = useState("Full Body");

  const [plan, setPlan] = useState([]);
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [warmup, setWarmup] = useState("");
  const [notes, setNotes] = useState("");

  // Fetch the user's fitness profile
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await API.get("/auth/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(response.data.user);

        if (response.data.user?.goal) {
          setGoal(response.data.user.goal);
        }
      } catch (error) {
        console.error("PROFILE ERROR:", error);
      }
    };

    fetchProfile();
  }, []);

  // Generate a personalized workout plan using the backend AI endpoint
  const generateWorkout = async () => {
    if (Number(days) < 1 || Number(days) > 7) {
      setError("Workout days must be between 1 and 7.");
      return;
    }

    if (Number(duration) < 10 || Number(duration) > 180) {
      setError("Session duration must be between 10 and 180 minutes.");
      return;
    }

    try {
      setLoading(true);
      setError("");
      setPlan([]);
      setWarmup("");
      setNotes("");

      const response = await API.post("/workout/generate", {
        goal,
        level,
        days: Number(days),
        duration: Number(duration),
        focus,
      });

      const result = response.data;

      if (!Array.isArray(result.plan)) {
        throw new Error("Invalid workout plan received from server.");
      }

      setPlan(result.plan);
      setWarmup(result.warmup || "");
      setNotes(result.notes || "");
    } catch (error) {
      console.error("WORKOUT GENERATION ERROR:", error);

      setError(
        error.response?.data?.message ||
          error.message ||
          "Workout generate nahi hua. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#050B18] p-4 text-white md:p-6">
      <div className="mx-auto max-w-7xl">
        {/* Page Heading */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold">AI Workout Planner 💪</h1>
          <p className="mt-2 text-gray-400">
            Generate personalized workouts with AI
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
          {/* Workout Preferences */}
          <div className="rounded-3xl border border-white/10 bg-[#0B1220] p-6 xl:col-span-2">
            <h2 className="mb-6 text-2xl font-semibold">
              Workout Preferences
            </h2>

            {/* Fitness Profile */}
            {user && (
              <div className="mb-6 rounded-2xl border border-[#00E5A8]/20 bg-[#00E5A8]/5 p-4">
                <p className="mb-3 text-sm text-gray-400">
                  Your Fitness Profile
                </p>

                <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                  <div>
                    <p className="text-xs text-gray-500">Goal</p>
                    <p className="font-medium text-[#00E5A8]">
                      {user.goal || "--"}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-gray-500">Activity</p>
                    <p className="font-medium">
                      {user.activityLevel || "--"}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-gray-500">Weight</p>
                    <p className="font-medium">
                      {user.weight ? `${user.weight} kg` : "--"}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-gray-500">Height</p>
                    <p className="font-medium">
                      {user.height ? `${user.height} cm` : "--"}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Preference Inputs */}
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="text-sm text-gray-400">Goal</label>
                <select
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-white/10 bg-[#050B18] p-3 outline-none focus:border-[#00E5A8]"
                >
                  <option>Muscle Gain</option>
                  <option>Weight Loss</option>
                  <option>Strength</option>
                  <option>General Fitness</option>
                </select>
              </div>

              <div>
                <label className="text-sm text-gray-400">
                  Experience Level
                </label>
                <select
                  value={level}
                  onChange={(e) => setLevel(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-white/10 bg-[#050B18] p-3 outline-none focus:border-[#00E5A8]"
                >
                  <option>Beginner</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                </select>
              </div>

              <div>
                <label className="text-sm text-gray-400">
                  Days Per Week
                </label>
                <input
                  type="number"
                  min="1"
                  max="7"
                  value={days}
                  onChange={(e) => setDays(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-white/10 bg-[#050B18] p-3 outline-none focus:border-[#00E5A8]"
                />
              </div>

              <div>
                <label className="text-sm text-gray-400">
                  Session Duration (minutes)
                </label>
                <input
                  type="number"
                  min="10"
                  max="180"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-white/10 bg-[#050B18] p-3 outline-none focus:border-[#00E5A8]"
                />
              </div>

              <div className="md:col-span-2">
                <label className="text-sm text-gray-400">Focus Area</label>
                <select
                  value={focus}
                  onChange={(e) => setFocus(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-white/10 bg-[#050B18] p-3 outline-none focus:border-[#00E5A8]"
                >
                  <option>Full Body</option>
                  <option>Chest</option>
                  <option>Back</option>
                  <option>Legs</option>
                  <option>Arms</option>
                </select>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div
                role="alert"
                className="mt-5 rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-400"
              >
                {error}
              </div>
            )}

            {/* Generate Button */}
            <button
              type="button"
              onClick={generateWorkout}
              disabled={loading}
              className="mt-8 w-full rounded-xl bg-[#00E5A8] py-3 font-semibold text-black transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(0,229,168,0.45)] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? "Generating AI Workout..." : "Generate Workout"}
            </button>
          </div>

          {/* Generated Workout Plan */}
          <div className="rounded-3xl border border-white/10 bg-[#0B1220] p-6">
            <h2 className="mb-6 text-2xl font-semibold">Generated Plan</h2>

            {loading && (
              <div className="py-10 text-center" role="status">
                <FaDumbbell className="mx-auto mb-4 animate-bounce text-4xl text-[#00E5A8]" />
                <p className="text-gray-300">
                  Generating your personalized AI workout...
                </p>
                <p className="mt-2 text-sm text-gray-500">
                  This may take a little while.
                </p>
              </div>
            )}

            {!loading && !error && plan.length === 0 && (
              <div className="py-16 text-center">
                <FaDumbbell className="mx-auto mb-4 text-4xl text-[#00E5A8]" />
                <p className="text-gray-400">No workout generated yet</p>
                <p className="mt-2 text-sm text-gray-500">
                  Choose your preferences and generate a plan.
                </p>
              </div>
            )}

            {!loading && plan.length > 0 && (
              <div className="space-y-4">
                {warmup && (
                  <div className="rounded-xl border border-[#00E5A8]/20 bg-[#00E5A8]/5 p-4">
                    <h3 className="font-semibold text-[#00E5A8]">Warm-up</h3>
                    <p className="mt-2 text-sm text-gray-300">{warmup}</p>
                  </div>
                )}

                {plan.map((dayPlan, index) => (
                  <div
                    key={`${dayPlan.day || "day"}-${index}`}
                    className="rounded-xl border border-white/10 bg-white/5 p-4 transition hover:border-[#00E5A8]"
                  >
                    <div className="flex items-start gap-3">
                      <FaDumbbell className="mt-1 shrink-0 text-[#00E5A8]" />
                      <div>
                        <h3 className="font-semibold">
                          {dayPlan.day || `Day ${index + 1}`}
                        </h3>
                        {dayPlan.focus && (
                          <p className="mt-1 text-sm text-[#00E5A8]">
                            {dayPlan.focus}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="mt-4 space-y-3">
                      {Array.isArray(dayPlan.exercises) &&
                      dayPlan.exercises.length > 0 ? (
                        dayPlan.exercises.map((exercise, exerciseIndex) => (
                          <div
                            key={`${exercise.exercise || "exercise"}-${exerciseIndex}`}
                            className="rounded-lg bg-[#050B18]/70 p-3"
                          >
                            <p className="font-medium text-gray-200">
                              {exercise.exercise || "Exercise"}
                            </p>
                            <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-sm text-gray-400">
                              <span>Sets: {exercise.sets ?? "--"}</span>
                              <span>Reps: {exercise.reps ?? "--"}</span>
                              {exercise.restSeconds != null && (
                                <span>Rest: {exercise.restSeconds}s</span>
                              )}
                            </div>
                          </div>
                        ))
                      ) : (
                        <p className="text-sm text-gray-400">
                          No exercises were returned for this day.
                        </p>
                      )}
                    </div>
                  </div>
                ))}

                {notes && (
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <h3 className="font-semibold text-[#00E5A8]">
                      AI Coach Notes
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-gray-300">
                      {notes}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workout;







// import { useState, useEffect } from "react";
// import API from "../api/axios";
// import { FaDumbbell } from "react-icons/fa";

// const Workout = () => {
//   const [goal, setGoal] = useState("Muscle Gain");
//   const [level, setLevel] = useState("Beginner");
//   const [days, setDays] = useState("4");
//   const [duration, setDuration] = useState("60");
//   const [focus, setFocus] = useState("Full Body");


//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [warmup, setWarmup] = useState("");
//   const [notes, setNotes] = useState("");


//   const [plan, setPlan] = useState([]);
//   const [user, setUser] = useState(null);

//   // Fetch the user's fitness profile
//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const token = localStorage.getItem("token");

//         const response = await API.get("/auth/profile", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         setUser(response.data.user);

//         if (response.data.user?.goal) {
//           setGoal(response.data.user.goal);
//         }
//       } catch (error) {
//         console.error("PROFILE ERROR:", error);
//       }
//     };

//     fetchProfile();
//   }, []);

//   // Generate a workout plan based on the selected goal

// const generateWorkout = async () => {
//   try {
//     setLoading(true);
//     setError("");
//     setPlan([]);
//     setWarmup("");
//     setNotes("");

//     const response = await API.post("/workout/generate", {
//       goal,
//       level,
//       days: Number(days),
//       duration: Number(duration),
//       focus,
//     });

//     const result = response.data;

//     if (!Array.isArray(result.plan)) {
//       throw new Error("Invalid workout plan received from server.");
//     }

//     setPlan(result.plan);
//     setWarmup(result.warmup || "");
//     setNotes(result.notes || "");
//   } catch (error) {
//     console.error("WORKOUT GENERATION ERROR:", error);

//     setError(
//       error.response?.data?.message ||
//         "Workout generate nahi hua. Please try again."
//     );
//   } finally {
//     setLoading(false);
//   }
// };

//   // const generateWorkout = () => {
//   //   let generatedPlan = [];

//   //   if (goal === "Muscle Gain") {
//   //     generatedPlan = [
//   //       {
//   //         day: "Monday",
//   //         exercise: "Bench Press",
//   //         sets: 4,
//   //         reps: 10,
//   //       },
//   //       {
//   //         day: "Tuesday",
//   //         exercise: "Pull Ups",
//   //         sets: 4,
//   //         reps: 12,
//   //       },
//   //       {
//   //         day: "Wednesday",
//   //         exercise: "Squats",
//   //         sets: 5,
//   //         reps: 8,
//   //       },
//   //       {
//   //         day: "Thursday",
//   //         exercise: "Shoulder Press",
//   //         sets: 4,
//   //         reps: 10,
//   //       },
//   //     ];
//   //   } else if (goal === "Weight Loss") {
//   //     generatedPlan = [
//   //       {
//   //         day: "Monday",
//   //         exercise: "Running",
//   //         sets: 1,
//   //         reps: "30 min",
//   //       },
//   //       {
//   //         day: "Tuesday",
//   //         exercise: "Jump Rope",
//   //         sets: 5,
//   //         reps: 100,
//   //       },
//   //       {
//   //         day: "Wednesday",
//   //         exercise: "Burpees",
//   //         sets: 4,
//   //         reps: 20,
//   //       },
//   //       {
//   //         day: "Thursday",
//   //         exercise: "Cycling",
//   //         sets: 1,
//   //         reps: "45 min",
//   //       },
//   //     ];
//   //   } else {
//   //     generatedPlan = [
//   //       {
//   //         day: "Monday",
//   //         exercise: "Push Ups",
//   //         sets: 4,
//   //         reps: 20,
//   //       },
//   //       {
//   //         day: "Tuesday",
//   //         exercise: "Sit Ups",
//   //         sets: 4,
//   //         reps: 25,
//   //       },
//   //       {
//   //         day: "Wednesday",
//   //         exercise: "Lunges",
//   //         sets: 4,
//   //         reps: 15,
//   //       },
//   //     ];
//   //   }

//   //   setPlan(generatedPlan);
//   // };

//   return (
//     <div className="min-h-screen bg-[#050B18] p-4 text-white md:p-6">
//       <div className="mx-auto max-w-7xl">
//         {/* Page Heading */}
//         <div className="mb-8">
//           <h1 className="text-3xl font-bold">
//             AI Workout Planner 💪
//           </h1>

//           <p className="mt-2 text-gray-400">
//             Generate personalized workouts with AI
//           </p>
//         </div>

//         <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
//           {/* Workout Preferences */}
//           <div className="rounded-3xl border border-white/10 bg-[#0B1220] p-6 xl:col-span-2">
//             <h2 className="mb-6 text-2xl font-semibold">
//               Workout Preferences
//             </h2>

//             {/* Fitness Profile */}
//             {user && (
//               <div className="mb-6 rounded-2xl border border-[#00E5A8]/20 bg-[#00E5A8]/5 p-4">
//                 <p className="mb-3 text-sm text-gray-400">
//                   Your Fitness Profile
//                 </p>

//                 <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
//                   <div>
//                     <p className="text-xs text-gray-500">Goal</p>
//                     <p className="font-medium text-[#00E5A8]">
//                       {user.goal || "--"}
//                     </p>
//                   </div>

//                   <div>
//                     <p className="text-xs text-gray-500">Activity</p>
//                     <p className="font-medium">
//                       {user.activityLevel || "--"}
//                     </p>
//                   </div>

//                   <div>
//                     <p className="text-xs text-gray-500">Weight</p>
//                     <p className="font-medium">
//                       {user.weight ? `${user.weight} kg` : "--"}
//                     </p>
//                   </div>

//                   <div>
//                     <p className="text-xs text-gray-500">Height</p>
//                     <p className="font-medium">
//                       {user.height ? `${user.height} cm` : "--"}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* Preference Inputs */}
//             <div className="grid gap-5 md:grid-cols-2">
//               <div>
//                 <label className="text-sm text-gray-400">
//                   Goal
//                 </label>

//                 <select
//                   value={goal}
//                   onChange={(e) => setGoal(e.target.value)}
//                   className="mt-2 w-full rounded-xl border border-white/10 bg-[#050B18] p-3 outline-none focus:border-[#00E5A8]"
//                 >
//                   <option>Muscle Gain</option>
//                   <option>Weight Loss</option>
//                   <option>Strength</option>
//                   <option>General Fitness</option>
//                 </select>
//               </div>

//               <div>
//                 <label className="text-sm text-gray-400">
//                   Experience Level
//                 </label>

//                 <select
//                   value={level}
//                   onChange={(e) => setLevel(e.target.value)}
//                   className="mt-2 w-full rounded-xl border border-white/10 bg-[#050B18] p-3 outline-none focus:border-[#00E5A8]"
//                 >
//                   <option>Beginner</option>
//                   <option>Intermediate</option>
//                   <option>Advanced</option>
//                 </select>
//               </div>

//               <div>
//                 <label className="text-sm text-gray-400">
//                   Days Per Week
//                 </label>

//                 <input
//                   type="number"
//                   min="1"
//                   max="7"
//                   value={days}
//                   onChange={(e) => setDays(e.target.value)}
//                   className="mt-2 w-full rounded-xl border border-white/10 bg-[#050B18] p-3 outline-none focus:border-[#00E5A8]"
//                 />
//               </div>

//               <div>
//                 <label className="text-sm text-gray-400">
//                   Session Duration (minutes)
//                 </label>

//                 <input
//                   type="number"
//                   min="10"
//                   max="180"
//                   value={duration}
//                   onChange={(e) => setDuration(e.target.value)}
//                   className="mt-2 w-full rounded-xl border border-white/10 bg-[#050B18] p-3 outline-none focus:border-[#00E5A8]"
//                 />
//               </div>

//               <div className="md:col-span-2">
//                 <label className="text-sm text-gray-400">
//                   Focus Area
//                 </label>

//                 <select
//                   value={focus}
//                   onChange={(e) => setFocus(e.target.value)}
//                   className="mt-2 w-full rounded-xl border border-white/10 bg-[#050B18] p-3 outline-none focus:border-[#00E5A8]"
//                 >
//                   <option>Full Body</option>
//                   <option>Chest</option>
//                   <option>Back</option>
//                   <option>Legs</option>
//                   <option>Arms</option>
//                 </select>
//               </div>
//             </div>

//             {/* Generate Button */}
//             {/* <button
//               onClick={generateWorkout}
//               className="mt-8 w-full rounded-xl bg-[#00E5A8] py-3 font-semibold text-black transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(0,229,168,0.45)]"
//             >
//               Generate Workout
//             </button> */}
//             <button
//               type="button"
//               onClick={generateWorkout}
//               disabled={loading}
//               className="mt-8 w-full rounded-xl bg-[#00E5A8] py-3 font-semibold text-black transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(0,229,168,0.45)] disabled:opacity-50">
//              {loading ? "Generating AI Workout..." : "Generate Workout"}
//            </button>
//           </div>

//           {/* Generated Workout Plan */}
//           <div className="rounded-3xl border border-white/10 bg-[#0B1220] p-6">
//             <h2 className="mb-6 text-2xl font-semibold">
//               Generated Plan
//             </h2>

//             <div className="space-y-4">
//               {plan.length === 0 ? (
//                 <div className="py-16 text-center">
//                   <FaDumbbell className="mx-auto mb-4 text-4xl text-[#00E5A8]" />

//                   <p className="text-gray-400">
//                     No workout generated yet
//                   </p>
//                 </div>
//               ) : (
//                 plan.map((item, index) => (
//                   <div
//                     key={`${item.day}-${item.exercise}-${index}`}
//                     className="rounded-xl border border-white/10 bg-white/5 p-4 transition hover:border-[#00E5A8]"
//                   >
//                     <div className="flex items-center justify-between">
//                       <div className="flex items-center gap-3">
//                         <FaDumbbell className="text-[#00E5A8]" />

//                         <h3 className="font-semibold">
//                           {item.day}
//                         </h3>
//                       </div>

//                       <span className="text-[#00E5A8]">
//                         {item.sets} Sets
//                       </span>
//                     </div>

//                     <p className="mt-3 text-gray-300">
//                       {item.exercise}
//                     </p>

//                     <p className="mt-2 text-sm text-gray-400">
//                       {item.reps} Reps
//                     </p>
//                   </div>
//                 ))
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Workout;

