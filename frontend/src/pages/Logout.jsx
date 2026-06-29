import { useNavigate } from "react-router-dom";

export default function LogoutPage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // clear stored auth data
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    // redirect to login page
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-zinc-900 to-black text-white px-4">
      
      <div className="w-full max-w-md bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 rounded-2xl p-8 text-center shadow-2xl">
        
        {/* Icon */}
        <div className="flex justify-center mb-5">
          <div className="w-20 h-20 rounded-full bg-red-500/10 flex items-center justify-center">
            <svg
              className="w-10 h-10 text-red-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 16l4-4m0 0l-4-4m4 4H7"
              />
            </svg>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold">Logout</h1>

        <p className="text-zinc-400 mt-3 text-sm leading-relaxed">
          Are you sure you want to logout from your <br />
          <span className="text-white font-medium">AI Fitness Dashboard</span>?
        </p>

        {/* Buttons */}
        <div className="mt-7 flex gap-3">
          
          <button
            onClick={() => navigate(-1)}
            className="flex-1 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 transition font-medium"
          >
            Cancel
          </button>

          <button
            onClick={handleLogout}
            className="flex-1 py-3 rounded-xl bg-red-600 hover:bg-red-700 transition font-medium shadow-lg shadow-red-500/20"
          >
            Logout
          </button>
        </div>

        {/* Footer note */}
        <p className="text-xs text-zinc-500 mt-5">
          You can log back in anytime 🔁
        </p>
      </div>
    </div>
  );
}