import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema(
  {
    time_after: String,
    station_from: Number,
    station_to: Number,
    ticket_id: Number,
    wallet_id: Number,
    balance: String,
    stations: [
      {
        station_id: Number,
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

const Ticket = mongoose.model("Ticket", ticketSchema);
export default Ticket;
