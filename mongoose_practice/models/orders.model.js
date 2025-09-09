import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId, // reference to User collection
    ref: "User",
    required: true,
  },
  product: {
    type: mongoose.Schema.Types.ObjectId, // reference to Product collection
    ref: "Product",
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: 1,
  },
  status: {
    type: String,
    enum: ["pending", "delivered", "cancelled"],
    default: "pending",
  },
}, { timestamps: true });

export const Order = mongoose.model("Order", orderSchema);
