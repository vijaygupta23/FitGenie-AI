import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Workout from "./pages/Workout";
import Diet from "./pages/Diet";
import AICoach from "./pages/AI-Coach";
import Progress from "./pages/Progress";
import Calendar from "./pages/Calendar";
import Messages from "./pages/Message";
import Settings from "./pages/Settings";
import LogoutPage from "./pages/Logout";
import About from "./pages/About";
import Demo from "./pages/Demo";
import Faq from "./pages/Faq";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/Profile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {/* <Route path="/dashboard" element={<Dashboard />} /> */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            {" "}
            <Dashboard />{" "}
          </ProtectedRoute>
        }
      />
      <Route path="/workout" element={<Workout />} />
      <Route path="/diet" element={<Diet />} />
      <Route path="/ai-coach" element={<AICoach />} />
      <Route path="/progress" element={<Progress />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/logout" element={<LogoutPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/demo" element={<Demo />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />

      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
