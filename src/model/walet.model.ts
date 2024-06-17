import mongoose from "mongoose";

const walletSchema = new mongoose.Schema(
  {
    wallet_id: {
      type: Number,
      required: true,
    },
    balance: {
      type: Number,
      default: 0,
    },
    wallet_user: {
      userId: Number,
      userName: String,
    },
    recharge: {
      type: Number,
      default: 0,
    },
    newBalance: Number,
  },
  {
    timestamps: true,
  },
);

walletSchema.pre("save", function (next) {
  if (this.recharge) {
    this.balance = this.balance + this.recharge;
  }
  next();
});

const Wallet = mongoose.model("Wallet", walletSchema);
export default Wallet;
