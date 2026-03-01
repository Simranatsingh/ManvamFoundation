// Donation Model

import mongoose from "mongoose"

const donationSchema = new mongoose.Schema(
  {
    donorName: { type: String, required: true, trim: true },
    donorEmail: { type: String, required: true, trim: true, lowercase: true },
    donorPhone: { type: String, required: true, trim: true },

    amount: { type: Number, required: true, min: 10 },

    paymentMethod: {
      type: String,
      enum: ["UPI", "Credit Card", "Debit Card", "Net Banking", "Wallet", "Other"],
      default: "UPI",
    },

    razorpayOrderId: String,
    razorpayPaymentId: String,
    razorpayReceiptId: String,

    paymentStatus: {
      type: String,
      enum: ["pending", "completed", "failed", "refunded"],
      default: "pending",
    },

    transactionSignature: String,
    notes: { type: String, default: "" },
  },
  { timestamps: true }
)

export default mongoose.models.Donation ||
  mongoose.model("Donation", donationSchema)