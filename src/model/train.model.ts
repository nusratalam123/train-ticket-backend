import bcrypt from "bcrypt";
import CryptoJS from "crypto-js";
import mongoose from "mongoose";
import validator from "validator";

const stationsSchema = new mongoose.Schema(
  {
    train_id: {
      type: Number,
      required: true,
    },
    train_name: {
      type: String,
      required: true,
      trim: true,
      minLength: [3, "name must be at least 3 characters"],
      maxLength: [100, "name is too large"],
    },
    capacity: {
      type: Number,
      required: true,
      trim: true,
    },
    stop: [
      {
        station_id: Number,
        arrival_time: String,
        departure_time: String,
        fare:Number
      },
    ],
  },
  {
    timestamps: true,
  },
);

const Stations = mongoose.model("Stations", stationsSchema);
export default Stations;
