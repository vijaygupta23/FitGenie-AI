import express from "express";
import cors from "cors";

const app = express();

// CORS
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// JSON Body Parser
app.use(express.json());

// Routes
import authRoutes from "./routes/authRoutes.js";
import dietRoutes from "./routes/dietRoutes.js";
import workoutRoutes from "./routes/workoutRoutes.js";
import coachRoutes from "./routes/coachRoutes.js";
// import workoutRoutes from "../../frontend/src/pages/Workout.jsx";


app.use("/api/auth", authRoutes);
app.use("/api/diet", dietRoutes);
app.use("/api/workout", workoutRoutes);
app.use("/api/coach", coachRoutes);

// app.use("/api/workout", workoutRoutes);


export default app



