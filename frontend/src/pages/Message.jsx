import { useState } from "react";

const Messages = () => {
  const [selectedChat, setSelectedChat] = useState(null);

  const chats = [
    {
      id: 1,
      name: "AI Coach 🤖",
      lastMsg: "Try increasing protein intake today 💪",
      time: "2 min ago",
    },
    {
      id: 2,
      name: "Workout Reminder 🏋️",
      lastMsg: "You missed Leg Day yesterday",
      time: "1 hr ago",
    },
    {
      id: 3,
      name: "Diet Plan 🍎",
      lastMsg: "Your calorie target updated",
      time: "Yesterday",
    },
  ];

  const messages = [
    { from: "ai", text: "Hey! Ready for today’s workout?" },
    { from: "user", text: "Yes, let's go!" },
    { from: "ai", text: "Great! Start with warm-up 🏃‍♂️" },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white flex">
      {/* LEFT SIDEBAR CHAT LIST */}
      <div className="w-full md:w-1/3 border-r border-slate-800 p-4">
        <h1 className="text-2xl font-bold mb-4">💬 Messages</h1>

        <div className="space-y-3">
          {chats.map((chat) => (
            <div
              key={chat.id}
              onClick={() => setSelectedChat(chat)}
              className="bg-slate-800 p-3 rounded-xl cursor-pointer hover:bg-slate-700 transition"
            >
              <h2 className="font-semibold">{chat.name}</h2>
              <p className="text-sm text-gray-400">{chat.lastMsg}</p>
              <span className="text-xs text-gray-500">{chat.time}</span>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT CHAT WINDOW */}
      <div className="hidden md:flex w-2/3 flex-col p-6">
        {selectedChat ? (
          <>
            <h2 className="text-xl font-bold mb-4">{selectedChat.name}</h2>

            <div className="flex-1 space-y-3 overflow-y-auto">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-xl w-fit max-w-md ${
                    msg.from === "ai" ? "bg-slate-700" : "bg-cyan-600 ml-auto"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>

            <div className="mt-4 flex gap-2">
              <input
                type="text"
                placeholder="Type message..."
                className="flex-1 p-2 rounded-lg bg-slate-800 outline-none"
              />
              <button className="bg-cyan-500 px-4 rounded-lg">Send</button>
            </div>
          </>
        ) : (
          <div className="text-gray-500 text-center m-auto">
            Select a chat to start messaging 💬
          </div>
        )}
      </div>
    </div>
  );
};

export default Messages;
