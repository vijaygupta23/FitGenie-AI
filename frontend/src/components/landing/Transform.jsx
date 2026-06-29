const Transform = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-15">

      <div
        className="
          relative
          overflow-hidden
          rounded-[32px]
          border
          border-[#00E5A8]/10
          bg-gradient-to-r
          from-[#0d0f14]
          via-[#0f171e]
          to-[#0a1118]
          px-6
          py-10
          md:px-12
          md:py-12
          flex
          flex-col
          lg:flex-row
          items-center
          justify-between
          gap-10
          min-h-[450px]
        "
      >

        {/* Left Image */}

        <div className="w-full lg:w-[30%] flex justify-center lg:justify-start">

          <img
            src="/Transform/Transform.png"
            alt="Fitness Transformation AI"
            className="
              h-[250px]
              sm:h-[320px]
              md:h-[360px]
              lg:h-[420px]
              object-contain
              object-bottom
              translate-y-12
              drop-shadow-[0_0_25px_rgba(0,200,117,0.25)]
            "
          />

        </div>

        {/* Center Content */}

        <div className="w-full lg:w-[40%] text-center lg:text-left z-10">

          <p className="uppercase tracking-[4px] text-[#00E5A8] text-sm font-semibold">
            Ready To Transform?
          </p>

          <h2
            className="
              mt-4
              text-3xl
              sm:text-4xl
              lg:text-5xl
              font-extrabold
              text-white
              leading-tight
            "
          >
            Transform Your Body
            <br />

            <span className="text-[#00E5A8]">
              With AI
            </span>

          </h2>

          <p
            className="
              text-gray-400
              text-sm
              sm:text-base
              leading-7
              max-w-lg
              mx-auto
              lg:mx-0
              mt-6
              mb-8
            "
          >
            Join thousands of users achieving their fitness goals
            with FitGenie AI. Personalized workouts, smart nutrition,
            progress tracking and AI-powered coaching.
          </p>

          <button
            className="
              bg-[#00c875]
              hover:bg-[#00b368]
              text-black
              font-bold
              px-8
              py-4
              rounded-xl
              transition-all
              duration-300
              hover:scale-105
              shadow-[0_4px_20px_rgba(0,200,117,0.3)]
            "
          >
            Start Your Journey Free
          </button>

        </div>

        {/* Right Side */}

        <div
          className="
            w-full
            lg:w-[30%]
            flex
            flex-col
            items-center
            lg:items-end
            gap-10
          "
        >

          {/* Features */}

          <ul className="space-y-4 text-left">

            <li className="flex items-center gap-3 text-gray-300 text-sm">
              <span className="w-2 h-2 rounded-full bg-[#00c875]"></span>
              No credit card required
            </li>

            <li className="flex items-center gap-3 text-gray-300 text-sm">
              <span className="w-2 h-2 rounded-full bg-[#00c875]"></span>
              Personalized for you
            </li>

            <li className="flex items-center gap-3 text-gray-300 text-sm">
              <span className="w-2 h-2 rounded-full bg-[#00c875]"></span>
              Cancel anytime
            </li>

          </ul>

          {/* Dumbbell */}

          {/* <div
            className="
              relative
              opacity-80
              w-24
              h-24
              sm:w-32
              sm:h-32
              md:w-40
              md:h-40
              flex
              items-center
              justify-center
              rotate-12
            "
          > */}
          <div
  className="
    relative
    opacity-80
    w-32
    h-32

    sm:w-40
    sm:h-40
    md:w-52
    md:h-52
    lg:w-74
    lg:h-74
    flex
    items-center
    justify-center
    rotate-[-10deg]
     translate-x-12
    translate-y-12
  "
>

            <img
              src="/Transform/Dumbbel.png"
              alt="Dumbbell"
              className="
                w-full
                h-full
                object-contain
                drop-shadow-[0_0_20px_rgba(0,200,117,0.4)]
              "
            />

          </div>

        </div>

        {/* Glow Effects */}

        <div
          className="
            absolute
            -top-20
            -left-20
            w-72
            h-72
            bg-[#00E5A8]/10
            rounded-full
            blur-[120px]
            pointer-events-none
          "
        />

        <div
          className="
            absolute
            -bottom-20
            -right-20
            w-72
            h-72
            bg-[#00E5A8]/10
            rounded-full
            blur-[120px]
            pointer-events-none
          "
        />

      </div>

    </section>
  );
};

export default Transform;





// // import React from 'react';

// const Transform = () => {
//   return (
//     <div className="w-full max-w-6xl mx-auto p-4">
//       <div className="relative overflow-hidden rounded-2xl border border-teal-900/50 bg-gradient-to-r from-[#0d0f14] via-[#0f171e] to-[#0a1118] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 min-h-[380px]">
        
//         {/* Left Side: Fitness Woman Image */}
//         <div className="w-full md:w-1/3 flex justify-center md:justify-start items-end self-end">
//           <img 
//             src="Transform/Transform.png" // अपनी इमेज का पाथ यहाँ डालें
//             alt="Fitness Transformation AI" 
//             className="h-[350px] md:h-[380px] object-contain object-bottom filter drop-shadow-[0_0_20px_rgba(20,184,166,0.2)]"
//           />
//         </div>

//         {/* Center Side: Text Content & CTA Button */}
//         <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left z-10">
//           <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4 leading-tight">
//             Ready to Transform <br />
//             <span className="text-white">Your Body with AI?</span>
//           </h2>
          
//           <p className="text-gray-400 text-sm md:text-base font-medium max-w-md mb-8">
//             Join thousands of users achieving their fitness goals with FitGenie AI.
//           </p>

//           <div>
//             <button className="bg-[#00c875] hover:bg-[#00b368] text-black font-bold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-[0_4px_20px_rgba(0,200,117,0.3)]">
//               Start Your Journey Free
//             </button>
//           </div>
//         </div>

//         {/* Right Side: Features List & Dumbbell Concept */}
//         <div className="w-full md:w-1/3 flex flex-col justify-between items-center md:items-end h-full gap-8">
          
//           {/* Bullet Points */}
//           <ul className="space-y-3 text-left self-start md:self-auto">
//             <li className="flex items-center text-gray-300 text-sm font-medium gap-3">
//               <span className="h-2 w-2 rounded-full bg-[#00c875]"></span>
//               No credit card required
//             </li>
//             <li className="flex items-center text-gray-300 text-sm font-medium gap-3">
//               <span className="h-2 w-2 rounded-full bg-[#00c875]"></span>
//               Personalized for you
//             </li>
//             <li className="flex items-center text-gray-300 text-sm font-medium gap-3">
//               <span className="h-2 w-2 rounded-full bg-[#00c875]"></span>
//               Cancel anytime
//             </li>
//           </ul>

//           {/* Dumbbell Image/Icon */}
//           <div className="relative opacity-60 md:opacity-90 w-32 h-32 md:w-40 md:h-40 flex items-center justify-center transform rotate-12">
//             <img 
//               src="path_to_your_dumbbell_image.png" // अपनी डम्बल इमेज का पाथ यहाँ डालें
//               alt="Dumbbell Icon" 
//               className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(0,200,117,0.4)]"
//             />
//           </div>

//         </div>

//         {/* Decorative Background Glow effect */}
//         <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500/5 rounded-full blur-[120px] pointer-events-none"></div>
//         <div className="absolute bottom-0 left-0 w-80 h-80 bg-green-500/5 rounded-full blur-[120px] pointer-events-none"></div>

//       </div>
//     </div>
//   );
// };

// export default Transform;