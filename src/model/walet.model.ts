import mongoose from "mongoose";

const walletSchema = new mongoose.Schema(
  {
    wallet_id: {
      type: Number,
      required: true,
    },
    balance: Number,
    wallet_user: {
      userId: Number,
      userName: String,
    },
  },
  {
    timestamps: true,
  },
);

const Wallet = mongoose.model("Wallet", walletSchema);
export default Wallet;
