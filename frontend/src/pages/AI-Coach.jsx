import { useState, useRef, useEffect } from "react";
import { FaRobot, FaPaperPlane } from "react-icons/fa";
import API from "../api/axios";

const AICoach = () => {


  const [userName, setUserName] = useState("");

useEffect(() => {
  const fetchUserProfile = async () => {
    try {
      // const response = await API.get("/auth/profile");
      const token = localStorage.getItem("token");

     const response = await API.get("/auth/profile", {
     headers: {
      Authorization: `Bearer ${token}`,
     },
    });
      // console.log("PROFILE RESPONSE:", response.data);
      // console.log(token)
      const user = response.data.user;

      setUserName(user?.name || "there");
    } catch (error) {
      console.error("Failed to fetch user profile:", error);
      setUserName("there");
    }
  };

  fetchUserProfile();
}, []);






const [messages, setMessages] = useState([]);

useEffect(() => {
  const fetchUserProfile = async () => {
    try {
      const response = await API.get("/auth/profile");
      const user = response.data.user;
      const name = user?.name || "there";

      setMessages([
        {
          sender: "ai",
          text: `Hi ${name} 👋 I'm FitGenie AI Coach. Ask me anything about workouts, diet, calories or fitness.`,
        },
      ]);
    } catch (error) {
      console.error("Failed to fetch user profile:", error);

      setMessages([
        {
          sender: "ai",
          text: "Hi there 👋 I'm FitGenie AI Coach. Ask me anything about workouts, diet, calories or fitness.",
        },
      ]);
    }
  };

  fetchUserProfile();
}, []);

  // const [messages, setMessages] = useState([
  //   {
  //     sender: "ai",
  //     text: "Hi ${name} Vijay 👋 I'm FitGenie AI Coach. Ask me anything about workouts, diet, calories or fitness.",
  //   },
  // ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  const sendMessage = async () => {
    const userMessage = input.trim();

    if (!userMessage || loading) return;

    setInput("");
    setError("");
    setLoading(true);

    const updatedMessages = [
      ...messages,
      {
        sender: "user",
        text: userMessage,
      },
    ];

    setMessages(updatedMessages);

    try {
      const conversation = updatedMessages
        .slice(1)
        .map(({ sender, text }) => ({ sender, text }));

      const response = await API.post("/coach/chat", {
        messages: conversation,
      });

      const reply = response.data?.reply;

      if (!reply) {
        throw new Error("AI Coach returned an empty response.");
      }

      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: reply,
        },
      ]);
    } catch (err) {
      console.error(
        "AI COACH REQUEST ERROR:",
        err.response?.data || err.message,
      );

      setError(
        err.response?.data?.message ||
          "Unable to connect to AI Coach. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#050B18] text-white p-4 md:p-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold">AI Coach 🤖</h1>

          <p className="text-gray-400 mt-2">
            Your personal AI fitness assistant
          </p>
        </div>

        {/* Chat Container */}
        <div
          className="
            bg-[#0B1220]
            border border-white/10
            rounded-3xl
            h-[75vh]
            flex
            flex-col
            overflow-hidden
          "
        >
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-5">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`
                    max-w-[90%] md:max-w-[75%]
                    px-5 py-3 rounded-2xl
                    ${
                      msg.sender === "user"
                        ? "bg-[#00E5A8] text-black"
                        : "bg-white/5 border border-white/10"
                    }
                  `}
                >
                  {msg.sender === "ai" && (
                    <FaRobot className="text-[#00E5A8] mb-2" />
                  )}

                  <p className="whitespace-pre-wrap break-words">{msg.text}</p>
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="bg-white/5 border border-white/10 rounded-2xl px-5 py-3">
                  <div className="flex items-center gap-3 text-gray-300">
                    <FaRobot className="text-[#00E5A8]" />
                    <span>AI Coach is thinking...</span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Error */}
          {error && (
            <div
              role="alert"
              className="mx-4 mb-2 rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-300"
            >
              {error}
            </div>
          )}

          {/* Input */}
          <div className="border-t border-white/10 p-4">
            <div className="flex gap-3">
              <input
                type="text"
                value={input}
                placeholder="Ask anything about fitness..."
                disabled={loading}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    sendMessage();
                  }
                }}
                className="
                  flex-1 min-w-0
                  bg-[#050B18]
                  border border-white/10
                  rounded-xl px-4 py-3
                  outline-none
                  focus:border-[#00E5A8]
                  disabled:opacity-50
                "
              />

              <button
                type="button"
                onClick={sendMessage}
                disabled={loading || !input.trim()}
                aria-label="Send message"
                className="
                  bg-[#00E5A8] text-black
                  px-5 rounded-xl font-semibold
                  cursor-pointer
                  hover:scale-105
                  hover:shadow-[0_0_20px_rgba(0,229,168,0.45)]
                  transition-all duration-300
                  disabled:opacity-50
                  disabled:cursor-not-allowed
                  disabled:hover:scale-100
                "
              >
                <FaPaperPlane />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AICoach;

// import { useState } from "react";
// import { FaRobot, FaPaperPlane } from "react-icons/fa";

// const AICoach = () => {
//   const [messages, setMessages] = useState([
//     {
//       sender: "ai",
//       text: "Hi Vijay 👋 I'm FitGenie AI Coach. Ask me anything about workouts, diet, calories or fitness.",
//     },
//   ]);

//   const [input, setInput] = useState("");

//   const sendMessage = () => {
//     if (!input.trim()) return;

//     setMessages((prev) => [
//       ...prev,

//       {
//         sender: "user",
//         text: input,
//       },

//       {
//         sender: "ai",
//         text: "Gemini response will appear here later 🚀",
//       },
//     ]);

//     setInput("");
//   };

//   return (
//     <div className="min-h-screen bg-[#050B18] text-white p-4 md:p-6">
//       <div className="max-w-5xl mx-auto">

//         {/* Header */}

//         <div className="mb-6">
//           <h1 className="text-3xl font-bold">
//             AI Coach 🤖
//           </h1>

//           <p className="text-gray-400 mt-2">
//             Your personal AI fitness assistant
//           </p>
//         </div>

//         {/* Chat Container */}

//         <div
//           className="
//           bg-[#0B1220]
//           border border-white/10
//           rounded-3xl
//           h-[75vh]
//           flex
//           flex-col
//           overflow-hidden
//         "
//         >

//           {/* Messages */}

//           <div
//             className="
//             flex-1
//             overflow-y-auto
//             p-6
//             space-y-5
//           "
//           >
//             {messages.map((msg, index) => (
//               <div
//                 key={index}
//                 className={`flex ${
//                   msg.sender === "user"
//                     ? "justify-end"
//                     : "justify-start"
//                 }`}
//               >
//                 <div
//                   className={`

//                   max-w-[75%]

//                   px-5

//                   py-3

//                   rounded-2xl

//                   ${
//                     msg.sender === "user"
//                       ? "bg-[#00E5A8] text-black"
//                       : "bg-white/5 border border-white/10"
//                   }

//                 `}
//                 >

//                   {msg.sender === "ai" && (
//                     <FaRobot
//                       className="
//                       text-[#00E5A8]
//                       mb-2
//                     "
//                     />
//                   )}

//                   <p>{msg.text}</p>

//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Input */}

//           <div
//             className="
//             border-t border-white/10
//             p-4
//           "
//           >

//             <div className="flex gap-3">

//               <input
//                 type="text"
//                 value={input}
//                 placeholder="Ask anything..."

//                 onChange={(e) =>
//                   setInput(e.target.value)
//                 }

//                 onKeyDown={(e) => {
//                   if (e.key === "Enter") {
//                     sendMessage();
//                   }
//                 }}

//                 className="

//                 flex-1

//                 bg-[#050B18]

//                 border border-white/10

//                 rounded-xl

//                 px-4

//                 py-3

//                 outline-none

//                 focus:border-[#00E5A8]

//               "
//               />

//               <button
//                 onClick={sendMessage}

//                 className="

//                 bg-[#00E5A8]

//                 text-black

//                 px-5

//                 rounded-xl

//                 font-semibold

//                 cursor-pointer

//                 hover:scale-105

//                 hover:shadow-[0_0_20px_rgba(0,229,168,0.45)]

//                 transition-all

//                 duration-300

//               "
//               >

//                 <FaPaperPlane />

//               </button>

//             </div>

//           </div>

//         </div>

//       </div>
//     </div>
//   );
// };

// export default AICoach;
