// models/orders.model.js
import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    productId: {
      type: mongoose.Schema.Types.ObjectId,
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
      enum: ["pending", "delivered", "cancelled","confirmed"],
      default: "pending",
    },
  },
  {
    collection: "Order",
    timestamps: true, // ✅ put inside same object
  }
);

export const Order = mongoose.model("Order", orderSchema);
