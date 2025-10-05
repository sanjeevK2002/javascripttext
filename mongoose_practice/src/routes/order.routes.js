// routes/order.routes.js
import { Router } from "express";
import { Order } from "../models/orders.model.js";
import { Product } from "../models/products.model.js"; 
import userAuth from "../middleware/authUser.middleware.js";

const order_router = Router();

// Place an order
order_router.post("/order", userAuth, async (req, res) => {
  try {
    const { productId, quantity } = req.body; // ✅ frontend must send productId, quantity
    const { _id } = req.user;

    if (!productId || !quantity) {
      return res.status(400).json({ message: "Product and quantity are required" });
    }

    // Check if product exists
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Check stock availability
    if (product.stock < quantity) {
      return res.status(400).json({ message: "Not enough stock available" });
    }

    // Create order
    const order = new Order({
      userId: _id,
      productId: productId,
      quantity,
      status: "confirmed",
    });

    await order.save();

    // Reduce stock after placing order
    product.stock -= quantity;
    await product.save();

    res.status(201).json({
      message: "Your order has been registered successfully",
      order,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong during order",
      error: error.message,
    });
  }
});

// ✅ Fetch all orders of a logged-in user
order_router.get("/orders", userAuth, async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id })
      .populate("product")
      .populate("user", "name email"); // select only necessary fields

    res.status(200).json({ orders });
  } catch (error) {
    res.status(500).json({ message: "Error fetching orders", error: error.message });
  }
});

export default order_router;
