import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
  {
    user_id: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: [validator.isEmail, "provide a valid email"],
    },
    user_Name: {
      type: String,
      required: true,
      trim: true,
      minLength: [3, "name must be at least 3 characters"],
      maxLength: [100, "name is too large"],
    },
    balance: {
      type: String,
    },
    password: {
      type: String,
      required: true,
      minLength: [6, "password must be at least 6 characters"],
    },
    status: {
      type: String,
      default: true,
    },
  },
  {
    timestamps: true,
  },
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(this.password, salt);
    this.password = hash;
    next();
  } catch (err) {
    next(err as undefined);
  }
});

const User = mongoose.model("User", userSchema);
export default User;
