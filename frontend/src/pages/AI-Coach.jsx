import { useState } from "react";
import { FaRobot, FaPaperPlane } from "react-icons/fa";

const AICoach = () => {
  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "Hi Vijay 👋 I'm FitGenie AI Coach. Ask me anything about workouts, diet, calories or fitness.",
    },
  ]);

  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    setMessages((prev) => [
      ...prev,

      {
        sender: "user",
        text: input,
      },

      {
        sender: "ai",
        text: "Gemini response will appear here later 🚀",
      },
    ]);

    setInput("");
  };

  return (
    <div className="min-h-screen bg-[#050B18] text-white p-4 md:p-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}

        <div className="mb-6">
          <h1 className="text-3xl font-bold">
            AI Coach 🤖
          </h1>

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

          <div
            className="
            flex-1
            overflow-y-auto
            p-6
            space-y-5
          "
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.sender === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                <div
                  className={`

                  max-w-[75%]

                  px-5

                  py-3

                  rounded-2xl

                  ${
                    msg.sender === "user"
                      ? "bg-[#00E5A8] text-black"
                      : "bg-white/5 border border-white/10"
                  }

                `}
                >

                  {msg.sender === "ai" && (
                    <FaRobot
                      className="
                      text-[#00E5A8]
                      mb-2
                    "
                    />
                  )}

                  <p>{msg.text}</p>

                </div>
              </div>
            ))}
          </div>

          {/* Input */}

          <div
            className="
            border-t border-white/10
            p-4
          "
          >

            <div className="flex gap-3">

              <input
                type="text"
                value={input}
                placeholder="Ask anything..."

                onChange={(e) =>
                  setInput(e.target.value)
                }

                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    sendMessage();
                  }
                }}

                className="

                flex-1

                bg-[#050B18]

                border border-white/10

                rounded-xl

                px-4

                py-3

                outline-none

                focus:border-[#00E5A8]

              "
              />

              <button
                onClick={sendMessage}

                className="

                bg-[#00E5A8]

                text-black

                px-5

                rounded-xl

                font-semibold

                cursor-pointer

                hover:scale-105

                hover:shadow-[0_0_20px_rgba(0,229,168,0.45)]

                transition-all

                duration-300

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