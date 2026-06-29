import { useState } from "react";
import { FaDumbbell } from "react-icons/fa";

const Workout = () => {

  const [goal, setGoal] = useState("Muscle Gain");
  const [level, setLevel] = useState("Beginner");
  const [days, setDays] = useState("4");
  const [duration, setDuration] = useState("60");
  const [focus, setFocus] = useState("Full Body");

  const [plan, setPlan] = useState([]);

  const generateWorkout = () => {

    let generatedPlan = [];

    if (goal === "Muscle Gain") {

      generatedPlan = [

        {
          day: "Monday",
          exercise: "Bench Press",
          sets: 4,
          reps: 10
        },

        {
          day: "Tuesday",
          exercise: "Pull Ups",
          sets: 4,
          reps: 12
        },

        {
          day: "Wednesday",
          exercise: "Squats",
          sets: 5,
          reps: 8
        },

        {
          day: "Thursday",
          exercise: "Shoulder Press",
          sets: 4,
          reps: 10
        }

      ];

    }

    else if (goal === "Weight Loss") {

      generatedPlan = [

        {
          day: "Monday",
          exercise: "Running",
          sets: 1,
          reps: "30 min"
        },

        {
          day: "Tuesday",
          exercise: "Jump Rope",
          sets: 5,
          reps: 100
        },

        {
          day: "Wednesday",
          exercise: "Burpees",
          sets: 4,
          reps: 20
        },

        {
          day: "Thursday",
          exercise: "Cycling",
          sets: 1,
          reps: "45 min"
        }

      ];

    }

    else {

      generatedPlan = [

        {
          day: "Monday",
          exercise: "Push Ups",
          sets: 4,
          reps: 20
        },

        {
          day: "Tuesday",
          exercise: "Sit Ups",
          sets: 4,
          reps: 25
        },

        {
          day: "Wednesday",
          exercise: "Lunges",
          sets: 4,
          reps: 15
        }

      ];

    }

    setPlan(generatedPlan);

  };


  return (

    <div className="min-h-screen bg-[#050B18] text-white p-4 md:p-6">

      <div className="max-w-7xl mx-auto">


        {/* Heading */}

        <div className="mb-8">

          <h1 className="text-3xl font-bold">

            AI Workout Planner 💪

          </h1>

          <p className="text-gray-400 mt-2">

            Generate personalized workouts with AI

          </p>

        </div>



        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">


          {/* Left */}

          <div className="xl:col-span-2 bg-[#0B1220] border border-white/10 rounded-3xl p-6">


            <h2 className="text-2xl font-semibold mb-6">

              Workout Preferences

            </h2>



            <div className="grid md:grid-cols-2 gap-5">


              <div>

                <label className="text-sm text-gray-400">

                  Goal

                </label>

                <select

                  value={goal}

                  onChange={(e) => setGoal(e.target.value)}

                  className="w-full mt-2 bg-[#050B18] border border-white/10 rounded-xl p-3 outline-none focus:border-[#00E5A8]"

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

                  className="w-full mt-2 bg-[#050B18] border border-white/10 rounded-xl p-3 outline-none focus:border-[#00E5A8]"

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

                  value={days}

                  onChange={(e) => setDays(e.target.value)}

                  className="w-full mt-2 bg-[#050B18] border border-white/10 rounded-xl p-3 outline-none focus:border-[#00E5A8]"

                />

              </div>




              <div>

                <label className="text-sm text-gray-400">

                  Session Duration

                </label>

                <input

                  type="number"

                  value={duration}

                  onChange={(e) => setDuration(e.target.value)}

                  className="w-full mt-2 bg-[#050B18] border border-white/10 rounded-xl p-3 outline-none focus:border-[#00E5A8]"

                />

              </div>




              <div className="md:col-span-2">

                <label className="text-sm text-gray-400">

                  Focus Area

                </label>

                <select

                  value={focus}

                  onChange={(e) => setFocus(e.target.value)}

                  className="w-full mt-2 bg-[#050B18] border border-white/10 rounded-xl p-3 outline-none focus:border-[#00E5A8]"

                >

                  <option>Full Body</option>

                  <option>Chest</option>

                  <option>Back</option>

                  <option>Legs</option>

                  <option>Arms</option>

                </select>

              </div>



            </div>



            <button

              onClick={generateWorkout}

              className="

              mt-8

              w-full

              bg-[#00E5A8]

              text-black

              font-semibold

              py-3

              rounded-xl

              hover:scale-[1.02]

              hover:shadow-[0_0_25px_rgba(0,229,168,0.45)]

              transition-all

              duration-300

              "

            >

              Generate Workout

            </button>


          </div>





          {/* Right */}



          <div className="bg-[#0B1220] border border-white/10 rounded-3xl p-6">


            <h2 className="text-2xl font-semibold mb-6">

              Generated Plan

            </h2>



            <div className="space-y-4">


              {

                plan.length === 0 ? (

                  <div className="text-center py-16">


                    <p className="text-gray-400">

                      No workout generated yet

                    </p>

                  </div>

                )

                  :

                  plan.map((item, index) => (


                    <div

                      key={index}

                      className="

                      bg-white/5

                      border

                      border-white/10

                      rounded-xl

                      p-4

                      hover:border-[#00E5A8]

                      transition

                      "

                    >


                      <div className="flex justify-between items-center">


                        <div className="flex items-center gap-3">


                          <FaDumbbell

                            className="text-[#00E5A8]"

                          />


                          <h3 className="font-semibold">

                            {item.day}

                          </h3>


                        </div>



                        <span className="text-[#00E5A8]">

                          {item.sets} Sets

                        </span>


                      </div>




                      <p className="mt-3 text-gray-300">

                        {item.exercise}

                      </p>



                      <p className="text-sm text-gray-400 mt-2">

                        {item.reps} Reps

                      </p>



                    </div>

                  ))

              }


            </div>


          </div>


        </div>


      </div>

    </div>

  );

};

export default Workout;










// import { useState } from "react";
// import { FaDumbbell, FaFire, FaClock } from "react-icons/fa";

// const Workout = () => {
//   const [goal, setGoal] = useState("Muscle Gain");
//   const [level, setLevel] = useState("Beginner");
//   const [days, setDays] = useState("4");
//   const [duration, setDuration] = useState("60");
//   const [focus, setFocus] = useState("Full Body");

//   return (
//     <div className="min-h-screen bg-[#050B18] text-white p-4 md:p-6">
//       <div className="max-w-7xl mx-auto">
//         {/* Heading */}

//         <div className="mb-8">
//           <h1 className="text-3xl font-bold">AI Workout Planner 💪</h1>

//           <p className="text-gray-400 mt-2">
//             Generate personalized workouts with AI
//           </p>
//         </div>

//         {/* Main Grid */}

//         <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
//           {/* LEFT */}

//           <div className="xl:col-span-2 bg-[#0B1220] border border-white/10 rounded-3xl p-6">
//             <h2 className="text-2xl font-semibold mb-6">Workout Preferences</h2>

//             <div className="grid md:grid-cols-2 gap-5">
//               {/* Goal */}

//               <div>
//                 <label className="text-sm text-gray-400">Goal</label>

//                 <select
//                   value={goal}
//                   onChange={(e) => setGoal(e.target.value)}
//                   className="w-full mt-2 bg-[#050B18] border border-white/10 rounded-xl p-3 outline-none focus:border-[#00E5A8]"
//                 >
//                   <option>Muscle Gain</option>
//                   <option>Weight Loss</option>
//                   <option>Strength</option>
//                   <option>General Fitness</option>
//                 </select>
//               </div>

//               {/* Level */}

//               <div>
//                 <label className="text-sm text-gray-400">
//                   Experience Level
//                 </label>

//                 <select
//                   value={level}
//                   onChange={(e) => setLevel(e.target.value)}
//                   className="w-full mt-2 bg-[#050B18] border border-white/10 rounded-xl p-3 outline-none focus:border-[#00E5A8]"
//                 >
//                   <option>Beginner</option>
//                   <option>Intermediate</option>
//                   <option>Advanced</option>
//                 </select>
//               </div>

//               {/* Days */}

//               <div>
//                 <label className="text-sm text-gray-400">Days Per Week</label>

//                 <input
//                   type="number"
//                   value={days}
//                   onChange={(e) => setDays(e.target.value)}
//                   className="w-full mt-2 bg-[#050B18] border border-white/10 rounded-xl p-3 outline-none focus:border-[#00E5A8]"
//                 />
//               </div>

//               {/* Duration */}

//               <div>
//                 <label className="text-sm text-gray-400">
//                   Session Duration (Minutes)
//                 </label>

//                 <input
//                   type="number"
//                   value={duration}
//                   onChange={(e) => setDuration(e.target.value)}
//                   className="w-full mt-2 bg-[#050B18] border border-white/10 rounded-xl p-3 outline-none focus:border-[#00E5A8]"
//                 />
//               </div>

//               {/* Focus */}

//               <div className="md:col-span-2">
//                 <label className="text-sm text-gray-400">Focus Area</label>

//                 <select
//                   value={focus}
//                   onChange={(e) => setFocus(e.target.value)}
//                   className="w-full mt-2 bg-[#050B18] border border-white/10 rounded-xl p-3 outline-none focus:border-[#00E5A8]"
//                 >
//                   <option>Full Body</option>
//                   <option>Chest</option>
//                   <option>Back</option>
//                   <option>Legs</option>
//                   <option>Arms</option>
//                 </select>
//               </div>
//             </div>

//             {/* Button */}

//             <button
//               className="
//               mt-8
//               w-full
//               bg-[#00E5A8]
//               text-black
//               font-semibold
//               py-3
//               rounded-xl
//               hover:scale-[1.02]
//               hover:shadow-[0_0_25px_rgba(0,229,168,0.45)]
//               transition-all
//               duration-300
//               "
//             >
//               Generate Workout
//             </button>
//           </div>

//           {/* RIGHT */}

//           <div className="xl:col-span-1 bg-[#0B1220] border border-white/10 rounded-3xl p-6">
//             <h2 className="text-2xl font-semibold mb-6">Generated Plan</h2>

//             <div className="space-y-4">
//               <div className="bg-white/5 rounded-xl p-4 hover:bg-white/10 transition">
//                 <div className="flex items-center gap-3">
//                   <FaDumbbell className="text-[#00E5A8]" />

//                   <h3 className="font-semibold">Monday</h3>
//                 </div>

//                 <p className="text-gray-400 mt-3">Chest + Triceps</p>
//               </div>

//               <div className="bg-white/5 rounded-xl p-4 hover:bg-white/10 transition">
//                 <div className="flex items-center gap-3">
//                   <FaFire className="text-orange-400" />

//                   <h3 className="font-semibold">Tuesday</h3>
//                 </div>

//                 <p className="text-gray-400 mt-3">Back + Biceps</p>
//               </div>

//               <div className="bg-white/5 rounded-xl p-4 hover:bg-white/10 transition">
//                 <div className="flex items-center gap-3">
//                   <FaClock className="text-cyan-400" />

//                   <h3 className="font-semibold">Wednesday</h3>
//                 </div>

//                 <p className="text-gray-400 mt-3">Leg Day</p>
//               </div>

//               <div className="bg-white/5 rounded-xl p-4 hover:bg-white/10 transition">
//                 <div className="flex items-center gap-3">
//                   <FaDumbbell className="text-[#00E5A8]" />

//                   <h3 className="font-semibold">Thursday</h3>
//                 </div>

//                 <p className="text-gray-400 mt-3">Shoulders + Abs</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Workout;

// // import { useState } from "react";

// // const Workout = () => {
// //   const [goal, setGoal] = useState("Muscle Gain");
// //   const [level, setLevel] = useState("Beginner");
// //   const [days, setDays] = useState("4");
// //   const [duration, setDuration] = useState("60");
// //   const [focus, setFocus] = useState("Full Body");

// //   return (
// //     <div className="min-h-screen bg-[#050B18] text-white p-4 md:p-6">
// //       <div className="max-w-7xl mx-auto">
// //         {/* Heading */}

// //         <div className="mb-8">
// //           <h1 className="text-3xl font-bold">AI Workout Planner 💪</h1>

// //           <p className="text-gray-400 mt-2">
// //             Generate personalized workouts with AI
// //           </p>
// //         </div>

// //         {/* <div className="grid lg:grid-cols-2 gap-6"> */}

// //         <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
// //           {/* Form */}

// //           <div className="bg-[#0B1220] border border-white/10 rounded-3xl p-6">
// //             <h2 className="text-xl font-semibold mb-6">Workout Preferences</h2>

// //             {/* Goal */}

// //             <div className="mb-5">
// //               <label className="text-sm text-gray-400">Goal</label>

// //               <select
// //                 value={goal}
// //                 onChange={(e) => setGoal(e.target.value)}
// //                 className="

// // w-full

// // mt-2

// // bg-[#050B18]

// // border border-white/10

// // rounded-xl

// // p-3

// // outline-none

// // focus:border-[#00E5A8]

// // "
// //               >
// //                 <option>Muscle Gain</option>

// //                 <option>Weight Loss</option>

// //                 <option>Strength</option>

// //                 <option>General Fitness</option>
// //               </select>
// //             </div>

// //             {/* Level */}

// //             <div className="mb-5">
// //               <label className="text-sm text-gray-400">Experience Level</label>

// //               <select
// //                 value={level}
// //                 onChange={(e) => setLevel(e.target.value)}
// //                 className="

// // w-full

// // mt-2

// // bg-[#050B18]

// // border border-white/10

// // rounded-xl

// // p-3

// // outline-none

// // focus:border-[#00E5A8]

// // "
// //               >
// //                 <option>Beginner</option>

// //                 <option>Intermediate</option>

// //                 <option>Advanced</option>
// //               </select>
// //             </div>

// //             {/* Days */}

// //             <div className="mb-5">
// //               <label className="text-sm text-gray-400">Days Per Week</label>

// //               <input
// //                 type="number"
// //                 value={days}
// //                 onChange={(e) => setDays(e.target.value)}
// //                 className="

// // w-full

// // mt-2

// // bg-[#050B18]

// // border border-white/10

// // rounded-xl

// // p-3

// // outline-none

// // focus:border-[#00E5A8]

// // "
// //               />
// //             </div>

// //             {/* Duration */}

// //             <div className="mb-5">
// //               <label className="text-sm text-gray-400">Session Duration</label>

// //               <input
// //                 type="number"
// //                 value={duration}
// //                 onChange={(e) => setDuration(e.target.value)}
// //                 className="

// // w-full

// // mt-2

// // bg-[#050B18]

// // border border-white/10

// // rounded-xl

// // p-3

// // outline-none

// // focus:border-[#00E5A8]

// // "
// //               />
// //             </div>

// //             {/* Focus */}

// //             <div>
// //               <label className="text-sm text-gray-400">Focus Area</label>

// //               <select
// //                 value={focus}
// //                 onChange={(e) => setFocus(e.target.value)}
// //                 className="

// // w-full

// // mt-2

// // bg-[#050B18]

// // border border-white/10

// // rounded-xl

// // p-3

// // outline-none

// // focus:border-[#00E5A8]

// // "
// //               >
// //                 <option>Full Body</option>

// //                 <option>Chest</option>

// //                 <option>Back</option>

// //                 <option>Legs</option>

// //                 <option>Arms</option>
// //               </select>
// //             </div>

// //             <button
// //               className="

// // w-full

// // mt-8

// // bg-[#00E5A8]

// // text-black

// // font-semibold

// // py-3

// // rounded-xl

// // hover:scale-[1.02]

// // hover:shadow-[0_0_20px_rgba(0,229,168,0.5)]

// // transition-all

// // duration-300

// // "
// //             >
// //               Generate Workout
// //             </button>
// //           </div>

// //           {/* Preview */}

// //           <div className="bg-[#0B1220] border border-white/10 rounded-3xl p-6">
// //             <h2 className="text-xl font-semibold mb-6">Generated Plan</h2>
// //             <div className="space-y-4">
// //               <div className="bg-white/5 rounded-xl p-4">
// //                 <h3 className="font-semibold">Monday</h3>

// //                 <p className="text-gray-400 mt-2">Chest + Triceps</p>
// //               </div>

// //               <div className="bg-white/5 rounded-xl p-4">
// //                 <h3 className="font-semibold">Tuesday</h3>

// //                 <p className="text-gray-400 mt-2">Back + Biceps</p>
// //               </div>

// //               <div className="bg-white/5 rounded-xl p-4">
// //                 <h3 className="font-semibold">Wednesday</h3>

// //                 <p className="text-gray-400 mt-2">Leg Day</p>
// //               </div>

// //               <div className="bg-white/5 rounded-xl p-4">
// //                 <h3 className="font-semibold">Thursday</h3>

// //                 <p className="text-gray-400 mt-2">Shoulders + Abs</p>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Workout;
