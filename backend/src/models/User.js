import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
      minlength: 6,
    },

    age: {
      type: Number,
      default: null,
    },

    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
      default: "Male",
    },

    height: {
      type: Number,
      default: null,
    },

    weight: {
      type: Number,
      default: null,
    },

    goal: {
      type: String,
      enum: [
        "Weight Loss",
        "Muscle Gain",
        "Maintain Fitness",
      ],
      default: "Maintain Fitness",
    },

    activityLevel: {
      type: String,
      enum: [
        "Beginner",
        "Intermediate",
        "Advanced",
      ],
      default: "Beginner",
    },

    profileImage: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

// Hash Password Before Saving
userSchema.pre("save", async function () {
  if (!this.isModified("password")) return;

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});


// Compare Password
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model("User", userSchema);

export default User;





// import mongoose from "mongoose";



// const userSchema = new mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: true,
//       trim: true,
//     },

//     email: {
//       type: String,
//       required: true,
//       unique: true,
//       lowercase: true,
//       trim: true,
//     },

//     password: {
//       type: String,
//       required: true,
//       minlength: 6,
//     },

//     age: {
//       type: Number,
//       default: null,
//     },

//     gender: {
//       type: String,
//       enum: ["Male", "Female", "Other"],
//       default: "Male",
//     },

//     height: {
//       type: Number,
//       default: null,
//     },

//     weight: {
//       type: Number,
//       default: null,
//     },

//     goal: {
//       type: String,
//       enum: [
//         "Weight Loss",
//         "Muscle Gain",
//         "Maintain Fitness",
//       ],
//       default: "Maintain Fitness",
//     },

//     activityLevel: {
//       type: String,
//       enum: [
//         "Beginner",
//         "Intermediate",
//         "Advanced",
//       ],
//       default: "Beginner",
//     },

//     profileImage: {
//       type: String,
//       default: "",
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// const User = mongoose.model("User", userSchema);

// export default User;