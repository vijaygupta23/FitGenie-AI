import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./config/db.js";

dotenv.config();

// console.log("JWT_SECRET:", process.env.JWT_SECRET);

//API Call
// console.log("JWT_SECRET:", process.env.OPENAI_API_KEY);
// 
// Database Connect
connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});