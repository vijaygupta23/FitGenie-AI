import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { getUserProfile, updateProfile } from "../controllers/authController.js";

import {
  registerUser,
  loginUser,
} from "../controllers/authController.js";

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);
router.get("/profile", protect, getUserProfile);
router.put("/profile", protect, updateProfile);


export default router;




// import express from "express";

// const router = express.Router();

// // Register User
// router.post("/register", (req, res) => {
//   res.json({
//     success: true,
//     message: "Register Route Working",
//   });
// });

// // Login User
// router.post("/login", (req, res) => {
//   res.json({
//     success: true,
//     message: "Login Successfull",
//   });
// });

// export default router;