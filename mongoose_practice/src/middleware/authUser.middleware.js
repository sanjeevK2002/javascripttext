import jwt from "jsonwebtoken";
import User from "../models/users.model.js";
import dotenv from 'dotenv';
dotenv.config();

const userAuth = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      res.status(401).send("Token is not valid!!!");
    }
    const decode = jwt.verify(token, process.env.ACCESS_SECRET_KEY);
    
    const { _id } = decode;
    const user = await User.findById(_id).select("-password");
    if (!user) {
      res.status(404).send("User not found");
      return;
    }
    req.user = user;
    next();
  } catch (error) {
    throw new Error("U r not login ", error);
  }
};

export default userAuth;
