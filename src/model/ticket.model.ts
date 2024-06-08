import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema(
  {
    wallet_id: {
      type: Number,
      required: true,
    },
    time_after: String,
    station_from: Number,
    station_to:Number
  },
  {
    timestamps: true,
  },
);

const Ticket = mongoose.model("Ticket", ticketSchema);
export default Ticket;
