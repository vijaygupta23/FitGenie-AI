import User from "../models/User.js";
import generateToken from "../utils/generateToken.js";

export const registerUser = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      age,
      gender,
      height,
      weight,
      goal,
      activityLevel,
    } = req.body;

    // Check required fields
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields",
      });
    }

    // Check existing user
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    // Create User
    const user = await User.create({
      name,
      email,
      password,
      age,
      gender,
      height,
      weight,
      goal,
      activityLevel,
    });

    res.status(201).json({
      success: true,
      message: "User Registered Successfully",
      user,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};


export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check required fields
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please enter email and password",
      });
    }

    // Find user
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid Email or Password",
      });
    }

    // Compare Password
    const isMatch = await user.matchPassword(password);

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid Email or Password",
      });
    }


    res.status(200).json({
  success: true,
  message: "Login Successful",

  token: generateToken(user._id),

  user: {
    id: user._id,
    name: user.name,
    email: user.email,
    age: user.age,
    gender: user.gender,
    height: user.height,
    weight: user.weight,
    goal: user.goal,
    activityLevel: user.activityLevel,
    profileImage: user.profileImage,
  },
});


    // res.status(200).json({
    //   success: true,
    //   message: "Login Successful",
    //   user,
    // });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


export const getUserProfile = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      user: req.user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const {
      name,
      age,
      gender,
      height,
      weight,
      goal,
      activityLevel,
      profileImage,
    } = req.body;

    const user = await User.findById(req.user._id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    user.name = name ?? user.name;
    user.age = age ?? user.age;
    user.gender = gender ?? user.gender;
    user.height = height ?? user.height;
    user.weight = weight ?? user.weight;
    user.goal = goal ?? user.goal;
    user.activityLevel = activityLevel ?? user.activityLevel;
    user.profileImage = profileImage ?? user.profileImage;

    const updatedUser = await user.save();

    res.status(200).json({
      success: true,
      message: "Profile Updated Successfully",
      user: {
        id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        age: updatedUser.age,
        gender: updatedUser.gender,
        height: updatedUser.height,
        weight: updatedUser.weight,
        goal: updatedUser.goal,
        activityLevel: updatedUser.activityLevel,
        profileImage: updatedUser.profileImage,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// export const registerUser = async (req, res) => {
//   try {
//     res.status(200).json({
//       success: true,
//       message: "Registration Successfull",
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// export const loginUser = async (req, res) => {
//   try {
//     res.status(200).json({
//       success: true,
//       message: "Login Successfull",
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };