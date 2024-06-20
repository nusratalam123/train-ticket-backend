import mongoose from "mongoose";
import { ObjectId } from "bson";

const stationsSchema = new mongoose.Schema(
  {
    station_id: {
      type: String,
      required: true,
    },
    station_name: {
      type: String,
    },
    longitude: {
      type: String,
    },
    latitude: {
      type: String,
    },
    trains: [
      {
        train_id: Number,
        arrival_time: String,
        departure_time: String,
      },
    ],
  },
  {
    timestamps: true,
  },
);

const Stations = mongoose.model("Stations", stationsSchema);
export default Stations;
